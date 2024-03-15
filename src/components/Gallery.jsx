import { Component } from "react";
import { Alert, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import MovieCard from "./MovieCard";

class Gallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  getMovie = async () => {
    try {
      const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f4b5e3fb&s=" + this.props.idSearch);
      if (res.ok) {
        const movie = await res.json();
        console.log(movie);
        this.setState({
          isLoading: false,
          movies: movie.Search,
        });
      } else {
        throw new Error("Errore nel caricamento dati");
      }
    } catch (error) {
      console.log("errore", error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    return (
      <>
        <h2 className="mb-4 fs-3 fw-bold text-white ms-5">{this.props.idSearch.toUpperCase()}</h2>
        {this.state.isLoading && (
          <div className="text-center">
            <Spinner animation="grow" style={{ color: "#cb121a" }} />
          </div>
        )}
        {this.state.isError && (
          <div className="text-center">
            <Alert variant="danger">Errore improvviso!! Sorry!</Alert>
          </div>
        )}
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {this.state.movies.slice(0, 5).map((movie) => (
            <MovieCard src={movie.Poster} alt={movie.Title} key={movie.imdbID} />
          ))}
        </Row>
      </>
    );
  }
}

export default Gallery;
