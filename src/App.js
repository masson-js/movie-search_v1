import { useState } from "react";

//components
import { Box } from "./components/box";
import { Main } from "./components/main";
import { NavBar } from "./components/navBar";
import { MovieList } from "./components/movieList";
import { MovieDetails } from "./components/movieDetails";
import { WatchedSummary } from "./components/watchedSummary";
import { WatchedMovieList } from "./components/watchedMovieList";

// hooks
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

// modules
import { Loader } from "./modules/loader";
import { Search } from "./modules/search";
import { NumResults } from "./modules/numResults";
import { ErrorMessage } from "./modules/errors";

// handler
import Handlers from "./handler/handlers";

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  const {
    handleSelectMovie,
    handleCloseMovie,
    handleAddWatched,
    handleDeleteWatched,
  } = Handlers({ setSelectedId, setWatched });

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
