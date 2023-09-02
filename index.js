module.exports = function (version, maxDigits = 2) {
    return Math.max(...version
        .replaceAll(/[^\d.|]/g, "") // removes unnecessary bytes
        .replaceAll(/[^|]\|/g, m => m[0]) // removes single | symbols
        .split("||") // splits version by "||", example: [["1.0.0", "3.0.0"]]
        .map(v => {
            v = v.split("."); // splits the version by a ".", example: ["1", "0", "0"]
            let a = 0;
            for (let i = 0; i < v.length; i++) {
                v[i] *= 1;
                if (!v[i]) continue; // continue with the next if it's 0 or NaN
                a += v[i] * (10 ** (maxDigits * (2 - i)));
            }
            return a;
        }));
};