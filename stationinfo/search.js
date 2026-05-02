// 整行点击跳转 —— 自动匹配 businfo.js 里的线路URL
document.querySelectorAll('.station-table tbody tr').forEach(tr => {
    // 获取当前行的线路名，例如 "1路"
    const routeName = tr.querySelector('td b').textContent.trim();

    // 在 businfo.js 中找到同名线路
    const route = busRoutes.find(item => item.name === routeName);

    // 如果找到有效URL，绑定点击跳转；否则绑定跳转到404
    if (route && route.url && !route.url.includes('404.html')) {
        tr.style.cursor = 'pointer'; // 鼠标变手型
        tr.onclick = () => {
            window.location.href = route.url; // 当前页打开
        };
    } else {
        // 未找到线路、无URL、URL包含404时，点击跳转到404页面
        tr.style.cursor = 'pointer'; // 保持鼠标手型（可选）
        tr.onclick = () => {
            window.location.href = '../404.html'; // 跳转到上级目录的404.html
        };
    }
});
