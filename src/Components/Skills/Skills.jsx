import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const getIconUrl = (slug, color = null) => {
    const safeColor = color ? String(color).replace('#', '') : null;
    return safeColor ? `https://cdn.simpleicons.org/${slug}/${safeColor}` : `https://cdn.simpleicons.org/${slug}`;
};

function Icon({ skill }) {
    const [errored, setErrored] = React.useState(false);

    if (!skill.slug) {
        return <span className="text-3xl">{skill.icon || skill.name[0]}</span>;
    }

    // special container styles for icons that need background/padding
    const specialContainers = {
        java: 'bg-gradient-to-br from-[#f0a500] via-[#e76f00] to-[#b22f00] p-1 rounded-full',
        css3: 'bg-gradient-to-br from-blue-600 to-sky-400 p-1 rounded-md',
        javascript: 'bg-yellow-400/10 p-1 rounded-md',
        php: 'bg-purple-800/20 p-1 rounded-md',
    };

    const containerClass = specialContainers[skill.slug] || '';

    if (errored) {
        return (
            <div className={`w-full h-full flex items-center justify-center text-sm text-gray-200 ${containerClass}`}>
                {skill.name}
            </div>
        );
    }

    return (
        <div className={`w-full h-full flex items-center justify-center ${containerClass}`}>{/* container adds subtle bg/padding */}
            <img
                src={getIconUrl(skill.slug)}
                alt={`${skill.name} logo`}
                className="w-full h-full object-contain skill-icon-img"
                onError={() => setErrored(true)}
                title={skill.name}
            />
        </div>
    );
}

// البيانات المستخرجة من السيرة الذاتية لـ Karim Mustafa مع Slug للأيقونات
const skillCategories = {
    // (الأرقام هنا هي إشارات للأسطر في ملف الـ CV للتوثيق الداخلي)
    'Programming Languages': [
        { name: 'JavaScript', slug: 'javascript', cite: 17 },
        { name: 'TypeScript', slug: 'typescript', cite: 17 },
        { name: 'Java', slug: 'java', cite: 17 },
        { name: 'PHP', slug: 'php', cite: 17 },
        { name: 'C', slug: 'c', cite: 17 },
        { name: 'C++', slug: 'cplusplus', cite: 17 },
        { name: 'SQL', slug: 'sqlite', cite: 17 },
    ],
    //
    'Frontend Technologies': [
        { name: 'HTML', slug: 'html5', cite: 17 },
        { name: 'CSS', slug: 'css3', cite: 17 },
        { name: 'Bootstrap', slug: 'bootstrap', cite: 17 },
        { name: 'Tailwind', slug: 'tailwindcss', cite: 17 },
        { name: 'React', slug: 'react', cite: 17 },
        { name: 'Next.js', slug: 'nextdotjs', cite: 17 },
        { name: 'Angular', slug: 'angular', cite: 17 },
    ],
    //
    'Backend Technologies': [
        { name: 'Node.js', slug: 'nodedotjs', cite: 18 },
        { name: 'Express.js', slug: 'express', cite: 18 },
        { name: 'Nest.js', slug: 'nestjs', cite: 18 },
        { name: 'Laravel', slug: 'laravel', cite: 18 },
        { name: 'RESTful APIs', slug: 'postman', cite: 18 },
    ],
    //
    'Database': [
        { name: 'MySQL', slug: 'mysql', cite: 19 },
        { name: 'MongoDB', slug: 'mongodb', cite: 19 },
    ],
    //
    'CMS Platforms': [
        { name: 'WordPress', slug: 'wordpress', cite: 22 },
        { name: 'Joomla', slug: 'joomla', cite: 22 },
    ],
    //
    'Developer Tools': [
        { name: 'Git', slug: 'git', cite: 23 },
        { name: 'Linux', slug: 'linux', cite: 23 },
        { name: 'Docker', slug: 'docker', cite: 23 },
    ],
    // - المهارات النظرية: يتم استخدام رموز تعبيرية (Emojis) كبديل لعدم وجود أيقونات CDN جاهزة
    'Software Engineering': [
        { name: 'Data Structures', icon: '🧠', cite: 24 },
        { name: 'Algorithms', icon: '⚙️', cite: 24 },
        { name: 'OOP', icon: '📦', cite: 24 },
        { name: 'Database Systems', icon: '🗄️', cite: 24 },
    ],
};

const initialCategory = 'Frontend Technologies';

// =================================================================
// 2. الـ Variants الخاصة بـ Framer Motion
// =================================================================

const containerVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.08,
            delayChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const buttonVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

// =================================================================
// 3. المكون الرئيسي (Skills Component)
// =================================================================

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const skillsContainerRef = useRef(null);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        if (skillsContainerRef.current) {
            skillsContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const activeSkills = skillCategories[activeCategory] || [];

    return (
        <motion.section className='py-20 px-4 bg-gray-900 text-white' id="skills"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
        >
            {/* العنوان الرئيسي */}
            <motion.div className='text-center mb-16' variants={itemVariants}>
                <motion.p className='font-extrabold text-5xl md:text-5xl text-center text-[#8cffff] leading-tight tracking-wider'>
                    What I Master
                </motion.p>
                <motion.span className="inline-block w-24 h-1.5 bg-linear-to-r from-blue-500 to-red-500 rounded-full mx-auto mt-4 shadow-xl" layout></motion.span>
            </motion.div>

            {/* محتوى المهارات */}
            <div className='grid grid-cols-12 gap-8 max-w-7xl mx-auto'>

                {/* العمود الأول: التنقل بين فئات المهارات */}
                <motion.div className='col-span-12 lg:col-span-3' variants={itemVariants}>
                    <h3 className='text-3xl font-bold mb-6 text-gray-300 border-b border-gray-700 pb-3'>My Skillset</h3>
                    <div className='flex flex-wrap lg:flex-col gap-3'>
                        {Object.keys(skillCategories).map((category) => (
                            <motion.button
                                key={category}
                                type="button"
                                onClick={(e) => { e.preventDefault(); handleCategoryClick(category); }}
                                variants={buttonVariants}
                                whileHover={{ scale: 1.02 }}
                                className={`
                                    text-base font-semibold p-3 rounded-xl transition-all duration-300 ease-in-out whitespace-nowrap text-left
                                    border ${activeCategory === category
                                        ? 'bg-linear-to-r from-[#8cffff]/20 to-blue-600/20 text-[#8cffff] border-blue-500 shadow-xl shadow-blue-500/20'
                                        : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700 hover:text-white'
                                    }
                                `}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* العمود الأوسط: عرض المهارات بالتفصيل (Card View) */}
                <div ref={skillsContainerRef} className='col-span-12 lg:col-span-9 p-4 rounded-xl'>
                    <h3 className='text-4xl font-extrabold text-white mb-8 border-b border-gray-700 pb-4'>
                        {activeCategory}
                    </h3>

                    {/* شبكة عرض البطاقات - **تم إصلاح الـ Framer Motion هنا** */}
                    <motion.div
                        key={activeCategory} // الـ Key ده هو اللي بيخليه يعمل ريفريش للعرض
                        className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'
                        variants={containerVariants}
                        initial="hidden" // <== يبدأ مخفي
                        animate="visible" // <== يظهر لما الـ Category تتغير
                    >
                        {activeSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                className='group flex flex-col items-center justify-center p-4 bg-gray-800 rounded-2xl shadow-2xl transition-all duration-500 border border-gray-700'
                                variants={itemVariants}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* منطقة الأيقونة (Icon Area) */}
                                <div className='w-14 h-14 mb-3 flex items-center justify-center relative'>
                                    {/** Use Icon component that falls back when CDN fails **/}
                                    <Icon skill={skill} />
                                </div>

                                {/* اسم المهارة */}
                                <p className='text-sm sm:text-base font-semibold text-center text-gray-200 group-hover:text-white'>
                                    {skill.name}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                    {/* تأكيد المصدر من السيرة الذاتية */}

                </div>
            </div>
        </motion.section>
    );
}