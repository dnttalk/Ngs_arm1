document.getElementById('leukemiaBtn').addEventListener('click', function () {
    alert('您點擊了 Leukemia 按鈕');
});

document.getElementById('tp53Btn').addEventListener('click', function () {
    alert('您點擊了 TP53 按鈕');
});

document.getElementById('mpnBtn').addEventListener('click', function () {
    alert('您點擊了 MPN 按鈕');
});

document.getElementById('pcrUnloadBtn').addEventListener('click', function () {
    alert('您點擊了 PCR開蓋按鈕');
    const startButton = document.getElementById('pcrUnloadBtn');
    const apiUrl = 'http://127.0.0.1/:8080/api/start'; // 替换为你的 API 服务器地址
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // 打印服务器的响应
        })
        .catch(error => {
            console.error('错误:', error);
        });
});
document.getElementById('pcrloadBtn').addEventListener('click', function () {
    alert('您點擊了 PCR開蓋按鈕');
    const startButton = document.getElementById('pcrloadBtn');
    const apiUrl = 'http://127.0.0.1/:8080/api/start'; // 替换为你的 API 服务器地址
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // 打印服务器的响应
        })
        .catch(error => {
            console.error('错误:', error);
        });
});
