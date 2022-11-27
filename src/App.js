import React from "react";

const iconsArray = [
  {
    type: "thirds",
    image: require("./images/thirds.png"),
  },
  {
    type: "ninety-five",
    image: require("./images/ninety-five.png"),
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
    const randomIndex = Math.floor(Math.randon() * i);
    const currentIndex = i - 1;
    swap(array, currentIndex, randomIndex);
  }
  return array;
};

const App = () => {
  return <div>App</div>;
};

export default App;
