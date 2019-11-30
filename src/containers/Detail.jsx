import React, { useState, useEffect } from 'react';

import {
  Card,
  CardHeader,
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
import ShareComponent from '../components/Share';
import LikeFB from '../components/LikeFB';
import { baseUrl } from '../utils/baseUrl';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(baseUrl);
      const data = await response.json();
      setPokemons(data);
    };
    fetchdata();
  }, []);

  /*   const handleChange = (e) => {
    if (e.target.value === 'rating') {
      setRestaurant((prevRest) => {
        const sorted = prevRest.sort((a, b) => (a.rating < b.rating ? 1 : -1));
        return [...sorted];
      });
    } else {
      setRestaurant((prevRest) => {
        const sorted = prevRest.sort((a, b) => (a.name > b.name ? 1 : -1));
        return [...sorted];
      });
    }
  }; */

  return (
    <Container>
      {/*     <br />

      <select className="form-control" onChange={handleChange}>
        <option value="">Ordenar por :</option>
        <option value="rating">Ordenar por rating</option>
        <option value="nombre">Ordenar por Nombre</option>
      </select>
      <br />
 */}
      <Row>
        {pokemons.results.map((pokemon) => (
          <Col key={pokemon.name} md={4}>
            <Card>
              <CardHeader>
                {pokemon.name}
              </CardHeader>

              <CardImg
                top
                width="100%"
                src="https://picsum.photos/740/420/?random"
                alt={pokemon.name}
              />
              <CardBody>
                <CardTitle>
                  <h3>
Rating
                    {' '}
                    {pokemon.rating}
                  </h3>
                </CardTitle>
                <CardSubtitle>
                  <h5>Direccion</h5>
                </CardSubtitle>
                <CardText>
                  {pokemon.name}

                </CardText>
                <CardSubtitle>
                  <h5>Contacto</h5>
                </CardSubtitle>
                <CardText>
                  {pokemon.url}
                </CardText>

                <a
                  className="btn btn-primary"
                  href={pokemon.url}
                  role="button"
                >
                  Sitio Web
                </a>
              </CardBody>
              <CardFooter className="text-muted">
                <LikeFB url={pokemon.contact.site} />

                <ShareComponent
                  url={pokemon.url}
                  text={pokemon.name}
                  address={`${pokemon.name}`}
                />
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
