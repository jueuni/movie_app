import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'  /* Movie component */

// const movieTitles = [
//   "Matrix",
//   "Full Metal Jacket",
//   "Oldboy",
//   "Star Wars"
// ]//전역변수

// const movieImages = [
//   "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg",
//   "https://is2-ssl.mzstatic.com/image/thumb/Video/v4/52/4b/d9/524bd9ea-e781-339f-6d07-5725c00d6b21/pr_source.lsr/268x0w.png",
//   "https://images-na.ssl-images-amazon.com/images/I/91ONQ8FNHJL._SY445_.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBq5af1KcwELZNebyBPZR0Vbywc71omi5oe7NqsoPv3J2cDFGAw"
// ]



class App extends Component {

  // componentWillMount() {
  //   console.log('will mount');
  // }
 
  state = {}  

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie)
      return <Movie
      title={movie.title_english}
      poster={movie.medium_cover_image}
      key={movie.id}
      genres={movie.genres}
      synopsis={movie.synopsis}
      />// props추가
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi() //await (callApi기능이 끝나기를 기다림) -> 결과(성공/실패 상관x) 리턴 movies에
    this.setState({
      movies  //state를 movies로 설정
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    // console.log('did render')
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
         {movies ? this. _renderMovies() : 'Loadings'} {/* state가 movies면 _renderMovies라는 function을 불러옴*/}
      </div>
    );
  }
}

export default App;
