"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const playerRoutes_1 = __importDefault(require("./routes/playerRoutes"));
const gameRoutes_1 = __importDefault(require("./routes/gameRoutes"));
const rankingRoutes_1 = __importDefault(require("./routes/rankingRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send('Hola món!');
});
app.use(express_1.default.json());
app.use("/players", playerRoutes_1.default);
app.use("/games", gameRoutes_1.default);
app.use("/ranking", rankingRoutes_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map