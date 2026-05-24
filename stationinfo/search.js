function loadRouteDirections() {
    const rows = document.querySelectorAll('.station-table tbody tr');

    rows.forEach(tr => {
        const routeName = tr.querySelector('td b').textContent.trim();
        const directionCell = tr.querySelectorAll('td')[1];

        const route = busRoutes.find(item => item.name === routeName);

        if (route && route.desc) {
            const reg = /[:：]\s*([^，,]+)/;
            const match = route.desc.match(reg);
            if (match && match[1]) {
                directionCell.textContent = match[1].trim();
            }
        }
    });
}

function bindRowClick() {
    document.querySelectorAll('.station-table tbody tr').forEach(tr => {
        const routeName = tr.querySelector('td b').textContent.trim();
        const route = busRoutes.find(item => item.name === routeName);

        tr.style.cursor = 'pointer';

        if (route && route.url && !route.url.includes('404.html')) {
            tr.onclick = () => window.location.href = route.url;
        } else {
            tr.onclick = () => window.location.href = '../404.html';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadRouteDirections();
    bindRowClick();
});