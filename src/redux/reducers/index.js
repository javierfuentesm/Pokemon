const reducer = (
  state = {
    user: [],
    myPokemons: [],
  },
  action,
) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    case 'SET_MY_POKEMONS':
      return {
        ...state,
        myPokemons: state.myPokemons.concat(action.payload),
      };
    case 'DELETE_MY_POKEMONS':
      return {
        ...state,
        myPokemons: state.myPokemons.filter((pokemon) => pokemon.uniqueId !== action.payload.uniqueId),

      };


    default:
      return state;
  }
};

export default reducer;
