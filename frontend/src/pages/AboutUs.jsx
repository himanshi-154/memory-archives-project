// import React from 'react';

// function AboutUs() {
//   return (
//     // <header className="p-4 border-b border-gray-300 flex justify-between items-center">
//     //   <h1  className="text-4xl">MEMORY & ARCHIVES PROJECT</h1>
//     //   <nav className="space-x-4">
//     //     <a href="#" className="text-gray-700 hover:text-black">Home</a>
//     //     <a href="#" className="text-gray-700 hover:text-black">Women</a>
//     //     <a href="#" className="text-gray-700 hover:text-black">Tawaiffs</a>
//     //     <a href="#" className="text-gray-700 hover:text-black">Spies</a>
//     //     <a href="#" className="text-gray-700 hover:text-black">Tribals</a>
//     //     <a href="#" className="text-gray-700 hover:text-black">AboutUs</a>
//     //   </nav>
//     // </header>
//     <div>
//       <p>Hello</p>
//     </div>
//   );
// }

// export default AboutUs;

import React from "react";
// import Navbar from "./Navbar/Navbar";
// import banner from "../assests/abtt.png";
// import devansh from "../assests/dj.jpeg";
// import manju from "../assests/manju.jpeg";
// import yash from "../assests/yash.jpeg";
// import medhansh from "../assests/medh.jpeg";
// import Footer from "./Footer";

const Team = [
    {
        name: "Dr. Payel Pal",
        role: "Professor (Department of Humanities and Social Sciences at LNMIIT)",
        // image: manju,
    },
    {
        name: "Himanshi Sharma(21ucc052)",
        role: "Full-stack Developer",
        description: "4th year student at LNMIIT",
        // image: medhansh,
    },
    {
        name: "Lokesh Dandwani(21ucs118)",
        role: "Front-end Developer",
        description: "4th year student at LNMIIT",
        // image: devansh,
    },
];

const About = () => {
    return (
        <div className="min-h-screen">
            {/* <div className="relative mb-20 sm:mb-1 p-6 lg:p-16 bg-customYellow">
                <Navbar />
            </div> */}
            <div>
                <section className="w-full text-darkBlue py-12 px-4 lg:px-6 lg:pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 max-w-6xl mx-auto">
                        {/* Text Content */}
                        <div className="flex flex-col justify-center gap-4 md:gap-6">
                            <p className="text-lg lg:text-xl">
                                <br /><br />
                                Welcome to our Memory & Archives Project, a dedicated space for celebrating the often overlooked contributions of women and transgender individuals in India’s freedom struggle. Our team is passionate about uncovering and preserving the stories of unsung heroes, highlighting their sacrifices and resilience.

Our project is conducted under the guidance of our esteemed mentor, Dr. Payel Pal, whose expertise and support have been invaluable. Together, we aim to bring history to life and inspire future generations by showcasing the courage and strength of these remarkable figures.

Our goal is to create a rich, interactive archive that educates, engages, and honors the legacy of those who fought for our freedom.                            </p>
                        </div>

                        {/* Image Content */}
                        <div className="flex justify-center">
                            {/* <img
                                src={banner}
                                alt="MindConnect Banner"
                                className="rounded-2xl object-cover w-full max-w-sm md:max-w-md lg:max-w-lg shadow-lg shadow-black"
                            /> */}
                        </div>
                    </div>
                </section>
            </div>

            {/* Team Section */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Our Supportive Team</h1>
                    </div>
                    <div className="mt-10 mb-16">
                        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-1 lg:grid-cols-1">
                            {/* First Row with 1 Person */}
                            <div className="text-center">
                                {/* <img
                                    className="mx-auto h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full shadow-lg shadow-black object-cover"
                                    src={Team[0].image}
                                    alt={Team[0].name}
                                /> */}
                                <h3 className="mt-4 text-xl lg:text-2xl font-medium text-gray-900">{Team[0].name}</h3>
                                <p className="mt-1 text-sm lg:text-base text-gray-500">{Team[0].role}</p>
                                <p className="mt-1 text-sm lg:text-base text-gray-500">{Team[0].description}</p>
                            </div>
                        </div>

                        {/* Second Row with 3 People */}
                        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mt-10">
                            {Team.slice(1).map((leader) => (
                                <div key={leader.name} className="text-center">
                                    {/* <img
                                        className="mx-auto h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full shadow-lg shadow-black object-cover"
                                        src={leader.image}
                                        alt={leader.name}
                                    /> */}
                                    <h3 className="mt-4 text-xl lg:text-2xl font-medium text-gray-900">{leader.name}</h3>
                                    <p className="mt-1 text-sm lg:text-base text-gray-500">{leader.role}</p>
                                    <p className="mt-1 text-sm lg:text-base text-gray-500">{leader.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    );
};

export default About;
