const Icon = ({ icons, index, onclick }) => {
  return (
    <li>
      <img src={icons.image} alt={icons.type} />
    </li>
  );
};

export default Icon;
