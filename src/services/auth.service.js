const bcrypt = require('bcryptjs');
const {
    findByEmail,
    createUser
} = require('../repesitories/user.repesitory');

async function register(email, password) {
    if (!email || !password) {
        const err = new Error('Email and password are required');
        err.status = 400;
        throw err;
    }

    if (password.length < 6) {
        const err = new Error('Password must be at least 6 characters');
        err.status = 400;
        throw err;
    }

    const existingUser = await findByEmail(email);
    if (existingUser) {
        const err = new Error('Email already registered');
        err.status = 409;
        throw err;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return createUser(email, hashedPassword);
}

async function login(email, password) {
    const user = await findByEmail(email);
    if (!user) {
        const err = new Error('Invalid credentials');
        err.status = 401;
        throw err;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        const err = new Error('Invalid credentials');
        err.status = 401;
        throw err;
    }

    return {
        id: user.id,
        email: user.email,
        role: user.role
    };
}

module.exports = {
    register, 
    login
};