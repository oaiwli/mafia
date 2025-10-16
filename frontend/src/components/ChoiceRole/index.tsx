// frontend/src/components/ChoiceRole/index.tsx

import {
  Container,
  MafiaTitle, // Добавляем MafiaTitle для лого вверху
  RolesSection, // Обертка для секции ролей
  RoleGroupHeader, // Заголовок группы ролей
  RolesGrid, // Вместо Row, для более гибкой сетки
  RoleCard, // Вместо RoleBox
  RoleName, // Текст названия роли
  RoleCountWrapper, // Обертка для количества и кнопок
  RoleCount, // Текст количества
  ArrowButton, // Вместо IconBtn, Left, Right
  ActionButtonGroup, // Группа кнопок внизу
  BackButton, // Кнопка назад
  GoButton, // Кнопка GO!
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

  // Дополнительная логика для отключения кнопок, если сумма ролей уже равна игрокам
  const totalAssignedRoles =
    mafiaDon + mafia + killer + police + medic + whore + civil();
  const canInc = (currentCount: number) =>
    totalAssignedRoles < player && currentCount < player;

  return (
    <Container>
      <MafiaTitle variant="h2">MAFIA</MafiaTitle> {/* Логотип вверху */}
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
            {/* Изменил на "Путана" для соответствия макету */}
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

        {/* Мирный житель отдельной карточкой */}
        <RolesGrid>
          <RoleCard wide>
            {" "}
            {/* Добавляем свойство wide для ширины */}
            <RoleName>Мирный житель</RoleName>
            <RoleCount>{civil()}</RoleCount>
            {/* У мирного жителя нет кнопок, его количество вычисляется */}
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
