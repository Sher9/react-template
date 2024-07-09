module.exports = {
  root: true,
  //为什么会报错‘__dirname‘ is not defined？ESLint 不知道 vite.config.js 中的代码在 Node.js 中使用，__dirname 未在浏览器中定义，也未在 ES 模块中定义。因此要告诉 ESLint 代码将作为 CommonJS 模块在 Node.js 中运行。
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],

  rules: {
    // 'react-refresh/only-export-components': [
    //   'warn',
    //   { allowConstantExport: true },
    // ],
    //用于禁用某些原始类型
    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
      }
    ],
    'no-unused-vars': [0], //未使用变量
    'no-redeclare': [2], //禁止重复声明变量
    'no-dupe-keys': 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2, //函数参数不能重复
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'semi': 0,//去掉分号检查
    '@typescript-eslint/no-explicit-any': ['off'],//允许使用any类型
  },
}
