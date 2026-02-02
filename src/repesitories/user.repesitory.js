const prisma = require('../libs/prisma');

async function findByEmail(email) {
    return prisma.user.findUnique({
        where: { email }
    });
}

async function createUser(email, password, role = 'user') {
    return prisma.user.create({
        data: {
            email,
            password,
            role
        }
    });
}

module.exports = {
    findByEmail,
    createUser
};