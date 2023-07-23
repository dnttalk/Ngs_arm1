const net = require('net');
const HOST = '192.168.1.101';
const PORT = 8001;

const D844 = '500000FFFF03000C001000010400004C0300A80100';
const M812 = '500000FFFF03000C001000010401002C0300900100';
const M681 = '500000FFFF03000C00100001040100A90200900800';
const M682 = '500000FFFF03000C00100001040100AA0200900100';
const M683 = '500000FFFF03000C00100001040100AB0200900100';
const M684 = '500000FFFF03000C00100001040100AC0200900100';
const M685 = '500000FFFF03000C00100001040100AD0200900100';
const M686 = '500000FFFF03000C00100001040100AE0200900100';
const M687 = '500000FFFF03000C00100001040100AF0200900100';
const M688 = '500000FFFF03000C00100001040100B00200900100';
const 連線到伺服器 = () => {
  const client = net.connect(PORT, HOST, () => {
    console.log('已連線到伺服器');
    //  client.write(Buffer.from(D844, 'hex'));
    client.write(Buffer.from(M812, 'hex'));
    client.write(Buffer.from(M681, 'hex'));
    //  client.write(Buffer.from(M682, 'hex'));
    //  client.write(Buffer.from(M683, 'hex'));
    //  client.write(Buffer.from(M684, 'hex'));
    //  client.write(Buffer.from(M685, 'hex'));
    //  client.write(Buffer.from(M686, 'hex'));
    //  client.write(Buffer.from(M687, 'hex'));
    //  client.write(Buffer.from(M688, 'hex'));
  });

  let receivedData = ''; // 儲存接收到的資料

  client.on('data', (data) => {
    receivedData += data.toString('hex');
    console.log('接收到的資料:', receivedData);
    receivedData = '';

  });

  client.on('end', () => {
    console.log('已與伺服器斷開連線');
  });
};

連線到伺服器();