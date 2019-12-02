import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";


import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Container,
  CardHeader,
  Col,
  Row,
  Button,
} from 'reactstrap';
import { setMyPokemons } from '../redux/actions';

const randomId = () => {
  const min = Math.ceil(1);
  // Es el ultimo pokemon que esta en la PokeApi
  const max = Math.floor(807);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const randomAction = () => {
  const min = Math.ceil(1);
  // Es el ultimo pokemon que esta en la PokeApi
  const max = Math.floor(3);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Safari = () => {

  const myPokemons = useSelector(state => state.myPokemons);
  const dispatch = useDispatch();


  const [pokemon, setPokemon] = useState(null);
  const [bocadillo, setBocadillo] = useState(0);

  const fetchdata = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId()}`,
    );
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchdata();
  }, [myPokemons]);

  const capturePokemon = (wildPokemon) => {
    const action = randomAction();
    if (action === 1) {
      alert(`Felicidades has capturado un ${pokemon.name}`);
      dispatch(setMyPokemons(wildPokemon));
      
      setBocadillo(0);
    } else if (action === 2) {
      alert('Parece que se ha salido de la pokebola intentalo de nuevo');
    } else if (action === 3) {
      alert('Parece que se ha huido');
      setBocadillo(0);
      fetchdata();
    }
  };
  const giveBocadillo = () => {
    alert('Le has dado un cadillo');
    setBocadillo(bocadillo + 1);
  };
  return (
    <Container>
      <hr />
      {pokemon ? (
        <Row>
          <Col sm={4}>
            <Card key={pokemon.id} className="shadow p-3 mb-5 bg-white rounded">
              <center>
                <CardHeader>
                  <h1>
                    {pokemon.name.replace(/^./, pokemon.name[0].toUpperCase())}
                  </h1>
                </CardHeader>

                <CardImg
                  top
                  width="100%"
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
                <CardBody>
                  <CardTitle>
                    <h3>{`Pokemón número ${pokemon.id}`}</h3>
                  </CardTitle>
                  <CardSubtitle>
                    <h5>Altura</h5>
                  </CardSubtitle>
                  <CardText>{`${pokemon.height / 10} metros`}</CardText>
                  <CardSubtitle>
                    <h5>Peso</h5>
                  </CardSubtitle>
                  <CardText>{`${pokemon.weight / 10} kilos`}</CardText>
                  {`Has dado ${bocadillo} bocadillos`}
                  <CardText />
                </CardBody>
              </center>
            </Card>
          </Col>
          <Col>
            <Card className="shadow p-3 mb-5 bg-white rounded">
              <CardTitle>
                <h1>
                  {`Un ${pokemon.name.replace(
                    /^./,
                    pokemon.name[0].toUpperCase(),
                  )} salvaje ha aparecido`}
                </h1>
              </CardTitle>
              <CardText>Parece que has tenido suerte el día de hoy.</CardText>
            </Card>

            <Card className="shadow p-5 mb-5 bg-white rounded">
              <CardTitle>
                <h3>¿Qué deseas hacer?</h3>
              </CardTitle>
              <CardText>
                <Button color="success" onClick={() => capturePokemon(pokemon)}>
                  Capturar
                </Button>
                &nbsp;
                <Button color="danger" onClick={() => fetchdata()}>
                  Huir
                </Button>
                &nbsp;
                <Button color="warning" onClick={() => giveBocadillo()}>
                  Dar bocadillo
                </Button>
              </CardText>
            </Card>
          </Col>
        </Row>
      ) : (
        'Cargando  informacion'
      )}
    </Container>
  );
};


export default Safari;
