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
const ranking_1 = __importDefault(require("../models/ranking"));
const player_1 = __importDefault(require("../models/player"));
class RankingController {
    getRanking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const players = yield player_1.default.findAll();
                const rankedPlayers = players.map((player) => {
                    const successRate = player.calculateSuccessRate();
                    return { playerId: player.id, successRate };
                });
                rankedPlayers.sort((a, b) => b.successRate - a.successRate);
                const totalSuccessRate = rankedPlayers.reduce((acc, player) => acc + player.successRate, 0);
                const averageSuccessRate = totalSuccessRate / rankedPlayers.length;
                res.status(200).json({ rankedPlayers, averageSuccessRate });
            }
            catch (error) {
                res.status(500).json({ message: "Error getting the ranking", error });
            }
        });
    }
    getLoser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const loser = yield ranking_1.default.findOne({ order: [["successRate", "ASC"]] });
                res.status(200).json(loser);
            }
            catch (error) {
                res.status(500).json({ message: "Error getting the loser", error });
            }
        });
    }
    getWinner(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const winner = yield ranking_1.default.findOne({
                    order: [["successRate", "DESC"]],
                });
                res.status(200).json(winner);
            }
            catch (error) {
                res.status(500).json({ message: "Error getting the winner", error });
            }
        });
    }
}
exports.default = RankingController;
//# sourceMappingURL=rankingController..js.map