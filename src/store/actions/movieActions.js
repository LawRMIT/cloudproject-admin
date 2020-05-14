export const addMovie = (movie) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore
      .collection("Movies")
      .add({
        AirportWest: Boolean(movie.AirportWest),
        Classification: movie.classification,
        Genre: movie.genre,
        RunningTime: Number(movie.runningTime),
        Title: movie.title,
        Werribee: Boolean(movie.Werribee),
        Watergardens: Boolean(movie.Watergardens),
      })
      .then(() => {
        dispatch({type: "ADD_MOVIE_SUCCESS", movie: movie});
        updateLocation(movie.title, movie, firestore);
      })
      .catch((err) => {
        dispatch({type: "ADD_MOVIE_ERROR", err});
      });
  };
};

function updateLocation(movieTitle, movie, firestore) {
  var titleUpdate = {};
  titleUpdate[movieTitle] = true;

  var titleUpdateFalse = {};
  titleUpdateFalse[movieTitle] = false;

  if (movie.hasOwnProperty("Werribee")) {
    firestore
      .collection("Locations")
      .doc("Werribee")
      .update(movie.Werribee ? titleUpdate : titleUpdateFalse);
  }
  if (movie.hasOwnProperty("Watergardens")) {
    firestore
      .collection("Locations")
      .doc("Watergardens")
      .update(movie.Watergardens ? titleUpdate : titleUpdateFalse);
  }
  if (movie.hasOwnProperty("AirportWest")) {
    firestore
      .collection("Locations")
      .doc("AirportWest")
      .update(movie.AirportWest ? titleUpdate : titleUpdateFalse);
  }
}
