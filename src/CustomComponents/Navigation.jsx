import React, { useState } from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import axios from "axios";
import { randomizer } from "../utiliityFunctions/randomizer";

const Navigation = ({ submitBreed, openLightBox, searchedBreedName, user }) => {
  const [input, setInput] = useState("");
  const [displayError, setDisplayError] = useState(null);

  return (
    <Navbar className="navigation-header" expand="lg">
      <Container fluid>
        <Navbar.Brand className="logo" href="#">
          Authentise Dog Breeds
        </Navbar.Brand>

        <Form
          className="d-flex"
          onSubmit={async () => {
            let response;
            try {
              if (input === "random") {
                const randomBreed = await randomizer();
                response = await axios(
                  `https://dog.ceo/api/breed/${randomBreed}/images`
                );
                searchedBreedName(randomBreed);
              } else {
                response = await axios(
                  `https://dog.ceo/api/breed/${input}/images`
                );
                searchedBreedName(input);
              }
              const { data } = response;

              submitBreed(data.message);
              openLightBox();
            } catch (error) {
              setDisplayError(error.response.data.message);
              setTimeout(() => {
                setDisplayError(null);
              }, 3000);
            }
            setInput("");
          }}
        >
          <FormControl
            value={input}
            type="search"
            placeholder="Search or try random"
            className="me-2"
            aria-label="Search"
            required
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button
            style={{ marginRight: "5px" }}
            type="submit"
            variant="outline-success"
          >
            Search
          </Button>
          <Button
            onClick={() => {
              setInput("random");
            }}
            type="submit"
            variant="success"
          >
            Random Breed
          </Button>
        </Form>
      </Container>
      {displayError && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "0px 12px",
          }}
        >
          <p className="error-message" style={{}}>
            {displayError}
          </p>
        </div>
      )}
    </Navbar>
  );
};

export default Navigation;
