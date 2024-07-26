import { ReactNode } from "react";
import { ButtonComponent } from "../../uikit/ButtonComponent";
import { ModalComponent } from "../../uikit/ModalComponent";

interface GameOverModalProps {
  winnerName: string | undefined,
  playersList: ReactNode[],
}

export const GameOverModal = ({ winnerName, playersList }: GameOverModalProps) => {
  const onClose = () => {
    console.log('close')
  }
  return (
    <ModalComponent isOpen={!!winnerName} onClose={onClose}>
      <ModalComponent.Header>
        Игра завершена
      </ModalComponent.Header>
      <ModalComponent.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="grid grid-cols-2 gap-3 justify-between mt-2">
          {playersList}
        </div>
      </ModalComponent.Body>
      <ModalComponent.Footer>
        <ButtonComponent variant="outline" size="md">
          Новая игра
        </ButtonComponent>
        <ButtonComponent variant="primary" size="md">
          Новая игра
        </ButtonComponent>
      </ModalComponent.Footer>
    </ModalComponent>
  );
};