import { Sequelize } from "sequelize";
import db from "../../db/db.js";

export default db.define("user", {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    }, 
    nome: {
        type: Sequelize.STRING(200),
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    tipo_usuario: {
        type: Sequelize.ENUM("operador", "admin"),
        allowNull: false,
    },
});