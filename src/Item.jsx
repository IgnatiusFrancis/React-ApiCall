import React from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  // const { data } = useParams();
  // console.log(data);
  return (
    <div className="container">
      <div className="contents">
        <div class="card">
          <div class="card_background_img"></div>
          <div class="card_profile_img">
            {/* <img src={image.picture.medium} alt={image} /> */}
          </div>
          <div class="user_details">
            <h3></h3>
          </div>
          {
            <div class="card_count">
              <div class="count">
                <div class="following">
                  <h3>GENDER</h3>
                  <p></p>
                </div>
                <div class="following">
                  <h3>HEIGHT</h3>
                  <p></p>
                </div>
              </div>
              <div class="btn">Follow</div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Item;
