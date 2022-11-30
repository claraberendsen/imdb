import React, {useState, useEffect} from "react";

export const AsyncImage = ({src}: {src: string}) => {
    const [loadedSrc, setLoadedSrc] = useState<any>(null);
    useEffect(() => {
        setLoadedSrc(null);
        if (src) {
            const handleLoad = () => {
                setLoadedSrc(src);
            };
            const image = new Image();
            image.addEventListener('load', handleLoad);
            image.src = src;
            return () => {
                image.removeEventListener('load', handleLoad);
            };
        }
    }, [src]);
    if (loadedSrc === src) {
        return (
            <img src={src}/>
        );
    }
    return null;
};