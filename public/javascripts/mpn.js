// 获取相关的DOM元素
const sampleNumberInput = document.getElementById('sampleNumberInput');
const sampleNameCells = document.querySelectorAll('#sampleTable td:nth-child(2)');

// 监听输入框的按键事件
sampleNumberInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        const sampleNumber = parseInt(sampleNumberInput.value);
        if (sampleNumber >= 1 && sampleNumber <= 24) {
            // 将多余的Sample name空格变为灰色
            for (let i = 0; i < sampleNameCells.length; i++) {
                if (i >= sampleNumber) {
                    sampleNameCells[i].classList.add('greyed-out');
                } else {
                    sampleNameCells[i].classList.remove('greyed-out');
                }
            }
        }
    }
});

// 监听Sample name输入框的内容变化事件
sampleNameCells.forEach(function (cell) {
    cell.addEventListener('input', function () {
        // 获取当前行的Index name单元格
        const indexNameCell = this.parentNode.querySelector('td:first-child');
        // 根据输入框内容的长度来判断是否使用不同颜色标记
        if (this.textContent.length > 0) {
            this.classList.add('sample-name-color');
            indexNameCell.classList.add('index-name-color');
        } else {
            this.classList.remove('sample-name-color');
            indexNameCell.classList.remove('index-name-color');
        }
    });
});