import { memo, useEffect, useMemo, useState } from "react";
import {debounce} from 'lodash';
export type SearchBarProps = {
    search: (value?: string) => any;
}

export const SearchBar = memo(({search} : SearchBarProps) => {
    const [searchKey, setSearchKey] = useState<string | undefined>('')

    const debouncedSearch = useMemo(() => debounce<(query?: string) => void>(query => search(query), 350), [search])
    
    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        }
      }, [debouncedSearch]);

    useEffect(()=> {
        debouncedSearch(searchKey)
    }, [searchKey, debouncedSearch])

    return (
     <input value={searchKey} onChange={(event) => { setSearchKey(event.target.value)}} />
    )
})

