import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import { GetStaticProps } from "next";
import { Films, GetFilmsResponse } from "./types/films";
import FilmList from "./components/video_list";
import Footer from "./components/footer";

export default async function Home() {
  const films = await fetchFilms();
  return (
    <main>
      <Hero films={films.slice(0, 4)} />
      <FilmList films={films} />
      <Footer />
    </main>
  );
}

const fetchFilms = async (): Promise<Films[]> => {
  const res = await fetch('http://localhost:4000/api/films');
  const response: GetFilmsResponse = await res.json();
  return response.Films;
};