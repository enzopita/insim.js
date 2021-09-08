# InSim.js

A TypeScript version of the [InSim.NET](https://github.com/alexmcbride/insimdotnet) library

## Installing

```bash
$ yarn add insim.js
```

## Example
```typescript
import { InSim, PacketType } from 'insim.js';

const insim = new InSim({
  connection: {
    host: '127.0.0.1',
    port: 29999,
  },

  insimOptions: {
    name: 'InSim.js',
    prefix: '!',
  },
});

insim.on('error', error => {
  console.log('Error', error);
});

insim.bind<IS_MSO>(PacketType.ISP_MSO, (data) => {
  console.log('Chat message', data);
});

insim.connect();
```

## Coverage

The InSim.js library is under development, so it does not have full functionality compared to stable libraries published over a much longer period of time.

### Flags
- [x] PacketType
- [x] PassengerFlags
- [x] PitWorkFlags
- [x] PlayerFlags
- [x] PlayerTypes
- [x] PMOFlags
- [x] RaceFlags
- [x] ReplayOptions
- [x] UserType
- [x] ObjectFlags
- [x] InSimFlags
- [x] HostFlags
- [x] HlvcFlags
- [x] ContactFlags
- [x] ConfirmationFlags
- [x] CompCarFlags
- [x] ClickFlags
- [x] CharacterModifiers
- [x] CarFlags
- [x] ButtonStyles
- [x] BulbInfo
- [x] ActionFlags
- [x] OutGaugeFlags
- [x] DashLightFlags
- [x] StateFlags
- [x] MessageSound

### Packets

We have a total of 64 packages to be implemented. You will have an overview of their implementation in the library below.

- [ ] IS_ACR
- [ ] IS_AXI
- [ ] IS_AXM
- [ ] IS_AXO
- [ ] IS_BFN
- [ ] IS_BTC
- [ ] IS_BTN
- [ ] IS_BTT
- [ ] IS_CCH
- [ ] IS_CIM
- [ ] IS_CNL
- [ ] IS_CON
- [ ] IS_CPP
- [ ] IS_CPR
- [ ] IS_CRS
- [ ] IS_CSC
- [ ] IS_FIN
- [ ] IS_FLG
- [ ] IS_HCP
- [ ] IS_HLV
- [ ] IS_III
- [x] IS_ISI
- [x] IS_ISM
- [ ] IS_JRR
- [ ] IS_LAP
- [ ] IS_MCI
- [ ] IS_MOD
- [ ] IS_MSL
- [x] IS_MSO
- [ ] IS_MST
- [ ] IS_MSX
- [x] IS_MTC
- [ ] IS_NCI
- [ ] IS_NCN
- [ ] IS_NLP
- [ ] IS_NPL
- [ ] IS_OBH
- [ ] IS_OCO
- [ ] IS_PEN
- [ ] IS_PFL
- [ ] IS_PIT
- [ ] IS_PLA
- [ ] IS_PLC
- [ ] IS_PLL
- [ ] IS_PLP
- [ ] IS_PSF
- [ ] IS_REO
- [ ] IS_RES
- [ ] IS_RIP
- [ ] IS_RST
- [ ] IS_SCC
- [ ] IS_SCH
- [ ] IS_SFP
- [ ] IS_SLC
- [ ] IS_SMALL
- [ ] IS_SPX
- [ ] IS_SSH
- [ ] IS_STA
- [x] IS_TINY
- [ ] IS_TOC
- [ ] IS_TTC
- [ ] IS_UCO
- [ ] IS_VER
- [ ] IS_VTN

### InSim Relay

- [ ] IR_ARP
- [ ] IR_ARQ
- [ ] IR_ERR
- [ ] IR_HLR
- [ ] IR_HOS
- [ ] IR_SEL

### Sockets
- [x] TcpSocket
- [ ] UdpSocket

### Logic
- [x] PacketWriter
- [x] PacketReader

## LICENSE

This project is licensed under GPLv3
