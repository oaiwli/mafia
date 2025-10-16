// frontend/src/components/StartGame/index.tsx

import {
  Container,
  MafiaTitle, // Переименован HeaderText для соответствия макету
  PlayersCountBox, // Это будет обертка для текста "Количество игроков"
  PlayersCountText,
  PlayersCountValueWrapper, // Новая обертка для числа и стрелок
  PlayersCountValue, // Само число
  ArrowButton, // Переименован IconBtn
  StartButton, // Переименован Btn
  BottomHint, // Добавлен для подсказки
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
    <Container>
      <MafiaTitle variant="h1">MAFIA</MafiaTitle> {/* Используем h1 из темы */}
      <PlayersCountBox>
        <PlayersCountText variant="body1">Количество игроков:</PlayersCountText>
      </PlayersCountBox>
      {/* Объединяем число игроков и стрелки в один блок */}
      <PlayersCountValueWrapper>
        <ArrowButton onClick={() => dec("player")}>
          <ChevronLeftIcon />
        </ArrowButton>
        <PlayersCountValue>{player}</PlayersCountValue>
        <ArrowButton onClick={() => inc("player")}>
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
