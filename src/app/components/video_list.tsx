"use client"
import { useState, useEffect } from 'react';
import { Films } from '../types/films';
import Image from 'next/image';

interface filmProps {
    films: Films[]
}

const FilmList = ({ films }: filmProps) => {
    const [scrollPosition, setScrollPosition] = useState(0);


    const scrollLeft = () => setScrollPosition(scrollPosition - 300);
    const scrollRight = () => setScrollPosition(scrollPosition + 300);

    return (
        <div className="p-4 mx-5 my-10">
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
                {films.slice(0, 3).map((film) => (
                    <div key={film.id} className="relative">
                        <Image
                            src={film.image_thumbnail}
                            alt={film.title}
                            width={320}
                            height={180}
                            className="object-cover w-full h-36"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950 via-5% to-transparent"></div>
                        <h3 className="absolute bottom-0 left-6 bg-opacity-50 text-white p-2">{film.title}</h3>
                    </div>
                ))}
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-4">
                {films.slice(3, 6).map((film) => (
                    <div key={film.id} className="relative">
                        <Image
                            src={film.image_thumbnail}
                            alt={film.title}
                            width={320}
                            height={180}
                            className="object-cover w-full h-36"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950 via-5% to-transparent"></div>
                        <h3 className="absolute bottom-0 left-6 text-white p-2">{film.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FilmList;