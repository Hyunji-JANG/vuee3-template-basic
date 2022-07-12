module.exports = {
  env: {        // 전역 개념 코드검사 
    browser: true,
    node: true
  },
  extends: [    // 코드 규칙
    // vue
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    // 'plugin:vue/vue3-recommended', // Lv3
    // js
    'eslint:recommended'
  ],
  parserOptions: {
    // 코드 분석기
    parser: 'babel-eslint'
  },
  rules: {}
}