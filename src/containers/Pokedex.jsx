import React, { useEffect, useState } from 'react';
import {
  Container, Col, Row, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import CardPokemon from '../components/CardPokemon';
import { baseUrl } from '../utils/baseUrl';
import { setPokemons } from '../redux/actions';

const Pokedex = ({ pokemons, setPokemons }) => {
  const [next, setNext] = useState(0);

  const fetchdata = async () => {
    if (next === 0) {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setPokemons(data.results);
      setNext(data.next);
    } else if (next) {
      const response = await fetch(next);
      const data = await response.json();
      setPokemons(data.results);
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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});
const mapDispatchToProps = {
  setPokemons,
};
export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
