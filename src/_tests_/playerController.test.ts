import { Request, Response } from "express";
import PlayerController from "../controllers/playerController";
import Player from "../models/player";

// Creem una funció mock per al req.body
const mockRequestBody = {
  body: {
    name: "TestPlayer"
  }
};

// Creem una funció mock per al req.params
const mockRequestParams = {
  params: {
    id: "1"
  }
};

// Creem una instància de PlayerController per a les proves
const playerController = new PlayerController();

// Provem la funció createPlayer
describe("createPlayer function", () => {
  it("should create a new player with default name if no name provided", async () => {
    const req = { ...mockRequestBody };
    const res = { ...mockResponse } as Response; // Especifiquem el tipus com a Response

    await playerController.createPlayer(req as Request, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(Player.create).toHaveBeenCalledWith({
      name: "ANONYMOUS",
      registrationDate: expect.any(Date)
    });
    expect(res.json).toHaveBeenCalled();
  });

  it("should create a new player with provided name", async () => {
    const req = { ...mockRequestBody };
    const res = { ...mockResponse };

    await playerController.createPlayer(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(Player.create).toHaveBeenCalledWith({
      name: "TestPlayer",
      registrationDate: expect.any(Date)
    });
    expect(res.json).toHaveBeenCalled();
  });

  it("should handle errors during player creation", async () => {
    const req = { ...mockRequestBody };
    const res = { ...mockResponse };

    // Simulem un error durant la creació del jugador
    (Player.create as jest.Mock).mockRejectedValueOnce("Error");

    await playerController.createPlayer(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "There was an error creating the player" });
  });
});

// Provem la funció updatePlayerName
describe("updatePlayerName function", () => {
  it("should update player name", async () => {
    const req = { ...mockRequestParams, ...mockRequestBody };
    const res = { ...mockResponse };

    const playerInstance = { name: "OldName", save: jest.fn() };
    (Player.findByPk as jest.Mock).mockResolvedValueOnce(playerInstance);

    await playerController.updatePlayerName(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(Player.findByPk).toHaveBeenCalledWith(1);
    expect(playerInstance.name).toBe("TestPlayer");
    expect(playerInstance.save).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(playerInstance);
  });

  it("should handle player not found error", async () => {
    const req = { ...mockRequestParams, ...mockRequestBody };
    const res = { ...mockResponse };

    (Player.findByPk as jest.Mock).mockResolvedValueOnce(null);

    await playerController.updatePlayerName(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Player not found" });
  });

  it("should handle errors during player name update", async () => {
    const req = { ...mockRequestParams, ...mockRequestBody };
    const res = { ...mockResponse };

    (Player.findByPk as jest.Mock).mockResolvedValueOnce({ save: jest.fn() });

    // Simulem un error durant l'actualització del nom del jugador
    const errorMessage = "Error updating player name";
    (Player.findByPk as jest.Mock).mockRejectedValueOnce(errorMessage);

    await playerController.updatePlayerName(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "There was an error updating the player's name" });
  });
});

// Provem la funció getAllPlayers
describe("getAllPlayers function", () => {
  it("should get all players", async () => {
    const req = {};
    const res = { ...mockResponse };

    const players = [{ name: "Player1" }, { name: "Player2" }];
    (Player.findAll as jest.Mock).mockResolvedValueOnce(players);

    await playerController.getAllPlayers(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(Player.findAll).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(players);
  });

  it("should handle errors during getting players", async () => {
    const req = {};
    const res = { ...mockResponse };

    // Simulem un error durant l'obtenció dels jugadors
    const errorMessage = "Error getting players";
    (Player.findAll as jest.Mock).mockRejectedValueOnce(errorMessage);

    await playerController.getAllPlayers(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "There was an error getting the players" });
  });
});