import fs from 'fs'
import path from 'path'

console.log(process.cwd())
const logDir = path.join(process.cwd(), 'logs')
const logFile = path.join(logDir, 'utm.log')

// check if the log directory is present
if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir) // create directory if the directory is not present
}

export default function logger (req, res, next) {
    const {
        utm_source, 
        utm_medium, 
        utm_campaign,
        utm_term, 
        utm_content
    } = req.query // destructure utm params 

    if(utm_source || utm_medium || utm_campaign || utm_term || utm_content){
        const logContent = {
            timeStamp: new Date().toISOString(),
            ip: req.ip,
            path: req.originalUrl, 
            utm_source,
            utm_medium,
            utm_campaign,
            utm_term,
            utm_content
        };

        fs.appendFileSync(logFile, JSON.stringify(logContent) + '\n', 'utf8') // append log content to the file  
    }
    next();
}