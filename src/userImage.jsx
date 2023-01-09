import React from "react";

const UserImage = (props) => {
  const { images } = props;
  // console.log(images);
  return (
    <div className="">
      <li key={images.name}>
        <img src={images.picture.medium} alt={images.name.first} />
      </li>
    </div>
  );
};

export default UserImage;
