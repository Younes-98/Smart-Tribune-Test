import MathView from './MathView';

describe('MathView', () => {
    test('isGreaterThan returns true when val1 is greater than val2', () => {
        const mathView = new MathView(5);
        expect(mathView.isGreaterThan(2)).toBe(true);
    });

    test('isGreaterThan returns false when val1 is less than or equal to val2', () => {
        const mathView = new MathView(5);
        expect(mathView.isGreaterThan(10)).toBe(false);
        expect(mathView.isGreaterThan(5)).toBe(false);
    });

    test('isLessThan returns true when val1 is less than val2', () => {
        const mathView = new MathView(5);
        expect(mathView.isLessThan(10)).toBe(true);
    });

    test('isLessThan returns false when val1 is greater than or equal to val2', () => {
        const mathView = new MathView(5);
        expect(mathView.isLessThan(2)).toBe(false);
        expect(mathView.isLessThan(5)).toBe(false);
    });

    test('isEqualTo returns true when val1 is equal to val2', () => {
        const mathView = new MathView(5);
        expect(mathView.isEqualTo(5)).toBe(true);
    });

    test('isEqualTo returns false when val1 is not equal to val2', () => {
        const mathView = new MathView(5);
        expect(mathView.isEqualTo(2)).toBe(false);
    });
});
