import { ButtonComponent } from "../../uikit/ButtonComponent";
import { ModalComponent } from "../../uikit/ModalComponent";

export const GameOverModal = () => {
  return (
    <ModalComponent isOpen={!!winnerSymbol}>
      <ModalComponent.Header>
        Игра завершена
      </ModalComponent.Header>
      <ModalComponent.Body>
        <div>

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