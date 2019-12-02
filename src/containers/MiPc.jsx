import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const MiPc = () => {
  const myPokemons = useSelector(state => state.myPokemons);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <ListGroup>
            {myPokemons.map(pokemon => (
              <ListGroupItem className="list-group-item d-flex justify-content-between align-items-center">
                 {pokemon.name.replace(/^./, pokemon.name[0].toUpperCase())}
                <img
                  src={pokemon.sprites.front_default}
                  alt="quixote"
                  style={{ maxWidth: "10vh" }}
                />
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MiPc;
