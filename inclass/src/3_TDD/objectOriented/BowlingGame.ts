export class BowlingGame {
  private pins: number[];

  constructor(pins: number[] = []) {
    this.pins = pins;
  }

  roll(pins: number): BowlingGame {
    return new BowlingGame([...this.pins, pins]);
  }
  
  
  score() {
    const FRAMES = 10;
    let score = 0;
    let firstRoll = 0;

    for (let i = 0; i < FRAMES; i++) {
      if (this.isStrike(firstRoll)) {
        score += this.scoreForStrike(firstRoll);
        firstRoll += 1;
      } else if (this.isSpare(firstRoll)) {
        score += this.scoreForSpare(firstRoll);
        firstRoll += 2;
      } else {
        score += this.scoreForFrame(firstRoll);
        firstRoll += 2;
      }
    }

    return score;
  }

  scoreForFrame(firstRoll) {
    return this.pins[firstRoll] + this.pins[firstRoll + 1];
  }

  scoreForSpare(firstRoll) {
    return 10 + this.pins[firstRoll + 2];
  }

  isSpare(firstRoll) {
    return this.pins[firstRoll] + this.pins[firstRoll + 1] === 10;
  }
  
  scoreForStrike(firstRoll) {
    return 10 + this.pins[firstRoll + 1] + this.pins[firstRoll + 2];
  }

  isStrike(firstRoll) {
    return this.pins[firstRoll] === 10;
  }

}
