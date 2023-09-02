# version2number

A npm package that converts version string to numbers

```js
const v2n = require("version2number")

if (v2n("1.0.0") < v2n("1.0.2")) {
    console.log("1.0.0 is smaller than 1.0.2!")
}

console.log(v2n("1.0.0")) // 10000 which is 010000 + 0000 + 00

console.log(v2n("1.0.0", 1)) // 100 which is 100 + 00 + 0
```

View source code: https://github.com/OguzhanUmutlu/version2number