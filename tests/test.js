const v2n = require("../index");
const averageJSPrecisionError = 1.8189894035458565e-12;
const test = (input, expected) => {
    const got = v2n(input);
    const diff = Math.abs(got - expected);
    if (diff <= averageJSPrecisionError) console.log(`Passed the test: ${input} => ${got}`);
    else {
        console.log(`Failed the test: ${input} => ${got}, expected: ${expected}`);
        process.exit();
    }
};

// Note: Using _ does nothing.

test("1.0.0", 1_00_00);
test("1.0.0.dev-13", 1_00_00.13);
test("1.23.4.something12.34.56", 1_23_04.12_34_56);
test("1.5.6", 1_05_06);
test("1.2.3.4.5.67", 1_02_03.04_05_67);

v2n.MAX_DIGITS = 1;

test("1.0.0", 1_0_0);
test("1.0.0.dev-3", 1_0_0.3);
test("1.2.4.something1.4.6", 1_2_4.1_4_6);
test("1.5.6", 1_5_6);
test("1.2.3.4.5.7", 1_2_3.4_5_7);

console.log("Passed all tests!");