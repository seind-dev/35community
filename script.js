fetch('https://servers-frontend.fivem.net/api/servers/single/8vdrob')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const clientCount = data.Data.selfReportedClients;
        document.getElementById('activePlayers').textContent = `AKTİF ${clientCount} OYUNCU`;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

document.addEventListener('DOMContentLoaded', function () {
    const tooltips = document.querySelectorAll('.navbarCenter a');

    tooltips.forEach(item => {
        item.addEventListener('mouseenter', function () {
            const tooltip = this.querySelector('.tooltip');
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });

        item.addEventListener('mouseleave', function () {
            const tooltip = this.querySelector('.tooltip');
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
    });
});

