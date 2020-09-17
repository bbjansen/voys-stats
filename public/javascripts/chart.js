
const ctx = document.getElementById('chart').getContext('2d');

fetch('./menu/').then(response => response.json()) .then(function(data) {

    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: data.map((d) => d.date),
            datasets: [{
                label: '0',
                backgroundColor: 'rgb(123, 7, 230)',
                borderColor: 'rgb(123, 7, 230)',
                data: data.map((d) => d.data[0])
            },{
                label: '1',
                backgroundColor: 'rgb(24, 99, 67)',
                borderColor: 'rgb(24, 99, 67)',
                data: data.map((d) => d.data[1])
            },{
                label: '2',
                backgroundColor: 'rgb(67, 2, 222)',
                borderColor: 'rgb(67, 2, 222)',
                data: data.map((d) => d.data[2])
            },{
                label: '3',
                backgroundColor: 'rgb(167, 200, 2)',
                borderColor: 'rgb(167, 200, 2)',
                data: data.map((d) => d.data[3])
            },{
                label: '4',
                backgroundColor: 'rgb(290, 5, 132)',
                borderColor: 'rgb(290, 5, 132)',
                data: data.map((d) => d.data[4])
            },{
                label: '5',
                backgroundColor: 'rgb(4, 2, 55)',
                borderColor: 'rgb(4, 2, 55)',
                data: data.map((d) => d.data[5])
            },{
                label: '6',
                backgroundColor: 'rgb(80, 99, 132)',
                borderColor: 'rgb(80, 99, 132)',
                data: data.map((d) => d.data[6])
            },{
                label: '7',
                backgroundColor: 'rgb(12, 145, 55)',
                borderColor: 'rgb(12, 145, 55)',
                data: data.map((d) => d.data[7])
            },{
                label: '8',
                backgroundColor: 'rgb(295, 99, 80)',
                borderColor: 'rgb(295, 99, 80)',
                data: data.map((d) => d.data[8])
            }
            ,{
                label: '9',
                backgroundColor: 'rgb(255, 160, 132)',
                borderColor: 'rgb(255, 160, 132)',
                data: data.map((d) => d.data[9])
            }
        ]
        },

        // Configuration options go here
        options: {}
    });


})


