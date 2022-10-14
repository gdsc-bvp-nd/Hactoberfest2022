function MovieCard(props){
    return(
        <img src={props.poster} className=' w-56 h-72 rounded-md hover:scale-110 hover:duration-300 hover:ease-in-out md:w-64 md:h-96' alt=""/>
    );
}

export default MovieCard;