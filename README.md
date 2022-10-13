# **Spot Price Grabber**

This application visualize tomorrows spot-price for Swedens bidding zones and the hours and prices are displayed in a chart. The application is super easy to use and is designed with focus on clarity and accessibility.
#### Important! The module does not include the cost of electricity certificates, surcharges, energy tax, VAT and electricity grid costs.

---

## **Usage**
When you start the application you can choose one of four bidding zone and tomorrows prices will be displayed in a chart, as shown:<br>
[![ZaE8F9.md.png](https://iili.io/ZaE8F9.md.png)](https://freeimage.host/i/ZaE8F9)<br><br>

You can also choose to sort out which hours it is more advantageous to use propane according to the kilowatt price.<br>
[![ZaVjwJ.md.png](https://iili.io/ZaVjwJ.md.png)](https://freeimage.host/i/ZaVjwJ)

You can also use the calculator to get different values<br>
[![ZaXL2S.md.png](https://iili.io/ZaXL2S.md.png)](https://freeimage.host/i/ZaXL2S)


## **Motivation**
With today's electricity market in mind, this module was created as a tool for users who want to get tomorrow's hourly electricity prices. Furthermore, the data retrieved can be used to optimize electricity consumption in homes or in an application for visualize tomorrow's hourly price. By gaining an insight into when electricity is most expensive, this can help redirect consumption to hours when the price is lower and thus help lower electricity costs for people in their homes.

---

## **Code Style**
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

---

## **Dependencies**
```
chart.js,
chartjs-plugin-datalabels

```
 Chart.js - A simple and flexible chart npm package.<br>
 Chartjs-plugin-datalabels - adds different options to Chartjs.

---

## **Installation**
Clone the repository from Github by running the following command in the terminal. The repo will be cloned down to which the terminal path points to:
 ```
 git clone https://github.com/TessGrass/laboration-2.git
 ```

Open the cloned repo with any IDE, for example Visual Studio Code.

Use the package manager npm to install the module and it's dependencies. To install, simply type the following command in the terminal:
```bash
npm install
```
---

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
│       │──index.js
│       │──index.js
│
│───package.json
│───package-lock.json
│───README.md
│───Reflektion.md



```
---

## **How To Use The Module In Your Project**
* index.js is the main file which contains all the methods you want to use in your project.
* spotPriceApi.js contains private methods that takes care of the API request /response.
* validateInputHandler.js validates all inputs from a user and ensures that the entered value is correct.
* testModule.js is a way for a developer to try out the module and it's public methods right-away!


To run the testModule.js just open the terminal and type:
```
node testModule.js
```
or open package.json and under scripts add:
```
"start": "node testModule.js",
```
and then run the command:
```
npm start
```

## **A Quick Overview Of The Available Methods In index.js**
```javascript
'returns day ahead prices for all bidding zones'
getHourlyPricesAllBiddingZones()

'returns day ahead prices, in pennies, for a specific zone. If no prices are found it returns 0'
getHourlyPricesForOneBiddingZone(zone)

'returns the prices for a specific zone, sorted from highest to lowest'
sortHoursPerHighestPrice(zone)

'returns the prices for a specific zone, sorted from lowest to highest'
sortHoursPerLowestPrice(zone)

'returns the kilowatt price, in pennies, for propane'
calculatePropaneKilowattPrice (propanePrice, propaneKg)

'returns the hours when the propane, per kilowatt, is cheaper than kilowatt'
getHoursWhenPropaneIsCheaper(propanePricePerKwh, selectedZone)

'returns kilowatt'
calculateWattToKilowatt(watt)

'returns megawatt'
calculateKilowattToMegawatt(kilowatt)

'returns watt hours'
calculateConsumedWattToWattHours(watt, hoursRunning)

'returns the daily cost of running a device'
calculateConsumtionCostPerDayForProduct (watt, penniesPerKilowatt, hoursRunning)
```

## Contributing
Feel free to contribute! For major changes, please open an issue first to discuss what you would like to change.

## 1DV610-mjukvarukvalité-L1
This is assignment for the course 1DV610 att Linneus University.

## License
[MIT](https://choosealicense.com/licenses/mit/)
