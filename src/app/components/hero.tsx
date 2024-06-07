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

    const nextFilm = () => setCurrentIndex((currentIndex + 1) % films.length);
    const prevFilm = () => setCurrentIndex((currentIndex - 1 + films.length) % films.length);
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Navbar />
            {films.length > 0 && (
                <div className="relative w-full h-full">
                    <Image src={films[currentIndex].image_thumbnail} alt={films[currentIndex].title} fill style={{ objectFit: 'cover' }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900 via-40% to-transparent"></div>
                    <div className="absolute top-0 left-40 h-full w-1/3 bg-opacity-50 flex flex-col justify-end p-4">
                        <h1 className="text-white text-4xl mb-4">{films[currentIndex].title}</h1>
                        <h2 className="text-white text-2xl mb-4">{films[currentIndex].description}</h2>
                        <div className="flex space-x-2 mt-20 mb-10">
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