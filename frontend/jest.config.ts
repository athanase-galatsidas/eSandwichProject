module.exports = {
    preset: 'ts-jest',


    transform: {
        "^.+\\.vue$": "vue-jest",
        "^.+\\ts$": "ts-jest"
    },
    moduleFileExtensions: ['vue', 'js', 'ts']
}