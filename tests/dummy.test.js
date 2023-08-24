const dummy = () => 1
describe('Pretend that backend is being tested', () => {
  test('dummy returns one', () => {
    const result = dummy()
    expect(result).toBe(1)
  })
})