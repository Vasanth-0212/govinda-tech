"use client";
import Image from "next/image";

const teamData = [
  {
    name: "P. SRINIVAS",
    role: "Managing Partner",
    phone: "+91-9030023435",
    image: "/images/team4.png",
  },
  {
    name: "SHAIK ANWAR BASHA",
    role: "Business Developer",
    phone: "+91-8897862548",
    image: "/images/team2.png",
  },
  {
    name: "S. SUNIL",
    role: "Executive Manager",
    phone: "+91-9063024105",
    image: "/images/team3.png",
  },
  {
    name: "CH. VAMSHI",
    role: "Project Manager",
    phone: "+91-9063025061",
    image: "/images/team1.png",
  },
  {
    name: "K. MAHA TEJA",
    role: "Technical Engineer",
    phone: "+91-8074349289",
    image: "/images/team5.png",
  },
];

export default function OurTeam() {
  return (
    <div className="w-full py-16 px-6 bg-gradient-to-r from-red-100 to-blue-100">
      <h2 className="text-4xl text-center font-bold mb-12 text-red-600 font-nova-round">
        Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="w-[300px] bg-white bg-opacity-90 rounded-2xl shadow-xl p-6 hover:scale-105 transition duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full object-cover shadow-md"
              />
            </div>
            <h3 className="text-2xl font-nova-round w-full font-semibold text-red-500 mb-1">{member.name}</h3>
            <p className="text-blue-800 font-medium mb-2">{member.role}</p>
            {member.phone && (
              <p className="text-blue-700 text-sm">📞 {member.phone}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
