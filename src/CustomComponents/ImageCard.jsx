import React from "react";
import { Card, Button } from "react-bootstrap";

const ImageCard = ({ images, breedName, updateUserData }) => {
  return (
    <Card className="custom-card ">
      <Card.Img className="custom-card-image" variant="top" src={images} />
      <Card.Body className="custom-card-width">
        <Card.Title>{breedName.toUpperCase()}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button
          onClick={() => {
            updateUserData(breedName);
          }}
          variant="danger"
        >
          Remove Breed
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
