import React from 'react';
import { motion } from 'framer-motion';

const getIconUrl = (slug, color = null) => {
    if (!slug) return '';
    const safeColor = color ? String(color).replace('#', '') : null;
    return safeColor ? `https://cdn.simpleicons.org/${slug}/${safeColor}` : `https://cdn.simpleicons.org/${slug}`;
};


const contactLinks = [
    {
        name: 'Email',
        value: 'karimmustafa495@gmail.com',
        slug: 'gmail',
        href: 'mailto:karimmustafa495@gmail.com',
        color: '#EA4335'
    },
    {
        name: 'LinkedIn',
        value: 'karimmustafa11',
        slug: null,
        isCustomSVG: true,
        href: 'https://www.linkedin.com/in/karim-mustafa-949207318/',
        color: '#0A66C2'
    },
    {
        name: 'GitHub',
        value: 'karimmustafa11',
        slug: 'github',
        href: 'https://github.com/karimmustafa11',
        color: '#ffffff'
    },
    {
        name: 'Phone',
        value: '+20 107 041 1467',
        slug: null,
        isCustomSVG: true,
        href: 'tel:+201070411467',
        color: '#4CAF50'
    },
];


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.15,
            delay: 0.2
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};



export default function Footer() {
    return (
        <motion.footer
            className='py-16 px-4  bg-black/70 text-white'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className='max-w-7xl mx-auto text-center'>

                <motion.div variants={itemVariants} className='mb-12'>
                    <h2 className='text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight tracking-wide'>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                            Let's Build Something Awesome
                        </span>
                        <span className='text-[#8cffff]'>.</span>
                    </h2>
                    <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
                        I am currently open to new opportunities. Feel free to reach out to discuss your next project!
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'
                >
                    {contactLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            className='flex flex-col items-center p-6 rounded-xl bg-gray-900/50 hover:bg-gray-800/70 transition-all duration-300 border border-gray-800 hover:border-blue-500/50 shadow-lg group'
                        >

                            <div className='w-8 h-8 mb-3 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center'
                                style={{
                                    filter: `drop-shadow(0 0 5px ${link.color})`,
                                }}
                            >
                                {link.isCustomSVG ? (
                                    link.name === 'Phone' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-white">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    ) : link.name === 'LinkedIn' ? (
                                        // SVG أيقونة LinkedIn
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM4 21h4V9H4v12zM6 3.5c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2z" />
                                        </svg>
                                    ) : (
                                      
                                        <span className="text-3xl text-white">?</span>
                                    )
                                ) : (

                                    <img
                                        src={getIconUrl(link.slug)}
                                        alt={link.name}
                                        className='w-full h-full object-contain'
                                    />
                                )}
                            </div>

                            <p className='text-lg font-bold text-white mb-1 group-hover:text-[#8cffff]'>
                                {link.name}
                            </p>

                            <span className='text-sm text-gray-400 truncate w-full px-2'>
                                {link.value}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants} className='pt-8 border-t border-gray-800'>
                    <p className='text-gray-500 text-sm'>
                        &copy; {new Date().getFullYear()} Karim Mustafa, Software Engineer. Built with passion.
                    </p>
                    <p className='text-gray-600 text-xs mt-1'>
                        Alexandria, Egypt (Open to Relocation)
                    </p>
                </motion.div>

            </div>
        </motion.footer>
    );
}