const users = [];

async function findByEmail(email) {
    return users.find(u => u.email === email);
}

async function createUser(email, password) {
    const user = { id: users.length+1, email, password, role: 'user' };
    users.push(user);
    return user;
}

module.exports = {
    findByEmail,
    createUser
};