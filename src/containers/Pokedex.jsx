import React, { useEffect, useState } from 'react';
import {
  Container, Col, Row, Button,
} from 'reactstrap';
import CardPokemon from '../components/CardPokemon';
import { baseUrl } from '../utils/baseUrl';

const Pokedex = () => {
  const [next, setNext] = useState(0);
  const [pokemons, setPokemons] = useState([]);

  const fetchdata = async () => {
    if (next === 0) {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setPokemons(data.results);
      setNext(data.next);
    } else if (next) {
      const response = await fetch(next);
      const data = await response.json();
      setPokemons([...pokemons, ...data.results]);
      setNext(data.next);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <Container>
      <Row>
        {pokemons.map((pokemon) => (
          <Col key={pokemon.name} md={4}>
            <hr />
            <CardPokemon url={pokemon.url} />
            <hr />
          </Col>
        ))}
      </Row>
      <Row>
        <Button onClick={() => fetchdata()} color="danger" size="lg" block>
          Cargar más
        </Button>
      </Row>
      <hr />
    </Container>
  );
};


export default Pokedex;
