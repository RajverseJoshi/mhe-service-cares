const jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images', 'products');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function sliceHp() {
  const image = await jimp.read(path.join(__dirname, 'public', 'hp.png'));
  const W = image.bitmap.width;
  const H = image.bitmap.height;
  
  const colW = Math.floor(W / 3);
  const rowH = Math.floor(H / 2.5);
  const startY = Math.floor(H * 0.12);
  const row2Y = startY + rowH;
  
  // Row 1
  image.clone().crop(0, startY, colW, rowH).write(path.join(dir, 'VI-01.jpg'));
  image.clone().crop(colW, startY, colW, rowH).write(path.join(dir, 'VI-02.jpg'));
  image.clone().crop(colW*2, startY, colW, rowH).write(path.join(dir, 'VI-03.jpg'));
  
  // Row 2
  image.clone().crop(0, row2Y, colW, rowH).write(path.join(dir, 'VI-04.jpg'));
  image.clone().crop(colW, row2Y, colW, rowH).write(path.join(dir, 'VI-05.jpg'));
  image.clone().crop(colW*2, row2Y, colW, rowH).write(path.join(dir, 'VI-06.jpg'));
}

async function sliceDrum(file, startId) {
  const image = await jimp.read(path.join(__dirname, 'public', file));
  const W = image.bitmap.width;
  const H = image.bitmap.height;
  
  const colW = Math.floor(W / 3);
  const rowH = Math.floor(H / 1.3);
  const startY = Math.floor(H * 0.23);
  
  image.clone().crop(0, startY, colW, rowH).write(path.join(dir, `VI-0${startId}.jpg`));
  image.clone().crop(colW, startY, colW, rowH).write(path.join(dir, `VI-0${startId+1}.jpg`));
  if (startId+2 < 10) {
    image.clone().crop(colW*2, startY, colW, rowH).write(path.join(dir, `VI-0${startId+2}.jpg`));
  } else {
    image.clone().crop(colW*2, startY, colW, rowH).write(path.join(dir, `VI-${startId+2}.jpg`));
  }
}

async function main() {
  await sliceHp();
  await sliceDrum('drum1.png', 7);
  await sliceDrum('drum2.png', 10);
  console.log('Done slicing!');
}

main().catch(console.error);
