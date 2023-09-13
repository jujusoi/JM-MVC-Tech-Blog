const sequelize = require('../config/connection');

const { User, Post } = require('../models');

const userSeedData = require('./userseed.json');
const postSeedData = require('./postseed.json');

const seed = async () => {
    try {
        await sequelize.sync({ force: true });

        await User.bulkCreate(userSeedData);
        await Post.bulkCreate(postSeedData);

        console.log(`Successfully seeded`);
        process.exit(0);
    } catch (err) {
        console.log(`Could not seed data, ${err}`);
        process.exit(1);
    }
};

seed();