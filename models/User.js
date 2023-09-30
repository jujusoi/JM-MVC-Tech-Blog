const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class User extends Model {
    checkPassword(example){
        console.log(this.password);
        return bcrypt.compareSync(example, this.password);
    }
};

User.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },
    },
    },
    {
        hooks: {
            beforeCreate: async (newData) => {
                newData.password = await bcrypt.hash(newData.password, 10);
                return newData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_table',
    },
);

module.exports = User;