const { InSim, PacketType, IS_TINY, TinyType } = require('../dist');

const insim = new InSim({
  connection: {
    host: '127.0.0.1',
    port: 29999,
  },

  insimOptions: {
    name: 'Example 1',
    password: 'adminPassword',
  },

  logger: {
    level: 'debug',
  },
});

insim.on('error', (error) => {
  console.log('Error', error);
});

insim.bind(PacketType.ISP_VER, (data) => {
  console.log('Connected', data);

  insim.send(new IS_TINY({ subType: TinyType.TINY_ISM, requestId: 2 }));
});

insim.bind(PacketType.ISP_NCN, (ncn) => {
  insim.send('Hello', [ncn.playerName]);
  insim.send('/spec', [ncn.playerName]);
});

insim.bind(PacketType.ISP_ISM, () => {
  insim.send(new IS_TINY({ subType: TinyType.TINY_NCN, requestId: 2 }));
});

insim.connect();
