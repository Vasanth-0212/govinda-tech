"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Lenis from '@studio-freight/lenis';

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
}; const projects = [
  {
    no: 1,
    name: "AMARA RAJA INFRA PVT LTD",
    activities: "AMC, Fire Alarm, CCTV & Access Control System",
    review: "Govinda Tech delivered our security systems on time and with precision. Highly professional and dependable!",
    rating: 4.6,
  },
  {
    no: 2,
    name: "CYENY LIMITAD (WARANGAL)",
    activities: "Fire Alarm, CCTV & Access Control System",
    review: "Very knowledgeable staff and excellent post-installation support.",
    rating: 4.9,
  },
  {
    no: 3,
    name: "CYENY LIMITAD (HITECH CITY)",
    activities: "Fire Alarm, CCTV & Access Control System",
    review: "Seamless execution of the setup. Very happy with the results.",
    rating: 5.0,
  },
  {
    no: 4,
    name: "ALKLAID LIMITAD (MADHAPUR)",
    activities: "Fire Alarm, CCTV & Access Control System",
    review: "Smooth project delivery and great customer service. We’re satisfied!",
    rating: 4.6,
  },
  {
    no: 5,
    name: "SYMBYONT PVT LTD (BY NIGHT FRANK)",
    activities: "FAS, PAS, CCTV & ACS",
    review: "Excellent coordination and attention to detail. Reliable team!",
    rating: 4.8,
  },
  {
    no: 6,
    name: "VSOFT TECHNOLOGY (C&W)",
    activities: "Fire Alarm System, Fire Extinguisher",
    review: "Their fire safety setup met all our expectations. Prompt and efficient.",
    rating: 4.7,
  },
  {
    no: 7,
    name: "CAPITALAND (BY JRD)",
    activities: "CCTV, Fire Alarm, Fire Extinguisher System",
    review: "Top-notch systems and great documentation. Highly recommended.",
    rating: 4.9,
  },
  {
    no: 8,
    name: "PRATHIMA HOSPITALS (WARANGAL)",
    activities: "Fire Alarm, Fire Extinguisher System",
    review: "Professional installation with clear explanations and guidance.",
    rating: 4.5,
  },
  {
    no: 9,
    name: "NSR HOSPITALS (WARANGAL)",
    activities: "Fire Alarm, Fire Fighting & Fire Extinguisher System",
    review: "Very responsive and quick to act. System works flawlessly.",
    rating: 4.8,
  },
  {
    no: 10,
    name: "MTX INDIA",
    activities: "Fire Alarm, Public Addressing & ACS",
    review: "Impressive setup and attention to emergency detailing.",
    rating: 4.7,
  },
  {
    no: 11,
    name: "TABLE SPACE (BY JRD)",
    activities: "Fire Alarm, Public Addressing System",
    review: "Outstanding support and system reliability. Zero complaints.",
    rating: 4.9,
  },
  {
    no: 12,
    name: "SKOOTER (BY JRD)",
    activities: "Fire Alarm ,CCTV & Access Control System",
    review: "Flawless work on access control. Highly secure implementation.",
    rating: 5.0,
  },
  {
    no: 13,
    name: "SRESHTA HOSPITALS-GUNTUR",
    activities: "Fire Alarm, CCTV & Access Control System",
    review: "Everything was installed as per schedule. Zero delays.",
    rating: 4.6,
  },
  {
    no: 14,
    name: "SYMBYONT SMART SPACES",
    activities: "Fire Alarm, CCTV & Access Control System",
    review: "Loved their promptness and easy communication throughout.",
    rating: 4.8,
  },
  {
    no: 15,
    name: "ISPROUT(MORE THAN 20)",
    activities: "Fire Alarm, CCTV & Access Control System",
    review: "Handling 20+ sites smoothly speaks volumes about their experience.",
    rating: 4.9,
  },
  {
    no: 16,
    name: "CARE HOSPITAL-HYD",
    activities: "AMC, Fire Alarm, CCTV & Access Control System",
    review: "Reliable for long-term maintenance. Excellent AMC support.",
    rating: 4.7,
  },
  {
    no: 17,
    name: "R.K COLLECTION-HYD",
    activities: "FAS, PAS, CCTV & ACS",
    review: "Neat execution and good system quality. Very satisfied.",
    rating: 4.6,
  },
  {
    no: 18,
    name: "TRIPURA CONSTRUCTIONS",
    activities: "Fire Alarm System, Fire Extinguisher",
    review: "Impressive system design and clean installation.",
    rating: 4.7,
  },
  {
    no: 19,
    name: "HINDWARE PVT LTD",
    activities: "CCTV, Fire Alarm, Fire Extinguisher System",
    review: "Trustworthy team that really understands safety protocols.",
    rating: 4.9,
  },
  {
    no: 20,
    name: "SYNGENTA",
    activities: "Fire Alarm, Fire Extinguisher System",
    review: "Clean installation and smooth coordination throughout.",
    rating: 4.8,
  },
  {
    no: 21,
    name: "WE WORK",
    activities: "Fire Alarm, Fire Fighting & Fire Extinguisher System",
    review: "Best vendors we’ve worked with in this domain.",
    rating: 5.0,
  },
  {
    no: 22,
    name: "NYVU TECHNOCRATS PVT LTD",
    activities: "Fire Alarm, Public Addressing & ACS",
    review: "Their ACS integration was flawless. Highly secure.",
    rating: 4.9,
  },
  {
    no: 23,
    name: "GOWRA PALLADIUM",
    activities: "Fire Alarm, Public Addressing System",
    review: "Clear timelines and transparent reporting. Impressive team.",
    rating: 4.6,
  },
  {
    no: 24,
    name: "GOWRA FOUNTAINHEAD-NYVU",
    activities: "Fire Alarm ,CCTV &Access Control System",
    review: "Delivered exactly what was promised. Smooth handover.",
    rating: 4.7,
  },
  {
    no: 25,
    name: "GMR",
    activities: "FAS, PAS, CCTV & ACS",
    review: "Extensive setup done professionally. Would hire again.",
    rating: 4.9,
  },
  {
    no: 26,
    name: "BSR TECH PARK",
    activities: "Fire Alarm System, Fire Extinguisher",
    review: "Efficient service and great after-installation support.",
    rating: 4.5,
  },
  {
    no: 27,
    name: "RITWIK PROJECTS PVT LTD",
    activities: "CCTV, Fire Alarm, Fire Extinguisher System",
    review: "Highly skilled technicians. Smooth workflow and delivery.",
    rating: 4.8,
  },
];


function AnimatedCard({ project, isEven }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });
  const fade = isEven ? fadeInLeft : fadeInRight;

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fade}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`relative w-[40vw] p-6 mb-10 rounded-2xl border-2 border-transparent bg-white bg-opacity-90 shadow-xl 
        hover:shadow-2xl transition duration-300 cursor-pointer
        ${isEven ? "ml-0 mr-auto" : "ml-auto mr-0"}
        border-l-8 border-r-8 border-red-500 hover:border-blue-500`}
    >
      <h3 className="text-xl font-nova-round text-red-700 font-bold mb-2">
        {project.no}. {project.name}
      </h3>
      <p className="leading-relaxed text-blue-900 mb-3">
        <strong>Services Consumed:</strong> {project.activities}
      </p>
      <blockquote className="italic text-gray-600 border-l-4 pl-4 border-blue-300">
        “{project.review}”
      </blockquote>
      <div className="mt-4 flex items-center">
        <span className="ml-2 text-gray-500">Rating : </span>
        <span className="text-gray-500 font-normal text-lg">{project.rating}</span>
      </div>
    </motion.div>
  );
}

export default function MajorProjects() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative h-auto w-screen mx-auto px-6 py-20 bg-gradient-to-r from-red-100 to-blue-100">
      <h2 className="text-5xl font-bold font-nova-round text-center mb-16 text-red-700">Our Clients</h2>

      <div className="space-y-0">
        {projects.map((project, idx) => (
          <AnimatedCard key={project.no} project={project} isEven={idx % 2 === 0} />
        ))}
      </div>
    </div>
  );
}
