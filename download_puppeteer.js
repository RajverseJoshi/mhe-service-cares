const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const images = {
  "VI-03": "https://5.imimg.com/data5/SELLER/Default/2021/4/YX/UN/GB/12586716/stainless-steel-hand-pallet-truck-500x500.jpg",
  "VI-04": "https://5.imimg.com/data5/SELLER/Default/2021/3/BW/QN/MQ/12586716/high-lift-scissor-pallet-truck-500x500.jpg",
  "VI-05": "https://5.imimg.com/data5/SELLER/Default/2022/9/MQ/VJ/XQ/18023023/mini-hand-pallet-truck-500x500.jpg",
  "VI-06": "https://5.imimg.com/data5/SELLER/Default/2021/4/HV/OH/XW/12586716/customised-pallet-truck-500x500.jpg",
  "VI-07": "https://5.imimg.com/data5/SELLER/Default/2021/3/XW/VF/DF/12586716/three-wheel-drum-truck-500x500.jpg",
  "VI-08": "https://5.imimg.com/data5/SELLER/Default/2021/3/RT/UI/OP/12586716/four-wheel-drum-truck-500x500.jpg",
  "VI-09": "https://5.imimg.com/data5/SELLER/Default/2021/3/JK/LM/NO/12586716/drum-tilter-mover-500x500.jpg",
  "VI-10": "https://5.imimg.com/data5/SELLER/Default/2021/3/PQ/RS/TU/12586716/hydraulic-drum-palletizer-500x500.jpg",
  "VI-11": "https://5.imimg.com/data5/SELLER/Default/2021/3/VW/XY/ZA/12586716/manual-drum-stacker-500x500.jpg",
  "VI-12": "https://5.imimg.com/data5/SELLER/Default/2021/3/BC/DE/FG/12586716/semi-electric-drum-stacker-500x500.jpg"
};

const dir = path.join(__dirname, 'public', 'images', 'products');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  for (const [id, url] of Object.entries(images)) {
    console.log(`Fetching ${id}...`);
    try {
      const viewSource = await page.goto(url, { waitUntil: 'networkidle0' });
      fs.writeFileSync(path.join(dir, `${id}.jpg`), await viewSource.buffer());
    } catch (e) {
      console.log(`Failed ${id}: ${e}`);
    }
  }
  
  await browser.close();
})();
