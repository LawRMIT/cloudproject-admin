const initState = {
  movieError: null,
};

export const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_MOVIE_SUCCESS":
      console.log("add movie success");
      window.alert("Movie has been added to the Firestore Database");
      window.location.reload();
      return {...state, movieError: null};
    case "ADD_MOVIE_ERROR":
      console.log("add movie error");
      window.alert("Failed to add movie, please try again.");
      return {...state, movieError: "Add Movie Failed"};
    default:
      return state;
  }
};
