// components/MacbookMockup.jsx
import React from "react";

export default function MacbookMockup({ imageSrc, altText = "Project Showcase" }) {
    return (
        <div className="relative mx-auto w-full max-w-[950px] flex flex-col items-center select-none">

            <div className="relative w-full bg-linear-to-b from-gray-700 via-gray-800 to-gray-950 rounded-[2.5rem] border-8 border-gray-600/70 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.9),inset_0_2px_10px_rgba(255,255,255,0.15)] overflow-hidden backdrop-blur-sm">

                <div className="relative w-full pt-[62.5%] bg-black overflow-hidden rounded-[1.8rem]">
                    <img
                        src={imageSrc}
                        alt={altText}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-white/10 pointer-events-none"></div>

                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-2.5 bg-gray-950 rounded-b-xl shadow-[0_1px_4px_rgba(0,0,0,0.7)] flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-600 rounded-full shadow-[0_0_4px_rgba(255,255,255,0.3)]"></div>
                    </div>
                </div>

                <div className="relative h-6 bg-linear-to-b from-gray-600 via-gray-700 to-gray-900 flex items-end justify-center shadow-[inset_0_2px_3px_rgba(255,255,255,0.2)] rounded-b-4xl">
                    <div className="w-40 h-[3px] bg-linear-to-r from-gray-500 via-gray-400 to-gray-500 rounded-full"></div>
                </div>
            </div>

            <div className="relative w-[96%] mt-1 h-8 bg-linear-to-t from-gray-900 via-gray-800 to-gray-700 rounded-b-[3rem] shadow-[inset_0_2px_6px_rgba(255,255,255,0.15),0_15px_40px_rgba(0,0,0,0.7)] flex justify-center items-start">
                <div className="absolute top-1 w-1/3 h-[3px] bg-gray-500/60 rounded-full"></div>
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-10 bg-black/50 blur-3xl rounded-full"></div>

            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_70%)]"></div>
        </div>
    );
}
