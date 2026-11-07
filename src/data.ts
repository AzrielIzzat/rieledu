export type ResourceType = 'Nota' | 'Video' | 'BBM' | 'Kod' | 'Kuiz' | 'Latihan'
export type Resource = {
  id: string; title: string; type: ResourceType; form: string; chapter: string; topic: string;
  description: string; format: string; href?: string; icon: string; color: string; code?: string
}

// Illustrative starter content only. Curriculum labels and standards must be verified by an administrator against the current KSSM/DSKP before publication.
export const starterResources: Resource[] = [
  { id: 'n1', title: 'Asas Pemikiran Komputasional', type: 'Nota', form: 'Tingkatan 1', chapter: 'Bab 1', topic: 'Pemikiran komputasional', description: 'Pengenalan kepada konsep dan teknik asas penyelesaian masalah. Kandungan contoh untuk suntingan guru.', format: 'Nota ringkas', icon: 'BookOpen', color: 'violet' },
  { id: 'n2', title: 'Perwakilan Data', type: 'Nota', form: 'Tingkatan 2', chapter: 'Bab 2', topic: 'Data dan maklumat', description: 'Nota demonstrasi tentang cara data boleh diwakilkan dalam sistem komputer.', format: 'Nota ringkas', icon: 'FileText', color: 'blue' },
  { id: 'v1', title: 'Kenali Algoritma', type: 'Video', form: 'Tingkatan 1', chapter: 'Bab 1', topic: 'Algoritma', description: 'Video pengenalan untuk membina langkah penyelesaian secara tersusun.', format: 'YouTube · 8 min', href: 'https://www.youtube.com/results?search_query=Asas+Sains+Komputer+algoritma', icon: 'Play', color: 'pink' },
  { id: 'b1', title: 'Templat aktiviti pemikiran komputasional', type: 'BBM', form: 'Tingkatan 1', chapter: 'Bab 1', topic: 'Pemikiran komputasional', description: 'Templat aktiviti kelas yang boleh disesuaikan oleh guru mengikut keperluan.', format: 'PDF · Bahan guru', icon: 'Layers', color: 'amber' },
  { id: 'c1', title: 'Contoh atur cara Python', type: 'Kod', form: 'Tingkatan 3', chapter: 'Bab 1', topic: 'Asas pengaturcaraan', description: 'Contoh asas input, output dan pemboleh ubah untuk latihan berpandu.', format: 'Python · .py', icon: 'Code2', color: 'green', code: 'nama = input("Siapa nama anda? ")\nprint(f"Selamat belajar ASK, {nama}!")' },
  { id: 'q1', title: 'Kuiz pengenalan ASK', type: 'Kuiz', form: 'Tingkatan 1', chapter: 'Bab 1', topic: 'Asas ASK', description: 'Semak kefahaman awal melalui soalan ringkas.', format: 'Kuiz kendiri', href: 'https://wordwall.net/ms/community/asas-sains-komputer', icon: 'CircleHelp', color: 'violet' },
  { id: 'e1', title: 'Latihan langkah algoritma', type: 'Latihan', form: 'Tingkatan 1', chapter: 'Bab 1', topic: 'Algoritma', description: 'Susun langkah penyelesaian masalah dan semak jawapan anda.', format: 'Interaktif · Mudah', icon: 'ClipboardCheck', color: 'blue' },
  { id: 'n3', title: 'Pangkalan Data', type: 'Nota', form: 'Tingkatan 3', chapter: 'Bab 2', topic: 'Pangkalan data', description: 'Pengenalan contoh kepada istilah pangkalan data. Sahkan pemetaan bab sebelum digunakan.', format: 'Nota ringkas', icon: 'Database', color: 'pink' },
]

export const forms = [
  { title: 'Tingkatan 1', chapters: '4 bab contoh', description: 'Kenali asas pemikiran komputasional, data dan konsep komputer.', emoji: '🌱', bg: 'from-[#f1e4ff] to-[#fbf7ff]' },
  { title: 'Tingkatan 2', chapters: '4 bab contoh', description: 'Teroka struktur data, rangkaian dan penyelesaian masalah.', emoji: '🚀', bg: 'from-[#e6efff] to-[#f7faff]' },
  { title: 'Tingkatan 3', chapters: '4 bab contoh', description: 'Kembangkan kemahiran pengaturcaraan dan aplikasi digital.', emoji: '💡', bg: 'from-[#ffebf2] to-[#fff8fb]' },
]
