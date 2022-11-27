import { useState } from "react";
import Header from "./components/Header";

import Gameboard from "./components/Gameboard";
const App = () => {
  const [highScore, setHighScore] = useState(0);
  return (
    <>
      <Header />
      <section className="board-container">
        <Gameboard highScore={highScore} setHighScore={setHighScore} />
      </section>
    </>
  );
};

export default App;
