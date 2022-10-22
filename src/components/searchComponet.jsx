import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const SearchComponent = ({ fetchFunction }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    fetchFunction(search);
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={10}>
            <input
              className="form-control"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col md={2}>
            <Button onClick={handleSearch}>On Search</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default SearchComponent;
