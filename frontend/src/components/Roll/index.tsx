import { useState } from "react";
import { Container, Card, Input, Btn, RoleImage } from "./style";
import useGameStore from "../../utils/store/game";

interface GameProps {
  goGame: () => void;
}

const roleImageMap: Record<string, string> = {
  mafiaDon: "/Don.png",
  mafia: "/Mafia.png",
  killer: "/Maniac.png",
  police: "/Comissar.png",
  medic: "/Doctor.png",
  whore: "/Whore.png",
  // civil: "/Civil.png", // если есть, добавь картинку, иначе можно не ставить
};

const Roll = ({ goGame }: GameProps) => {
  const { assignRole, players, player } = useGameStore();
  const [name, setName] = useState("");
  const [currentRole, setCurrentRole] = useState<string | null>(null);

  const handleAssign = () => {
    if (!name.trim()) return;
    const role = assignRole(name.trim());
    if (role) {
      setCurrentRole(role);
    }
  };

  const handleNext = () => {
    setName("");
    setCurrentRole(null);
    if (players.length >= player) {
      goGame();
    }
  };

  const imageSrc = currentRole ? roleImageMap[currentRole] : null;

  return (
    <Container>
      <Card>
        {currentRole && imageSrc ? (
          <RoleImage src={imageSrc} alt={currentRole} />
        ) : (
          <h2 style={{ margin: "auto", color: "white" }}>Введите имя</h2>
        )}
      </Card>

      {!currentRole && (
        <Input
          label="Имя игрока"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      {!currentRole ? (
        <Btn onClick={handleAssign} disabled={!name.trim()}>
          {!name.trim() ? "Введите имя" : "Получить роль"}
        </Btn>
      ) : (
        <Btn onClick={handleNext}>
          {players.length >= player ? "Начать игру" : "Следующий игрок"}
        </Btn>
      )}

      <p style={{ color: "white" }}>
        Раздано: {players.length}/{player}
      </p>
    </Container>
  );
};

export default Roll;
