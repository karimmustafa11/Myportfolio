import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedTitle = () => {
    return (
        <div style={{ fontSize: '2em', fontWeight: 'bold' }}>
            Hi, I'm{' '}
            <TypeAnimation
                sequence={[
                    'Karim',
                    2000,
                    '',
                    500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                color="red"

            />
        </div>
    );
};

export default AnimatedTitle;