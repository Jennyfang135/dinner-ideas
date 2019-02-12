const testEnv = require('./test-environment')
const db = require('../db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getUsers gets all users', () => {
  // One for each letter of the alphabet!
  const expected = 8
  return db.getFoodCategory(testDb)
    .then(category => {
      const actual = category.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getCategoryName gets a single category', () => {
  const expected = 'chicken'
  return db.getcategoryName(1, testDb)
    .then(category => {
      const actual = category.name
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})
