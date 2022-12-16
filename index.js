import express from 'express';
import accessControlMiddleware from './src/middleware/access-control-middleware';
import handleAllErrors from './src/middleware/global-error-handler';


process.env.APP_ENV ? require("dotenv").config({ path: `.env.${process.env.APP_ENV}` }) 
                        : require("dotenv").config();

// Server starter
const startServer = () => {
    const app = express();
    const port = process.env.PORT || 3000;
    const host = process.env.HOST || 'http://localhost:3000';

    // Initialize custom environment settings
    const weAreInProduction = process.env.APP_ENV === 'production';
    if (weAreInProduction) {
      const { turnOffDebugging } = require('./src/startup-checklist/debug-switch');
      turnOffDebugging();
    }

    // Access control middleware
    app.use(accessControlMiddleware)
    
    // Body parser middlewares
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    // Mount all API routes here
    const apiRoutes = require('./src/api/routes');
    app.use('/api/v1', apiRoutes)


    // Global error handler middleware
    app.use(handleAllErrors)

    app.listen(port, () => console.log(`server running on ${host}`))
}

startServer()