"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = __importDefault(require("../controllers/gameController"));
const router = (0, express_1.Router)();
const gameController = new gameController_1.default();
router.post("/:playerId/play", gameController.createGameForPlayer);
router.get("/:playerId/rounds", gameController.getGamesForPlayer);
router.delete("/:playerId/rounds", gameController.deleteGamesForPlayer);
exports.default = router;
//# sourceMappingURL=gameRoutes.js.map