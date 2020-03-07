module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": ["airbnb-base","plugin:prettier/recommended"],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "consistent-return": "off"
    }
};