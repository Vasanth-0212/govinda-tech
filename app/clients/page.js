"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const projects = [
  { no: 1, name: "AMARA RAJA INFRA PVT LTD", activities: "AMC, Fire Alarm, CCTV & Access Control System" },
  { no: 2, name: "CYENY LIMITAD (WARANGAL)", activities: "Fire Alarm, CCTV & Access Control System" },
  { no: 3, name: "CYENY LIMITAD (HITECH CITY)", activities: "Fire Alarm, CCTV & Access Control System" },
  { no: 4, name: "ALKLAID LIMITAD (MADHAPUR)", activities: "Fire Alarm, CCTV & Access Control System" },
  { no: 5, name: "SYMBYONT PVT LTD (BY NIGHT FRANK)", activities: "FAS, PAS, CCTV & ACS" },
  { no: 6, name: "VSOFT TECHNOLOGY (C&W)", activities: "Fire Alarm System, Fire Extinguisher" },
  { no: 7, name: "CAPITALAND (BY JRD)", activities: "CCTV, Fire Alarm, Fire Extinguisher System" },
  { no: 8, name: "PRATHIMA HOSPITALS (WARANGAL)", activities: "Fire Alarm, Fire Extinguisher System" },
  { no: 9, name: "NSR HOSPITALS (WARANGAL)", activities: "Fire Alarm, Fire Fighting & Fire Extinguisher System" },
  { no: 10, name: "MTX INDIA", activities: "Fire Alarm, Public Addressing & ACS" },
  { no: 11, name: "TABLE SPACE (BY JRD)", activities: "Fire Alarm, Public Addressing System" },
  { no: 12, name: "SKOOTER (BY JRD)", activities: "Fire Alarm ,CCTV & Access Control System" },
  { no: 13, name: "SRESHTA HOSPITALS-GUNTUR", activities: "Fire Alarm, CCTV & Access Control System" },
  { no: 14, name: "SYMBYONT SMART SPACES", activities: "Fire Alarm, CCTV & Access Control System" },
  { no: 15, name: "ISPROUT(MORE THAN 20)", activities: "Fire Alarm, CCTV & Access Control System" },
  { no: 16, name: "CARE HOSPITAL-HYD", activities: "AMC, Fire Alarm, CCTV & Access Control System" },
  { no: 17, name: "R.K COLLECTION-HYD", activities: "FAS, PAS, CCTV & ACS" },
  { no: 18, name: "TRIPURA CONSTRUCTIONS", activities: "Fire Alarm System, Fire Extinguisher" },
  { no: 19, name: "HINDWARE PVT LTD", activities: "CCTV, Fire Alarm, Fire Extinguisher System" },
  { no: 20, name: "SYNGENTA", activities: "Fire Alarm, Fire Extinguisher System" },
  { no: 21, name: "WE WORK", activities: "Fire Alarm, Fire Fighting & Fire Extinguisher System" },
  { no: 22, name: "NYVU TECHNOCRATS PVT LTD", activities: "Fire Alarm, Public Addressing & ACS" },
  { no: 23, name: "GOWRA PALLADIUM", activities: "Fire Alarm, Public Addressing System" },
  { no: 24, name: "GOWRA FOUNTAINHEAD-NYVU", activities: "Fire Alarm ,CCTV &Access Control System" },
  { no: 25, name: "GMR", activities: "FAS, PAS, CCTV & ACS" },
  { no: 26, name: "BSR TECH PARK", activities: "Fire Alarm System, Fire Extinguisher" },
  { no: 27, name: "RITWIK PROJECTS PVT LTD", activities: "CCTV, Fire Alarm, Fire Extinguisher System" },
];

function AnimatedCard({ project, isEven }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  const fade = isEven ? fadeInLeft : fadeInRight;

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fade}
      transition={{ duration: 0.6 }}
      className={`relative w-[40vw] p-6 mb-10 rounded-2xl border border-gray-400 shadow-xl bg-white text-gray-800 ${
        isEven ? "ml-0 mr-auto" : "ml-auto mr-0"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">
        {project.no}. {project.name}
      </h3>
      <p className="leading-relaxed text-gray-600">Services Consumed : {project.activities}</p>
    </motion.div>
  );
}

export default function MajorProjects() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16 text-red-700">Our Clients</h2>

      <div className="space-y-0">
        {projects.map((project, idx) => (
          <AnimatedCard key={project.no} project={project} isEven={idx % 2 === 0} />
        ))}
      </div>
    </div>
  );
}
