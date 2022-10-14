

## **Kapitel 2 - Meaningful Names**
Det här kapitlet (ihop med Kapitel 3) är nog det kapitel jag reflekterat mest över när jag själv suttit och programmerat, kapitlet i sig är tydligt med tydliga exempel och jag fick med mig mycket matnyttig information och det var till exempel efter att jag läst det här kapitlet som jag fick idén att fråga min sambo om hon förstod några av de metodnamn jag hade skapat. Ett exempel på detta är följande metod som inte riktigt förklarade vad den gjorde:

FÖRE:<br>[![ZXiZ8J.png](https://iili.io/ZXiZ8J.png)](https://freeimage.host/sv)<br>
EFTER:<br>[![ZXswtp.png](https://iili.io/ZXswtp.png)](https://freeimage.host/sv)

Under sektionen "Pick one Word per Concept" så lyfter boken vikten av att vara konsekvent i sin namngivning och att inte blanda mellan till exempel get, fetch, retrieve. I mina metoder som hämtar information från api:et så har jag valt att använda mig av get, se bilderna ovan. Jag har även försökt att identifiera så kallade noise ord eller ord som inte bidrar till tydlighet, som detta exempel:

FÖRE:<br>[![Zh2JYQ.png](https://iili.io/Zh2JYQ.png)](https://freeimage.host/sv)<br>
EFTER:<br>[![Zh2bAN.png](https://iili.io/Zh2bAN.png)](https://freeimage.host/sv)

---

## **Kapitel 3 - Functions**
I det här kapitlet finns det så mycket viktiga punkter jag skulle vilja reflekta kring så det är svårt att hålla sig kortfattad. I alla fall, i kapitlet så poängteras det tidigt att metoder ska vara små och helst mindre än så. Jag har haft med mig detta in i laboration 2 och jag tycker många gånger att jag har lyckats hålla metoderna små och på samma abstraktionsnivå, som till exempel de här metoderna:<br>
[![Zhojol.md.png](https://iili.io/Zhojol.md.png)](https://freeimage.host/i/Zhojol)<br>

Däremot har jag fortsatta problem med förståelse kring hur jag skulle kunna bryta ner den här, jag har ägnat flertalet timmar åt detta och det är såklart en smäll mot självkänslan att inte lyckats bryta ner den på ett tillfredställande sätt, jag försöker tänka att det ändå är en vinst i sig att jag identierat problemet och att det som möjligtvis behövs är ytterligare ett par ögon som kan guida mig i rätt riktning, ibland kanske man måste acceptera att man inte kan lösa allt själv och att jag faktiskt är här för att lära mig?

[![Zh13Hx.md.png](https://iili.io/Zh13Hx.md.png)](https://freeimage.host/i/Zh13Hx) <br>

Boken lyfter även vikten av att ha så få argument som möjligt och det är en metod jag reflekterat över som tar tre argument just för att den behöver tre argument för att fungera? Hade detta kunnat lösas på annat sätt? Ekvationen kan inte lösas utan tre värden så någonstans måste dessa mötas?<br>

[![ZhOdue.md.png](https://iili.io/ZhOdue.md.png)](https://freeimage.host/i/ZhOdue)

---

## **Kapitel 4 - Comments**
"Truth can only be found in one place: the code" står det i kapitlet och det säger egentligen allt? Kommentarer som stöttar metoder som inte kan prata för sig själva är bra kommentarer, de fyller en funktion. Men precis som du nämner i en föreläsning så kan kommentarer istället bidra med försvårad förståelse och i värsta fall komma med rena lögner. Som kodstandard har jag kört EsLint MEN jag har inför laboration 2 stängt av regeln för jsDoc och tagit bort kommentarerna för de metoder som förklarar sig själva. Till exempel:<br>
[![ZjAEYB.md.png](https://iili.io/ZjAEYB.md.png)](https://freeimage.host/i/ZjAEYB)<br>

som efter borttagning av kommentarer skapar en tydlig överblick och i mina ögon, även en ökad förståelse:<br>
[![ZjEntV.png](https://iili.io/ZjEntV.png)](https://freeimage.host/sv)<br>

Det jag tar med mig från kapitlet är att om jag känner att jag måste skriva kommentarer så är det snarare så att jag bör se över metoden och försöka få den att prata för sig själv. Att jag ska tänka kommentarer som ett bevis för att metoden många gånger möjligtvis inte är tillräckligt bra.

---

## **Kapitel 5 - Formatting**
Eftersom jag följer EsLint kodstandard (sånär som den delen som handlar om kommentarer) så följer jag en standard som följs av många andra programmerare, vilket bidrar till att min kod ger en ökad förståelse och tydlighet i andras ögon. Under det här året jag har lärt mig att programmera så har jag känt att jag många gånger har varit inkonsekvent i hur jag ordnar metoderna vertikalt i mina klasser. Innan starten för den här kursen så hände det att alla publika metoder låg överst och sedan följdes de åt av de privata metoderna. Efter att ha läst kapitlet och sektionerna "Vertical Ordering" och "Dependent Functions" så har jag ändrat tankesätt och ser istället min kod som en tidning som ska läsas uppifrån och ner, vilket på ett naturligt sätt bidrar till att metoder som kallar på andra metoder i samma klass återfinns i närheten av varandra, vilket bidrar till en mer lättläst kod.
Exempel på detta 

## **Kapitel 6 - Object and Data Structures**

## **Kapitel 7 - Error handling**

## **Kapitel 8 - Boundaries**

## **Kapitel 9 - Unit Test**

## **Kapitel 10 - Classes**

## **Kapitel 11 - Systems**
