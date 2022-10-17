# Testspecifikation
## **BESKRIVNING**
Modulen som ingår i laboration 1 har testats genom manuella tester vilket redovisats i en separat testrapport som går att hitta här [TestRapport](https://github.com/TessGrass/laboration-1/blob/main/test-rapport/Testrapport.md) <br>
 
## **ÖVERSIKT**
✅ - Test OK<br>
❌ - Test ej genomfört<br>

### **Funktionella Krav**
| Krav | Status | Testfall | Länk till Krav |
| ----------- | ----------- | ----------- | ----------- |
| A user can retrieve tomorrows spot-price | ✅ | TF 1 | [Krav 1](https://github.com/TessGrass/laboration-2/issues/2) |
| A user can sort hourly prices from lowest to highest| ❌ | TF 2 | [Krav 3](https://github.com/TessGrass/laboration-2/issues/3)  |
| A user can sort hours when propane is cheaper per kWh| ✅ | TF 3| [Krav 4](https://github.com/TessGrass/laboration-2/issues/4)  |
| A user can convert watt to kilowatt| ✅ | TF 4 | [Krav 5](https://github.com/TessGrass/laboration-2/issues/5)  |
| A user can convert kilowatt to megawatt | ✅ | TF 5 | [Krav 6](https://github.com/TessGrass/laboration-2/issues/6)  |
| A user can calculate the propane price per kWh | ✅ | TF 6 | [Krav 7](https://github.com/TessGrass/laboration-2/issues/7)  |
| A user can calculate consumption cost for a device | ✅ | TF 7 | [Krav 8](https://github.com/TessGrass/laboration-2/issues/8)  |
| The application should be user friendly | ✅ | TF 8 | [Krav 9](https://github.com/TessGrass/laboration-2/issues/10)  |
 
<br>

# Testfall
Öppna upp ett test för att ta del av utfallet

<details>
<summary>
<b>TF 1. A user can get tomorrows spot-price</b>
</summary>
<br>
<b>TESTADE SCENARION, TOTAL 4 ST.</b>
<br>
1) A user can choose between all four bidding zones. <br>Utfall:
 
[![tBivGn.md.png](https://iili.io/tBivGn.md.png)](https://freeimage.host/i/tBivGn)
<br>
<br>
2) From 1 p.m. the day before, when a bidding zone is chosen, the hourly prices are displayed in a chart.<br>Utfall:
 
[![tBQZGt.md.png](https://iili.io/tBQZGt.md.png)](https://freeimage.host/i/tBQZGt)
<br>
<br>
3) The chart should also display the hours.<br>Utfall:
 
[![tCHWaS.md.png](https://iili.io/tCHWaS.md.png)](https://freeimage.host/i/tCHWaS)
<br>
<br>
4) The chart should also display the costs.<br>Utfall:
 
[![tC9rIs.md.png](https://iili.io/tC9rIs.md.png)](https://freeimage.host/i/tC9rIs)
---
</details>
<details>
<summary>
<b>TF 2. A user can sort hourly prices from lowest to highest</b>
</summary>
<br>
<b>TESTADE SCENARION, TOTAL 0 ST.</b>
<br>
1) A user can sort hourly prices from lowest to highest<br>
Ej implementerat i denna version. Test utgår.
<br>
2) The sorted prices should be displayed in a chart<br>
Ej implementerat i denna version. Test utgår.
 
---
</details>
<details>
<summary>
<b>TF 3. A user can sort hours when propane is cheaper per kWh</b>
</summary>
<br>
<b>TESTADE SCENARION, TOTAL 3 ST.</b>
<br>
1) The user can sort the hourly prices based on a propane kWh price<br>Utfall:
 
[![tCxIbR.md.png](https://iili.io/tCxIbR.md.png)](https://freeimage.host/i/tCxIbR)<br><br>
2) The price displayed in the chart shows which hours its cheaper to use propane.<br>Utfall:<br>
[![tCBiNV.md.png](https://iili.io/tCBiNV.md.png)](https://freeimage.host/i/tCBiNV)
 
---
</details>
<details>
<summary>
<b>TF 4. A user can convert watt to kilowatt</b>
</summary>
<br>
<b>TESTADE SCENARION, TOTAL 1 ST.</b>
<br>
1) A user should be able to enter a watt value and have it converted to kilowatt.<br>Utfall:
 
[![tCArU7.md.png](https://iili.io/tCArU7.md.png)](https://freeimage.host/i/tCArU7)
---
</details>
<details>
<summary>
<b>TF 5. A user can convert kilowatt to megawatt</b>
</summary>
<br>
<b>TESTADE SCENARION, TOTAL 1 ST.</b>
<br>
1) A user should be able to enter a kilowatt value and have it converted to megawatt.<br>Utfall:
 
[![tCc8ib.md.png](https://iili.io/tCc8ib.md.png)](https://freeimage.host/i/tCc8ib)
</details>
<details>
<summary>
<b>TF 6. A user can calculate the propane price per kWh</b>
</summary>
<br>
<b>TESTADE SCENARION, TOTAL 1 ST.</b>
<br>
1) A user can enter the weight of the propane in kilograms and the price for propane in Swedish crowns. The user should then be presented with the propane kWh price in Swedish ören.<br>Utfall:
 
[![tC3KiJ.md.png](https://iili.io/tC3KiJ.md.png)](https://freeimage.host/i/tC3KiJ)<br>
 
</details>
<details>
<summary>
<b>TF 7. A user can calculate consumption cost for a device</b>
</summary>
<br>
<b>TESTADE SCENARION, TOTAL 1 ST.</b>
<br>
1) A user can enter a device watt, kWh price in Swedish ören and number of hours a device is running per day. The user should then be presented with the daily cost of the device running each day.<br>Utfall:
 
[![tCjGcX.md.png](https://iili.io/tCjGcX.md.png)](https://freeimage.host/i/tCjGcX)<br>

</details>
<details>
<summary>
<b>TF 8. The application should be user friendly</b>
</summary>
<br>
<b>TESTADE SCENARION, TOTAL 5 ST.</b>
<br>
<br>
1) The application should prevent user from input the wrong type of value.<br>
Tanken med applikationen är att det för en slutanvändare ska vara enkelt att göra rätt men svårt att göra fel. Applikationen stänger därför möjlighten att mata in någon annan datatyp än Number i fälten<br> Test har genomförts på samtliga fält att det inte går att mata in bokstäver och kontroll i koden visar att fälten enbart accepterar "number" som datatyp:
<br>
<br>

[![tCka4V.png](https://iili.io/tCka4V.png)](https://freeimage.host/sv)
<br>
<br>
2) The application should prompt the user to enter all missing fields.<br>Utfall:
<br>

[![txojTJ.png](https://iili.io/txojTJ.png)](https://freeimage.host/sv)
<br>

[![txCi9s.png](https://iili.io/txCi9s.png)](https://freeimage.host/sv)
<br>

[![txn5Vp.png](https://iili.io/txn5Vp.png)](https://freeimage.host/sv)
<br>

[![txnrWQ.md.png](https://iili.io/txnrWQ.md.png)](https://freeimage.host/i/txnrWQ)
<br>

[![txnMbf.md.png](https://iili.io/txnMbf.md.png)](https://freeimage.host/i/txnMbf)
<br><br>
3) The application should inform the user that the hourly does NOT include the cost of electricity certificates, surcharges, energy tax, VAT and electricity grid costs.<br>Utfall:

[![tnDQP2.md.png](https://iili.io/tnDQP2.md.png)](https://freeimage.host/i/tnDQP2)<br>
<br>
4) The application table should be designed with consideration for users with color blindness.<br>
Grafen består av både färger och mönster enligt de råd som finns tillgängliga här [We Are Colorblind](https://wearecolorblind.com/)<br> Utfall:<br>

[![tBQZGt.md.png](https://iili.io/tBQZGt.md.png)](https://freeimage.host/i/tBQZGt)<br>
<br>
5) A link to Swedens bidding zones should be available.<br>Utfall:<br>

 [![toJgqJ.png](https://iili.io/toJgqJ.png)](https://freeimage.host/sv) <br><br>
 
 Följer man sedan länken så tas användaren till Svenska Kraftnäts hemsida:<br>
 [![to9mjn.md.png](https://iili.io/to9mjn.md.png)](https://freeimage.host/i/to9mjn)

<br>
</details>
<br>
 
---
