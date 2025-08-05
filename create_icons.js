const fs = require('fs');
const { createCanvas } = require('canvas');

function createIcon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');
    
    // Tạo gradient background
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    
    // Vẽ background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    
    // Vẽ circle
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = Math.max(2, size / 32);
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/3, 0, 2 * Math.PI);
    ctx.stroke();
    
    // Vẽ chữ T
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${size/4}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('T', size/2, size/2);
    
    return canvas;
}

function main() {
    const sizes = [16, 32, 48, 128];
    
    console.log('Tạo icons cho Chrome extension...');
    
    sizes.forEach(size => {
        const canvas = createIcon(size);
        const buffer = canvas.toBuffer('image/png');
        const filename = `icons/icon${size}.png`;
        
        fs.writeFileSync(filename, buffer);
        console.log(`✓ Tạo ${filename} (${size}x${size})`);
    });
    
    console.log('\nHoàn thành! Kiểm tra thư mục icons/');
}

// Kiểm tra xem có canvas không
try {
    require('canvas');
    main();
} catch (error) {
    console.log('Cần cài đặt canvas: npm install canvas');
    console.log('Hoặc sử dụng file create_icons.html để tạo icons thủ công');
} 