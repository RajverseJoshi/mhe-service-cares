const fs = require('fs');
const path = require('path');
const https = require('https');

const images = {
  "VI-01": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Hubwagen.jpg/800px-Hubwagen.jpg",
  "VI-02": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jungheinrich_Hubwagen.jpg/800px-Jungheinrich_Hubwagen.jpg",
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
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, function(response) {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, filename).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', function() {
        file.close(() => resolve());
      });
    }).on('error', function(err) {
      fs.unlink(filename, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const [id, url] of Object.entries(images)) {
    const ext = url.split('.').pop() || 'jpg';
    const filename = path.join(dir, `${id}.${ext}`);
    try {
      console.log(`Downloading ${id}...`);
      await downloadImage(url, filename);
    } catch (e) {
      console.error(`Failed ${id}: ${e}`);
    }
  }
  console.log("Done");
}

main();
