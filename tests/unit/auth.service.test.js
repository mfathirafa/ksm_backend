const authService = require('../../src/services/auth.service');

describe('Auth Service - Login', () => {
    it('should throw error if user not found', async () => {
        await expect(
            authService.login('not found@gmail.com', '123456')
        ).rejects.toThrow('Invalid credentials');
    });
});