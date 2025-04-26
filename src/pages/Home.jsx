import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import { movies } from "../data"; 

function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    
    setMovieList(movies);
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Movie List</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {movieList.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
      </main>
    </>
  );
}

export default Home;
