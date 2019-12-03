/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import {
  Container, Row, Col, ListGroup, ListGroupItem, Card, CardTitle, CardText, Badge,
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


          {myPokemons.length > 0 ? (
            <>


              <Card
                className="shadow p-3 mb-5 bg-white rounded"
                body
              >
                <CardText>
                  <h4>Realiza una búsqueda dentro de los Pokémon que has capturado</h4>
                  <input className="form-control" type="text" placeholder="Search" aria-label="Búsqueda" />
                </CardText>
              </Card>


              <ListGroup>
                {myPokemons.map((pokemon) => (
                  <ListGroupItem className="list-group-item d-flex justify-content-between align-items-center">
                    <img
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                      style={{ maxWidth: '10vh' }}
                    />

                    <h3>
                      {pokemon.name.replace(/^./, pokemon.name[0].toUpperCase())}
                    </h3>
                    <Link
                      className="btn btn-primary"
                      to={`pokemon/${pokemon.id}`}
                    >
                Más detalles
                    </Link>


                  </ListGroupItem>
                ))}
              </ListGroup>
            </>
          ) : (
            <Card
              className="shadow p-3 mb-5 bg-white rounded"
              body
            >
              <CardText>
                <h4>Parece que no has capturado a ningún Pokémon😭😭😭😭</h4>
              </CardText>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MiPc;
