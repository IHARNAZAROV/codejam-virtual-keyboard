module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "linebreak-style": 0,
        'no-plusplus': 'off',
        'max-len': ["error", { "code": 120 }],
        "prefer-destructuring": ["error", {"object": true, "array": false}]
    }
};