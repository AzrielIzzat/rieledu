# NOTA ASK

Portal pembelajaran responsif Asas Sains Komputer (ASK), dibina dengan React, TypeScript, Vite, Tailwind CSS, Lucide React dan Framer Motion.

## Jalankan secara setempat

```bash
npm install
npm run dev
```

Bina untuk produksi dengan `npm run build`, kemudian jalankan pratonton menggunakan `npm run preview`.

## Ciri yang tersedia

- Laman utama, navigasi responsif, akses pantas dan halaman tentang.
- Pustaka sumber dengan carian serta tapisan kategori dan tingkatan.
- Kad dan paparan terperinci untuk nota, video, BBM, kod, kuiz dan latihan.
- Contoh latihan dengan maklum balas jawapan, contoh kod dengan salin ke papan klip, video YouTube terbenam dan cetakan nota.
- Portal guru demonstrasi untuk menambah dan memadam sumber; data demo disimpan dalam `localStorage`.
- Data contoh boleh disunting dalam `src/data.ts`.

## Kandungan kurikulum

Semua topik dan bab dalam starter ini ialah bahan ilustrasi, bukan dakwaan pemetaan rasmi kepada bab KSSM. Semak serta lengkapkan Standard Kandungan, Standard Pembelajaran, objektif, bahan dan pautan berdasarkan dokumen rasmi DSKP yang berkuat kuasa sebelum digunakan di kelas. Data permulaan sengaja tidak mereka kod standard rasmi.

## Pengesahan dan storan produksi

Kod `ask-admin` hanyalah akses demo bahagian klien untuk menunjukkan aliran portal. Ia bukan sistem keselamatan: tiada data sensitif patut disimpan atau portal ini diterbitkan sebagai pentadbir sebenar tanpa backend. Untuk penggunaan produksi, sambungkan Supabase/Firebase Authentication, pangkalan data dengan peraturan akses, dan object storage bagi muat naik fail. Pelajar tidak perlu log masuk untuk melihat bahan awam.
