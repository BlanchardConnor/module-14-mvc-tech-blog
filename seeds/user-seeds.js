const { User } = require("../models");

const userData = [
    {
        username: "Jekkyl",
        password: "Hyde",
    },
    {
        username: "Hyde",
        password: "Jekkyl",
    },
    {
        username: "Bingus",
        password: "joeman",
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;