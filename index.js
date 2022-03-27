const puppeteer = require('puppeteer');

const urlalvo ='https://www.hurb.com/br/packages';

(async () => {
  const browser = await puppeteer.launch({
    headless:false,
    defaultViewport:null,
    
  });

  const page = await browser.newPage();

  await page.goto(urlalvo);
  await page.waitForSelector('.h-l02r52',);
  await page.type('.h-l02r52', 'Nordenau, Schmallenberg, North Rhine-Westphalia');



 await browser.close();
})();
