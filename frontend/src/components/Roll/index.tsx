// Roll

import { Container, Card, Input, Btn } from "./style";
import useGameStore from "../../utils/store/game";

const Roll = () => {
  const { mafiaDon, mafia, killer, medic, police, whore, civil, dec, inc } =
    useGameStore();
  return (
    <>
      <Container>
        <Card></Card>
        <Input />
        <Btn></Btn>
      </Container>
    </>
  );
};

export default Roll;
