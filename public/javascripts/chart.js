const ctx = document.getElementById("chart").getContext("2d");

fetch("./api/menu/")
  .then((response) => response.json())
  .then(function (data) {
    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "line",

      // The data for our dataset
      data: {
        labels: data.map((d) => d.date),
        datasets: [
          {
            label: "Again",
            backgroundColor: "rgb(123, 7, 230)",
            borderColor: "rgb(123, 7, 230)",
            data: data.map((d) => d.data[0]),
          },
          {
            label: "English",
            backgroundColor: "rgb(24, 99, 67)",
            borderColor: "rgb(24, 99, 67)",
            data: data.map((d) => d.data[1]),
          },
          {
            label: "Sales",
            backgroundColor: "rgb(67, 2, 222)",
            borderColor: "rgb(67, 2, 222)",
            data: data.map((d) => d.data[2]),
          },
          {
            label: "Support",
            backgroundColor: "rgb(167, 200, 2)",
            borderColor: "rgb(167, 200, 2)",
            data: data.map((d) => d.data[3]),
          },
          {
            label: "Other",
            backgroundColor: "rgb(290, 5, 132)",
            borderColor: "rgb(290, 5, 132)",
            data: data.map((d) => d.data[4]),
          },
          /** {
                label: '',
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
            **/
        ],
      },

      // Configuration options go here
      options: {
        maintainAspectRatio: true,
        responsive: true,
        ticks: {
          source: "auto",
        },
        scales: {
          xAxes: [
            {
              id: "x-axis",
              ticks: {
                autoSkip: true,
                maxRotation: 45,
                offset: true,
              },
              time: {
                unit: "day",
              },
              callback() {
                return value;
              },
              distribution: "linear",
              gridLines: {
                display: true,
              },
              scaleLabel: {
                fontColor: "#75828F",
                fontSize: 10,
              },
            },
          ],
          yAxes: [
            {
              id: "y-axis",
              type: "linear",
              ticks: {
                display: true,
                beginAtZero: false,
                callback(value) {
                  return value;
                },
              },
              gridLines: {
                display: true,
                drawBorder: true,
              },
            },
          ],
        },
        tooltips: {
          bodyFontColor: "#fff",
          bodySpacing: 8,
          bodyFontSize: 13,
          bodyFontStyle: "normal",
          bodyMarginBottom: 0,
          xPadding: 15,
          yPadding: 15,
          intersect: false,
          displayColors: true,
          cornerRadius: 6,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          mode: "label",
          callbacks: {},
        },
        legend: {
          display: true,
        },
        animation: {
          duration: 1000,
          easing: "easeOutQuint",
        },
      },
    });
  });
