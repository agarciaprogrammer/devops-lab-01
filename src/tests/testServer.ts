import next from 'next'
import { createServer } from 'http'
import type { IncomingMessage, ServerResponse } from 'http'

const app = next({ dev: false })
const handle = app.getRequestHandler()

export async function startTestServer() {
  await app.prepare()

  const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    handle(req, res)
  })

  return new Promise<{ server: any; url: string }>((resolve) => {
    server.listen(0, () => {
      const address = server.address()
      const port = typeof address === 'string' ? 3000 : address?.port
      resolve({ server, url: `http://localhost:${port}` })
    })
  })
}
