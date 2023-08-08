const { Post } = require("../models");

const postData = [
    {
        title: "Prince of Persia Is Slept On",
        content:
            "The original Prince of Persia trilogy that released in the early 2000's was an absolute masterpiece, and I will die on this hill.",
        user_id: 1,
    },
    {
        title: "I'm Pregnant",
        content: "And it's yours.",
        user_id: 2,
    },
    {
        title: "Spider-Man 3",
        content: "If Sony and Columbia Pictures wouldn't have screwed with production during Spider-Man 3 to the extent that they did, we might have gotten a Spider-Man 4.",
        user_id: 3,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;