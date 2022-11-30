import React, { useEffect, useRef } from 'react';
import { ErrorPage } from './ErrorPage';
import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';
import { NavBar } from '../components/NavBar';
import { Grid } from '../components/Grid';
import useOnScreen from '../hooks/useOnScreen';


function Home() {
  const {getMovies, movies, error, getMore} = useMovies()
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const isBottom = useOnScreen(bottomRef)
  useEffect(() => { 
    getMovies();
  }, []);

  useEffect(() => {
    if(!isBottom) {
      return
    }
    getMore()
  }, [isBottom])

  return (
    <div className="App">
      <NavBar search={getMovies} title={'Search'}/>
      <Grid values={movies} getCard={(movie) => <MovieCard movie={movie}/>}/>
      {error && <ErrorPage/>  }
      <div ref={bottomRef}/>
    </div>
  );
}


export {Home};
