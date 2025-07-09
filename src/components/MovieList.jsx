import { useState } from "react";

import movies from "../data/movies.json"

function MovieList() {
    const [moviesToDisplay, setMoviesToDisplay] = useState(movies)
    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((movie) => {

            return movie.id !== movieId;
               
        })
        setMoviesToDisplay(newList)
    }
    return (
        <>

            <h1>Number of Movies: {moviesToDisplay.length}</h1>

            {moviesToDisplay.map((movieObj, i, arr) => {
                return (
                    <div key={movieObj.id} className="card">
                        <h3>{movieObj.title}</h3>
                        <img src={movieObj.imgURL} alt="" />
                        <p>Year: {movieObj.year}</p>
                        <p>Rating: {movieObj.rating}</p>

                        <p>
                            <button className="delte-btn" onClick={() => { deleteMovie(movieObj.id) }}>Delete this movie</button>
                        </p>
                    </div>
                )
            })}
        </>
    )
}


export default MovieList;