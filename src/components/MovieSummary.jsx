function MovieSummary(props) {

    return (
        <div className="card">
            <h3>{props.movieDetails.title}</h3>
            <img src={props.movieDetails.imgURL} alt="" />
            <p>Year: {props.movieDetails.year}</p>
            <p>Rating: {props.movieDetails.rating}</p>

            <button onClick={()=> {props.onDelete(props.movieDetails.id)}}>Delete</button>

            <button>More Details</button>
        </div>
    )
}

export default MovieSummary