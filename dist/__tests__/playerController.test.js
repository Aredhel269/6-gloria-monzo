"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const playerController_1 = __importDefault(require("../controllers/playerController"));
const player_1 = __importDefault(require("../models/player"));
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
const mockResponse = {};
// Creem una instància de PlayerController per a les proves
const playerController = new playerController_1.default();
// Provem la funció createPlayer
describe("createPlayer function", () => {
    it("should create a new player with default name if no name provided", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = Object.assign({}, mockRequestBody);
        const res = Object.assign({}, mockResponse); // Especifiquem el tipus com a Response
        yield playerController.createPlayer(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(player_1.default.create).toHaveBeenCalledWith({
            name: "ANONYMOUS",
            registrationDate: expect.any(Date)
        });
        expect(res.json).toHaveBeenCalled();
    }));
    it("should create a new player with provided name", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = Object.assign({}, mockRequestBody);
        const res = Object.assign({}, mockResponse);
        yield playerController.createPlayer(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(player_1.default.create).toHaveBeenCalledWith({
            name: "TestPlayer",
            registrationDate: expect.any(Date)
        });
        expect(res.json).toHaveBeenCalled();
    }));
    it("should handle errors during player creation", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = Object.assign({}, mockRequestBody);
        const res = Object.assign({}, mockResponse);
        // Simulem un error durant la creació del jugador
        player_1.default.create.mockRejectedValueOnce("Error");
        yield playerController.createPlayer(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: "There was an error creating the player" });
    }));
});
//# sourceMappingURL=playerController.test.js.map