import { Component } from "react";
import { Container, Dropdown } from "react-bootstrap";
import Gallery from "./Gallery";

class Main extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  getMovie = async () => {
    try {
      const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=6a29bd70&s=" + this.props.idSearch);
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
      <Container fluid className="px-4 bg-dark text-light">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <Dropdown>
              <Dropdown.Toggle variant="black" id="dropdown-basic" className="text-white border-1 border-white">
                {" "}
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: "8.3 rem" }} className="bg-black">
                <Dropdown.Item href="#profile" className="text-white">
                  Action
                </Dropdown.Item>
                <Dropdown.Item href="#settings" className="text-white">
                  Animation
                </Dropdown.Item>
                <Dropdown.Item href="#settings" className="text-white">
                  Horror
                </Dropdown.Item>
                <Dropdown.Item href="#settings" className="text-white">
                  Love
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
        <Gallery idSearch={"harry potter"} />
        <Gallery idSearch={"Star Wars"} />
        <Gallery idSearch={"The Lord Of The Rings"} />
      </Container>
    );
  }
}

export default Main;
