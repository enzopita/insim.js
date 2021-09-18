## 0.1.2 (2021-09-09)


### Code Refactoring

* rewrites poorly coded classes and merges InSim option ([2a0bcd0](https://github.com/enzopita/insim.js/commit/2a0bcd0fcf67f69eefdc5e357b882e461568a500))


### Features

* **client:** function for creating message and command packets ([23d6923](https://github.com/enzopita/insim.js/commit/23d69237970e23498664e9e387ba4642b9b267af))
* **packets:** create IS_MST packet ([39b1da0](https://github.com/enzopita/insim.js/commit/39b1da032d92e3b058853dcfeee9f17b62c76077))
* **packets:** create IS_MSX packets ([362dac8](https://github.com/enzopita/insim.js/commit/362dac826226727336b365495662084b173f532d))


### BREAKING CHANGES

* You can no longer put the InSim options into the 'insimOptions' property, and you
also cannot put the connection options into 'connection' since both have been merged.



