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
} from "./style";
import useGameStore from "../../utils/store/game";

const ChoiceRole = () => {
  const { player, mafiaDon } = useGameStore();
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
          </Row>
          <CivilText>Мирная роль:</CivilText>
          <Row>2 2 3 4</Row>
          <Row>3 2 52 2</Row>
        </RolesBox>
      </Container>
    </>
  );
};

export default ChoiceRole;
