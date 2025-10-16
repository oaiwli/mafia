// frontend/src/components/ChoiceRole/index.tsx

import {
  Container,
  MafiaTitle,
  RolesSection,
  RoleGroupHeader,
  RolesGrid,
  RoleCard,
  RoleName,
  RoleCountWrapper,
  RoleCount,
  ArrowButton,
  ActionButtonGroup,
  BackButton,
  GoButton,
} from "./style";
import useGameStore from "../../utils/store/game";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface GameProps {
  goRoll: () => void;
  goStart: () => void;
}

const ChoiceRole = ({ goRoll, goStart }: GameProps) => {
  const {
    player,
    mafiaDon,
    mafia,
    killer,
    medic,
    police,
    whore,
    civil,
    dec,
    inc,
  } = useGameStore();

  // логика для отключения кнопок, если сумма ролей уже равна игрокам
  const totalAssignedRoles = mafiaDon + mafia + killer + police + medic + whore;
  const canInc = (currentCount: number) =>
    totalAssignedRoles < player && currentCount < player;

  return (
    <Container>
      <MafiaTitle variant="h2">MAFIA</MafiaTitle>
      <RolesSection>
        <RoleGroupHeader variant="h4" hostile>
          Враждебные роли:
        </RoleGroupHeader>
        <RolesGrid>
          <RoleCard>
            <RoleName>Дон</RoleName>
            <RoleCountWrapper>
              <ArrowButton
                onClick={() => dec("mafiaDon")}
                disabled={mafiaDon === 0}
              >
                <ChevronLeftIcon />
              </ArrowButton>
              <RoleCount>{mafiaDon}</RoleCount>
              <ArrowButton
                onClick={() => inc("mafiaDon")}
                disabled={!canInc(mafiaDon)}
              >
                <ChevronRightIcon />
              </ArrowButton>
            </RoleCountWrapper>
          </RoleCard>
          <RoleCard>
            <RoleName>Мафия</RoleName>
            <RoleCountWrapper>
              <ArrowButton onClick={() => dec("mafia")} disabled={mafia === 0}>
                <ChevronLeftIcon />
              </ArrowButton>
              <RoleCount>{mafia}</RoleCount>
              <ArrowButton
                onClick={() => inc("mafia")}
                disabled={!canInc(mafia)}
              >
                <ChevronRightIcon />
              </ArrowButton>
            </RoleCountWrapper>
          </RoleCard>
          <RoleCard>
            <RoleName>Маньяк</RoleName>
            <RoleCountWrapper>
              <ArrowButton
                onClick={() => dec("killer")}
                disabled={killer === 0}
              >
                <ChevronLeftIcon />
              </ArrowButton>
              <RoleCount>{killer}</RoleCount>
              <ArrowButton
                onClick={() => inc("killer")}
                disabled={!canInc(killer)}
              >
                <ChevronRightIcon />
              </ArrowButton>
            </RoleCountWrapper>
          </RoleCard>
        </RolesGrid>

        <RoleGroupHeader variant="h4">Мирные роли:</RoleGroupHeader>
        <RolesGrid>
          <RoleCard>
            <RoleName>Комиссар</RoleName>
            <RoleCountWrapper>
              <ArrowButton
                onClick={() => dec("police")}
                disabled={police === 0}
              >
                <ChevronLeftIcon />
              </ArrowButton>
              <RoleCount>{police}</RoleCount>
              <ArrowButton
                onClick={() => inc("police")}
                disabled={!canInc(police)}
              >
                <ChevronRightIcon />
              </ArrowButton>
            </RoleCountWrapper>
          </RoleCard>
          <RoleCard>
            <RoleName>Доктор</RoleName>
            <RoleCountWrapper>
              <ArrowButton onClick={() => dec("medic")} disabled={medic === 0}>
                <ChevronLeftIcon />
              </ArrowButton>
              <RoleCount>{medic}</RoleCount>
              <ArrowButton
                onClick={() => inc("medic")}
                disabled={!canInc(medic)}
              >
                <ChevronRightIcon />
              </ArrowButton>
            </RoleCountWrapper>
          </RoleCard>
          <RoleCard>
            <RoleName>Путана</RoleName>{" "}
            <RoleCountWrapper>
              <ArrowButton onClick={() => dec("whore")} disabled={whore === 0}>
                <ChevronLeftIcon />
              </ArrowButton>
              <RoleCount>{whore}</RoleCount>
              <ArrowButton
                onClick={() => inc("whore")}
                disabled={!canInc(whore)}
              >
                <ChevronRightIcon />
              </ArrowButton>
            </RoleCountWrapper>
          </RoleCard>
        </RolesGrid>

        <RolesGrid>
          <RoleCard wide>
            {" "}
            <RoleName>Мирный житель</RoleName>
            <RoleCount>{civil()}</RoleCount>
          </RoleCard>
        </RolesGrid>
      </RolesSection>
      <ActionButtonGroup>
        <BackButton onClick={goStart}>
          <ChevronLeftIcon /> Назад
        </BackButton>
        <GoButton onClick={goRoll}>GO!</GoButton>
      </ActionButtonGroup>
    </Container>
  );
};

export default ChoiceRole;
