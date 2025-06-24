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
  const { mafiaDon, mafia, killer, medic, police, whore, civil, dec, inc } =
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
                  <Left onClick={() => dec("mafiaDon")} />
                </IconBtn>
                <IconBtn>
                  <Right onClick={() => inc("mafiaDon")} />
                </IconBtn>
              </BtnBox>
            </RoleBox>
            <RoleBox>
              <RoleText>Мафия</RoleText>
              <RoleText>{mafia}</RoleText>
              <BtnBox>
                <IconBtn>
                  <Left onClick={() => dec("mafia")} />
                </IconBtn>
                <IconBtn>
                  <Right onClick={() => inc("mafia")} />
                </IconBtn>
              </BtnBox>
            </RoleBox>
            <RoleBox>
              <RoleText>Маньяк</RoleText>
              <RoleText>{killer}</RoleText>
              <BtnBox>
                <IconBtn>
                  <Left onClick={() => dec("killer")} />
                </IconBtn>
                <IconBtn>
                  <Right onClick={() => inc("killer")} />
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
                  <Left onClick={() => dec("police")} />
                </IconBtn>
                <IconBtn>
                  <Right onClick={() => inc("police")} />
                </IconBtn>
              </BtnBox>
            </RoleBox>
            <RoleBox>
              <RoleText>Доктор</RoleText>
              <RoleText>{medic}</RoleText>
              <BtnBox>
                <IconBtn>
                  <Left onClick={() => dec("medic")} />
                </IconBtn>
                <IconBtn>
                  <Right onClick={() => inc("medic")} />
                </IconBtn>
              </BtnBox>
            </RoleBox>
            <RoleBox>
              <RoleText>Шлюха</RoleText>
              <RoleText>{whore}</RoleText>
              <BtnBox>
                <IconBtn>
                  <Left onClick={() => dec("whore")} />
                </IconBtn>
                <IconBtn>
                  <Right onClick={() => inc("whore")} />
                </IconBtn>
              </BtnBox>
            </RoleBox>
          </Row>
          <Row>
            <RoleBox>
              <RoleText>
                Мирный
                <br /> житель
              </RoleText>
              <RoleText>{civil()}</RoleText>
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
