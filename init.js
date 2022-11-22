import "dotenv/config";
import app from "./server.js"


const PORT = process.env.PORT


const handleListening = ()=> console.log(`✨sever listening on http://localhost:${PORT}!🚀`)
app.listen(PORT, handleListening);