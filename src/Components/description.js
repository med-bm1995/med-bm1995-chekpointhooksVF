import React from 'react'
import { moviesData } from './MoviesData'
function description() {
    return (
        <div className="movie_desc">
            <p className="text">
                {moviesData.description}
            </p>
        </div>
    )
}

export default description
