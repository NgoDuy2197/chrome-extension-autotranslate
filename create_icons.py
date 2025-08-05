# -*- coding: utf-8 -*-
"""
Script để tạo các icon PNG cho Chrome extension
"""

import os

def create_simple_png(size, output_path):
    """Tạo PNG đơn giản với Pillow"""
    try:
        from PIL import Image, ImageDraw, ImageFont
        
        # Tạo image mới
        img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        draw = ImageDraw.Draw(img)
        
        # Vẽ background gradient
        for y in range(size):
            for x in range(size):
                # Gradient từ xanh sang tím
                r = int(102 + (x / size) * 54)
                g = int(126 + (y / size) * 54)
                b = int(234 + (x / size) * 34)
                draw.point((x, y), fill=(r, g, b, 255))
        
        # Vẽ circle
        margin = size // 8
        draw.ellipse([margin, margin, size - margin, size - margin], 
                    outline=(255, 255, 255, 255), width=max(2, size // 32))
        
        # Vẽ chữ T
        try:
            font_size = size // 4
            font = ImageFont.truetype("arial.ttf", font_size)
        except:
            font = ImageFont.load_default()
        
        text = "T"
        bbox = draw.textbbox((0, 0), text, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        x = (size - text_width) // 2
        y = (size - text_height) // 2
        draw.text((x, y), text, fill=(255, 255, 255, 255), font=font)
        
        img.save(output_path, 'PNG')
        print("Tao " + output_path + " (" + str(size) + "x" + str(size) + ")")
        return True
        
    except ImportError:
        print("Khong the tao " + output_path + " - can cai dat Pillow")
        return False

def main():
    sizes = [16, 32, 48, 128]
    
    print("Tao icons cho Chrome extension...")
    
    for size in sizes:
        png_path = "icons/icon" + str(size) + ".png"
        create_simple_png(size, png_path)
    
    print("\nHoan thanh! Kiem tra thu muc icons/")

if __name__ == "__main__":
    main() 