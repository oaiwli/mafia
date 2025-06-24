import {
  Container,
  HeaderText,
  SelectBox,
  SelectText,
  SelectPlayer,
  IconBtn,
  BtnBox,
  Btn,
} from "./style";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useGameStore from "../../utils/store/game";

interface GameProps {
  goRole: () => void;
}

const StartGame = ({ goRole }: GameProps) => {
  const { player, inc, dec } = useGameStore();

  return (
    <>
      <Container>
        <HeaderText>MAFIA</HeaderText>
        <SelectBox>
          <SelectText>Количество игроков:</SelectText>
          <SelectPlayer>{player}</SelectPlayer>
        </SelectBox>
        <BtnBox>
          <IconBtn onClick={() => dec("player")}>
            <ChevronLeftIcon />
          </IconBtn>
          <IconBtn onClick={() => inc("player")}>
            <ChevronRightIcon />
          </IconBtn>
        </BtnBox>
        <Btn onClick={goRole}>НАЧАТЬ</Btn>
      </Container>
    </>
  );
};

export default StartGame;
