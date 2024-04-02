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
const player_1 = __importDefault(require("../models/player"));
class PlayerController {
    createPlayer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { name } = req.body;
                if (!name) {
                    name = "ANONYMOUS";
                }
                const player = yield player_1.default.create({
                    name,
                    registrationDate: new Date(),
                });
                res.status(201).json(player);
            }
            catch (error) {
                console.error("Error creating player:", error);
                res
                    .status(500)
                    .json({ message: "There was an error creating the player" });
            }
        });
    }
    ;
    updatePlayerName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const playerId = parseInt(req.params.id);
                const { name } = req.body;
                const player = yield player_1.default.findByPk(playerId);
                if (!player) {
                    res.status(404).json({ message: "Player not found" });
                    return;
                }
                player.name = name;
                yield player.save();
                res.status(200).json(player);
            }
            catch (error) {
                console.error("Error updating player name:", error);
                res
                    .status(500)
                    .json({ message: "There was an error updating the player's name" });
            }
        });
    }
    ;
    getAllPlayers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const players = yield player_1.default.findAll();
                res.status(200).json(players);
            }
            catch (error) {
                console.error("Error getting players:", error);
                res
                    .status(500)
                    .json({ message: "There was an error getting the players" });
            }
        });
    }
}
exports.default = PlayerController;
;
//# sourceMappingURL=playerController.js.map