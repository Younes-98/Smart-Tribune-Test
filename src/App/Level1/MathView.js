// @flow

class MathView {
    val1: number;

    constructor(val1: number) {
        this.val1 = val1;

        Object.freeze(this);
    }

    isGreaterThan(val2: number): boolean {
        return this.val1 > val2;
    }

    isLessThan(val2: number): boolean {
        return this.val1 < val2;
    }

    isEqualTo(val2: number): boolean {
        return this.val1 === val2;
    }
}

export default MathView;
