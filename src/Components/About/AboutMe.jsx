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
            className="bg-white dark:bg-[#181818] relative py-10 transition-colors duration-500 sm:mt-5 "
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
                <span className="inline-block w-16 h-1 bg-red-500 rounded-full mx-auto"></span>
            </motion.div>

            <div className="grid md:grid-cols-12 gap-8 p-4 max-w-6xl mx-auto dark:text-gray-100 text-gray-800 relative z-10">

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="md:col-span-7 pr-6 leading-5"
                >
                    <p className="font-bold text-3xl mb-4 dark:text-white text-gray-900 ">Hello<span className='text-[#fb2c36]'>,</span> I<span className='text-[#fb2c36]'>'</span>m Karim <span className="waving-hand">👋</span></p>

                    <p className='leading-8 text-[#daf7f7] text-[18px] mt-2'>
                        I’m a junior full-stack developer passionate about building engaging and user-friendly web applications. I recently completed the 9-month Open Source track at ITI, where I gained hands-on experience in both front-end and back-end development. I’m skilled in HTML, CSS, JavaScript, React.js, Node.js, and working with databases to build scalable and efficient applications.
                        I enjoy transforming designs into interactive interfaces and implementing robust backend solutions. Always eager to learn and explore new technologies, I aim to deliver high-quality web applications from end to end.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="md:col-span-5 flex flex-col gap-12 md:border-l md:border-gray-600 border-gray-300 md:pl-8 mt-1"
                >
                    <motion.p variants={itemVariants}><span className="font-bold  text-[#e44951]">Name:</span> <span className="dark:text-[#daf7f7]">Karim Mustafa</span> </motion.p>
                    <motion.p variants={itemVariants}><span className="font-bold text-[#e44951]">Age:</span> <span className="dark:text-[#daf7f7]">24</span></motion.p>
                    <motion.p variants={itemVariants}><span className="font-bold text-[#e44951]">Location:</span> <span className="dark:text-[#daf7f7]">Alexandria, Egypt</span></motion.p>
                    <motion.p variants={itemVariants}><span className="font-bold text-[#e44951]">Email:</span> <span className="dark:text-[#daf7f7]">karimmustafa495@gmail.com</span></motion.p>
                    <motion.p variants={itemVariants}><span className="font-bold text-[#e44951]">Phone:</span> <span className="dark:text-[#daf7f7]">+20 123 456 7890</span></motion.p>
                </motion.div>
            </div>
        </div >
    );
};

export default AboutMe;