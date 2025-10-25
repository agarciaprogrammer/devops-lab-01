describe('API endpoints', () => {
  test('Health endpoint works', async () => {
    const res = await fetch('http://localhost:3000/api/health')
    expect(res.status).toBe(200)
  })
})
