import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const AboutMe = () => {
    return (
        <div
            className="bg-white dark:bg-[#181818] relative py-16 sm:py-10 transition-colors duration-500 min-h-screen w-full"
            id="about"
        >

            {/* عنوان القسم */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center pb-12 relative z-10 px-4"
            >
                <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl dark:text-[#8cffff] text-blue-600 mb-3">
                    About Me
                </h2>
                <span className="inline-block w-24 h-1 sm:w-32 bg-gradient-to-r from-blue-600 to-red-500 rounded-full mx-auto shadow-lg"></span>
            </motion.div>

            {/* محتوى القسم */}
            <div className="grid md:grid-cols-12 gap-10 p-4 max-w-6xl mx-auto relative z-10 dark:text-gray-100 text-gray-800">

                {/* فقرة التعريف */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="md:col-span-7 pr-6 leading-7 sm:leading-8"
                >
                    <p className="font-extrabold text-3xl sm:text-4xl mb-4 dark:text-white text-gray-900">
                        Hello<span className='text-[#fb2c36]'>,</span> I<span className='text-[#fb2c36]'>'</span>m Karim <span className="waving-hand">👋</span>
                    </p>

                    <p className='text-[#daf7f7] text-[16px] sm:text-[18px] md:text-[19px] mt-3 leading-relaxed  pl-4 bg-[#212121] rounded-lg p-4'>
                        I’m a junior full-stack developer passionate about building engaging and user-friendly web applications. I recently completed the 9-month Open Source track at ITI, gaining hands-on experience in both front-end and back-end development. Skilled in HTML, CSS, JavaScript, React.js, Node.js, and database management, I strive to deliver scalable and efficient applications. Always eager to learn new technologies, I enjoy turning designs into interactive interfaces and building robust backend solutions.
                    </p>
                </motion.div>

                {/* البيانات الشخصية */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="md:col-span-5 flex flex-col gap-8 md:border-l md:border-gray-600 border-gray-300 md:pl-8 mt-4 sm:mt-0"
                >
                    <motion.p variants={itemVariants}><span className="font-semibold text-[#e44951]">Name:</span> <span className="dark:text-[#daf7f7]">Karim Mustafa</span></motion.p>
                    <motion.p variants={itemVariants}><span className="font-semibold text-[#e44951]">Age:</span> <span className="dark:text-[#daf7f7]">24</span></motion.p>
                    <motion.p variants={itemVariants}><span className="font-semibold text-[#e44951]">Location:</span> <span className="dark:text-[#daf7f7]">Alexandria, Egypt</span></motion.p>
                    <motion.p variants={itemVariants}><span className="font-semibold text-[#e44951]">Email:</span> <span className="dark:text-[#daf7f7]">karimmustafa495@gmail.com</span></motion.p>
                    <motion.p variants={itemVariants}><span className="font-semibold text-[#e44951]">Phone:</span> <span className="dark:text-[#daf7f7]">+20 123 456 7890</span></motion.p>
                </motion.div>
            </div>

            {/* تحريك اليد */}
            <style>{`
                .waving-hand {
                    display: inline-block;
                    animation: wave 1.5s infinite;
                    transform-origin: 70% 70%;
                }
                @keyframes wave {
                    0% { transform: rotate(0deg); }
                    15% { transform: rotate(14deg); }
                    30% { transform: rotate(-8deg); }
                    45% { transform: rotate(14deg); }
                    60% { transform: rotate(-4deg); }
                    75% { transform: rotate(10deg); }
                    100% { transform: rotate(0deg); }
                }
            `}</style>
        </div>
    );
};

export default AboutMe;
