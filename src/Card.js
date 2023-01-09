import { React, useState } from "react";
import UseApi from "./UseApi";
import { Link } from "react-router-dom";
import Item from "./Item";
import UserImage from "./userImage";

const Card = (props) => {
  const [singleItem, setSingleItem] = useState(null);
  const { data, index } = props;
  let gender = data.gender;
  if (gender === "n/a") {
    gender = "na";
  }

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
    <ul>
      {
        <div className="card">
          <div className="card_background_img"></div>
          <div className="card_profile_img">
            {/* <ul>
              {Images.results?.map((image) => {
                return console.log(image[index + 1]);
              })}
            </ul> */}
          </div>
          <div className="user_details" onClick={() => handleClick(data.name)}>
            <Link to={`/item/${data.name},${gender},${data.height}`}>
              <h3>{data.name}</h3>
            </Link>
          </div>
          <div className="card_count">
            <div className="count">
              <div className="following">
                <h3>2.4M</h3>
                <p>Fans</p>
              </div>
              <div className="following">
                <h3>202</h3>
                <p>Followings</p>
              </div>
              <div className="following">
                <h3>552</h3>
                <p>Posts</p>
              </div>
            </div>
            <div className="btn">Follow</div>
          </div>
        </div>
      }
    </ul>
  );
};

export default Card;
