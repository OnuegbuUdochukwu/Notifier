const app = require('./app')
require('dotenv').config()
require('./cron')
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})