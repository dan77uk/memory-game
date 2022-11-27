import classnames from "classnames";
const Icon = ({ icons, index, onClick, isFlipped, isIconActive }) => {
  const handleClick = () => {
    !isFlipped && onClick(index);
  };
  return (
    <li
      className={classnames("icon", {
        "is-flipped": isFlipped,
        "is-inactive": isIconActive,
      })}
      onClick={handleClick}
    >
      <img src={icons.image} alt={icons.type} />
    </li>
  );
};

export default Icon;
