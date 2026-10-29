const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (err) {
    console.error(`Failed: ${cmd}`, err.message);
  }
}

console.log('--- Optimizing heavy public images ---');

// 1. whoweare.png
if (fs.existsSync('public/whoweare.png')) {
  console.log('Optimizing public/whoweare.png...');
  run('convert "public/whoweare.png" -resize "1920x1920>" -quality 82 "public/whoweare.png"');
  run('convert "public/whoweare.png" -resize "1920x1920>" -quality 82 "public/whoweare.webp"');
}

// 2. whoweare.jpeg
if (fs.existsSync('public/whoweare.jpeg')) {
  console.log('Optimizing public/whoweare.jpeg...');
  run('convert "public/whoweare.jpeg" -resize "1920x1920>" -quality 80 "public/whoweare.jpeg"');
}

// 3. Banner 2.png & banner-2.png
if (fs.existsSync('public/banner-2.png')) {
  console.log('Optimizing public/banner-2.png...');
  run('convert "public/banner-2.png" -resize "1600x1600>" -quality 82 "public/banner-2.png"');
  run('convert "public/banner-2.png" -resize "1600x1600>" -quality 82 "public/banner-2.webp"');
}
if (fs.existsSync('public/Banner 2.png')) {
  console.log('Optimizing public/Banner 2.png...');
  run('convert "public/Banner 2.png" -resize "1600x1600>" -quality 82 "public/Banner 2.png"');
}

// 4. Vv.png
if (fs.existsSync('public/Vv.png')) {
  console.log('Optimizing public/Vv.png...');
  run('convert "public/Vv.png" -resize "1600x1600>" -quality 82 "public/Vv.png"');
  run('convert "public/Vv.png" -resize "1600x1600>" -quality 82 "public/Vv.webp"');
}

// 5. Profile.png
if (fs.existsSync('public/Profile.png')) {
  console.log('Optimizing public/Profile.png...');
  run('convert "public/Profile.png" -resize "1200x1200>" -quality 82 "public/Profile.png"');
  run('convert "public/Profile.png" -resize "1200x1200>" -quality 82 "public/Profile.webp"');
}

// 6. Linkedin (2).png
if (fs.existsSync('public/Linkedin (2).png')) {
  console.log('Optimizing public/Linkedin (2).png...');
  run('convert "public/Linkedin (2).png" -resize "1600x1600>" -quality 82 "public/Linkedin (2).png"');
}

// 7. FB Cover VV-01.jpg.jpeg
if (fs.existsSync('public/FB Cover VV-01.jpg.jpeg')) {
  console.log('Optimizing public/FB Cover VV-01.jpg.jpeg...');
  run('convert "public/FB Cover VV-01.jpg.jpeg" -resize "1600x1600>" -quality 80 "public/FB Cover VV-01.jpg.jpeg"');
}

// 8. Services images
const servicesDir = 'public/services';
if (fs.existsSync(servicesDir)) {
  fs.readdirSync(servicesDir).forEach(file => {
    const filePath = path.join(servicesDir, file);
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      console.log(`Optimizing service image ${file}...`);
      run(`convert "${filePath}" -resize "1200x1200>" -quality 82 "${filePath}"`);
      const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      run(`convert "${filePath}" -resize "1200x1200>" -quality 82 "${webpPath}"`);
    }
  });
}

// 9. Community icon images (resize to 250px max!)
const commDir = 'public/images/communities';
if (fs.existsSync(commDir)) {
  fs.readdirSync(commDir).forEach(file => {
    const filePath = path.join(commDir, file);
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      console.log(`Optimizing community icon ${file}...`);
      run(`convert "${filePath}" -resize "250x250>" -quality 85 "${filePath}"`);
    }
  });
}

// 10. Heavy logo images in VV LOGOS
function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDir(filePath);
    } else if (file.match(/\.(png|jpg|jpeg)$/i) && stat.size > 200000) {
      console.log(`Compressing large logo ${filePath} (${Math.round(stat.size/1024)}KB)...`);
      run(`convert "${filePath}" -resize "800x800>" -quality 82 "${filePath}"`);
    }
  });
}
processDir('public/VV LOGOS');

console.log('--- Public images optimization completed! ---');
