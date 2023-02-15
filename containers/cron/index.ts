var cron = require('node-cron');
var axios = require('axios');

console.log('Starting cron container');

const hitNextApp = async () => {
  console.log('sending request');
  await axios.post('http://app:3000/api/cron', {
    ping: 'ping'
  });
};

cron.schedule('* * * * *', hitNextApp);
