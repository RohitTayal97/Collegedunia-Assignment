import React from "react";
import Star from "@material-ui/icons/Star";
import "./card.css";
import CollageImage from "../../college_02.jpg";

export default function card() {
  return (
    <div className="card">
      <div className="imageSection">
        <div className="pointer">PROMOTED</div>
        <div className="box">
          <span>3.9</span>/5
          <br />
          Very Good
        </div>
        <div className="tags">
          <div className="tag">Best College 2018</div>
          <div className="tag">2km away</div>
        </div>
        <div className="ranking">#7 in 260 colleges in north campus</div>
        <img src={CollageImage} alt="College" />
      </div>
      <div className="container">
        <div className="collageName">Hansraj College Delhi University</div>

        <div className="rating">
          <Star style={{ fill: "#444444", fontSize: "14px" }} />
          <Star style={{ fill: "#444444", fontSize: "14px" }} />
          <Star style={{ fill: "#444444", fontSize: "14px" }} />
          <Star style={{ fill: "#444444", fontSize: "14px" }} />
          <Star style={{ fill: "#adadad", fontSize: "14px" }} />
        </div>

        <div className="nearestplaces">
          Near Vishwavidyalya Metro Station{" "}
          <span className="lightgrey">| 2 Kms away from bus stand</span>
        </div>

        <div className="famous greenblue midsize">
          93% Match :<span className="grey midsize"> 2.5kms </span>
          <span className="lightgrey">from GTB Nagar</span>
        </div>
      </div>
    </div>
  );
}
