import React from "react";
import MyButton from "../components/button";

function Home() {
  return (
    <div>
      <p>Oi amor! estou melhorando o código para conseguirmos mais dinheiros! =D</p>
      <MyButton title={"clique no botão! vai mudar o número:"} number={1}></MyButton>
    </div>
  )
}

export default Home;