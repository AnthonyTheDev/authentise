import { useState } from "react";
import { Container } from "react-bootstrap";
import Navigation from "./CustomComponents/Navigation";
import ImageCard from "./CustomComponents/ImageCard";
import LightBox from "./CustomComponents/LightBox";

function App() {
  const [breedImages, setBreedImages] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [breedName, setBreedName] = useState("");
  const [userData, setUserData] = useState({});

  return (
    <>
      <Navigation
        searchedBreedName={(name) => {
          setBreedName(name);
        }}
        submitBreed={(image) => {
          setBreedImages(image);
        }}
        openLightBox={() => setModalShow(true)}
      />
      <div className="main-bg">
        <Container className="custom-container">
          {JSON.stringify(userData) === "{}" && (
            <div style={{ textAlign: "center", alignSelf: "center" }}>
              No breeds saved yet
            </div>
          )}

          {Object.keys(userData).map((currentBreed, index) => (
            <ImageCard
              updateUserData={(val) => {
                const newUserData = Object.keys(userData).reduce((acc, key) => {
                  if (key !== val) {
                    acc[key] = userData[key];
                  }
                  return acc;
                }, {});

                setUserData(newUserData);
              }}
              breedName={currentBreed}
              key={index}
              images={userData[currentBreed]}
            />
          ))}
          <LightBox
            user={userData}
            saveBreed={(breedType) => {
              let obj;
              if (!userData[breedType]) {
                obj = { ...userData, [breedType]: breedImages[0] };

                setUserData(obj);
              }
            }}
            breedImage={breedImages[0]}
            breedType={breedName}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Container>
      </div>
    </>
  );
}

export default App;
