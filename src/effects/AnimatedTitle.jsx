import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedTitle = () => {
    return (
        <div style={{ fontSize: '2em', fontWeight: 'bold' }}>
            Hi, I'm{' '}
            <TypeAnimation
                sequence={[
                    'Karim', // يكتب الاسم 
                    2000,          // ينتظر ثانيتين (ممكن تزود أو تقلل المدة دي)
                    '',            // يمسح الاسم (بإعطاء نص فارغ)
                    500,           // ينتظر نص ثانية قبل ما يكتب تاني
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                color="red" // يكرر إلى ما لا نهاية

            />
        </div>
    );
};

export default AnimatedTitle;