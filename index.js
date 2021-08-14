/* ############################### */
/* LOGGER */
/* ############################### */
const { createLogger, format, transports } = require('winston');
const { combine, printf } = format;

const logFormat = printf(({ message }) => {
  return `${message}`;
});

const logger = createLogger({
  format: combine(logFormat),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'console.log' }),
  ],
});

/* ############################### */
/* USEFULL */
/* ############################### */
require('dotenv').config()

/* ############################### */
/* FRITZ */
/* ############################### */
var Fritzbox = require("./lib/fritzbox/Fritzbox");
var Promise = require("bluebird");

var options = {
  host: '10.0.1.1',
  port: 49000,
  ssl: false,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
}

var log = false; // Enable to save services info in console.log file

var fritzbox = new Fritzbox.Fritzbox(options);

//Initialize Device
Promise.all([fritzbox.initTR064Device(), fritzbox.initIGDDevice()]).then(function() {
  for (var serviceName in fritzbox.services) {
    if(log) logger.info("=== "+serviceName+" ===");

    for (var actionName in fritzbox.services[serviceName].actionsInfo) {
      if(log) logger.info("   # " + actionName + "()");

      fritzbox.services[serviceName].actionsInfo[actionName].inArgs.forEach(function(arg) {
        if(log) logger.info("     IN : " + arg);
      });

      fritzbox.services[serviceName].actionsInfo[actionName].outArgs.forEach(function(arg) {
        if(log) logger.info("     OUT : " + arg);
      });
    }
  }
});


// Do things with services
Promise.all([fritzbox.initTR064Device(), fritzbox.initIGDDevice()]).then(() => {
  console.log('\x1b[36m\nSuccessfully initialized device!\n\x1b[0m');
  var service = fritzbox.services["urn:schemas-upnp-org:service:WANCommonInterfaceConfig:1"];

  return service.actions.GetAddonInfos();
}).then(function(result) {
  console.log("\x1b[32m\x1b[1m######## Success ########\x1b[0m");

  console.log(result);
}).catch(function(error) {
  console.log("\x1b[31m\x1b[1m######## Error ########\x1b[0m");

  console.log(error);
});