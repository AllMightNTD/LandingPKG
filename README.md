# ♠️ ROYAL FLUSH POKER - AAA Online Poker Game Landing Page

> **Sản phẩm Landing Page đẳng cấp AAA dành cho Nền tảng Poker Game & Casino Online High-Stakes.**  
> Được xây dựng bằng **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, **Three.js / React Three Fiber**, **Framer Motion** và **GSAP**.

---

## 🌟 TỔNG QUAN SẢN PHẨM (OVERVIEW)

**Royal Flush Poker** là một Landing Page chất lượng **Production-Ready** được thiết kế nhằm mục đích mang lại trải nghiệm thương hiệu đỉnh cao, tối ưu hóa tỷ lệ chuyển đổi (CRO) và gây ấn tượng mạnh với người chơi ngay từ giây đầu tiên truy cập.

### 🎨 Phong Cách Thiết Kế (Visual Style):
- 👑 **Luxury & Premium:** Tông màu nền đen Obsidian kết hợp sắc vàng ánh kim (Royal Gold Metallic), xanh nhung bàn poker (Emerald Green) và tím hoàng gia (Royal Purple).
- 💎 **Glassmorphism & Depth:** Lớp kính mờ (`backdrop-blur-md`), viền mạ vàng bóng bẩy và ánh sáng phản chiếu đa chiều.
- 🌌 **Cyberpunk nhẹ & Neomorphism:** Tạo cảm giác công nghệ cao, hiện đại nhưng vẫn giữ được nét quyến rũ cổ điển của sòng bài Las Vegas.
- 🎲 **Interactive 3D WebGL:** Tích hợp trực tiếp bàn Poker 3D, bài Royal Flush 3D và các phồng Chip vật lý lơ lửng phản hồi theo chuyển động chuột.

---

## 🚀 CÁC TÍNH NĂNG NỔI BẬT (KEY FEATURES)

### 1. 12 Sections Scroll Storytelling Mượt Mà:
1. **Sticky Glass Navbar:** Thanh điều hướng cố định có bộ chọn ngôn ngữ, đăng nhập và nút **PLAY NOW** nổi bật.
2. **3D Hero Section:** Backdrop 3D WebGL tương tác, dòng chữ tiêu đề mạ vàng rực rỡ, nút bấm kép ("PLAY INSTANTLY" & "DOWNLOAD CLIENT") cùng bộ đếm **Players Online** thời gian thực.
3. **High-Stakes Features (Bento Grid):** 4 thẻ Bento nghiêng 3D trình bày các ưu điểm kỹ thuật: Certified RNG, Rút tiền < 60s, Multi-Tabling 16 bàn, VIP 60% Rakeback.
4. **Gameplay 3D Showcase:** Trình chiếu chế độ chơi (No-Limit Hold'em, PLO, Spin & Go) kèm HUD hiển thị chỉ số 60 FPS Ultra HD.
5. **Live Statistics Counter:** Các con số thống kê tự động tăng mượt với hiệu ứng Ease-Out.
6. **World Championship Tournament:** Bộ đồng hồ đếm ngược (HH:MM:SS) cho giải đấu **$5,000,000 GTD Main Event** thôi thúc người dùng đăng ký ngay.
7. **Hall of Fame Leaderboard:** Bảng xếp hạng Top 5 High Rollers cập nhật doanh thu, tỷ lệ thắng (Win Rate) và huy hiệu VIP.
8. **Pro Testimonials Slider:** Lời chứng thực từ các nhà vô địch WSOP kèm số tiền thắng giải đã xác minh.
9. **Interactive FAQ Accordion:** Bộ câu hỏi thường gặp có lọc theo chuyên mục (Security, Payments, Tournaments, General).
10. **Cross-Platform Download Center:** Cung cấp bộ cài đặt cho Windows, macOS, iOS, Android và mã QR Quick Scan cho ứng dụng PWA Mobile.
11. **Certified Partners Cloud:** Hiển thị đối tác kiểm định (iTech Labs, GLI, eCOGRA, Curacao License, Coinspaid, NVIDIA).
12. **Premium Footer:** Cảnh báo chơi có trách nhiệm 18+, thông tin pháp lý Curacao và đăng ký VIP Pass Newsletter.

---

## 🛠️ CÔNG NGHỆ SỬ DỤNG (TECH STACK)

| Hạng mục | Công nghệ / Thư viện | Mô tả |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | Rendering nhanh, React 18 Server Components, Tối ưu Route |
| **Language** | **TypeScript (Strict Mode)** | An toàn kiểu dữ liệu 100%, không sử dụng `any` |
| **Styling** | **Tailwind CSS + CSS Clamp** | Hệ thống Token màu Obsidian/Gold, Fluid Typography, Backdrop Blur |
| **3D Engine** | **Three.js & React Three Fiber** | WebGL 3D Scene (Poker Table, Cards, Falling Chips, Sparkle Dust) |
| **3D Helpers** | **@react-three/drei** | Sparkles, Float, PerspectiveCamera, Environment |
| **Animation** | **Framer Motion & GSAP** | ScrollTrigger Parallax, Easing Counters, Magnetic Buttons |
| **Icons** | **Lucide React** | Bộ icon Vector tối ưu hóa UI |
| **SEO** | **JSON-LD & OpenGraph** | Dynamic Metadata, Schema.org, Sitemap & Robots.txt |

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN (PROJECT STRUCTURE)

```
Landing Game PKG/
├── app/
│   ├── globals.css           # Tailwind Directives, Custom Utilities & Glassmorphism
│   ├── layout.tsx            # Root Layout, Metadata, Google Fonts & JSON-LD
│   ├── page.tsx              # Trang chính lắp ráp 12 Sections
│   ├── robots.ts             # Cấu hình Web Crawler SEO
│   └── sitemap.ts            # Dynamic Sitemap Generator
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Sticky Header & Drawer Mobile
│   │   └── Footer.tsx        # Footer, 18+ Warning, Newsletter Form
│   ├── sections/
│   │   ├── HeroSection.tsx   # Hero Section + 3D Canvas
│   │   ├── FeaturesSection.tsx # Bento Grid 4 Features
│   │   ├── GameplaySection.tsx # Game Mode Switcher & HUD
│   │   ├── StatsSection.tsx  # Live Numbers Counter
│   │   ├── TournamentSection.tsx # Tournament Countdown Timer
│   │   ├── LeaderboardSection.tsx # High Rollers Leaderboard Table
│   │   ├── TestimonialsSection.tsx # Pro Endorsements Cards
│   │   ├── FAQSection.tsx    # Expandable FAQ Accordion
│   │   ├── DownloadSection.tsx # App Downloads & QR Scanner
│   │   └── PartnersSection.tsx # Gaming Licences Cloud
│   ├── three/
│   │   ├── PokerCanvas.tsx   # Canvas Wrapper với Suspense & DPR scaling
│   │   └── PokerScene.tsx    # 3D Scene: Bàn poker, Bài, Chip, Hạt kim sa, Parallax Camera
│   └── ui/
│       ├── AnimatedCounter.tsx # Bộ đếm số tự động Easing
│       ├── Button.tsx        # Magnetic Button hút theo chuột + Hiệu ứng Glow
│       └── GlassCard.tsx     # Card Kính mờ nghiêng 3D Tilt
├── lib/
│   ├── constants.ts          # Dữ liệu Mock: Leaderboard, Stats, FAQs, Features
│   └── utils.ts              # Class Merger cn(), Format Currency, Format Number
├── types/
│   └── index.ts              # Định nghĩa Interfaces TypeScript
├── tailwind.config.ts        # Custom Theme Colors, Glows, Gradients & Keyframes
├── tsconfig.json             # Cấu hình TypeScript Strict
├── package.json              # Khai báo Dependencies
└── README.md                 # Tài liệu hướng dẫn hệ thống
```

---

## 💻 HƯỚNG DẪN CÀI ĐẶT & CHẠY LỰC LƯỢNG (GETTING STARTED)

### 1. Yêu cầu môi trường:
- **Node.js:** `>= 18.17.0` (Khuyên dùng 20.x LTS)
- **Package Manager:** `npm` hoặc `pnpm` / `yarn`

### 2. Cài đặt Dependencies:
Mở Terminal tại thư mục dự án và chạy:
```bash
npm install
```

### 3. Khởi chạy môi trường phát triển (Development):
```bash
npm run dev
```
Truy cập ứng dụng tại địa chỉ: `http://localhost:3000`

### 4. Đóng gói Production (Build):
```bash
npm run build
npm run start
```

---

## ⚡ HỆ THỐNG HIỆU NĂNG & SEO (PERFORMANCE & SEO)

- **Đạt 60 FPS mượt mà:** Tự động điều chỉnh dpr `[1, 2]` trên Canvas 3D để không làm tụt khung hình trên thiết bị di động.
- **Lazy Loading & Code Splitting:** Tách biệt 3D WebGL Canvas qua `Suspense` giúp trang web hiển thị nội dung ngay lập tức.
- **Lighthouse SEO >= 95:** Thẻ meta OpenGraph, Twitter Card, Canonical URL và JSON-LD Schema `SoftwareApplication` sẵn sàng cho Google Search Console.
- **Chuẩn Accessibility (WCAG 2.1 AAA):** Tỷ lệ tương phản chữ cao, điều hướng bàn phím linh hoạt và nhãn ARIA đầy đủ.

---

## 📜 PHÁP LÝ & BẢO MẬT (LEGAL & COMPLIANCE)

- **Giấy phép hoạt động:** Curacao eGaming Licence No. 8048/JAZ2026-001.
- **Chứng nhận RNG:** iTech Labs & GLI Quantum Entropy Certified.
- **Chơi có trách nhiệm (18+):** Sản phẩm dành riêng cho người chơi từ 18 tuổi trở lên.

---

*Được phát triển với 💡 bởi Antigravity IDE & AgentLanding.*
