import React from "react";
import { motion } from "framer-motion";
import MacbookMockup from "./MacbookMockup";


const getIconUrl = (slug, color = null) => {
    if (!slug) return '';
    const safeColor = color ? String(color).replace('#', '') : null;
    return safeColor ? `https://cdn.simpleicons.org/${slug}/${safeColor}` : `https://cdn.simpleicons.org/${slug}`;
};

const projectsData = [
    {
        name: "Meem - E-commerce Platform",
        description:
            "Developed a responsive e-commerce web app using Angular, Tailwind CSS, and JSON Server. Includes admin dashboard, product management, and secure checkout.",
        tech: ["angular", "tailwindcss", "nodedotjs", "json"],
        githubLink: "https://github.com/karimmustafa11/Meem",
        demoLink: "https://drive.google.com/file/d/1rjxJhFVoy2tPK4RKNrXjMcN_a_wU85B4/view?usp=drive_link",
        liveLink: "https://meem-nu.vercel.app/",
        hasLive: true,
        mockupImage: "/Meem.png",
    },
    {
        name: "Posta - Social Media Platform",
        description:
            "A dynamic social media platform built with modern web technologies, enabling users to connect, share moments, and follow trends in real-time.",
        tech: ["react", "tailwindcss", "nodedotjs", "express", "mongodb"],
        githubLink: "https://github.com/karimmustafa11/Mini-Social-App",
        demoLink: "https://drive.google.com/file/d/1DSYrdVDRqkg0hAHLoN-MgKqKk44MqDT8/view",
        liveLink: "https://mini-social-app-brown.vercel.app/",
        hasLive: true,
        mockupImage: "Mini_Social.jpg",
    },
    {
        name: "Bondi - Agency Website Template",
        description:
            "A sleek and modern agency template built with HTML and CSS. Perfect for creative studios to showcase their digital work.",
        tech: ["html5", "css", "tailwindcss"],
        githubLink: "https://github.com/karimmustafa11/Bondi_Theme",
        demoLink: "https://bondi-theme-blond.vercel.app/",
        liveLink: "https://bondi-theme-blond.vercel.app/",
        hasLive: true,
        mockupImage: "Bondi.png",
    },

    {
        name: "Travelo - Travel App",
        description:
            "Developed with HTML, CSS, and JS. Users can book hotels & restaurants, integrated with geolocation for nearby recommendations.",
        tech: ["html5", "css", "tailwindcss", "javascript", "json"],
        githubLink: "https://github.com/karimmustafa11/Travelo",
        demoLink: "https://drive.google.com/file/d/1wZPPdcqk2-RIvHueLDZVGEpZvyUwZWVo/view",
        liveLink: "#",
        hasLive: false,
        mockupImage: "Travelo.png",
    },
    {
        name: "Wasteless Drugs",
        description:
            "A platform designed for pharmacies to exchange drugs nearing expiration, offering discounts and reducing waste in the industry.",
        tech: ["html5", "css", "javascript", "php"],
        githubLink: "https://github.com/karimmustafa11/Graduation-Project",
        demoLink: "#",
        liveLink: "#",
        hasLive: false,
        mockupImage: "Grad1.jpg",
    },
];


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { when: "beforeChildren", staggerChildren: 0.25 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120, damping: 20 },
    },
};


export default function Projects() {

    const brandColors = {
        css3: '1572B6',
        javascript: 'F7DF1E',
        html5: 'E34F26',
        react: '61DAFB',
        tailwindcss: '06B6D4',
        php: '777BB4',
        nodedotjs: '339933',
        mongodb: '47A248',
        angular: 'DD0031',
        bootstrap: '7952B3',
        laravel: 'FF2D20',
        mysql: '4479A1',
        git: 'F05032',
    };
    return (
        <motion.section
            id="projects"
            className="relative py-24 px-6 bg-linear-to-br from-[#04060a] via-[#0e172a] to-[#071427] text-white min-h-screen overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
        >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,255,0.1),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(255,0,255,0.1),transparent_70%)]"></div>

            <motion.div variants={itemVariants} className="text-center mb-20 relative z-10">
                <motion.p className="text-cyan-400 font-bold text-sm tracking-[0.2em] uppercase mb-4 opacity-90">Featured Projects</motion.p>
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-wide mb-6">
                    My{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">
                        Creations
                    </span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">Crafted with precision and passion, each project showcases my expertise in full-stack development and modern web technologies</p>
                <div className="mt-8 w-32 h-1 bg-linear-to-r from-cyan-400 to-purple-600 rounded-full mx-auto shadow-[0_0_30px_rgba(56,189,248,0.6)]"></div>
            </motion.div>

            <div className="max-w-7xl mx-auto space-y-28 relative z-10 text-center">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.name}
                        variants={itemVariants}
                        className="group grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-12 rounded-3xl bg-linear-to-br from-gray-800/40 via-gray-900/50 to-gray-950/60 border border-gray-700/50 shadow-[0_0_60px_-20px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-lg hover:shadow-[0_0_80px_-10px_rgba(56,189,248,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 "
                    >
                        <motion.div
                            className="flex flex-col lg:items-start text-left"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.div className="inline-block mb-4 text-center lg:text-left">
                                <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-center shadow-[0_0_12px_rgba(56,189,248,0.4)]">
                                    Project {index + 1}
                                </span>
                            </motion.div>
                            <h3 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-cyan-300 transition-all duration-700 text-center lg:text-left">
                                {project.name}
                            </h3>
                            <div className="flex justify-center">
                                <p className="text-gray-300/90 text-lg mb-8 leading-relaxed max-w-xl font-light text-center lg:text-left justify-center lg:justify-start">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack with Better Visual */}
                            <div className="mb-10 text-center lg:text-left">
                                <p className="text-gray-500 text-sm uppercase tracking-wider mb-4 font-semibold">Technologies Used</p>
                                <div className="flex flex-wrap gap-3
                                jusify-center items-center text-center"
                                    style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                                    {project.tech.map((slug) => (
                                        <motion.div
                                            key={slug}
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="text-center lg:text-left"
                                        >
                                            <img
                                                src={getIconUrl(slug, brandColors[slug])}
                                                alt={slug}
                                                className="w-10 h-10 opacity-70 hover:opacity-100 transition-all drop-shadow-[0_0_12px_rgba(56,189,248,0.6)] p-1.5 rounded-lg bg-gray-800/50 hover:bg-cyan-500/20 border border-gray-700/50 hover:border-cyan-500/50"
                                                title={slug}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons: Demo | Live | GitHub (disabled styling when missing) */}
                            <div className="flex gap-4  justify-center lg:justify-start">
                                {/* Demo button */}
                                {project.demoLink ? (
                                    <motion.a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.45)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="project-btn px-8 py-3.5 text-base font-bold rounded-xl bg-linear-to-r from-blue-500 to-cyan-400 text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300 backdrop-blur-sm border border-blue-400/50"
                                    >
                                        Demo
                                    </motion.a>
                                ) : (
                                    <button type="button" disabled className="project-btn px-8 py-3.5 text-base font-bold rounded-xl bg-gray-700/30 text-gray-300 border border-gray-600 btn-disabled">
                                        Demo
                                    </button>
                                )}
                                {/* Live button controlled by hasLive boolean (ternary) */}
                                {project.hasLive ? (
                                    <motion.a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(236,72,153,0.6)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="project-btn px-8 py-3.5 text-base font-bold rounded-xl bg-linear-to-r from-pink-500 via-red-500 to-purple-600 text-white hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] transition-all duration-300 backdrop-blur-sm border border-pink-400/50"
                                    >
                                        Go Live
                                    </motion.a>
                                ) : (
                                    <button type="button" disabled className="project-btn px-8 py-3.5 text-base font-bold rounded-xl bg-gray-700/30 text-gray-300 border border-gray-600 btn-disabled">
                                        Go Live
                                    </button>
                                )}


                                {project.githubLink ? (
                                    <motion.a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 189, 248, 0.1)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="project-btn px-8 py-3.5 text-base font-bold rounded-xl border-2 border-cyan-500/60 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
                                    >
                                        GitHub
                                    </motion.a>
                                ) : (
                                    <button type="button" disabled className="project-btn px-8 py-3.5 text-base font-bold rounded-xl bg-gray-700/30 text-gray-300 border border-gray-600 btn-disabled">
                                        GitHub
                                    </button>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex justify-center items-center"
                            initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <div className="relative w-full max-w-md">
                                {/* Glow Effect */}
                                <div className="absolute -inset-8 bg-linear-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
                                <MacbookMockup imageSrc={project.mockupImage} altText={`${project.name} Mockup`} />
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>


        </motion.section>
    );
}
