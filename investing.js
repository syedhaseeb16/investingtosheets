const puppeteer = require("puppeteer");
const { ios } = require("./io");

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports.investingcom = async function investingcom(url, time) {
	//  (async () => {
let time8=["5 min","15 min","30 min","hourly","5 hours","Daily","Weekly","monthly"];


	const browser = await puppeteer.launch({ ignoreDefaultArgs: ["--disable-extensions"], headless: true });
	const page = await browser.newPage();
	await page.goto(url, { waitUntil: "load", timeout: 0 });
  
  for(let i=1;i<=time;i++){
  await page.click('#technicalstudiesSubTabs> #timePeriodsWidget>li:nth-child('+i+')')
    // await page.waitForNavigation({waitUntil: 'load'});
    await sleep(3000);
	 
    const result = await page.evaluate(() => {
        const rows = document.querySelectorAll('#techinalContent > table  tr ');
        return Array.from(rows, row => {
          const columns = row.querySelectorAll('td');
          const columnsHeader = row.querySelectorAll('th');
          const rowt=Array.from(columns, column => column.innerText);   
          const colt=Array.from(columnsHeader, colh => colh.innerText);
          return [rowt,colt];
        });
      });
      
      // console.log(result); 
      await ios("Pivot Points",time8[i-1],result,"t1",i-1);




    const tech = await page.evaluate(() => {
      const rows = document.querySelectorAll('#techinalContent > div.float_lang_base_1  tr ');
      return Array.from(rows, row => {
        const columns = row.querySelectorAll('td');
        const columnsHeader = row.querySelectorAll('th');
        const rowt=Array.from(columns, column => column.innerText);   
        const colt=Array.from(columnsHeader, colh => colh.innerText);
          return [rowt,colt];
      });
    });
    await ios("Techinical Indicators",time8[i-1],tech,"t2",i-1);
    // console.log(tech); 


    const moving_avg = await page.evaluate(() => {
      const rows = document.querySelectorAll('#techinalContent > div.float_lang_base_2  table tr');
      return Array.from(rows, row => {
        const columns = row.querySelectorAll('td');
        const columnsHeader = row.querySelectorAll('th');
        const rowt=Array.from(columns, column => column.innerText);   
        const colt=Array.from(columnsHeader, colh => colh.innerText);
        return [rowt,colt];
      });
    });
    
     // console.log("done with",i);
    await ios("Moving Averages",time8[i-1],moving_avg,"t3",i-1);


  }
  
    
 
    
	await browser.close();
};
//  })();
