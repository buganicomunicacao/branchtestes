import serverExpress from './config/Server'
import NextApp from './config/Next/Next'

const app = serverExpress().app

NextApp(app)
