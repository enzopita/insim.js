<div align="center">
  <img src="https://i.imgur.com/x9pCebF.png" width="25%">
  <br><br>
  <p>
    <a href="https://npmjs.com/package/insim.js">
      <img src="https://badgen.net/npm/v/insim.js">
      <img src="https://badgen.net/bundlephobia/min/insim.js">
    </a>
  </p>
</div>

This library is under constant development and provides the basic functionality for creating your InSim. If you run into any problems or have any suggestions, please create a new issue.

## Installing

It is advisable to always use the latest version of [Node](https://nodejs.org) when possible, this library has been tested with version 16.9.0 and does not guarantee functionality with earlier versions.

```bash
$ npm install insim.js
$ yarn add insim.js
```

## Getting started

To make good use of this library, basic knowledge about InSim is required. You can read in the [Live for Speed manual](https://en.lfsmanual.net/wiki/InSim#InSim_Reference) what packages exist and their functionality.

```javascript
const { InSim, PacketType } = require('insim.js');

const insim = new InSim({
  connection: {
    host: '127.0.0.1', // DCon host
    port: 29999, // DCon InSim port
  },

  insimOptions: {
    name: 'InSim.js', // Your InSim name
    adminPassword: '', // DCon admin password
  }
});

// It's recommended to always handle errors.
insim.on('error', error => {
  console.log('Error', error);
});

insim.on('disconnect', () => {
  console.log('InSim disconnected');
});

insim.bind(PacketType.ISP_VER, (data) => {
  console.log('InSim connected', data);
});

insim.connect();
```

## Useful links

- [InSim.js documentation](https://enzopita.github.io/insim.js)
- [Live for Speed Manual](https://en.lfsmanual.net/wiki/InSim)

## Coverage

All of InSim's features are not implemented yet, but you can follow the progress by clicking [here](COVERAGE).

## License

License information can be found in the [LICENSE](LICENSE) file.
