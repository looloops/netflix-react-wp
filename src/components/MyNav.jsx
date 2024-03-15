import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";

const MyNav = () => (
  <Navbar expand="lg" className="bg-dark text-light" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home">
        <img src="assets/logo.png" alt="logo" className="logNavBar" style={{ width: "100px", height: "55px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" fw-semibold text-secondary">
          <Nav.Link className="text-light" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="text-light" href="#link">
            Tv Shows
          </Nav.Link>
          <Nav.Link className="text-light" href="#link">
            Movies
          </Nav.Link>
          <Nav.Link className="text-light" href="#link">
            Recently Added
          </Nav.Link>
          <Nav.Link className="text-light" href="#link">
            My List
          </Nav.Link>
        </Nav>
        <Nav className="d-flex flex-row align-items-center ">
          <Nav.Link href="#link">
            <i className="bi bi-search icons text-light"></i>
          </Nav.Link>
          <Nav.Link href="#link">
            <div id="kids" className="fw-bold text-light">
              KIDS
            </div>
          </Nav.Link>
          <Nav.Link href="#">
            <i className="bi bi-bell icons text-light"></i>
          </Nav.Link>
          <Nav.Link href="#">
            <i className="bi bi-person-circle icons text-light"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;

// API KEY  f4b5e3fb
