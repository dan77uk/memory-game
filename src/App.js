import { useState } from "react";
import Icon from "./components/Icon";
const App = () => {
  const iconsArray = [
    {
      type: "iconA",
      image: "./images/iconA.png",
    },
    {
      type: "iconB",
      image: "./images/iconB.png",
    },
    {
      type: "iconC",
      image: "./images/iconC.png",
    },
    {
      type: "iconD",
      image: "./images/iconD.png",
    },
    {
      type: "iconE",
      image: "./images/iconE.png",
    },
    {
      type: "iconF",
      image: "./images/iconF.png",
    },
    {
      type: "iconG",
      image: "./images/iconG.png",
    },
    {
      type: "iconH",
      image: "./images/iconH.png",
    },
  ];

  // Shuffle iconsArray
  const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  const shuffleIcons = (array) => {
    const length = array.length;
    for (let i = length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const currentIndex = i - 1;
      swap(array, currentIndex, randomIndex);
    }
    return array;
  };

  const [icons, setIcons] = useState(() =>
    shuffleIcons(iconsArray.concat(iconsArray))
  );

  const handleIconClick = (event) => {
    console.log("hello");
  };

  return (
    <section className="board-container">
      <ul className="grid">
        {icons.map((icon, index) => {
          return (
            <Icon
              key={index}
              icons={icon}
              index={index}
              onClick={handleIconClick}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default App;
