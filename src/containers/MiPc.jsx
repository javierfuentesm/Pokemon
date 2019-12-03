/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';
import { deleteMyPokemons } from '../redux/actions';

const MiPc = () => {
  const myPokemons = useSelector((state) => state.myPokemons);
  const [pokemons, setPokemons] = useState(myPokemons);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setPokemons(myPokemons);
  }, [myPokemons]);

  const filterPokemons = (event) => {
    setSearch(event.target.value);

    let updatedList = myPokemons;
    updatedList = updatedList.filter(
      (item) => item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1,
    );
    setPokemons(updatedList);
  };

  return (
    <Container>
      <hr />
      <Row>
        <Card className="shadow p-3 mb-5 bg-white rounded" body>
          <CardTitle>
            <h2>Mis Pokémon</h2>
          </CardTitle>
          <CardText>
            Aquá podrás visualizar los Pokémon que has capturado
          </CardText>
        </Card>
      </Row>
      <Row>
        <Col sm={12}>
          {myPokemons.length > 0 ? (
            <>
              <Card className="shadow p-3 mb-5 bg-white rounded" body>
                <h4>
                    Realiza una búsqueda dentro de los Pokémon que has capturado
                </h4>
                <CardText>

                  <input
                    className="form-control"
                    type="text"
                    value={search}
                    placeholder="Search"
                    aria-label="Búsqueda"
                    onChange={filterPokemons}
                  />
                </CardText>
              </Card>

              <ListGroup>
                {pokemons.map((pokemon) => (
                  <ListGroupItem key={pokemon} className="list-group-item d-flex justify-content-between align-items-center">
                    <img
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                      style={{ maxWidth: '10vh' }}
                    />

                    <h3>
                      {pokemon.name.replace(
                        /^./,
                        pokemon.name[0].toUpperCase(),
                      )}
                    </h3>
                    <Link
                      className="btn btn-primary btn-xs"
                      to={`pokemon/${pokemon.id}`}
                    >
                      Más detalles
                    </Link>
                    <Button
                      onClick={() => dispatch(deleteMyPokemons(pokemon))}
                      className="btn btn-danger btn-xs"

                    >
                      Liberar 😢
                    </Button>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </>
          ) : (
            <Card className="shadow p-3 mb-5 bg-white rounded" body>

              <h4>Parece que no has capturado a ningún Pokémon😭😭😭😭</h4>

            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MiPc;
