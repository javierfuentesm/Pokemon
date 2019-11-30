
import React, { useState, useEffect } from 'react';


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
        <Card>
          <CardHeader>
            <h1>{pokemonDetail.name.replace(/^./, pokemonDetail.name[0].toUpperCase())}</h1>
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
                Pokemon número
                {' '}
                {pokemonDetail.order}
              </h3>
            </CardTitle>
            <CardSubtitle>
              <h5>Altura</h5>
            </CardSubtitle>
            <CardText>
              {pokemonDetail.height}

            </CardText>
            <CardSubtitle>
              <h5>Peso</h5>
            </CardSubtitle>
            <CardText>
              {pokemonDetail.weight}
            </CardText>

            <a
              className="btn btn-primary"
              href={url}
              role="button"
            >
              Sitio Web
            </a>
          </CardBody>
          <CardFooter className="text-muted">
            <LikeFB url={url} />

            <ShareComponent
              url2={url}
              text={`este pokemon tiene un peso de ${pokemonDetail.weight} libras con una altura de ${pokemonDetail.height} pies`}
              name={pokemonDetail.name}
              order={pokemonDetail.order}
            />
          </CardFooter>
        </Card>
      ) : (
        'Cargando  informacion'
      )}
    </>
  );
};

export default CardPokemon;
