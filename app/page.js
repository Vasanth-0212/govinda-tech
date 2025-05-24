"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useInView } from 'react-intersection-observer';
import Lenis from '@studio-freight/lenis';
import Footer from "./components/Footer";
import OurTeam from "./components/ourTeam";

export default function Home() {

  const images = [
    "/bg-image-1.png",
    "/bg-image-2.png",
    "/bg-image-3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

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

  const router = useRouter();
  const [showContactForm, setShowContactForm] = useState(false);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100 },
    hiddenRight: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const principles = [
    {
      title: 'Safety',
      text: 'We prioritize safety above all, ensuring all systems protect lives and property effectively.',
    },
    {
      title: 'Quality',
      text: 'Our solutions are crafted with premium-grade products and high-quality engineering.',
    },
    {
      title: 'Schedule',
      text: 'Timely delivery is our commitment — we stay on track from design to commissioning.',
    },
    {
      title: 'Service',
      text: 'We offer unmatched support and maintenance services, ensuring long-term reliability.',
    },
  ];

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full no-scrollbar">
      {/* Hero Section */}
      <div id="home" className="relative min-h-screen w-full text-white overflow-hidden">
        <Image
          src={images[currentImage]}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-0"
        />

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-gray-900/20 z-10" />

        {/* Content on top */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
          <div className="flex-1 flex justify-center mb-6 md:mb-0">
            <Image
              src="/logo.jpg"
              alt="Logo Image"
              width={300}
              height={300}
              className="hidden rounded-xl shadow-lg"
            />
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Fire & Security Solutions Built on Experience, Precision & Trust
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              With over 50 commissioned projects and 12+ years of expertise, Govinda Tech & Services delivers custom-engineered fire safety and security systems for commercial, residential, and industrial needs.
            </p>
            <button className="mt-4 px-4 py-1 text-lg bg-white text-red-500 font-medium rounded-full shadow-md hover:text-red-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>


      {/* About Section with Animations */}
      <div id="about" className="h-screen w-full bg-gray-100 flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-8">
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/images/about-logo.png"
            alt="About Us"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
        </motion.div>

        <motion.div
          className="flex-1 text-center md:text-left space-y-4 text-gray-800"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold">About Govinda Tech & Services</h2>
          <p className="text-lg">
            At Govinda Tech & Services, we combine deep domain expertise with cutting-edge technology to design and implement reliable fire and security systems. Our in-house team ensures end-to-end project execution with precision and efficiency.
          </p>
          <Link href="/about">
            <button className="px-8 py-3 bg-red-500 text-white rounded-full font-semibold shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500 hover:cursor-pointer"
              onClick={() => router.push("/about")}
            >
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>

      {/*
        Who We Are Section
      */ }

      {/* Who We Are Section */}
      {/* Who We Are Section */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-nova-round font-bold mb-12 text-red-500">Who We Are</h2>
          <p className="text-gray-700 text-lg mb-10">
            Over the years, the concept of fire safety and security has evolved significantly — yet true sophistication is still developing.
            Govinda Tech & Services was established to bridge this very gap by delivering advanced, reliable, and client-focused solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="bg-red-500 text-white p-6 rounded-2xl shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500"
            >
              <h3 className="text-xl font-semibold mb-2">Rich Industry Experience</h3>
              <p>
                With over 12 man-years of combined experience and the successful commissioning of 50+ projects, our team brings deep industry expertise to every solution we deliver.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-red-500 text-white p-6 rounded-2xl shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500"
            >
              <h3 className="text-xl font-semibold mb-2">Segment-Specific Solutions</h3>
              <p>
                We specialize in tailored fire & security systems for commercial buildings, high-rise residential complexes, and industrial facilities — no two solutions are alike.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-red-500 text-white p-6 rounded-2xl shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500"
            >
              <h3 className="text-xl font-semibold mb-2">End-to-End In-House Expertise</h3>
              <p>
                Our workforce is driven by experienced managers and professional engineers, using international design standards and cutting-edge tools to develop solutions that precisely meet client needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-red-500 text-white p-6 rounded-2xl shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500"
            >
              <h3 className="text-xl font-semibold mb-2">Agile Project Execution</h3>
              <p>
                With just-in-time inventory and efficient project management practices, we are focused on delivering projects promptly without compromising quality or compliance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-red-500 text-white p-6 rounded-2xl shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500"
            >
              <h3 className="text-xl font-semibold mb-2">Innovation & Customer Focus</h3>
              <p>
                We constantly improvise and innovate, offering clients a range of technology-backed solutions to choose from — ensuring flexibility and superior performance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-red-500 text-white p-6 rounded-2xl shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500"
            >
              <h3 className="text-xl font-semibold mb-2">Strategic Technology Partnerships</h3>
              <p>
                We are proud partners of global leaders like UTC Fire & Security and Honeywell — giving our clients access to advanced solutions at optimal pricing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-nova-round font-bold mb-12 text-red-500">Why Choose Us</h2>
          <p className="text-gray-700 text-lg mb-10">
            Govinda Tech & Services offers a one-stop turnkey Fire & Security solution with end-to-end services,
            from consulting to maintenance, tailored to your needs and compliant with regulatory requirements.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" ref={ref}>
            {principles.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial={idx % 2 === 0 ? 'hiddenLeft' : 'hiddenRight'}
                animate={inView ? 'visible' : ''}
                className="bg-blue-500 text-white p-6 rounded-2xl shadow-lg hover:text-red-500 hover:bg-white hover:border hover:border-red-400 hover:scale-105 transition duration-500"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center space-y-5 mt-12 text-gray-800 text-base max-w-3xl mx-auto">
            <p>
              Our services cover <strong>Consulting</strong>, <strong>Design</strong>, <strong>Customization</strong>,{' '}
              <strong>Supply</strong>, <strong>Installation</strong>, <strong>Testing</strong>,{' '}
              <strong>Commissioning</strong>, and <strong>Annual Maintenance</strong> — all aligned with statutory
              compliance.
            </p>
            <motion.button
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="px-8 py-3 bg-red-500 text-white rounded-full font-semibold shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500 hover:cursor-pointer"
              onClick={() => {
                router.push("/services");
              }}
            >
              View Our Services
            </motion.button>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <div id="clients" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-nova-round font-bold mb-12 text-red-500"
        >
          Our Valued Clients
        </motion.h2>

        <div className="flex flex-col items-center justify-center gap-12 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-700 max-w-md leading-relaxed"
          >
            We have proudly served <span className="font-semibold">more than 100 happy clients</span> over the past{" "}
            <span className="font-semibold">10+ years</span>, delivering trusted and cutting-edge solutions in fire safety, security, and access control systems.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="px-8 py-3 bg-red-500 text-white rounded-full hover:cursor-pointer font-semibold shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500"
            onClick={() => {
              router.push("/clients");
            }}
          >
            View Clients
          </motion.button>
        </div>
      </div>

      {/* Our Team Section */}
      <div id="team" className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-nova-round font-bold mb-12 text-red-500">Meet Our Team</h2>
          <p className="text-gray-700 text-lg mb-10">
            Our team is the backbone of our success, bringing together diverse skills and expertise to deliver exceptional fire safety and security solutions.
          </p>
          <OurTeam />
        </div>
      </div>

      {/* Footer Section */}
      <div id="contact">
        <div className="flex flex-col items-center justify-center text-center p-6 md:p-8 xl:p-10 2xl:p-12 bg-red-400 border-x-2 text-white mx-4 md:mx-14 xl:mx-20 2xl:mx-28 rounded-t-2xl h-64 md:h-72 xl:h-64 2xl:h-80">
          <div className="max-w-xl md:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-6xl font-bold text-left">
              Get in Touch with Us
            </h2>
            <p className="text-xs md:text-base xl:text-md 2xl:text-xl mt-2 max-w-3xs md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl text-left">
              We would love to hear from you! Whether you have questions, need a demo,
              or want to get started, our team is here to assist you.
            </p>
            <div className="mt-4 flex flex-row space-x-4">
              <button
                onClick={() => setShowContactForm(true)}
                className="px-8 py-3 bg-white text-red-500 rounded-full font-semibold shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500 hover:cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Contact Form */}
      <div
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-t-2xl shadow-2xl z-50 transition-transform duration-500 ease-in-out ${showContactForm ? "translate-y-0" : "translate-y-full"
          } w-[90%] max-h-[90vh] overflow-y-auto`}
      >
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-700">Get in Touch</h2>
            <button
              onClick={() => setShowContactForm(false)}
              className="text-gray-700 hover:text-black text-xl font-bold focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              ×
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-red-500 text-white p-4 rounded-lg text-sm shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500">
                <p className="font-sans text-lg"><strong>Phone:</strong> +91 9030023435</p>
              </div>
              <div className="bg-red-500 text-white p-4 rounded-lg text-sm shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500">
                <p className="font-sans text-lg"><strong>Email:</strong> govindfireandsecuresystems@gmail.com</p>
              </div>
              <div className="bg-red-500 text-white p-4 rounded-lg text-sm shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500">
                <p className="font-sans text-lg"><strong>Address:</strong> 8-1-284/04/632, OU COLONY, SHAIKPET, HYDERABAD, TELANGANA</p>
              </div>
              <div className="bg-red-500 text-white p-4 rounded-lg text-sm shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500">
                <p className="font-sans text-lg"><strong>Hours:</strong> Mon - Sat, 9AM - 6PM</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-400" />
              <input type="text" placeholder="Company Name" className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-400" />
              <input type="text" placeholder="Mobile Number" className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-red-400" />
              <input type="email" placeholder="Email Address" className="w-full p-2 border border-gray-200 rounded col-span-2 focus:outline-none focus:ring-2 focus:ring-red-400" />
              <textarea
                rows={3}
                placeholder="Message (Optional)"
                className="w-full p-2 border border-gray-200 rounded col-span-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <button className="w-full py-2 bg-red-500 text-white rounded-full border-2 shadow-lg hover:text-blue-500 hover:bg-white hover:border hover:border-blue-400 hover:scale-105 transition duration-500 col-span-2 focus:outline-none focus:ring-2 focus:ring-red-400">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div >
  );
}
