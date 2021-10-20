const env = process.env.NODE_ENV;

if (['development'].includes(env)) {
  require('./src/index');
} else {
  require('./lib/index');
}