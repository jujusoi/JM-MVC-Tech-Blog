const sequelize = require('../config/connection');

const { User, Post, Comment } = require('../models');

const userSeedData = require('./userseed.json');
const postSeedData = require('./postseed.json');
const commentSeedData = require('./commentseed.json');

const seed = async () => {
    try {
        await sequelize.sync({ force: true });

        await User.bulkCreate(userSeedData, {
            individualHooks: true,
            returning: true,
        });
        await Post.bulkCreate(postSeedData);
        await Comment.bulkCreate(commentSeedData);

        console.log(`Successfully seeded`);
        process.exit(0);
    } catch (err) {
        console.log(`Could not seed data, ${err}`);
        process.exit(1);
    }
};

seed();