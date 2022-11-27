const CurrentScoreboard = ({ moves, highScore, newGame }) => {
  return (
    <section className="currentScoreboard">
      <p>
        Moves<span>{moves}</span>
      </p>
      <button type="submit" onClick={newGame}>
        New Game
      </button>
      <p>
        High Score<span>{highScore}</span>
      </p>
    </section>
  );
};

export default CurrentScoreboard;
