document.addEventListener('DOMContentLoaded', function() {
    // 获取所有复制按钮
    const copyButtons = document.querySelectorAll('.copy-button');
    
    // 为每个按钮添加点击事件监听器
    copyButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // 获取需要复制的文本
            const textToCopy = this.getAttribute('data-clipboard-text');
            
            // 创建一个临时的输入框
            const tempInput = document.createElement('textarea');
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            
            // 选中输入框的内容
            tempInput.select();
            tempInput.setSelectionRange(0, tempInput.value.length);
            
            // 复制选中的文本到剪贴板
            try {
                document.execCommand('copy');
                // 复制成功后的操作，例如显示提示信息
                showCopySuccessMessage(event.pageX, event.pageY);
            } catch (err) {
                console.error('复制失败:', err);
            }
            
            // 移除临时输入框
            document.body.removeChild(tempInput);
        });
    });
});

function showCopySuccessMessage(x, y) {
    // 创建提示框
    const messageBox = document.createElement('div');
    messageBox.style.position = 'absolute';
    messageBox.style.left = `${x + 10}px`; // 在鼠标位置右侧显示
    messageBox.style.top = `${y - 20}px`; // 在鼠标位置上方显示
    messageBox.style.padding = '5px 10px';
    messageBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    messageBox.style.color = '#fff';
    messageBox.style.borderRadius = '5px';
    messageBox.style.fontSize = '14px';
    messageBox.style.zIndex = '10000';
    messageBox.textContent = '複製成功';
    
    // 将提示框添加到页面
    document.body.appendChild(messageBox);
    
    // 1秒后移除提示框
    setTimeout(() => {
        document.body.removeChild(messageBox);
    }, 1000);
}