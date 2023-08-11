import { useState, useEffect } from "react";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import StockChart from "highcharts/modules/stock";
import { useSelector } from "react-redux";

StockChart(Highcharts);

const Chart = () => {
  const { graphData } = useSelector((state) => state.search);
  const [ohlc, setOhlc] = useState([]);
  const [volume, setVolume] = useState([]);

  useEffect(() => {
    const ohlcData = [],
      volumeData = [];

    graphData.values.map((obj) => {
      ohlcData.push([
        Date.parse(obj.datetime),
        parseFloat(obj.open),
        parseFloat(obj.high),
        parseFloat(obj.low),
        parseFloat(obj.close),
      ]);

      volumeData.push([Date.parse(obj.datetime), parseFloat(obj.volume)]);
    });

    setOhlc(ohlcData);
    setVolume(volumeData);
    console.log(ohlcData);
    console.log(volumeData);
  }, [graphData]);

  const options = {
    colors: ["#C5C6D0", "#0A0908", "#22333B", "#EAE0D5", "#C6AC8F", "#5E503F"],

    scrollbar: {
      barBackgroundColor: "#EAE0D5",
      liveRedraw: true,
    },

    chart: {
      height: 600,
      backgroundColor: "#5E503F",
    },

    loading: {
      color: "#EAE0D5",
    },

    credits: {
      enabled: false,
    },

    rangeSelector: {
      inputEnabled: false,
      dropdown: "responsive",
      selected: 0,

      buttons: [
        {
          type: "month",
          count: 1,
          text: "1m",
          title: "View 1 month",
        },
        {
          type: "month",
          count: 3,
          text: "3m",
          title: "View 3 months",
        },
        {
          type: "month",
          count: 6,
          text: "6m",
          title: "View 6 months",
        },
        {
          type: "ytd",
          text: "YTD",
          title: "View year to date",
        },
        {
          type: "year",
          count: 1,
          text: "1y",
          title: "View 1 year",
        },
        {
          type: "all",
          text: "All",
          title: "View all",
        },
      ],

      buttonTheme: {
        width: 40,
        fill: "#EAE0D5",
        r: 10,
        style: {
          color: "#5E503F",
          fontWeight: "bold",
        },
      },
    },

    title: {
      text: `${graphData.meta.symbol.toUpperCase()} Historical Price and Volume`,
      style: {
        color: "#EAE0D5",
      },
    },

    yAxis: [
      {
        labels: {
          align: "right",
          x: -3,
          style: {
            color: "#EAE0D5",
          },
        },
        title: {
          text: "OHLC",
          style: {
            color: "#EAE0D5",
          },
        },
        height: "60%",
        lineWidth: 1,
        lineColor: "#EAE0D5",
        resize: {
          enabled: true,
        },
      },
      {
        labels: {
          align: "right",
          x: -3,
          style: {
            color: "#EAE0D5",
          },
        },
        title: {
          text: "Volume",
          style: {
            color: "#EAE0D5",
          },
        },
        top: "65%",
        height: "35%",
        offset: 0,
        lineWidth: 1,
        lineColor: "#EAE0D5",
      },
    ],

    xAxis: [
      {
        labels: {
          style: {
            color: "#EAE0D5",
          },
        },
        lineColor: "#EAE0D5",
        tickColor: "#EAE0D5",
      },
    ],

    tooltip: {
      backgroundColor: "#EAE0D5",
      borderColor: "##22333B",
      split: true,
      style: {
        color: "#22333B",
      },
    },

    series: [
      {
        type: "candlestick",
        name: graphData.meta.symbol.toUpperCase(),
        data: ohlc,
      },
      {
        type: "column",
        name: "Volume",
        data: volume,
        yAxis: 1,
      },
    ],
  };
  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={options}
    />
  );
};

export default Chart;
