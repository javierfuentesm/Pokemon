import React, { useEffect } from 'react';

import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Container,
  CardFooter,
  Col,
  Row,
} from 'reactstrap';
import { connect } from 'react-redux';
import CardPokemon from '../components/CardPokemon';

import { baseUrl } from '../utils/baseUrl';
import { setPokemons } from '../redux/actions';


const Home = ({ pokemons, setPokemons }) => {
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setPokemons(data.results);
    };
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

    </Container>
  );
};


const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});
const mapDispatchToProps = {
  setPokemons,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
