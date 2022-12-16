// Gloabl error handler to handle any errors properly
// This ensures system resilence, security and getting insights of any errors

import ApplicationError from "../helpers/app-error";
import addToJSONFile from "../helpers/json-data-saver";
import path from 'path';

const errorLogsDatabase = path.join(__dirname, '..', 'internal-logs', 'errors.json');

const handleAllErrors = (error, req, res, next) => {
    if (error instanceof ApplicationError) {
        // We want to then log the error to our errors.json file
        // You can consfigure to use a proper DB (like SQL)
        const errors = {
            errorCode: error.errorCode,
            errorMessage: error.message,
            time: new Date().toLocaleString('en-US', { timeZone: 'America/New_York', timeZoneName: 'short' }),
            statusCode: error.statusCode,
            errorType: error.name
        }

        addToJSONFile(errors, errorLogsDatabase);
        return res.status(error.statusCode).json({
            message: error.message,
            errorCode: error.errorCode
        })
    }

    const errors = {
        errorCode: error.status || 500,
        errorMessage: error.message,
        time: new Date().toLocaleString('en-US', { timeZone: 'America/New_York', timeZoneName: 'short' }),
        statusCode: res.statusCode,
        errorType: 'UnknownError'
    }
    addToJSONFile(errors, errorLogsDatabase)
    return res.status(error.status || 500).json({
        message: error.message || 'Internal Error',
        errorCode: 500
    })
}

export default handleAllErrors;