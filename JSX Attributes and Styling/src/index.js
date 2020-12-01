import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img alt="random" src={img + "?grayscale"} />

      <img
        className="img-food"
        alt="bacon"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg"
      />
      <img
        className="img-food"
        alt="jamon"
        src="https://www.manchenieto.com/wp-content/uploads/2019/10/recetas-jam%C3%B3n-1280x640.jpg"
      />
      <img
        className="img-food"
        alt="noodles"
        src="https://www.halfbakedharvest.com/wp-content/uploads/2019/08/Better-Than-Takeout-Thai-Drunken-Noodles-6-700x467.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
