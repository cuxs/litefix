import { prisma } from "@src/lib/prisma";
import type { Movie } from "@prisma/client";

export default function Movies({ movies }: { movies: Movie[] }) {
  return (
    <div>
      <h1 className="h1"> Movies </h1>
      <br />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.name} - {movie.image_url}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const movies = await prisma.movie.findMany();

  return {
    props: { movies },
  };
}
