import styles from './styles.module.css';
import GameSymbol from './GameSymbol';

const GameInfo = ({ isDraw, winnerSymbol, currentStep }) => {
  if (isDraw) {
    return (
      <div className={styles.gameInfo}>
        Ничья
      </div>
    )
  }

  if (winnerSymbol) {
    return (
      <div className={styles.gameInfo}>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    )
  }

  return (
    <div className={styles.gameInfo}>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
};

export default GameInfo;