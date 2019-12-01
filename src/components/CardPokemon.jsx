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
import ShareComponent from './Share';
import LikeFB from './LikeFB';

const CardPokemon = ({ url }) => {
  const [pokemonDetail, setPokemon] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setPokemon(data);
    };
    fetchdata();
  }, []);

  return (
    <>
      {pokemonDetail ? (
        <Card
          key={pokemonDetail.id}
          className="shadow p-3 mb-5 bg-white rounded"
        >
          <center>
            <CardHeader>
              <h1>
                {pokemonDetail.name.replace(
                  /^./,
                  pokemonDetail.name[0].toUpperCase(),
                )}
              </h1>
            </CardHeader>

            <CardImg
              top
              width="100%"
              src={pokemonDetail.sprites.front_default}
              alt={pokemonDetail.name}
            />
            <CardBody>
              <CardTitle>
                <h3>
                  Pokemón número
                  {' '}
                  {pokemonDetail.id}
                </h3>
              </CardTitle>
              <CardSubtitle>
                <h5>Altura</h5>
              </CardSubtitle>
              <CardText>
                {pokemonDetail.height / 10}
                {' '}
                metros
              </CardText>
              <CardSubtitle>
                <h5>Peso</h5>
              </CardSubtitle>
              <CardText>
                {pokemonDetail.weight / 10}
                {' '}
                kilos
              </CardText>

              <Link
                className="btn btn-primary"
                role="button"
                to={`pokemon/${pokemonDetail.id}`}
              >
                Más detalles
              </Link>
            </CardBody>
            <CardFooter className="text-muted">
              <LikeFB url={url} />

              <ShareComponent
                url2={url}
                text={`este pokemon tiene un peso de ${pokemonDetail.weight / 10} kilos con una altura de ${pokemonDetail.height / 10} metros`}
                name={pokemonDetail.name}
                order={pokemonDetail.order}
              />
            </CardFooter>
          </center>
        </Card>
      ) : (
        'Cargando  informacion'
      )}
    </>
  );
};

export default CardPokemon;
