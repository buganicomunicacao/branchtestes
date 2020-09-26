import serverExpress from './config/Server'
import NextApp from './config/Next/Next'

const app = serverExpress().app

app.get('/api/', (request, response) => response.send('api on'))

NextApp(app)
