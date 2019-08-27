describe('Writing a basic spec', () => {
    it('allows you to expect stuff', () => {
        expect('something').toBe('SOMETHING'.toLowerCase());
    });
});
describe('Writing another one', () => {
    it('is fun!', () => {
        expect(35).toEqual(20 + 15);
    });
});
