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
            className="relative z-10 pb-16 pt-8 bg-linear-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-500"
            id="about"
        >


            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center pb-10 relative z-10"
            >
                <h2 className="font-extrabold text-5xl dark:text-[#8cffff] text-blue-600 mb-2 mt-5">About Me</h2>
                <span className="inline-block w-20 h-1 bg-linear-to-r from-blue-600 to-red-500 rounded-full mx-auto shadow-lg"></span>
            </motion.div>

            <div className="grid md:grid-cols-12 gap-8 p-4 max-w-6xl mx-auto dark:text-gray-100 text-gray-800 relative z-10">

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="md:col-span-7 pr-6 leading-5 text-center md:text-left ml-10 md:ml-0"
                >
                    <p className="font-bold text-3xl mb-4  dark:text-white text-gray-900  md:ml-0 ">Hello<span className='text-[#fb2c36]'>,</span> I<span className='text-[#fb2c36]'>'</span>m Karim <span className="waving-hand">👋</span></p>

                    <p className='text-[#daf7f7] text-[16px] sm:text-[18px] md:text-[19px] mt-3 leading-relaxed  pl-4 bg-[#0000001a] rounded-lg p-4'>
                        I’m a junior full-stack developer passionate about creating interactive and user-friendly web apps. I recently completed the 9-month Open Source track at ITI, gaining hands-on experience in front-end and back-end development with HTML, CSS, JavaScript, React.js, Node.js, and databases. Always eager to learn, I enjoy turning designs into robust, scalable applications.

                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="md:col-span-5 flex flex-col gap-12 md:border-l md:border-gray-600 border-gray-300 md:pl-8 mt-1"
                >

                    <div className='leading-14 text-center md:text-left'>
                        <motion.p variants={itemVariants}><span className="font-bold  text-[#e44951]">Name:</span> <span className="dark:text-[#daf7f7]">Karim Mustafa</span> </motion.p>
                        <motion.p variants={itemVariants}><span className="font-bold text-[#e44951]">Age:</span> <span className="dark:text-[#daf7f7]">24</span></motion.p>
                        <motion.p variants={itemVariants}><span className="font-bold text-[#e44951]">Location:</span> <span className="dark:text-[#daf7f7]">Alexandria, Egypt</span></motion.p>
                        <motion.p variants={itemVariants}><span className="font-bold text-[#e44951]">Email:</span> <span className="dark:text-[#daf7f7]">karimmustafa495@gmail.com</span></motion.p>
                        <motion.p variants={itemVariants}><span className="font-bold text-[#e44951]">Phone:</span> <span className="dark:text-[#daf7f7]">+20 107 041 1467</span></motion.p>
                    </div>
                </motion.div>
            </div>
        </div >
    );
};

export default AboutMe;