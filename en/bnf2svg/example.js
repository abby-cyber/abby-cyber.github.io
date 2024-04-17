// 引入 render 脚本
const render = require("./render");

// 将 BNF 语法转换为 SVG 代码块
const example = render(`
Place ::=
    "YOUR" ( EBNF | Here )`
);

// 这是转换后的 svg 代码块，如果转换失败，会变成失败原因的代码块
console.log(example);
