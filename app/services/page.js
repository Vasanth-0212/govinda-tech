"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const systems = [
  {
    title: "Fire Alarm System",
    image: "/images/fire-alarm.png",
    description:
      "Detects and alerts occupants early in case of fire. An essential first line of defense ensuring timely evacuation and response.",
    bg: "bg-red-100",
  },
  {
    title: "CCTV Surveillance",
    image: "/images/cctv.png",
    description:
      "Enhances security with real-time monitoring, recording, and deterrence of unauthorized activities across all premises.",
    bg: "bg-gray-100",
  },
  {
    title: "Access Control System",
    image: "/images/acs.png",
    description:
      "Secures entry points using keycards, biometrics, or PINs. It manages who enters where and when within the facility.",
    bg: "bg-blue-100",
  },
  {
    title: "Fire Extinguisher System",
    image: "/images/fire-extin.png",
    description:
      "Quick-response portable fire protection. Ideal for suppressing small fires before they become unmanageable.",
    bg: "bg-orange-100",
  },
  {
    title: "Public Address System",
    image: "/images/pas.png",
    description:
      "Ensures clear communication during emergencies or daily announcements throughout large buildings or campuses.",
    bg: "bg-yellow-100",
  },
  {
    title: "Sprinkler System",
    image: "/images/sprinkler.png",
    description:
      "Automatically activates in fire scenarios to contain or extinguish flames, protecting property and lives effectively.",
    bg: "bg-green-100",
  },
];

export default function SystemsShowcase() {
  return (
    <div className="py-16 px-6 w-screen bg-gray-100">
      <h2 className="mt-5 text-4xl font-bold text-center mb-12 text-gray-800">Our Safety & Security Systems</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {systems.map((system, index) => (
          <motion.div
            key={system.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
            variants={fadeUp}
            className={`rounded-2xl p-6 shadow-xl ${system.bg} hover:shadow-2xl transition duration-300 cursor-pointer hover:scale-110`}
          >
            <img
              src={system.image}
              alt={system.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{system.title}</h3>
            <p className="text-gray-700 leading-relaxed text-base">{system.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
