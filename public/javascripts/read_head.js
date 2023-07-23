const net = require('net');
const HOST = '192.168.1.101';
const PORT = 8001;

const M681 = '500000FFFF03000C00100001040100A90200900800';

const 連線到伺服器 = () => {
  return new Promise((resolve) => {
    const client = net.connect(PORT, HOST, () => {
      console.log('已連線到伺服器');
      client.write(Buffer.from(M681, 'hex'));
    });

    let receivedData = ''; // 儲存接收到的資料

    client.on('data', (data) => {
      receivedData += data.toString('hex');
      console.log('接收到的資料:', receivedData);

      // 判斷是否接收到完整的資料包
      if (receivedData.length >= 20) { // 假設每筆資料包長度為20
        client.end(); // 結束此次連線，準備下一次測試
      }
    });

    client.on('end', () => {
      console.log('已與伺服器斷開連線');
      resolve();
    });
  });
};

// 重複測試 100 次
const repeatTest = async (times) => {
  for (let i = 0; i < times; i++) {
    console.log(`第 ${i + 1} 次測試：`);
    await 連線到伺服器();

    // 等待 1 秒再進行下一次測試
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
};

const testCount = 100;
repeatTest(testCount);