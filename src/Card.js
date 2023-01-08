import { React, useState } from "react";
import UseApi from "./UseApi";
import { Link } from "react-router-dom";
import Item from "./Item";

const Card = (props) => {
  const [singleItem, setSingleItem] = useState(null);
  const { data } = props;

  const { Images, ImageLoading, nameList } = UseApi();

  const handleClick = (name) => {
    if (nameList.length > 0) {
      const selected = nameList.find((person) => person.name === name);

      if (selected) {
        setSingleItem(selected);
        console.log(singleItem);
        console.log(selected);
      }
    }
  };

  return (
    <ui>
      {
        <div class="card">
          <div class="card_background_img"></div>
          <div class="card_profile_img"></div>
          <div class="user_details" onClick={() => handleClick(data.name)}>
            <Link to={"/item"}>
              <h3>{data.name}</h3>
            </Link>
          </div>
          <div class="card_count">
            <div class="count">
              <div class="fans">
                <h3>2.4M</h3>
                <p>Fans</p>
              </div>
              <div class="following">
                <h3>202</h3>
                <p>Followings</p>
              </div>
              <div class="post">
                <h3>552</h3>
                <p>Posts</p>
              </div>
            </div>
            <div class="btn">Follow</div>
          </div>
        </div>
      }
    </ui>
  );
};

export default Card;
