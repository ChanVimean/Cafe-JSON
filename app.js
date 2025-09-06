const jsonServer = require("json-server")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const server = jsonServer.create()
const middleware = jsonServer.defaults()
const router = jsonServer.router("data.json");

const HOST = process.env.HOST || "localhost"
const PORT = process.env.PORT || 9000

server.use(cors())
server.use(middleware)
server.use(router)

server.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`)
})