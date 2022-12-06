import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const imgmovie =
    poster_path !== null
      ? API_IMG + poster_path
      : "data:image/png;base64,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";
  return (
    <div className="card text-center bg-secondary md-3">
      <div className="card-body">
        <img src={imgmovie} className="card-img-top" alt="null" />
        <div className="card-body">
          <button type="button" className="btn btn-dark" onClick={handleShow}>
            view movie
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                className="card-img-top"
                id="imgcard"
                src={imgmovie}
                alt="null"
              />
              <h3>{title}</h3>
              <h4>IMDB:{vote_average}</h4>
              <h5>Release Date: {release_date}</h5>
              <br></br>
              <h6>Ovreview</h6>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
