import {
  Container,
  RolesBox,
  Row,
  RoleBox,
  MafiaText,
  CivilText,
  RoleText,
  BtnBox,
  IconBtn,
  Left,
  Right,
  Btn,
} from "./style";
import useGameStore from "../../utils/store/game";

interface GameProps {
  goRoll: () => void;
}

const ChoiceRole = ({ goRoll }: GameProps) => {
  const { player, mafiaDon, mafia, killer, medic, police, whore, civil } =
    useGameStore();
  return (
    <>
      <Container>
        <RolesBox>
          <MafiaText>Враждебная роль:</MafiaText>
          <Row>
            <RoleBox>
              <RoleText>Дон</RoleText>
              <RoleText>{mafiaDon}</RoleText>
              <BtnBox>
                <IconBtn>
                  <Left />
                </IconBtn>
                <IconBtn>
                  <Right />
                </IconBtn>
              </BtnBox>
            </RoleBox>
            <RoleBox>
              <RoleText>Мафия</RoleText>
              <RoleText>{mafia}</RoleText>
              <BtnBox>
                <IconBtn>
                  <Left />
                </IconBtn>
                <IconBtn>
                  <Right />
                </IconBtn>
              </BtnBox>
            </RoleBox>
            <RoleBox>
              <RoleText>Маньяк</RoleText>
              <RoleText>{killer}</RoleText>
              <BtnBox>
                <IconBtn>
                  <Left />
                </IconBtn>
                <IconBtn>
                  <Right />
                </IconBtn>
              </BtnBox>
            </RoleBox>
          </Row>
          <CivilText>Мирная роль:</CivilText>
          <Row>
            <RoleBox>
              <RoleText>Комисар</RoleText>
              <RoleText>{police}</RoleText>
              <BtnBox>
                <IconBtn>
                  <Left />
                </IconBtn>
                <IconBtn>
                  <Right />
                </IconBtn>
              </BtnBox>
            </RoleBox>
            <RoleBox>
              <RoleText>Доктор</RoleText>
              <RoleText>{medic}</RoleText>
              <BtnBox>
                <IconBtn>
                  <Left />
                </IconBtn>
                <IconBtn>
                  <Right />
                </IconBtn>
              </BtnBox>
            </RoleBox>
            <RoleBox>
              <RoleText>Шлюха</RoleText>
              <RoleText>{whore}</RoleText>
              <BtnBox>
                <IconBtn>
                  <Left />
                </IconBtn>
                <IconBtn>
                  <Right />
                </IconBtn>
              </BtnBox>
            </RoleBox>
          </Row>
          <Row>
            <RoleBox>
              <RoleText>Мирный житель</RoleText>
              <RoleText>{civil}</RoleText>
              <BtnBox>
                <IconBtn>
                  <Left />
                </IconBtn>
                <IconBtn>
                  <Right />
                </IconBtn>
              </BtnBox>
            </RoleBox>
            <IconBtn>
              <Left />
            </IconBtn>
            <Btn onClick={goRoll}>GO!</Btn>
          </Row>
        </RolesBox>
      </Container>
    </>
  );
};

export default ChoiceRole;
