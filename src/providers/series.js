import React, { useState } from 'react'

export const SeriesContext = React.createContext({});

export const SeriesProvider = (props) => {
    const [series, setSeries] = useState([])
    const [page, setPage] = useState(1)


    return (
        <SeriesContext.Provider value={{ series, setSeries, page, setPage }}>
            {props.children}
        </SeriesContext.Provider>
    )
}



