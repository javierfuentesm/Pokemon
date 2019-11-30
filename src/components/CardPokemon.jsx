
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
{pokemonDetail.name}
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
              url={url}
              text={pokemonDetail.name}
              address={`${pokemonDetail.name}`}
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
