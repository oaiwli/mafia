import { Container } from "./style";
import useGameStore from "../../utils/store/game";

const Game = () => {
  const { players } = useGameStore();

  return (
    <>
      <Container>
        {players.map((p, index) => (
          <p key={index}>
            {p.name} - {p.role}
          </p>
        ))}
      </Container>
    </>
  );
};

export default Game;
