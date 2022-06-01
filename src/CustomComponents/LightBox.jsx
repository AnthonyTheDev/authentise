import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function LightBox({ show, onHide, breedImage, breedType, saveBreed, user }) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Searched Breed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="light-box-image" src={breedImage} alt={breedImage} />
        <h4>{breedType.toUpperCase()}</h4>
        <p>
          {`You searched ${breedType} type of breed. Do you want to add this breed
          to your profile?`}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={user.hasOwnProperty(breedType)}
          onClick={() => {
            saveBreed(breedType);
            onHide();
          }}
        >
          {user.hasOwnProperty(breedType) ? "Breed already exist" : "Add Breed"}
        </Button>
        <Button variant="danger" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LightBox;
