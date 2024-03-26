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

// Definim mockResponse com un objecte buit inicialment
const mockResponse: Partial<Response> = {};
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
