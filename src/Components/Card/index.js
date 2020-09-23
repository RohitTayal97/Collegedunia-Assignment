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

        <div className="famous greenblue">
          93% Match :<span className="grey"> 2.5kms </span>
          <span className="lightgrey midsize">from GTB Nagar</span>,
        </div>

        <div className="offer grey">
          <span className="midsize">Flat </span>Rs
          <span className="greenblue">2,000 </span>off + upto Rs
          <span className="greenblue">500 </span> wallet! to avail...{" "}
          <span className="blue"> LOGIN</span>
        </div>

        <div className="fees grey">₹6000</div>

        <div className="pricetag">20</div>

        <div className="discountedfee">₹ 5200</div>

        <div className="feecycle grey">Per Semester (3months)</div>

        <div className="amenties greenblue">Free Cancellation . Free Wi-Fi</div>
      </div>
    </div>
  );
}
