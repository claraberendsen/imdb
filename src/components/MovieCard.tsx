import { Movie } from "../types/api";
import { AsyncImage } from "./AsyncImage";



export const MovieCard = ({movie}: {movie: Movie}) => {
    return ( 
        <div className="Card" key={movie.id}>
            {movie.backdrop_path && <AsyncImage src={`https://www.themoviedb.org/t/p/w200${movie.poster_path}` }/>}
            <h4>{movie.title}</h4>
        </div>
    )
}