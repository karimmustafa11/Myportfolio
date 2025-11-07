import React, { useMemo } from 'react'
import AnimatedTitle from '../../effects/AnimatedTitle.jsx';
import SocialMediaIcons from '../SocialMedia/icons.jsx';


export default function Home() {
    const stars = useMemo(() => {
        // gentle movement: long durations and small offsets
        return Array.from({ length: 40 }).map(() => {
            const wanderDur = 8 + Math.random() * 8; // 8s .. 16s (very gentle)
            const delay = Math.random() * 6;
            // small offsets in viewport units for very subtle roaming
            const dx1 = (Math.random() - 0.5) * 12; // -6vw .. 6vw
            const dy1 = (Math.random() - 0.5) * 8;  // -4vh .. 4vh
            const dx2 = (Math.random() - 0.5) * 12;
            const dy2 = (Math.random() - 0.5) * 8;
            const dx3 = (Math.random() - 0.5) * 12;
            const dy3 = (Math.random() - 0.5) * 8;
            return {
                left: Math.random() * 100,
                top: Math.random() * 100,
                size: 1 + Math.random() * 3,
                twinkleDur: 2 + Math.random() * 3, // slower twinkle
                wanderDur,
                twinkleDelay: delay,
                wanderDelay: delay * 0.3,
                dx1,
                dy1,
                dx2,
                dy2,
                dx3,
                dy3,
                opacity: 0.35 + Math.random() * 0.6,
            };
        });
    }, []);

    return (
        <div className='relative flex items-start justify-evenly'
            style={{ marginBottom: '-21px' }}>

            {/* Stars background layer behind Home content */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {stars.map((s, i) => (
                    <span
                        key={i}
                        className="star"
                        style={{
                            left: `${s.left}%`,
                            top: `${s.top}%`,
                            width: `${s.size}px`,
                            height: `${s.size}px`,
                            opacity: s.opacity,
                            // CSS custom properties used by App.css animations (use vw/vh for roaming)
                            ['--dx1']: `${s.dx1}vw`,
                            ['--dy1']: `${s.dy1}vh`,
                            ['--dx2']: `${s.dx2}vw`,
                            ['--dy2']: `${s.dy2}vh`,
                            ['--dx3']: `${s.dx3}vw`,
                            ['--dy3']: `${s.dy3}vh`,
                            ['--wanderDur']: `${s.wanderDur}s`,
                            ['--twinkleDur']: `${s.twinkleDur}s`,
                            ['--twinkleDelay']: `${s.twinkleDelay}s`,
                            ['--wanderDelay']: `${s.wanderDelay}s`,
                        }}
                    />
                ))}
            </div>

            <div className='mt-30 text-center w-[50%] animate-left-slide relative z-10'>
                <h1>
                    <AnimatedTitle />
                </h1>
                <h2 className="pulsing-text mt-5" style={{ color: '#e04444', fontSize: '1.5em' }} >Full Stack Web Developer</h2>
                <a
                    href="mailto:karimmustafa495@gmail.com"
                    className='
              mt-4 cursor-pointer 
              text-white 
              py-3 px-6 rounded-lg 
              font-semibold shadow-xl 
              transition-all duration-300 ease-in-out
              
              bg-linear-to-r from-red-600 to-blue-600 
              shadow-red-500/50 hover:shadow-blue-500/70
              hover:from-blue-600 hover:to-red-600 
              hover:scale-[1.05]
              inline-block 
            '
                >
                    Get in Touch
                </a>
                <SocialMediaIcons />
            </div>
            <div className='
    hidden md:flex 
    -mt-24 justify-center items-center 
    md:w-[50%] animate-right-slide relative z-10
'>
                <img src="barcaAI2.png" alt="Karim Mustafa Profile Picture" width={400} height={300} />
            </div>
        </div>
    )
}
