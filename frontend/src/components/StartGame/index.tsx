// frontend/src/components/StartGame/index.tsx

import {
  Container,
  MafiaTitle,
  PlayersCountBox,
  PlayersCountText,
  PlayersCountValueWrapper,
  PlayersCountValue,
  ArrowButton,
  StartButton,
  BottomHint,
} from "./style";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useGameStore from "../../utils/store/game";

interface GameProps {
  goRole: () => void;
}

const StartGame = ({ goRole }: GameProps) => {
  const { player, inc, dec } = useGameStore();

  const MIN_PLAYERS = 4;
  const MAX_PLAYERS = 20;

  const canDecrease = player > MIN_PLAYERS;
  const canIncrease = player < MAX_PLAYERS;

  return (
    <Container>
      <MafiaTitle variant="h1">MAFIA</MafiaTitle>

      <PlayersCountBox>
        <PlayersCountText variant="body1">Количество игроков:</PlayersCountText>
      </PlayersCountBox>

      <PlayersCountValueWrapper>
        <ArrowButton onClick={() => dec("player")} disabled={!canDecrease}>
          <ChevronLeftIcon />
        </ArrowButton>

        <PlayersCountValue>{player}</PlayersCountValue>

        <ArrowButton onClick={() => inc("player")} disabled={!canIncrease}>
          <ChevronRightIcon />
        </ArrowButton>
      </PlayersCountValueWrapper>

      <StartButton onClick={goRole}>НАЧАТЬ</StartButton>

      <BottomHint variant="caption">
        Чтобы начать, выберите количество игроков.
      </BottomHint>
    </Container>
  );
};

export default StartGame;
