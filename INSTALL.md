# 🚀 Hướng dẫn cài đặt nhanh

## Bước 1: Tạo Icons (Tùy chọn)

### Cách 1: Sử dụng Node.js
```bash
npm install
npm run create-icons
```

### Cách 2: Sử dụng HTML
1. Mở file `create_icons.html` trong trình duyệt
2. Click "Tải xuống" cho từng kích thước icon
3. Di chuyển các file PNG vào thư mục `icons/`

### Cách 3: Tạo thủ công
Tạo các file sau trong thư mục `icons/`:
- `icon16.png` (16x16 pixels)
- `icon32.png` (32x32 pixels)
- `icon48.png` (48x48 pixels)
- `icon128.png` (128x128 pixels)

## Bước 2: Cài đặt Extension

1. Mở Chrome và vào `chrome://extensions/`
2. Bật "Developer mode" (Chế độ nhà phát triển) ở góc phải
3. Click "Load unpacked" (Tải extension chưa đóng gói)
4. Chọn thư mục chứa extension này
5. Extension sẽ xuất hiện trên thanh công cụ

## Bước 3: Cấu hình

1. Click vào icon extension trên thanh công cụ
2. Nhập danh sách ngôn ngữ (ví dụ: `vi, en, zh, ja, ko`)
3. Click "Lưu cấu hình"

## Bước 4: Sử dụng

1. Bôi đen văn bản cần dịch trên trang web
2. Tooltip sẽ hiện ra với các bản dịch
3. Có thể copy nội dung từ tooltip

## 🐛 Xử lý lỗi

- **Không hiện icon**: Kiểm tra file icons có đúng tên và kích thước không
- **Không hiện tooltip**: Kiểm tra quyền truy cập trang web
- **Lỗi dịch**: Kiểm tra kết nối internet

## 📞 Hỗ trợ

Nếu gặp vấn đề, vui lòng tạo issue trên GitHub hoặc xem file `README.md` để biết thêm chi tiết. 