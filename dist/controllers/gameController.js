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
const game_1 = __importDefault(require("../models/game"));
class GameController {
    createGameForPlayer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const playerId = parseInt(req.params.id);
                const { dice1, dice2, isWin } = req.body;
                const game = yield game_1.default.create({ playerId, dice1, dice2, isWin });
                res.status(201).json(game);
            }
            catch (error) {
                res.status(500).json({ message: "Error creating the roll", error });
            }
        });
    }
    deleteGamesForPlayer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const playerId = parseInt(req.params.id);
                yield game_1.default.destroy({ where: { playerId } });
                res
                    .status(204)
                    .json({ message: "Rolls successfully deleted for the player" });
            }
            catch (error) {
                res.status(500).json({ message: "Error deleting the rolls", error });
            }
        });
    }
    getGamesForPlayer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const playerId = parseInt(req.params.id);
                const games = yield game_1.default.findAll({ where: { playerId } });
                if (games.length === 0) {
                    res.status(404).json({ message: "No rolls found for the player" });
                }
                res.status(200).json(games);
            }
            catch (error) {
                res
                    .status(500)
                    .json({ message: "Error getting the player's rolls", error });
            }
        });
    }
}
exports.default = GameController;
//# sourceMappingURL=gameController.js.map