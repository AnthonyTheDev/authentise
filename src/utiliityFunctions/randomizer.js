import axios from "axios";

export const randomizer = async() => {
    const { data } = await axios("https://dog.ceo/api/breeds/list/all");
    const allBreeds = Object.keys(data.message);

    let randomNumber = Math.floor(Math.random() * allBreeds.length);
    const randomBreed = allBreeds[randomNumber];
    return randomBreed;
};