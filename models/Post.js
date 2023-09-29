const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {};

Post.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    post_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    post_description: {
        type: DataTypes.STRING(5000),
        allowNull: false,
    },
    post_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    },
);

module.exports = Post;