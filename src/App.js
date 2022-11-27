import { useState, useRef, useEffect } from "react";
import Icon from "./components/Icon";
import iconsArray from "./data";
const App = () => {
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
  const [openIcons, setOpenIcons] = useState([]);
  const [clearedIcons, setClearedIcons] = useState({});
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const timeout = useRef(null);

  const evaluate = () => {
    const [first, second] = openIcons;
    if (icons[first].type === icons[second].type) {
      setClearedIcons((prev) => ({
        ...prev,
        [icons[first].type]: true,
      }));

      setOpenIcons([]);
      return;
    }

    // Flip icons
    timeout.current = setTimeout(() => {
      setOpenIcons([]);
    }, 500);
  };

  const handleIconClick = (index) => {
    if (openIcons.length === 1) {
      setOpenIcons((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
    } else {
      clearTimeout(timeout.current);
      setOpenIcons([index]);
    }
  };

  useEffect(() => {
    if (openIcons.length === 2) {
      setTimeout(evaluate, 200);
    }
  }, [openIcons]);

  const checkIsFlipped = (index) => {
    return openIcons.includes(index);
  };

  const checkIconActive = (icon) => {
    return Boolean(clearedIcons[icon.type]);
  };

  return (
    <>
      <section className="board-container">
        <ul className="grid">
          {icons.map((icon, index) => {
            return (
              <Icon
                key={index}
                icons={icon}
                index={index}
                isIconActive={checkIconActive(icon)}
                isFlipped={checkIsFlipped(index)}
                onClick={handleIconClick}
              />
            );
          })}
        </ul>
      </section>
      <p>Moves: {moves}</p>
    </>
  );
};

export default App;
