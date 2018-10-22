import winston from 'winston';
import path from 'path';

export default (label: string = 'app') => {
  const myFormat = winston.format.printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
  });

  const logPath = path.join(__dirname, './../logs');
  return winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.label({ label: label }),
      winston.format.timestamp(),
      myFormat
    ),
    transports: [
      new winston.transports.File({
        filename: path.join(logPath, 'combined.log')
      }),
      new winston.transports.Console()
    ]
  });
}
