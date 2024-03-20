import { Alert, Row, Spinner } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetch("http://www.omdbapi.com/?apikey=f4b5e3fb&i=" + params.idMovie);
        //
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
    getMovie();
  }, [params.idMovie]);

  return (
    <div>
      <h4 className="text-center h1 text-light">{movie.Title}</h4>
      <div className="row mb-4 justify-content-center">
        <div key={movie.imdbID} className="col-8 mb-2 text-center px-1">
          <img
            className="img-fluid object-fit-cover transform-none"
            src={movie.Poster}
            alt="poster film"
            style={{ width: "400px" }}
          />

          <div className="d-flex mt-5">
            <div className="d-flex align-items-center">
              <p className="text-light">{movie.Plot}</p>
            </div>
            <div className="d-flex flex-column ms-5 align-items-start">
              <Badge className="rounded-0 mb-2 bg-secondary">
                Anno: <span className="fw-normal">{movie.Year}</span>
              </Badge>
              <Badge className="rounded-0 mb-2 bg-secondary">
                Genere: <span className="fw-normal">{movie.Genre}</span>
              </Badge>
              <Badge className="rounded-0 mb-2 bg-secondary">
                Rated: <span className="fw-normal">{movie.Rated}</span>
              </Badge>
              <Badge className="rounded-0 mb-2 bg-secondary">
                Scritto da: <span className="fw-normal">{movie.Writer}</span>
              </Badge>
              <Badge className="rounded-0 mb-2 bg-secondary">
                Cast: <span className="fw-normal">{movie.Actors}</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <h2 className="fs-3 fw-bold text-white">{this.props.idSearch.toUpperCase()}</h2>
    //   {this.state.isLoading && (
    //     <div className="text-center">
    //       <Spinner animation="grow" style={{ color: "#cb121a" }} />
    //     </div>
    //   )}
    //   {this.state.isError && (
    //     <div className="text-center">
    //       <Alert variant="danger">Errore improvviso!! Sorry!</Alert>
    //     </div>
    //   )}
    //   <Row className="rowStyle row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
    //     {this.state.movies.slice(0, 6).map((movie) => (
    //       <MovieCard src={movie.Poster} alt={movie.Title} key={movie.imdbID} />
    //     ))}
    //   </Row>
    // </>
  );
};

export default MovieDetails;

// const MovieDetails = () => {
// 	/*state = {
// 		movie: [],
// 	};*/

// 	const params = useParams();

// 	const [movie, setMovie] = useState([]);

// 	useEffect(() => {
// 		const getMovie = async () => {
// 			const url = "http://www.omdbapi.com/?apikey=39fbd402&i=";

// 			try {
// 				let response = await fetch(url + params.movieId);
// 				console.log(response);
// 				if (response.ok) {
// 					let movie = await response.json();
// 					console.log(movie);
// 					setMovie(movie);
// 				}
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		};
// 		getMovie();
// 	}, []);

// 	return (
// <div>
// 	<h4 className="text-center h1 text-light">{movie.Title}</h4>
// 	<div className="row mb-4 justify-content-center">
// 		<div key={movie.imdbID} className="col-8 mb-2 text-center px-1">
// 			<img
// 				className="img-fluid object-fit-cover transform-none"
// 				src={movie.Poster}
// 				alt="poster film"
// 				style={{ width: "400px" }}
// 			/>

// 			<div className="d-flex mt-5">
// 				<div className="d-flex align-items-center">
// 					<p className="text-light">{movie.Plot}</p>
// 				</div>
// 				<div className="d-flex flex-column ms-5 align-items-start">
// 					<Badge className="rounded-0 mb-2 bg-secondary">
// 						Anno: <span className="fw-normal">{movie.Year}</span>
// 					</Badge>
// 					<Badge className="rounded-0 mb-2 bg-secondary">
// 						Genere: <span className="fw-normal">{movie.Genre}</span>
// 					</Badge>
// 					<Badge className="rounded-0 mb-2 bg-secondary">
// 						Rated: <span className="fw-normal">{movie.Rated}</span>
// 					</Badge>
// 					<Badge className="rounded-0 mb-2 bg-secondary">
// 						Scritto da: <span className="fw-normal">{movie.Writer}</span>
// 					</Badge>
// 					<Badge className="rounded-0 mb-2 bg-secondary">
// 						Cast: <span className="fw-normal">{movie.Actors}</span>
// 					</Badge>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
// 	);
// };

// export default MovieDetails;
