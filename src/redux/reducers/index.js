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
        pokemons: action.payload,
      };
    case 'SET_MYPOKEMONS':
      return {
        ...state,
        myPokemons: action.payload,
      };


    default:
      return state;
  }
};

export default reducer;
