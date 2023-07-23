const net = require('net');

const HOST = '192.168.1.101';
const PORT = 8001;
const M812 = '500000FFFF03000C001000010401002C0300900100';
const D844 = '500000FFFF03000C001000010401004C0300A80100';

const 連線到伺服器 = () => {
  const client = net.connect(PORT, HOST, () => {
    console.log('已連線到伺服器');
    // 若要傳送第一個資料封包，請將下面這行取消註解
    // client.write(Buffer.from(M812, 'hex'));
    client.write(Buffer.from(D844, 'hex'));
  });

  client.on('data', (data) => {
    console.log('接收到的資料:', data.toString('hex'));
    // 在這裡處理接收到的資料
    // ...
  });

  client.on('end', () => {
    console.log('已與伺服器斷開連線');
  });
};

連線到伺服器();