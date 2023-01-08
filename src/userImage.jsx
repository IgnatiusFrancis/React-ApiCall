import React from "react";

const UserImage = (props) => {
  return (
    <div className="">
      <li key={props.data.name}>
        <img src={props.data.picture.medium} alt={props.data.name.first} />
      </li>
    </div>
  );
};

export default UserImage;
