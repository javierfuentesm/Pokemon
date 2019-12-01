import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
} from 'reactstrap';


const COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6',
};

const CardPokemon = ({ match }) => {
  const [pokemon, setPokemon] = useState(null);
  const [abilities, setAbilities] = useState(null);
  const [description, setDescription] = useState(null);
  const [eggGroup, setEggs] = useState(null);
  const [stats, setStats] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const data2 = await response2.json();
      const abilities2 = data.abilities
        .map((ability) => ability.ability.name
          .toLowerCase()
          .split('-')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' '))
        .join(', ');
      let description2 = '';
      data2.flavor_text_entries.some((languages) => {
        if (languages.language.name === 'es') {
          description2 = languages.flavor_text;
        }
      });

      let {
        hp, attack, defense, speed, specialAttack, specialDefense,
      } = '';

      data.stats.map((stat) => {
        switch (stat.stat.name) {
          case 'hp':
            hp = stat.base_stat;
            break;
          case 'attack':
            attack = stat.base_stat;
            break;
          case 'defense':
            defense = stat.base_stat;
            break;
          case 'speed':
            speed = stat.base_stat;
            break;
          case 'special-attack':
            specialAttack = stat.base_stat;
            break;
          case 'special-defense':
            specialDefense = stat.base_stat;
            break;
          default:
            break;
        }
      });


      const eggGroup2 = data2.egg_groups
        .map((group) => group.name
          .toLowerCase()
          .split(' ')
          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' '))
        .join(', ');
      setStats({
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense,
      });
      setEggs(eggGroup2);
      setAbilities(abilities2);
      setDescription(description2);
      setPokemon(data);
    };
    fetchdata();
  }, []);


  return (
    <>
      {pokemon ? (
        <Container>
          <hr />
          <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <div className="row no-gutters">
              <div className="col-md-4 shadow p-3 mb-5 bg-white rounded">
                <img src={pokemon.sprites.front_default} className="card-img" alt={pokemon.name} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    <h1>
                      {pokemon.id}
                      &nbsp;
                      {pokemon.name.replace(
                        /^./,
                        pokemon.name[0].toUpperCase(),
                      )}
                    </h1>
                    {pokemon.types.map((type) => (
                      <span
                        key={type.type.name}
                        className="badge badge-pill mr-1"
                        style={{
                          backgroundColor: `#${COLORS[type.type.name]}`,
                          color: 'white',
                        }}
                      >
                        {type.type.name
                          .toLowerCase()
                          .split(' ')
                          .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                          .join(' ')}
                      </span>
                    ))}

                  </h5>

                  <p className="card-text">{description}</p>

                  <small className="text-muted">HP</small>

                  <div className="progress">

                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${stats.hp}%`,
                        backgroundColor: '#008000',
                      }}
                      aria-label="Save"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                  <small className="text-muted">Ataque</small>

                  <div className="progress">

                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${stats.attack}%`,
                        backgroundColor: 'primary',
                      }}
                      aria-label="Save"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                  <small className="text-muted">Defensa</small>

                  <div className="progress">

                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${stats.defense}%`,
                        backgroundColor: 'primary',
                      }}
                      aria-label="Save"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                  <small className="text-muted">Ataque Especial</small>

                  <div className="progress">

                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${stats.specialAttack}%`,
                        backgroundColor: 'primary',
                      }}
                      aria-label="Save"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                  <small className="text-muted">Defensa Especial</small>

                  <div className="progress">

                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${stats.specialDefense}%`,
                        backgroundColor: 'primary',
                      }}
                      aria-label="Save"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                  <small className="text-muted">Velocidad</small>

                  <div className="progress">

                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${stats.speed}%`,
                        backgroundColor: 'primary',
                      }}
                      aria-label="Save"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                  <hr />
                  <hr />
                  <h3>Mas información</h3>
                  <div>
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Altura
                        <span className="badge badge-primary badge-pill">
                          {`${pokemon.height} metros`}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Peso
                        <span className="badge badge-primary badge-pill">
                          {`${pokemon.weight} kilos`}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Habilidades
                        <span className="badge badge-info badge-pill">
                          {abilities}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Grupos de huevos a los que pertenece
                        <i className="fas fa-egg" />
                        <span className="badge badge-warning badge-pill">
                          {eggGroup}
                        </span>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Container>
      ) : (
        'Cargando  información'
      )}
    </>
  );
};

export default CardPokemon;
