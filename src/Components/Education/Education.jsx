import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

export default function Education() {
    const [content, setContent] = React.useState({
        date: "Oct 2024 - Jul 2025",
        description:
            "Completed a comprehensive 9-month Open Source track at ITI, gaining hands-on experience in full-stack development, including front-end and back-end technologies, project management, and collaborative coding practices.",
        active1: true,
        active2: false,
    });

    const handleData1 = () => {
        setContent({
            date: "Oct 2024 - Junl 2025",
            description:
                "Completed a comprehensive 9-month Open Source track at ITI, gaining hands-on experience in full-stack development, including front-end and back-end technologies, project management, and collaborative coding practices.",
            active1: true,
            active2: false,
        });
    };

    const handleData2 = () => {
        setContent({
            date: "Sep 2019 - Jun 2023",
            description:
                "During my time at the faculty of computer science, I gained a solid foundation in computer science and acquired essential knowledge and skills in various programming languages, algorithms, data structures, and software development methodologies. The rigorous coursework and hands-on projects equipped me with the ability to tackle complex problems and develop innovative solutions. I actively participated in team projects, collaborating with fellow students to design and implement software applications. These experiences fostered my teamwork and communication skills while honing my ability to work effectively in a collaborative environment.",
            active1: false,
            active2: true,
        });
    };
    return (
        <div className="relative z-10 pb-16 pt-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-500"
            id="education">
            {/* ===== عنوان Education ===== */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center pb-10"
            >
                <h2 className="font-extrabold text-5xl dark:text-[#8cffff] text-blue-600 mb-2 mt-5 tracking-wide drop-shadow-md">
                    Education
                </h2>
                <span className="inline-block w-20 h-1 bg-gradient-to-r from-blue-600 to-red-500 rounded-full mx-auto shadow-lg"></span>
            </motion.div>

            {/* ===== المحتوى ===== */}
            <motion.div
                className="w-full px-6 sm:px-10 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.3, // كل عنصر يظهر بعد التاني بـ0.3 ثانية
                        },
                    },
                }}
            >

                {/* ==== العمود الأول ==== */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                    }}
                    className="col-span-1 text-center lg:text-left border-r-0 dark:border-gray-700 pb-4 flex flex-col items-center lg:items-start gap-6"
                >
                    <motion.span
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
                        }}
                        onClick={handleData1}
                        className={`block font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl px-4 py-5 rounded-2xl transition-all duration-300 cursor-pointer leading-tight text-center w-full
        ml-8 lg:ml-0
        ${content.active1
                                ? "bg-gradient-to-r from-blue-600 to-blue-950 text-white shadow-lg scale-[1.03]"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-blue-500 hover:scale-[1.02]"
                            }`}
                    >
                        Information Technology Institute
                        <span className="text-sm sm:text-base block mt-3 font-medium text-gray-600 dark:text-gray-400">
                            ITI
                        </span>
                    </motion.span>

                    <motion.span
                        variants={{
                            hidden: { opacity: 0, scale: 0.95 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.2 } },
                        }}
                        onClick={handleData2}
                        className={`block font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl px-4 py-5 rounded-2xl transition-all duration-300 cursor-pointer leading-tight text-center w-full
        ml-8 lg:ml-0
        ${content.active2
                                ? "bg-gradient-to-r from-blue-600 to-blue-950 text-white shadow-lg scale-[1.03]"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:text-blue-500 hover:scale-[1.02]"
                            }`}
                    >
                        Bachelor in Computer Science
                        <span className="text-sm sm:text-base block mt-3 font-medium text-gray-600 dark:text-gray-400">
                            Alexandria University
                        </span>
                    </motion.span>
                </motion.div>

                {/* ==== العمود الثاني ==== */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
                    }}
                    className="col-span-2 flex flex-col justify-center"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={content.date + content.description}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="bg-white/60 dark:bg-gray-800/50 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
                        >
                            <motion.h3
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-2xl md:text-3xl font-semibold mb-3 text-blue-600 dark:text-[#8cffff] tracking-wide"
                            >
                                {content.date}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-lg leading-9 text-gray-700 dark:text-gray-200 whitespace-pre-line"
                            >
                                {content.description}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </div>
    )
}
