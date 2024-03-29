import {Component} from 'react';
import MovieCard from './Moviecard';
import Navbar from './Navbar'

class MovieList extends Component{
    constructor(){
        super();
        this.state={
            movies:[
                {
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  stars: 0,
                  fav: false,
                  isInCart: false                  
                },
                {
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  stars: 0,            
                  fav: false,
                  isInCart: false                  
                },
                {
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony starsk creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  stars: 0,            
                  fav: false,
                  isInCart: false                  
                }],
                cartCount:0,
        }
    }
    
    handleFav = (movie)=>{
        const {movies} = this.state;
        const movieId =movies.indexOf(movie);
        movies[movieId].fav=!movies[movieId].fav;
        this.setState(movies);  
    }
    // handleCart = (movie)=>{
    //   const {movies} = this.state;
    //   const movieId =movies.indexOf(movie);
    //   movies[movieId].isInCart=!movies[movieId].isInCart;
    //   this.setState(movies[movieId]);
  // }
  AddStar = (movie)=>{
    const {movies} = this.state;
    const movieId =movies.indexOf(movie);
    if(movies[movieId].stars<5)
    { 
      movies[movieId].stars+=0.5 
    }
    this.setState(movies)
}
DeStar = (movie)=>{
  const {movies} = this.state;
  const movieId =movies.indexOf(movie);
  // if(movies[movieId].stars<=5 || movies[movieId].stars>0) 
  if(movies[movieId].stars>0)
  { 
    movies[movieId].stars+=-0.5 
  }
  this.setState(movies)
}

handleCart = (movie)=>{
  const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;
    if(movies[movieId].isInCart){
      this.state.cartCount+=1;
    }
    else{
      this.state.cartCount+=-1;
    }

    this.setState({
      movies
    })
}

    render (){
        // console.log(this.state)
        return (
            <>
      <Navbar cartCount={this.state.cartCount}/>
            {this.state.movies.map((movie,index)=>(<>
                <MovieCard Shridhar={movie}
                            key={index}
                            handleFav={this.handleFav}
                            AddStar={this.AddStar}
                            handleCart={this.handleCart}
                            DeStar={this.DeStar}/>

                            </>

            ))}
            </>
        )
    }
}
export default MovieList;