"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playerController_1 = __importDefault(require("../controllers/playerController"));
const router = (0, express_1.Router)();
const playerController = new playerController_1.default();
router.post("/", playerController.createPlayer);
router.put("/:id", playerController.updatePlayerName);
router.get("/", playerController.getAllPlayers);
exports.default = router;
//# sourceMappingURL=playerRoutes.js.map