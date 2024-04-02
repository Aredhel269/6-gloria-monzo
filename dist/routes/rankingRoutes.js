"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rankingController_1 = __importDefault(require("../controllers/rankingController."));
const router = (0, express_1.Router)();
const rankingController = new rankingController_1.default();
router.get("/", rankingController.getRanking);
router.get("/loser", rankingController.getLoser);
router.get("/winner", rankingController.getWinner);
exports.default = router;
//# sourceMappingURL=rankingRoutes.js.map