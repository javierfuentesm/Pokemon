import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  CardFooter,
  CardHeader,
} from 'reactstrap';


const CardPokemon = ({ match }) => {
  const [pokemon, setPokemon] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      console.log(data);
      setPokemon(data);
    };
    fetchdata();
  }, []);

  return (
    <>
      {pokemon ? (
        <Card
          key={pokemon.id}
          className="shadow p-3 mb-5 bg-white rounded"
        >
          <center>
            <CardHeader>
              <h1>
                {pokemon.name.replace(
                  /^./,
                  pokemon.name[0].toUpperCase(),
                )}
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
                <h3>
                Pokemón número
                  {' '}
                  {pokemon.id}
                </h3>
              </CardTitle>
              <CardSubtitle>
                <h5>Altura</h5>
              </CardSubtitle>
              <CardText>{pokemon.height}</CardText>
              <CardSubtitle>
                <h5>Peso</h5>
              </CardSubtitle>
              <CardText>{pokemon.weight}</CardText>

              <Link className="btn btn-primary" role="button" to={`pokemon/${pokemon.id}`}>
                Más detalles
              </Link>

            </CardBody>
            <CardFooter className="text-muted" />
          </center>
        </Card>
      ) : (
        'Cargando  informacion'
      )}
    </>
  );
};

export default CardPokemon;
