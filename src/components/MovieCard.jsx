import { Component } from "react";
import { Col } from "react-bootstrap";

class MovieCard extends Component {
  render() {
    return (
      <Col className="mb-2 text-center px-1 h-100">
        <img className="img-fluid" src={this.props.src} alt={this.props.movie} />
      </Col>
    );
  }
}

export default MovieCard;
