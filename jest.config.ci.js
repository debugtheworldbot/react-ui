const base= require('./jest.config')
module.exports = Object.assign({},base,{
    collectCoverage: true,
    reporters: ["jest-junit"],
    collectCoverageFrom: ["lib/**/*.{js,jsx,ts,tsx}", "!**/node_modules/**"],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov'],
})
