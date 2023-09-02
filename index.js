module.exports = function (version) {
    /*** @type {number[]} */
    const versions = version
        .replaceAll(/[^\d.|]/g, "")
        .replaceAll(/[^|]\|/g, m => m[0])
        .split("||")
        .map(v => {
            v = v.split(".");
            let a = 0;
            for (let i = 0; i < v.length; i++) {
                a += v[i] * 1 ? v[i] * (10 ** (module.exports.MAX_DIGITS * (2 - i))) : 0;
            }
            return a;
        });
    return Math.max(...versions);
};
module.exports.MAX_DIGITS = 2;