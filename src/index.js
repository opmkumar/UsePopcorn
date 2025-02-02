import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./starRating";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie is rated {movieRating} stars.</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// root.render(
//   <React.StrictMode>
//     <StarRating maxRating={10} />
//     <StarRating
//       maxRating={5}
//       messages={["terrible", "bad", "okay", "good", "amazing"]}
//       defaultRating={2}
//     />
//     <Test />
//   </React.StrictMode>
// );
