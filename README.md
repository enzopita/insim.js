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

We have a total of 26/64 packages to be implemented. You will have an overview of their implementation in the library below.

- [ ] IS_ACR
- [ ] IS_AXI
- [ ] IS_AXM
- [ ] IS_AXO
- [x] IS_BFN
- [x] IS_BTC
- [x] IS_BTN
- [x] IS_BTT
- [ ] IS_CCH
- [ ] IS_CIM
- [x] IS_CNL
- [x] IS_CON
- [ ] IS_CPP
- [x] IS_CPR
- [ ] IS_CRS
- [ ] IS_CSC
- [ ] IS_FIN
- [ ] IS_FLG
- [ ] IS_HCP
- [ ] IS_HLV
- [ ] IS_III
- [x] IS_ISI
- [x] IS_ISM
- [x] IS_JRR
- [ ] IS_LAP
- [x] IS_MCI
- [ ] IS_MOD
- [ ] IS_MSL
- [x] IS_MSO
- [x] IS_MST
- [x] IS_MSX
- [x] IS_MTC
- [x] IS_NCI
- [x] IS_NCN
- [ ] IS_NLP
- [x] IS_NPL
- [x] IS_OBH
- [x] IS_OCO
- [ ] IS_PEN
- [ ] IS_PFL
- [ ] IS_PIT
- [ ] IS_PLA
- [x] IS_PLC
- [x] IS_PLL
- [x] IS_PLP
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
- [x] IS_UCO
- [x] IS_VER
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
