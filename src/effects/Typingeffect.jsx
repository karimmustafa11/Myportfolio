import React, { useState, useEffect } from 'react';

// المكون بياخد النص المراد طباعته كـ prop
const TypingEffect = ({ text }) => {
    // 1. حالة لتخزين النص اللي بيتم عرضه حالياً
    const [displayedText, setDisplayedText] = useState('');
    // 2. حالة لتتبع الحرف الحالي في النص الأصلي
    const [index, setIndex] = useState(0);

    // useEffect بيشتغل في كل مرة الـ 'index' بيتغير فيها
    useEffect(() => {
        // لو لسه فيه حروف متبقية (الـ index أصغر من طول النص)
        if (index < text.length) {
            // بنعمل مؤقت (Timer)
            const timeout = setTimeout(() => {
                // بنضيف الحرف الجديد للـ displayedText
                setDisplayedText(prevText => prevText + text[index]);
                // بنزود الـ index عشان الحرف اللي بعده
                setIndex(prevIndex => prevIndex + 1);
            }, 100); // 100 مللي ثانية (ممكن تغير السرعة دي)

            // دي وظيفة الـ Cleanup: مهمة لإيقاف المؤقت قبل ما المكون يتفك (Unmount)
            return () => clearTimeout(timeout);
        }
    }, [index, text]); // بيعيد التشغيل كل ما الـ index يتغير

    // ممكن تضيف عنصر الـ cursor (العلامة اللي بتظهر وتختفي) باستخدام CSS بسيط
    return (
        <span className="typing-text">
            {displayedText}
            {/* المؤشر اللي بيظهر ويختفي */}
            <span className="cursor">|</span>
        </span>
    );
};

export default TypingEffect;