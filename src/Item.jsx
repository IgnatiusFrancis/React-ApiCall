import React from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  const { name } = useParams();
  // let path = name;
  const items = name.split(",").map((item) => item);
  console.log(items);
  console.log(items[0]);

  return (
    <div className="container">
      <div className="contents">
        <div className="card">
          <div className="card_background_img"></div>
          <div className="card_profile_img">
            {/* <img src={image.picture.medium} alt={image} /> */}
          </div>
          <div className="user_details">
            <h3>{items[0]}</h3>
          </div>
          {
            <div className="card_count">
              <div className="count">
                <div className="following">
                  <h3>GENDER</h3>
                  <p>{items[1]}</p>
                </div>
                <div className="following">
                  <h3>HEIGHT</h3>
                  <p>{items[2]}</p>
                </div>
              </div>
              <div className="btn">Follow</div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Item;
