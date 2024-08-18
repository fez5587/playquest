document.addEventListener('DOMContentLoaded', (event) => {
    var socket = io();

    socket.on('update', function(data) {
        var tableHeader = document.getElementById('table-header');
        var tableBody = document.getElementById('table-body');

        // Clear existing table content
        tableHeader.innerHTML = '';
        tableBody.innerHTML = '';

        if (data.length > 0) {
            // Create table headers
            var headers = Object.keys(data[0]);
            headers.forEach(header => {
                var th = document.createElement('th');
                th.textContent = header;
                tableHeader.appendChild(th);
            });

            // Create table rows
            data.forEach(row => {
                var tr = document.createElement('tr');
                headers.forEach(header => {
                    var td = document.createElement('td');
                    td.textContent = row[header];
                    tr.appendChild(td);
                });
                tableBody.appendChild(tr);
            });
        } else {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.colSpan = headers.length;
            td.textContent = 'No data available';
            tr.appendChild(td);
            tableBody.appendChild(tr);
        }
    });
});