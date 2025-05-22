"use client";
import { motion } from "framer-motion";
import Lenis from '@studio-freight/lenis';
import { useEffect } from "react";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function AboutCompany() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative mt-10 w-screen overflow-x-hidden py-12 bg-gradient-to-r from-red-500 to-blue-500">
      {/* Vertical center line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-300 -translate-x-1/2 z-0" />

      <div className="space-y-20 relative z-10 ml-10 mr-10">
        {/* 1 - Left */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInLeft}
          className="flex justify-start"
        >
          <div className="w-[40vw] bg-gray-100 shadow-md rounded-xl p-6 border border-gray-200 hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer">
            <h2 className="text-3xl font-bold mb-4">Company Evolution</h2>
            <p>
              Over the years, the concept of fire safety and security has metamorphosed and evolved
              dramatically. The level of sophistication has yet to be achieved; the reason to start
              GOVINDA TECH & SERVICES is exactly the same.
            </p>
          </div>
        </motion.section>

        {/* 2 - Right */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInRight}
          className="flex justify-end"
        >
          <div className="w-[40vw] bg-gray-100 shadow-md rounded-xl p-6 border border-gray-200 hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer">
            <h2 className="text-3xl font-bold mb-4">Experience & Expertise</h2>
            <p>
              The cumulative experience of personnel includes commissioning of more than 50 projects and
              over 12 man-years in the field. GOVINDA TECH & SERVICES offers customized solutions for
              commercial, high-rise residential, and industrial domains.
            </p>
          </div>
        </motion.section>

        {/* 3 - Left */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInLeft}
          className="flex justify-start"
        >
          <div className="w-[40vw] bg-gray-100 shadow-md rounded-xl p-6 border border-gray-200 hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer">
            <h2 className="text-3xl font-bold mb-4">Customer-centric Approach</h2>
            <p>
              We understand customer needs, improvise and develop technological solutions, and provide a
              range of options. Today, Govinda Tech & Services brings to the market superior products and
              services that address fire & security demands.
            </p>
          </div>
        </motion.section>

        {/* 4 - Right */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInRight}
          className="flex justify-end"
        >
          <div className="w-[40vw] bg-gray-100 shadow-md rounded-xl p-6 border border-gray-200 hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer">
            <h2 className="text-3xl font-bold mb-4">Team & Capabilities</h2>
            <p>
              The company has in-house design, engineering, and execution teams. Experienced managers and
              professional engineers make up the majority of the workforce. These teams are supported with
              the latest design software and industry-standard norms, enabling tailored system design.
            </p>
          </div>
        </motion.section>

        {/* 5 - Left */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInLeft}
          className="flex justify-start"
        >
          <div className="w-[40vw] bg-gray-100 shadow-md rounded-xl p-6 border border-gray-200 hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer">
            <h2 className="text-3xl font-bold mb-4">Project Management</h2>
            <p>
              With efficient project management and just-in-time inventory policies, Govinda Tech & Services
              ensures prompt and expedient project completion.
            </p>
          </div>
        </motion.section>

        {/* 6 - Right */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInRight}
          className="flex justify-end"
        >
          <div className="w-[40vw] bg-gray-100 shadow-md rounded-xl p-6 border border-gray-200 hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer">
            <h2 className="text-3xl font-bold mb-4">Technology Partners</h2>
            <p>
              In line with our goals, we have partnered with UTC Fire & Security India Limited, Honeywell,
              and more to offer the latest technologies at optimal prices.
            </p>
          </div>
        </motion.section>

        {/* 7 - Left */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInLeft}
          className="flex justify-start"
        >
          <div className="w-[40vw] bg-gray-100 shadow-md rounded-xl p-6 border border-gray-200 hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer">
            <h2 className="text-3xl font-bold mb-4">Turnkey Solutions</h2>
            <p>
              Govinda Tech & Services provides one-stop turnkey fire & security solutions. Services include:
              consulting, designing, customization, supply, installation, testing, commissioning, AMC, and
              statutory approvals.
            </p>
          </div>
        </motion.section>

        {/* 8 - Right */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInRight}
          className="flex justify-end"
        >
          <div className="w-[40vw] bg-gray-100 shadow-md rounded-xl p-6 border border-gray-200 hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer">
            <h2 className="text-3xl font-bold mb-4">Our Core Principle: SQSS</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>S:</strong> Safety</li>
              <li><strong>Q:</strong> Quality</li>
              <li><strong>S:</strong> Schedule</li>
              <li><strong>S:</strong> Service</li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
