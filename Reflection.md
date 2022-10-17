

## **Kapitel 2 - Meaningful Names**
Det här kapitlet (ihop med Kapitel 3) är nog det kapitel jag reflekterat mest över när jag själv suttit och programmerat, kapitlet i sig är tydligt med distinkta exempel och jag fick med mig en stor del matnyttig information. Det var till exempel efter att jag läst det här kapitlet som jag fick idén att fråga min sambo om hon förstod några av de metodnamn jag hade skapat. Ett exempel på detta är följande metod som inte riktigt förklarade vad den gjorde:

FÖRE:<br>[![ZXiZ8J.png](https://iili.io/ZXiZ8J.png)](https://freeimage.host/sv)<br>
EFTER:<br>[![ZXswtp.png](https://iili.io/ZXswtp.png)](https://freeimage.host/sv)

Under sektionen "Pick one Word per Concept" så lyfter boken vikten av att vara konsekvent i sin namngivning och att inte blanda mellan till exempel get, fetch, retrieve. I mina metoder som hämtar information från api:et så har jag valt att använda mig av get, se bilderna ovan. Jag har även försökt att identifiera så kallade noise ord eller ord som inte bidrar till tydlighet, som detta exempel:

FÖRE:<br>[![Zh2JYQ.png](https://iili.io/Zh2JYQ.png)](https://freeimage.host/sv)<br>
EFTER:<br>[![Zh2bAN.png](https://iili.io/Zh2bAN.png)](https://freeimage.host/sv)

Jag märker själv att jag har en förmåga att låta mina variabelnamn bli långa, ibland kanske lite väl långa? För på samma sätt som att korta namn är svåra att förstå så gäller samma sak även åt andra hållet. Ett exempel jag hittat i min kod är följande variabel i chart.js:<br>
<br>

[![Ztxaqu.png](https://iili.io/Ztxaqu.png)](https://freeimage.host/sv)

Eftersom ett av Javascript nackdelar (enligt mig själv) är att det inte går att utläsa vilken datatyp som lagrats utan att låta namnet skvallra och i detta fall så gömmer det sig en boolean eftersom namnet börjar med "is". Men är detta ett namn som är i det längsta laget?

## **Kapitel 3 - Functions**
I det här kapitlet finns det så många viktiga punkter jag skulle vilja reflekta kring så det är svårt att hålla sig kortfattad. I alla fall, i kapitlet så poängteras det tidigt att metoder ska vara små och helst mindre än så. Jag har haft med mig detta in i laboration 2 och jag tycker många gånger att jag har lyckats hålla metoderna små och på samma abstraktionsnivå, som till exempel de här metoderna:<br>
[![Zhojol.md.png](https://iili.io/Zhojol.md.png)](https://freeimage.host/i/Zhojol)<br>

Däremot har jag fortsatta problem med förståelse kring hur jag skulle kunna bryta ner den här, jag har ägnat flertalet timmar åt detta och det är såklart en smäll mot självkänslan att inte lyckats bryta ner den på ett tillfredställande sätt, jag försöker tänka att det ändå är en vinst i sig att jag identierat problemet och att det som möjligtvis behövs är ytterligare ett par ögon som kan guida mig i rätt riktning, ibland kanske man måste acceptera att man inte kan lösa allt själv och att jag faktiskt är här för att lära mig?

[![Zh13Hx.md.png](https://iili.io/Zh13Hx.md.png)](https://freeimage.host/i/Zh13Hx) <br>

Boken lyfter även vikten av att ha så få argument som möjligt och det är en metod jag reflekterat över som tar tre argument just för att den behöver tre argument för att fungera. Hade detta kunnat lösas på annat sätt? Ekvationen kan inte lösas utan tre värden så någonstans måste dessa mötas? Ett alternativ är att deklarera variablerna globalt men då bryter vi istället mot regeln "Variables should be declared as close to their usage as possible" som återfinns under sektionen "Variable Declarations" i kapitel 5.<br>

[![ZhOdue.md.png](https://iili.io/ZhOdue.md.png)](https://freeimage.host/i/ZhOdue)

## **Kapitel 4 - Comments**
"Truth can only be found in one place: the code" står det i kapitlet och det säger egentligen allt? Kommentarer som stöttar metoder som inte kan prata för sig själva är bra kommentarer, de fyller en funktion. Men precis som du nämner i en föreläsning så kan kommentarer istället bidra med försvårad förståelse och i värsta fall komma med rena lögner. Som kodstandard har jag kört EsLint men jag har inför laboration 2 stängt av regeln för jsDoc och tagit bort kommentarerna för de metoder som jag anser förklarar sig själva. Till exempel:<br>
[![ZjAEYB.md.png](https://iili.io/ZjAEYB.md.png)](https://freeimage.host/i/ZjAEYB)<br>

som efter borttagning av kommentarer skapar en tydlig överblick och i mina ögon även en ökad förståelse:<br>
[![ZjEntV.png](https://iili.io/ZjEntV.png)](https://freeimage.host/sv)<br>

Det jag tar med mig från kapitlet är att om jag känner att jag måste skriva kommentarer så är det snarare så att jag bör se över metoden och försöka få den att prata för sig själv. Att jag ska tänka kommentarer som ett bevis för att metoden många gånger möjligtvis inte är tillräckligt bra eller är för komplex.


## **Kapitel 5 - Formatting**
Eftersom jag följer EsLint kodstandard (sånär som den delen som handlar om kommentarer) så följer jag en standard som följs av många andra programmerare, vilket bidrar till att min kod ger en ökad förståelse och tydlighet i andras ögon. Under det här året som jag har lärt mig att programmera så har jag känt att jag många gånger har varit inkonsekvent i hur jag ordnar metoderna vertikalt i mina klasser. Innan starten för den här kursen så hände det att alla publika metoder låg överst och sedan följdes de åt av de privata metoderna. Efter att ha läst kapitlet och sektionerna "Vertical Ordering" och "Dependent Functions" så har jag ändrat tankesätt och ser istället min kod som en tidsskrift som ska läsas uppifrån och ner, vilket på ett naturligt sätt bidrar till att metoder som kallar på andra metoder i samma klass återfinns i närheten av varandra. Exempel:<br><br>

Finns i converterHandler.js:<br>
[![ZNCW9n.md.png](https://iili.io/ZNCW9n.md.png)](https://freeimage.host/i/ZNCW9n)<br>

En annan sak, som jag nämner i korthet under Kapitel 3, är "Variable Declarations" som anger att variabler ska deklareras i närheten av dess användningsområde. Detta ihop med att metoder enligt sektionen Triads under kapitel 3 ska ta emot inga eller få argument som möjligt gör att jag fastnar lite i ett moment 22: jag ska helst inte skicka argument men jag ska inte heller deklarera variabler långt ifrån dess användningsområde. Här ett exempel på två variabler som jag deklarerat i konstruktorn för att kunna nå dom globalt(dessa hade i annat fall blivit argument, vad är rätt eller fel?):<br><br>
Finns i chart.js<br>
[![ZN0ob4.png](https://iili.io/ZN0ob4.png)](https://freeimage.host/sv)<br>

## **Kapitel 6 - Object and Data Structures**
"Talk to friends, not to Strangers" är ett citat som mer eller mindre sammanfattar hela kapitlet på ett bra sätt. Det ska erkännas att det här kapitlet var inte det lättaste att förstå sig på och jag fick se vissa delar av din föreläsning flera gånger för att försöka få grepp om framförallt Law Of Demeter som i stora drag talar om att varje del av systemet ska veta så lite som möjligt om resten av systemet, dvs metoder ska bara känna till och kalla på metoder i sin absoluta närhet (därav citatet). Men det ska erkännas att jag fortfarande känner mig en smula osäker, bland annat på det som kallas för Train Wrecks. Jag har tittat igenom min kod och försökt identifiera några eventuella Train Wrecks men jag kan inte se att jag har några? Skulle du ändå upptäcka en eller flera så vore det toppen med feedback! Kapitlet poängterar även vikten av att gömma implementation bakom gränssnitt och detta tycker jag är svårare att implementera i Javascript än i Java som är språket vi läser i den andra kursen. Jag tycker det är mycket enklare att tänka både på SRP och designmönster i Javan än vad det är i Javascript och jag har insett att jag har börjat uppskatta Javan mer och mer.

## **Kapitel 7 - Error handling**
Bland det första jag läser i kapitlet är att man ska skriva try / catch block först vilket faktiskt är helt tvärtemot vad jag hittills har gjort. Try/catch har blivit något som jag alltid har implementerat i slutskedet av mina projekt och så här i efterhand så har jag egentligen ingen direkt orsak till varför utan det har mest "blivit så". Nu däremot slås jag av tanken att en implementering av try/catch block tidigt i projekten även bidrar till att hitta eventuella buggar eller annan implementation som min testning av olika skäl inte upptäcker? Det är en reflektion att ta med sig!
Kapitlet nämner också, under sektionen "Provide Context with Exceptions" så lyfts vikten av att tillföra kontext i undantagen som kastas, att det är viktigt att kunna berätta VART felet och skett och inte bara VAD som har gått fel. Detta fick mig att ändra min felhantering enligt bilderna nedan:<br><br>
Finns i validateInputHandler.js:<br>
[![ZOV7Tu.md.png](https://iili.io/ZOV7Tu.md.png)](https://freeimage.host/i/ZOV7Tu)<br>
[![ZOVVv1.md.png](https://iili.io/ZOVVv1.md.png)](https://freeimage.host/i/ZOVVv1)<br><br>

En sak som fick mig att haja till var när jag kom till stycket "Don't Return Null". Jag ska inte påstå att jag har det som vana men jag har definitivt använt mig av det som i boken lyfts under null check (och det du tar upp i din föreläsning om Error handling) och jag ska erkänna att jag hittills inte har reflekterat särskilt mycket kring varför detta skulle kunna vara en dålig idé. Därför var det intressant att få läsa och höra om vilka konsekvenser det faktiskt innebär att förlita sig på null check samt hur man kan tänka för att undvika det i framtiden.

## **Kapitel 8 - Boundaries**
Det här var också en kapitel som varit lite svårare att reflektera kring men om jag förstår din föreläsning rätt så handlar det om att hur vi konstruerar våra moduler och hur vi ser till att inte bli för beroende av andras kod (via till exempel npm paket). Å ena sidan så vill jag skapa en modul som många människor ska ha nytta av men å andra sidan så vill jag inte implementera funktionalitet som i de flesta fall inte kommer att användas i särskilt stor utsträckning. I mitt fall tänker jag att de allra flesta kommer vilja använda min modul för att få fram morgondagens elpriser och de metoder som används för att bland annat kalkylera watt till kilowatt inte kommer vara huvudanledningen till att modulen används. Därför har jag valt att lägga till ett begränsat antal metoder i min modul som kalkylerar/konverterar olika värden för att inte riskera att implementera funktionalitet som i slutändan troligtvis inte skulle användas till någonting annat än att fylla ut min kod.

Du lyfter även vikten av att kapsla in funktionalitet och isolera kod och det får min att tänka på facade mönstret, dvs att vi visar upp ett förenklat gränsnitt utåt för att sedan bakom fasaden kapsla in och dölja systemets komplexitet och struktur. Jag själv tycker att jag har implementerat detta på ett tillfredställande sätt då jag ofta tänker tanken "kan det vara privat så ska det vara privat" när jag programmerar. Det betyder att de metoder som en annan utvecklare kan / ska använda sig av är de som är synliga och all annan funktionalitet är privat och därmed dold. Ett exempel på detta är i klassen SpotPriceApi som ansvarar för api anropet. Den enda vägen in i klassen är genom metoden nedan och detta ger mig en trygghet som utvecklare att veta att all övrig, och relativt känslig, kod i klassen är tryggt isolerad inom sin egen klass.<br><br>
[![ZvT0Sj.png](https://iili.io/ZvT0Sj.png)](https://freeimage.host/sv)

## **Kapitel 9 - Unit Test**
Boken lyfter vikten av TDD och att jag som utvecklare ska testa tidigt - testa ofta. Att lika viktigt som det är att lägga ner tid på att skriva korta metoder som förklarar sig själva så är det minst lika viktigt att vi skriver våra tester på ett sätt så att de inte går att missuppfatta, de ska antingen lyckas eller misslyckas och ingenting däremellan. Börjar vi däremot skriva tester vi känner att vi inte har full koll på så kommer resultaten vi får tillbaka vara helt betydelselösa och i värsta fall fara med rena lögner.
Ska jag vara ärlig så är Unit Testing ett område jag känner mig väldigt osäker i och tyvärr någonting jag därför valt bort till förmån för manuella tester.  Problemet som då har uppstått är att jag tagit ett stort kliv bort från TDD och min testning har istället kommit in väldigt sent i bilden och inte fått den prioritering den faktiskt förtjänar. Det finns en textrad i boken som träffade mitt i prick och det lyder som följer "No matter how flexible your architecture is, no matter how partitioned your design, without test you will be reluctant to make changes because of fear that you will introduce undetected bugs" och det är exakt så jag upplever det i min vardag som utvecklare. Att jag många gånger drar mig för att refaktorisera koden för jag litar helt enkelt inte på den och vad den gör, och det hämmar givetvis min utveckling som programmerare.

## **Kapitel 10 - Classes**

Kapitlet understryker vikten av att inte bara metoder ska vara små utan att det är minst lika viktigt även när vi pratar om klasser. I pararellkursen 1dv607 lär vi oss mycket om "The Single Responsibility Principle" - att en klass (eller modul) enbart ska ha en orsak att ändra sig. Att det är viktigt att vi följer "Open-Close-Principle", dvs att systemet entiter ska vara öppna för utökning men stängda för modifiering och hur vi kan lösa det med hjälp av "Patterns". Hur vi på ett relativt enkelt sätt kan se till att vi behåller en "High Cohesion" i klassen med hjälp av LCOM ekvationen som vi hittar i SOLID design mönstret. Jag kan det i teorin men så snart jag sätter mig ner och ska programmera så det känns istället som jag inte kan någonting? Det är minst sagt en besynnerlig känsla och givetvis så är en orsak till detta erfarenhet. För om man backar bandet ett år så hade jag inte skrivit många rader kod och nu idag så sitter jag och funderar över designprinciper och hur jag på bästa sätt kan ner mina klasser och mina metoder. Det är viktigt att komma ihåg allt man faktiskt har lärt sig och inte bara bli stressad över allt man (ännu) inte förstår.<br>En större refaktorisering jag har gjort i min modul nu under laboration 2 är att jag har lagt allting som hör till konverteraren i en egen klass så att de publika metoderna som har tillgång till api:et numera är sin egen klass. Däremot funderar jag på om jag ytterligare kan dela upp klasserna? Till exempel så återfinns de här metoderna i ConverterHandler klassen, skulle dessa även kunna ligga i en egen klass? Eller är det att ta det ett steg för långt?<br><br>
[![ZD7vZx.png](https://iili.io/ZD7vZx.png)](https://freeimage.host/sv)<br>
[![ZD76a1.png](https://iili.io/ZD76a1.png)](https://freeimage.host/sv)

## **Kapitel 11 - Systems**
Scaling up - Kapitlet drar paralleller mellan systemutveckling och en stad som reser sig och växer fram vilket jag ser som en bra jämförelse. För på samma sätt som att alla städer har börjat med ett spadtag så börjar varje systemutveckling med en tangenttryckning. Jag kan själv känna att jag många gånger går händelserna i förväg och börjar programmera lite överallt, speciellt när jag känner mig stressad, och hittills har det inte visat sig vara en god idé. Att det är viktigt att jag förstår att "Rom inte byggdes på en dag" utan att jag ska ta en sak i taget och utföra den väl. 
En kraftfull mekanism för att skilja konstruktion från användning är Dependency Injection som egneltigen inte är något annat än att skicka in ett beroende när det krävs istället för att initiera beroendet inuti klassen vilket bidrar till att hålla nere tajta relationer i systemet. Vi läser om det här även i parallellkursen och jag tycker återigen att det här är ett ämne som är lättare att implementera i Java än i Javascript.

## **Slutord**
### Modulen och applikationen
Eftersom jag själv bor i villa så har elpriset det senaste året varit en en central fråga bland familj och vänner. Många, liksom jag, känner en oro över vilka konsekvenser ett skenande elpris medför och därför visste jag ganska tidigt in i kursen att jag ville ta fram en modul som på ett enkelt sätt kan hämta hem morgondagens elpriser för att sedan i laboration 2 bygga vidare på den och skapa ett gränssnitt för en slutanvändare. Mitt fokus har inte legat på att implementera så mycket funktionalitet som möjligt utan fokus har legat på att det som görs ska göras med eftertanke. Jag har lagt tyngd på att applikationen ska var lätt att navigera (allt samlat på en sida) och att den är anpassad för så många olika slutanvändare som möjligt (grafen består av både färg och mönster). Jag har även haft MVC mönstret i åtanke och modulen är därför helt skiljd från applikationen.

### Kurslitteraturen och kursen i övrigt
Jag har verkligen uppskattat den här boken och det är en bok jag skulle kunna bläddra i även efter att kursen är avklarad. Visst, jag har läst att den har fått en del kritik för att vara utdaterad men mycket av det jag tar med mig känns ändå tidlöst, såsom namngivning, vikten av testning och tänket kring klasser och modulers uppbyggnad. 
Kursens workshops har också varit intressanta och jag har haft många lärorika samtal med de jag har suttit med. Först kändes workshops som något som jag skulle tvingas genomlida då jag med lätthet bygger upp en ångest inför möten med okända människor men tack vare din ärlighet kring mental ohälsa så kände jag ändå en trygghet jag inte brukar känna i andra kurser.

Avslutningvis så känns det som att min kunskapsryggsäck har fyllts på rejält, visst jag kommer fortfarande snubbla på saker som jag i teorin ska kunna men att man som elev ändå stannar upp och reflekterar över sin kod och vad man skulle vilja förbättra skulle jag ändå vilja påstå kan klassas som hälften vunnet.



