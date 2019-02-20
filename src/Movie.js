import React/*, { Component }*/ from 'react'; 

import PropTypes from 'prop-types'

import './Movie.css'

import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component{

//     static propTypes = { //type check 부모 컴포넌트에서 얻는 정보의 종류가 무엇인지, 있는지 없는지 알 수 있다.
//         title: propTypes.string.isRequired,
//         poster: propTypes.string.isRequired
//     }

//     render(){
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

//1
function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}


// class MoviePoster extends Component{

//     static propTypes = {
//         poster: propTypes.string.isRequired
//     }

//     render(){
//         return(
//             <img src={this.props.poster} />
//         )
//     }
// }


//2
function MoviePoster ({poster, alt}){    //functional 컴포넌트 (state가 없음! only have return)
    return (
        <img src={poster} alt={alt} className="Movie__Poster" />
    )
}

function MovieGenres ({genre}){
    return(
        <span className="Movie__Genre">{genre}</span>
    )
}


//3
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = { // pure컴포넌트 prop types 확인
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenres.propTypes = {
    genre: PropTypes.string.isRequired
}

export default Movie;