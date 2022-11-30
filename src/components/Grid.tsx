import React from 'react'
type GridProps<T> = {
    values: T[]
    getCard: (value: T, index: number) => React.ReactNode
}

export const Grid = <T extends unknown>({values, getCard}: GridProps<T>) => {
    return (
        <div className="Grid"> 
        {values && values.map((v, index) => (
            getCard(v, index)
        ))}
        </div>
    )
}