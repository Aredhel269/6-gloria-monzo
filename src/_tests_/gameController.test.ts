import GameController from "../controllers/gameController";
describe("GameController", () => {
  it("should reset the score when startGame is called", () => {
    const gameController = new GameController();
    gameController.playerId();
    gameController.updateScore(10);
    gameController.startGame();
    expect(gameController.score).toBe(0);
  });

  it("should not allow a score update when the game is not active", () => {
    const gameController = new GameController();
    expect(() => {
      gameController.updateScore(10);
    }).toThrowError("Cannot update score when no game is active");
  });

  it("should throw an error if startGame is called when a game is already active", () => {
    const gameController = new GameController();
    gameController.startGame();
    expect(() => {
      gameController.startGame();
    }).toThrowError("Game already active");
  });

  it("should maintain the high score when ending a game", () => {
    const gameController = new GameController();
    gameController.startGame();
    gameController.updateScore(50);
    gameController.endGame();
    expect(gameController.highScore).toBe(50);
  });
});
