# **SPOT PRICE GRABBER**

This application is aimed at an end user who are interested in getting tomorrow's electricity prices, hour by hour, for Swedens bidding zones. The application is super easy to use and is designed with focus on clarity and accessibility.<br> Are you a developer and interested in how it works? Go to this [Developer Guide](./Developer.md) where you will find more in-depth information about the application.<br><br>Important! The module does not include the cost of electricity certificates, surcharges, energy tax, VAT and electricity grid costs.
<br>

## **Usage**
When you start the application you can choose one of four bidding zone and tomorrows prices will be displayed in a chart, as shown below:<br>
[![ZaE8F9.md.png](https://iili.io/ZaE8F9.md.png)](https://freeimage.host/i/ZaE8F9)<br><br>

You can choose to sort out which hours it is more advantageous to use propane according to different kilowatt price:<br>
[![ZaVjwJ.md.png](https://iili.io/ZaVjwJ.md.png)](https://freeimage.host/i/ZaVjwJ)

You can also use the calculator to get different values:<br>
[![ZX0edx.md.png](https://iili.io/ZX0edx.md.png)](https://freeimage.host/i/ZX0edx)
<br>

## **Code Style**
EsLint - [eslint.org](https://eslint.org/)<br>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
<br>

## **Dependencies**

```
chart.js,
chartjs-plugin-datalabels
vite.js
```
Chart.js - A simple and flexible chart npm package [chartjs.org](https://www.chartjs.org/)<br>
Chartjs-plugin-datalabels - Adds different options to Chartjs.<br>
Vite.js - Allows developers to set up a development environment [vite.js](https://vitejs.dev/)<br>
<br>

## **Installation**
First, make sure that you have downloaded and installed Node.js and npm [nodejs.org](https://nodejs.org/en/download/)

You can go to the repository by clicking here [Link to Repo](https://github.com/TessGrass/laboration-2.git),
or you can clone the repository directly by running the following command in the terminal:

 ```
 git clone https://github.com/TessGrass/laboration-2.git
 ```

Open the cloned repo with any IDE, for example Visual Studio Code.
Use the package manager npm to install the module and it's dependencies. To install, simply type the following command in the terminal:
```bash
npm install
```

## **Overview**

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
│       └──index.js
│
│───Module should be placed at this level
│
│───Developer.md
│───package.json
│───package-lock.json
│───README.md
│───Reflection.md
│───Testrapport.md
```
## **Contributing**
Feel free to contribute! For major changes, please open an issue first to discuss what you would like to change.

## **1DV610-mjukvarukvalité-L2**
This is assignment for the course 1DV610 at Linneus University.

## **License**
[MIT](https://choosealicense.com/licenses/mit/)
