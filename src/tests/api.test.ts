// src/tests/api.test.ts
import { spawn } from 'child_process'
import request from 'supertest'

describe('API endpoints (Next build)', () => {
  let server: any
  const url = 'http://localhost:3000'

  beforeAll(async () => {
    server = spawn('npm', ['start'], { stdio: 'inherit' })
    await new Promise((r) => setTimeout(r, 3000))
  })

  afterAll(() => {
    server.kill()
  })

  test('Health endpoint works', async () => {
    const res = await request(url).get('/api/health')
    expect(res.status).toBe(200)
    expect(res.body.status).toBe('ok')
  })

  test('Products endpoint returns list', async () => {
    const res = await request(url).get('/api/products')
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body.products)).toBe(true)
  })
})
