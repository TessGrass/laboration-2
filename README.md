# **SPOT PRICE GRABBER**

This application is aimed at an end user who are interested in getting tomorrow's electricity prices, hour by hour, for Swedens bidding zones. The application is super easy to use and is designed with focus on clarity and accessibility.<br> Are you an developer and interested in how it works? Go to this [Repo](https://github.com/TessGrass/laboration-1.git) where you will find the module that this application is built upon. Feel free to try it yourself.
#### Important! The module does not include the cost of electricity certificates, surcharges, energy tax, VAT and electricity grid costs.
<br>

## **Motivation**
---
With today's electricity market in mind, this application was created as a tool for users who want to get tomorrow's hourly electricity prices. Furthermore, the data retrieved can be used to optimize electricity consumption in homes or in an application for visualize tomorrow's hourly price. By gaining an insight into when electricity is most expensive, this can help redirect consumption to hours when the price is lower and thus help lower electricity costs for people in their homes.
<br><br>

## **Usage**
---
When you start the application you can choose one of four bidding zone and tomorrows prices will be displayed in a chart, as shown:<br>
[![ZaE8F9.md.png](https://iili.io/ZaE8F9.md.png)](https://freeimage.host/i/ZaE8F9)<br><br>

You can also choose to sort out which hours it is more advantageous to use propane according to the kilowatt price:<br>
[![ZaVjwJ.md.png](https://iili.io/ZaVjwJ.md.png)](https://freeimage.host/i/ZaVjwJ)

You can also use the calculator to get different values:<br>
[![ZX0edx.md.png](https://iili.io/ZX0edx.md.png)](https://freeimage.host/i/ZX0edx)
<br><br>

## **Code Style**
---
Javascript Standard<br>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
<br><br>

## **Dependencies**
---
```
chart.js,
chartjs-plugin-datalabels

```
 Chart.js - A simple and flexible chart npm package.<br>
 Chartjs-plugin-datalabels - adds different options to Chartjs.
<br><br>

## **Installation**
---
You can go to the repository by clicking the link [Link to Repo](https://github.com/TessGrass/laboration-2.git)
or you can clone the repository from Github by running the following command in the terminal.<br>The repo will be cloned down to which the terminal path points to:

 ```
 git clone https://github.com/TessGrass/laboration-2.git
 ```

Open the cloned repo with any IDE, for example Visual Studio Code.

Use the package manager npm to install the module and it's dependencies. To install, simply type the following command in the terminal:
```bash
npm install
```
<br><br>

## **Overview**
---

```
Laboration 2  
│
└───app/
│   │
│   └───src/
│       │
│       │──components/
│       │         │
│       │         │───chart/
│       │         │     │───chart.js
│       │         │     └───index.js
│       │         │
│       │         │───custom-buttom/
│       │         │     │───customButton.js
│       │         │     └───index.js
│       │         │
│       │         │───desktop-main/
│       │         │     │───desktopMain.js
│       │         │     └───index.js
│       │         │
│       │         │───watt-converter/
│       │         │     │───wattConverter.js
│       │         │     └──index.js
│       │ 
│       │──controller/
│       │         │
│       │         │───apiController/
│       │         │     └───apiController.js
│       │         │
│       │         └───converterController/
│       │               └───converterController.js
│       │         
│       │──css/
│       │  └───styles.css
│       │ 
│       │──index.html
│       │──index.js
│       │──index.js
│
│───package.json
│───package-lock.json
│───README.md
│───Reflektion.md


```

## Contributing
Feel free to contribute! For major changes, please open an issue first to discuss what you would like to change.

## 1DV610-mjukvarukvalité-L2
This is assignment for the course 1DV610 att Linneus University.

## License
[MIT](https://choosealicense.com/licenses/mit/)
