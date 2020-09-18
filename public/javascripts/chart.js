const ctx = document.getElementById("chart").getContext("2d");

fetch("/api/menu/")
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
            backgroundColor: "rgba(123, 7, 230, .2)",
            borderColor: "rgba(123, 7, 230, 1)",
            data: data.map((d) => d.data[0]),
          },
          {
            label: "English",
            backgroundColor: "rgba(24, 99, 67, .2)",
            borderColor: "rgba(24, 99, 67, 1)",
            data: data.map((d) => d.data[1]),
          },
          {
            label: "Sales",
            backgroundColor: "rgba(67, 2, 222, .2)",
            borderColor: "rgba(67, 2, 222, 1)",
            data: data.map((d) => d.data[2]),
          },
          {
            label: "Support",
            backgroundColor: "rgba(167, 200, 2, .2)",
            borderColor: "rgba(167, 200, 2, 1)",
            data: data.map((d) => d.data[3]),
          },
          {
            label: "Other",
            backgroundColor: "rgba(290, 5, 132, .2)",
            borderColor: "rgba(290, 5, 132, 1)",
            data: data.map((d) => d.data[4]),
          },
          /** {
                label: '',
                backgroundColor: 'rgba(4, 2, 55)',
                borderColor: 'rgba(4, 2, 55)',
                data: data.map((d) => d.data[5])
            },{
                label: '6',
                backgroundColor: 'rgba(80, 99, 132)',
                borderColor: 'rgba(80, 99, 132)',
                data: data.map((d) => d.data[6])
            },{
                label: '7',
                backgroundColor: 'rgba(12, 145, 55)',
                borderColor: 'rgba(12, 145, 55)',
                data: data.map((d) => d.data[7])
            },{
                label: '8',
                backgroundColor: 'rgba(295, 99, 80)',
                borderColor: 'rgba(295, 99, 80)',
                data: data.map((d) => d.data[8])
            }
            ,{
                label: '9',
                backgroundColor: 'rgba(255, 160, 132)',
                borderColor: 'rgba(255, 160, 132)',
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
              stacked: true,
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
          backgroundColor: "rgbaa(0, 0, 0, 0.4)",
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
