fetch('https://servers-frontend.fivem.net/api/servers/single/8vdrob')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const clientCount = data.Data.selfReportedClients;
        document.getElementById('activePlayers').textContent = `AKTİF OYUNCULAR ${clientCount}`;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });