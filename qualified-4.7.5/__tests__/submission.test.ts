import { formatUserData, User } from '../src/formatUserData';

describe('formatUserData function', () => {
    it('formats user data with all properties', () => {
        const user = { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' };
        expect(formatUserData(user)).toBe("User 1: John Doe - john.doe@example.com");
    });

    it('handles missing lastName', () => {
        const user = { id: 2, firstName: 'Jane', email: 'jane.doe@example.com' };
        expect(formatUserData(user)).toBe("User 2: Jane - jane.doe@example.com");
    });

    it('handles missing email', () => {
        const user = { id: 3, firstName: 'Bob', lastName: 'Smith' };
        expect(formatUserData(user)).toBe("User 3: Bob Smith");
    });

    it('handles missing optional properties', () => {
        const user = { id: 4, firstName: 'Alice' };
        expect(formatUserData(user)).toBe("User 4: Alice");
    });
});