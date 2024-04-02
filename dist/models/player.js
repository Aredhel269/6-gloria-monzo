"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const game_1 = __importDefault(require("./game"));
class Player extends sequelize_1.Model {
    calculateSuccessRate() {
        if (this.totalGames === 0) {
            return 0;
        }
        return (this.wins / this.totalGames) * 100;
    }
}
Player.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    registrationDate: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    wins: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    totalGames: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    successRate: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: database_1.sequelize,
    modelName: 'Player',
    tableName: 'players'
});
Player.hasMany(game_1.default, { foreignKey: 'playerId' });
exports.default = Player;
//# sourceMappingURL=player.js.map