const reducer = (
  state = {
    user: [],
    pokemons: [],
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
    case 'SET_POKEMONS':
      return {
        ...state,
        pokemons: state.pokemons.concat(action.payload),

      };
    case 'SET_MY_POKEMONS':
      return {
        ...state,
        myPokemons: state.myPokemons.concat(action.payload),
      };


    default:
      return state;
  }
};

export default reducer;
