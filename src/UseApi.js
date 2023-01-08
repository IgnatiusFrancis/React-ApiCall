import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const UseApi = () => {
  const [Images, setImages] = useState([]);
  const [nameList, setNameList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const {
    data: userImage,
    error: userImageError,
    isLoading: userImageLoading,
  } = useQuery("image", () =>
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((response) => setImages(response.data))
  );

  ///DATA 2

  const fetchNames = async (
    url = "https://swapi.dev/api/people/",
    counter = 0
  ) => {
    const response = await axios.get(url);
    const characters = response.data.results.map((character) => ({
      name: character.name,
      gender: character.gender,
      height: character.height,
    }));
    if (response.data.next && counter < 1) {
      const nextCharacters = await fetchNames(response.data.next, counter + 1);
      characters.push(...nextCharacters);
      setIsLoading(false);
    }
    return characters;
  };

  fetchNames()
    .then((characters) => {
      // console.log(characters);
      setNameList(characters);
    })
    .catch((error) => {
      console.error(error);
    });

  // const fetchNames = async (url = "https://swapi.dev/api/people/") => {
  //   const response = await axios.get(url);
  //   const names = response.data.results.map((character) => character.name);
  //   // console.log(names);
  //   if (response.data.next && names.includes("Luke Skywalker")) {
  //     const nextNames = await fetchNames(response.data.next);
  //     names.push(...nextNames);
  //     // console.log(names.height);
  //   }
  //   return names;
  // };

  // fetchNames()
  //   .then((names) => {
  //     setNameList(names);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // const UserLoading = () => {
  //   if (userDetailsLoading) return <div className="loader"></div>;
  // };

  // const UserError = () => {
  //   if (userDetailsError) return <p>Error: {userDetailsError.message}</p>;
  // };

  const ImageLoading = () => {
    if (userImageLoading) return <div className="loader"></div>;
  };

  return {
    nameList,
    isLoading,
    // handleClick,

    // userDetails,
    // UserError,
    // UserLoading,
    Images,
    ImageLoading,
    userImageError,
  };
};

export default UseApi;
