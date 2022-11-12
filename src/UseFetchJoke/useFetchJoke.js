import { useEffect, useState } from "react";

const useFetchJoke = () => {
  const [joke, setJoke] = useState("");
  const [img, setImg] = useState(0);

  useEffect(() => {
    getNewJoke();
  }, []);
  async function getNewJoke() {
    setJoke("Loading...");
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await res.json();
    setImg(Math.floor(Math.random() * 13));
    setJoke(data.joke);
  }

  return [joke, getNewJoke, img];
};
export default useFetchJoke;
