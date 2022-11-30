import { useCallback, useState } from "react";
import axios from 'axios'

import { Movie } from "../types/api";
import { EMPTY_STRING } from "../constants";

export const useMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [error, setError] = useState<boolean>(false)
    const [page, setPage] = useState(1)
    const [maxPages, setMaxPages] = useState(1)
    const [query, setQuery] = useState<string | undefined>()
    const [loading, setLoading] = useState(false)
    const get = ({page, query} : {page:number, query?: string}) => {
        const url = `https://api.themoviedb.org/3/search/movie`
       return axios.get(url, {
            params: {
              api_key: 'b3e5eeeb47df4f951af0ee06fd4d9f7a',
              query: query || EMPTY_STRING,
              page
            }
          });
    }

    const getMovies = useCallback( async (query?: string) => {
        if(query) {
            setQuery(query)
        }
        try{
        const movies = await get({page: 1, query})
        setMovies(movies.data.results)
        setMaxPages(movies.data.total_pages)
       } catch(err) {
          setError(true)
        }
    }, [query])


    const getMore = async () => {
        try{
        const nextPage = page+1 > maxPages ? undefined : page + 1
        if(!nextPage) {
            return
        }
        setPage(nextPage)
        const newMovies = await get({page:nextPage, query: query})
        setMovies([...movies, ...newMovies.data.results]);
        setLoading(false)
       } catch(err) {
          setError(true)
        }
    }


    return {
        movies, 
        getMovies,
        error,
        getMore,
        loading
    }

}