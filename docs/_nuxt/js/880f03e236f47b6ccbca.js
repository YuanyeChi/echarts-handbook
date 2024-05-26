(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{333:function(n,e,t){"use strict";t.r(e),e.default="# Axis\n\nThe x/y-axis in the Cartesian coordinate system.\n\n## x-axis, y-axis\n\nBoth x-axis and y-axis included axis line, tick, label and title. Some chart will use the grid to assist the data viewing and calculating.\n\n<img max-width=\"830\" width=\"100%\" height=\"100%\"\nsrc=\"images/design/axis/charts_axis_img02.jpg\">\n</img>\n\nA normal 2D coordinate system has x-axis and y-axis. X-axis located at the bottom while y-axis at the left side in common. The Config is shown below:\n\n```js\noption = {\n  xAxis: {\n    // ...\n  },\n  yAxis: {\n    // ...\n  }\n  // ...\n};\n```\n\nThe x-axis is usually used to declare the number of categories which was also called the aspects of observing the data: \"Sales Time\", \"Sales Location\" and \"product name\", etc.. The y-axis usually used to indicate the numerical value of categories. These data are used to examine the quantitative value of a certain type of data or some indicator you need to analyze, such as \"Sales Quantity\" and \"Sales Price\".\n\n```js\noption = {\n  xAxis: {\n    type: 'time',\n    name: 'Sales Time'\n    // ...\n  },\n  yAxis: {\n    type: 'value',\n    name: 'Sales Quantity'\n    // ...\n  }\n  // ...\n};\n```\n\nWhen x-axis has a large span, we can use the zoom method to display part of the data in the chart.\n\n```js\noption = {\n  xAxis: {\n    type: 'time',\n    name: 'Sales Time'\n    // ...\n  },\n  yAxis: {\n    type: 'value',\n    name: 'Sales Quantity'\n    // ...\n  },\n  dataZoom: []\n  // ...\n};\n```\n\nIn two-dimensional data, there can be more than two axes. There are usually two x or y axes at the same time in ECharts. You can change the config [offset](${optionPath}xAxis.offset) to avoid overlaps of axes at the same place. X-axes can be displayed at the top and bottom, y-axes at left and right.\n\n```js\noption = {\n  xAxis: {\n    type: 'time',\n    name: 'Sales Time'\n    // ...\n  },\n  yAxis: [\n    {\n      type: 'value',\n      name: 'Sales Quantity'\n      // ...\n    },\n    {\n      type: 'value',\n      name: 'Sales Price'\n      // ...\n    }\n  ]\n  // ...\n};\n```\n\n## Axis Line\n\nECharts provide the config of [axisLine](${optionPath}xAxis.axisLine). You can change the setting according to the demand, such as the arrow on two sides and the style of axes.\n\n```js\noption = {\n  xAxis: {\n    axisLine: {\n      symbol: 'arrow',\n      lineStyle: {\n        type: 'dashed'\n        // ...\n      }\n    }\n    // ...\n  },\n  yAxis: {\n    axisLine: {\n      symbol: 'arrow',\n      lineStyle: {\n        type: 'dashed'\n        // ...\n      }\n    }\n  }\n  // ...\n};\n```\n\n## Tick\n\nECharts provide the config [axisTick](${optionPath}xAxis.axisTick). You can change the setting according to the demand, such as the length of ticks, and the style of ticks.\n\n```js\noption = {\n  xAxis: {\n    axisTick: {\n      length: 6,\n      lineStyle: {\n        type: 'dashed'\n        // ...\n      }\n    }\n    // ...\n  },\n  yAxis: {\n    axisTick: {\n      length: 6,\n      lineStyle: {\n        type: 'dashed'\n        // ...\n      }\n    }\n  }\n  // ...\n};\n```\n\n## Label\n\nECharts provide the config [axisLabel](${optionPath}xAxis.axisLabel). You can change the setting according to the demand, such as the text alignment and the customized label content.\n\n```js\noption = {\n  xAxis: {\n    axisLabel: {\n      formatter: '{value} kg',\n      align: 'center'\n      // ...\n    }\n    // ...\n  },\n  yAxis: {\n    axisLabel: {\n      formatter: '{value} ¥',\n      align: 'center'\n      // ...\n    }\n  }\n  // ...\n};\n```\n\n## Example\n\nThe y-axis on the left side represents the monthly average temperature in Tokyo, the y-axis on the right side represents the precipitation of Tokyo. The x-axis represents the time. It reflects the trend and relation between the average temperature and precipitation.\n\n```js live\noption = {\n  tooltip: {\n    trigger: 'axis',\n    axisPointer: { type: 'cross' }\n  },\n  legend: {},\n  xAxis: [\n    {\n      type: 'category',\n      axisTick: {\n        alignWithLabel: true\n      },\n      axisLabel: {\n        rotate: 30\n      },\n      data: [\n        'January',\n        'February',\n        'March',\n        'April',\n        'May',\n        'June',\n        'July',\n        'August',\n        'September',\n        'October',\n        'November',\n        'December'\n      ]\n    }\n  ],\n  yAxis: [\n    {\n      type: 'value',\n      name: 'Precipitation',\n      min: 0,\n      max: 250,\n      position: 'right',\n      axisLabel: {\n        formatter: '{value} ml'\n      }\n    },\n    {\n      type: 'value',\n      name: 'Temperature',\n      min: 0,\n      max: 25,\n      position: 'left',\n      axisLabel: {\n        formatter: '{value} °C'\n      }\n    }\n  ],\n  series: [\n    {\n      name: 'Precipitation',\n      type: 'bar',\n      yAxisIndex: 0,\n      data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3]\n    },\n    {\n      name: 'Temperature',\n      type: 'line',\n      smooth: true,\n      yAxisIndex: 1,\n      data: [\n        6.0,\n        10.2,\n        10.3,\n        11.5,\n        10.3,\n        13.2,\n        14.3,\n        16.4,\n        18.0,\n        16.5,\n        12.0,\n        5.2\n      ]\n    }\n  ]\n};\n```\n\nThese are the concise intro of the usage of axis config. Check more details at: [Official Website](${optionPath}xAxis).\n"}}]);