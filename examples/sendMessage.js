const { InSim, PacketType } = require('insim.js');

const insim = new InSim({
  host: '127.0.0.1',
  port: 29999,

  name: 'Example 1',
  password: 'adminPassword',
});

insim.on('error', (error) => {
  console.log('Error', error);
});

insim.on('connect', () => {
  console.log('Connected to DCon');
});

insim.on('ready', () => {
  console.log('InSim is ready');
});

insim.bind(PacketType.ISP_VER, (data) => {
  insim.sendMessage(`This DCon is licensed under ${data.product} - ${data.version}`);
});

insim.connect();
