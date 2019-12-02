import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container, Row, Col, ListGroup, ListGroupItem, Card, CardTitle, CardText,
} from 'reactstrap';

const MiPc = () => {
  const myPokemons = useSelector((state) => state.myPokemons);
  const dispatch = useDispatch();

  return (
    <Container>
      <hr />
      <Row>
        <Card
          className="shadow p-3 mb-5 bg-white rounded"
          body
        >
          <CardTitle><h2>Mis Pokémon</h2></CardTitle>
          <CardText>Aquá podrás visualizar los Pokémon que has capturado</CardText>
        </Card>

      </Row>
      <Row>
        <Col sm={12}>
          <ListGroup>
            {myPokemons.map((pokemon) => (
              <ListGroupItem className="list-group-item d-flex justify-content-between align-items-center">
                <img
                  src={pokemon.sprites.front_default}
                  alt="quixote"
                  style={{ maxWidth: '10vh' }}
                />
                <h3>
                  {pokemon.name.replace(/^./, pokemon.name[0].toUpperCase())}
                </h3>

              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MiPc;
