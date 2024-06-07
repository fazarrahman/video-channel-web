"use client"
import { useState, useEffect } from 'react';
import { Films } from '../types/films';
import Image from 'next/image';
import Navbar from './navbar';

interface HeroProps {
    films: Films[];
}

const Hero = ({ films }: HeroProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Navbar />
            {films.length > 0 && (
                <div className="relative w-full h-full">
                    <Image src={films[currentIndex].image_thumbnail} alt={films[currentIndex].title} fill style={{ objectFit: 'cover' }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900 via-40% to-transparent"></div>
                    <div className="absolute top-0 left-12 h-full w-1/3 bg-opacity-50 flex flex-col justify-end p-4">
                        <h1 className="text-white sm:text-xl md:text-4xl mb-4">{films[currentIndex].title}</h1>
                        <p className="text-white sm:text-sm md:text-base mb-12">{films[currentIndex].description}</p>
                        <div className="flex space-x-2 mt-20 bottom-12">
                            {films.map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-yellow-500' : 'bg-white'}`}
                                    onClick={() => setCurrentIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;