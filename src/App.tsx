import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Jone",
    },
  });
  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Smith" } });
  };

  return <div></div>;
}

export default App;
