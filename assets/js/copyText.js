document.addEventListener('DOMContentLoaded', function() {
    // 获取所有复制按钮
    const copyButtons = document.querySelectorAll('.copy-button');
    
    // 为每个按钮添加点击事件监听器
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
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
                alert('文本已复制到剪贴板！');
            } catch (err) {
                console.error('复制失败:', err);
            }
            
            // 移除临时输入框
            document.body.removeChild(tempInput);
        });
    });
});