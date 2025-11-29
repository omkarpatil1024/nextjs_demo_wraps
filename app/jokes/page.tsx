"use client";
import React, { useEffect, useState } from "react";

interface JokeApiResponse {
  id: number;
  punchline: string;
  setup: string;
  type: string;
}

function page() {
  const [joke, setJoke] = useState<JokeApiResponse>();

  const getRandamJokes = async () => {
    const data = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const res = await data.json();
    console.log(res);
    setJoke(res);
  };

  useEffect(() => {
    getRandamJokes();
  }, []);

  return (
    <>
      <div>
        <h1>{joke?.setup}</h1>
        <p>{joke?.punchline}</p>
      </div>
      <button onClick={getRandamJokes}>Get New Joke</button>
    </>
  );
}

export default page;
