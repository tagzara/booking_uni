const User = require('../models/User.js');

async function createUser(username, hashedPassword) {
    const user = new User({
        username,
        hashedPassword
    });

    await user.save();

    return user;
}

async function getUserByUsername(username) {
    const user = await User.findOne({ username: { $regex: username, $options: 'i'}});
    return user;
}

module.exports = {
    createUser,
    getUserByUsername
};