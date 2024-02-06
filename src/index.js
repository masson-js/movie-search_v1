import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
// import StarRating from "./StarRaiting";

// function Test() {
//   const [movieRating, setMovieRating ] =useState(0)

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10}
//       onSetRating={setMovieRating}/>
//       <p>This movie was trated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <StarRating size={24} className="test" defaultRating={3} />
    <Test /> */}
    <App/>
  </React.StrictMode>
);
