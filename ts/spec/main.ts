// configure logger for testing
const log4js = require('log4js');
import { Config } from '../index';

(log4js['setGlobalLogLevel'] || (() => {}))('OFF');
Config.setLogger(log4js.getLogger());

// export main dist entrypoint
export * from '../index';
// export separate entrypoint artifacts
export * from '../lib/';
export * from '../middleware/';
export * from '../config/';
export * from '../util/';