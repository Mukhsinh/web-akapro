import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X } from "lucide-react";
import jsPDF from "jspdf";

const articles = [
  { id: 1, title: "Analisis Implementasi Clinical Pathway Terhadap Efisiensi Biaya Rumah Sakit", author: "Ahmad Pratama", authorPhoto: "https://i.pravatar.cc/150?u=ahmad", coAuthors: "et al.", date: "10 April 2026", category: "Manajemen Keuangan", abstract: "Penelitian ini mengevaluasi dampak standarisasi pelayanan medis melalui clinical pathway terhadap reduksi unit cost.", views: 142, downloads: 38, fullText: "Isi lengkap artikel tentang Clinical Pathway dan efisiensi biaya rumah sakit..." },
  { id: 2, title: "Model Manajemen Resiko Terpadu Berbasis ISO 31000 di Sektor Publik", author: "Siti Aminah", authorPhoto: "https://i.pravatar.cc/150?u=siti", coAuthors: "Budi Raharjo", date: "12 April 2026", category: "Manajemen Resiko", abstract: "Studi ini memaparkan framework integrasi manajemen resiko dengan balance scorecard.", views: 98, downloads: 21, fullText: "Isi lengkap artikel tentang Manajemen Resiko ISO 31000..." },
  { id: 3, title: "Efektivitas Distribusi Insentif Berbasis KPI pada Tenaga Medis Rumah Sakit", author: "Budi Santoso", authorPhoto: "https://i.pravatar.cc/150?u=budi", coAuthors: "Rina Wulandari", date: "15 April 2026", category: "Manajemen SDM", abstract: "Penelitian ini mengkaji pengaruh sistem distribusi insentif berbasis KPI terhadap motivasi tenaga medis.", views: 76, downloads: 15, fullText: "Isi lengkap artikel tentang distribusi insentif berbasis KPI..." },
  { id: 4, title: "Penerapan MMPI-2 dalam Seleksi Tenaga Kesehatan: Studi Kasus RS Tipe A", author: "Dewi Kusuma", authorPhoto: "https://i.pravatar.cc/150?u=dewi", coAuthors: "", date: "18 April 2026", category: "Psikologi Klinis", abstract: "Artikel ini membahas implementasi tes MMPI-2 secara digital dalam proses seleksi tenaga kesehatan.", views: 203, downloads: 67, fullText: "Isi lengkap artikel tentang MMPI-2 digital..." },
  { id: 5, title: "Survei Kepuasan Pasien Digital: Transformasi Pengelolaan Komplain RS Modern", author: "Eko Prasetyo", authorPhoto: "https://i.pravatar.cc/150?u=eko", coAuthors: "Lina Marlina", date: "20 April 2026", category: "Manajemen Mutu", abstract: "Studi ini menganalisis efektivitas platform digital dalam pengelolaan komplain dan survei kepuasan pasien.", views: 119, downloads: 29, fullText: "Isi lengkap artikel tentang survei kepuasan digital..." },
];

function generatePDF(article) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pw = doc.internal.pageSize.width;
  const ph = doc.internal.pageSize.height;
  const m = 20;
  const cw = pw - m * 2;
  const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  const d = new Date();
  const dateStr = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
  doc.setFillColor(8, 8, 8);
  doc.rect(0, 0, pw, 36, "F");
  doc.setFillColor(198, 255, 0);
  doc.rect(0, 34, pw, 2, "F");
  doc.setTextColor(198, 255, 0);
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("JURNAL AKAPRO", pw / 2, 12, { align: "center" });
  doc.setTextColor(200, 200, 200);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text("Akademi Profesional Indonesia  |  akademiprofesional@gmail.com", pw / 2, 20, { align: "center" });
  doc.text("Kategori: " + article.category + "  |  Tanggal: " + article.date, pw / 2, 27, { align: "center" });
  let y = 46;
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  const titleLines = doc.splitTextToSize(article.title, cw);
  doc.text(titleLines, m, y);
  y += titleLines.length * 7 + 4;
  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(80, 80, 80);
  doc.text(article.author + (article.coAuthors ? ", " + article.coAuthors : ""), m, y);
  y += 10;
  doc.setDrawColor(198, 255, 0);
  doc.setLineWidth(0.5);
  doc.line(m, y, pw - m, y);
  y += 8;
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0, 0, 0);
  doc.text("ABSTRAK", m, y);
  y += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(40, 40, 40);
  const absLines = doc.splitTextToSize(article.abstract, cw);
  doc.text(absLines, m, y);
  y += absLines.length * 5.5 + 10;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.text("ISI ARTIKEL", m, y);
  y += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(40, 40, 40);
  const bodyLines = doc.splitTextToSize(article.fullText, cw);
  doc.text(bodyLines, m, y);
  const total = doc.internal.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    doc.setPage(i);
    doc.setDrawColor(198, 255, 0);
    doc.setLineWidth(0.3);
    doc.line(m, ph - 14, pw - m, ph - 14);
    doc.setFillColor(8, 8, 8);
    doc.rect(0, ph - 13, pw, 13, "F");
    doc.setFontSize(7);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(160, 160, 160);
    doc.text("has submitted on jurnal akademi profesional indonesia  |  Downloaded: " + dateStr, pw / 2, ph - 5, { align: "center" });
  }
  doc.save("Jurnal_AKAPRO_" + article.id + ".pdf");
}

function ArticleViewer({ article, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 3000, display: "flex", flexDirection: "column", overflowY: "auto" }}
    >
      <div style={{ maxWidth: "680px", width: "100%", margin: "0 auto", padding: "24px 20px 60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <span style={{ fontSize: "12px", color: "var(--electric-lime)", fontWeight: "700" }}>JURNAL AKAPRO</span>
          <button onClick={onClose} style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: "36px", height: "36px", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <X size={18} />
          </button>
        </div>
        <span style={{ fontSize: "11px", color: "var(--electric-lime)", fontWeight: "700", textTransform: "uppercase" }}>{article.category}</span>
        <h2 style={{ fontSize: "22px", fontWeight: "900", color: "white", lineHeight: 1.3, margin: "10px 0 16px" }}>{article.title}</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <img src={article.authorPhoto} alt={article.author} style={{ width: "44px", height: "44px", borderRadius: "50%", border: "2px solid var(--electric-lime)", objectFit: "cover" }} />
          <div>
            <div style={{ fontSize: "13px", fontWeight: "700", color: "white" }}>{article.author}{article.coAuthors ? ", " + article.coAuthors : ""}</div>
            <div style={{ fontSize: "11px", color: "var(--text-secondary)" }}>{article.date}</div>
          </div>
        </div>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "20px" }} />
        <h4 style={{ fontSize: "12px", fontWeight: "800", color: "var(--electric-lime)", marginBottom: "10px" }}>ABSTRAK</h4>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontStyle: "italic", marginBottom: "24px" }}>"{article.abstract}"</p>
        <h4 style={{ fontSize: "12px", fontWeight: "800", color: "var(--electric-lime)", marginBottom: "10px" }}>ISI ARTIKEL</h4>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: "32px" }}>{article.fullText}</p>
        <button onClick={() => generatePDF(article)}
          style={{ width: "100%", padding: "14px", borderRadius: "14px", background: "rgba(198,255,0,0.1)", border: "1px solid var(--electric-lime)", color: "var(--electric-lime)", fontWeight: "700", fontSize: "14px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <Download size={16} /> Unduh Full Text PDF
        </button>
      </div>
    </motion.div>
  );
}

function Artikel() {
  const [activeTab, setActiveTab] = useState("jurnal");
  const [query, setQuery] = useState("");
  const [filterTag, setFilterTag] = useState("");
  const [page, setPage] = useState(1);
  const [viewArticle, setViewArticle] = useState(null);
  const [stats, setStats] = useState(() =>
    Object.fromEntries(articles.map(a => [a.id, { views: a.views, downloads: a.downloads }]))
  );
  const [formData, setFormData] = useState({ nama: "", email: "", instansi: "", noWhatsapp: "", judul: "", kategori: "", abstrak: "" });
  const PAGE_SIZE = 10;

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    const tag = filterTag.toLowerCase();
    return articles.filter(a => {
      const mQ = !q || a.title.toLowerCase().includes(q) || a.author.toLowerCase().includes(q) || a.category.toLowerCase().includes(q);
      const mT = !tag || a.category.toLowerCase().includes(tag);
      return mQ && mT;
    });
  }, [query, filterTag]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const inputStyle = { padding: "14px", borderRadius: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "white", fontSize: "14px", outline: "none", width: "100%", boxSizing: "border-box", fontFamily: "inherit" };

  return (
    <div style={{ background: "var(--midnight-carbon)", minHeight: "100vh", padding: "100px 20px 40px", color: "white" }}>
      <h2 style={{ fontSize: "32px", fontWeight: "900", marginBottom: "4px" }}>Jurnal AKAPRO</h2>
      <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginBottom: "24px" }}>Publikasi ilmiah untuk profesional kesehatan</p>
      <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
        {["jurnal", "submit"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            style={{ padding: "10px 20px", borderRadius: "12px", border: "none", cursor: "pointer", fontWeight: "700", fontSize: "13px", background: activeTab === tab ? "var(--electric-lime)" : "rgba(255,255,255,0.08)", color: activeTab === tab ? "#000" : "rgba(255,255,255,0.6)" }}>
            {tab === "jurnal" ? "Daftar Jurnal" : "Submit Artikel"}
          </button>
        ))}
      </div>
      {activeTab === "jurnal" && (
        <div>
          <div style={{ position: "relative", marginBottom: "16px" }}>
            <input value={query} onChange={e => { setQuery(e.target.value); setPage(1); setFilterTag(""); }}
              placeholder="Cari judul, penulis, kategori..." style={{ ...inputStyle, paddingLeft: "40px" }} />
            <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.4)" }}>🔍</span>
            {(query || filterTag) && (
              <button onClick={() => { setQuery(""); setFilterTag(""); setPage(1); }}
                style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
                <X size={16} />
              </button>
            )}
          </div>
          {paginated.map(art => (
            <div key={art.id} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "20px", marginBottom: "16px" }}>
              <span style={{ fontSize: "11px", color: "var(--electric-lime)", fontWeight: "700", cursor: "pointer" }}
                onClick={() => { setFilterTag(art.category); setQuery(""); setPage(1); }}>{art.category}</span>
              <h3 style={{ fontSize: "16px", fontWeight: "800", color: "white", margin: "8px 0 10px", lineHeight: 1.4 }}>{art.title}</h3>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <img src={art.authorPhoto} alt={art.author} style={{ width: "32px", height: "32px", borderRadius: "50%", objectFit: "cover" }} />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>{art.author}{art.coAuthors ? ", " + art.coAuthors : ""} · {art.date}</span>
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "16px" }}>{art.abstract}</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => { setViewArticle(art); setStats(prev => ({ ...prev, [art.id]: { ...prev[art.id], views: prev[art.id].views + 1 } })); }}
                  style={{ padding: "8px 16px", borderRadius: "10px", background: "rgba(255,255,255,0.08)", border: "none", color: "white", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
                  👁 {stats[art.id]?.views} Lihat
                </button>
                <button onClick={() => { generatePDF(art); setStats(prev => ({ ...prev, [art.id]: { ...prev[art.id], downloads: prev[art.id].downloads + 1 } })); }}
                  style={{ padding: "8px 16px", borderRadius: "10px", background: "rgba(198,255,0,0.1)", border: "1px solid var(--electric-lime)", color: "var(--electric-lime)", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
                  ⬇ {stats[art.id]?.downloads} Unduh
                </button>
              </div>
            </div>
          ))}
          {totalPages > 1 && (
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "16px" }}>
              <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                style={{ padding: "8px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.08)", border: "none", color: "white", cursor: "pointer" }}>&#8249;</button>
              <span style={{ padding: "8px 14px", color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>{page} / {totalPages}</span>
              <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                style={{ padding: "8px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.08)", border: "none", color: "white", cursor: "pointer" }}>&#8250;</button>
            </div>
          )}
        </div>
      )}
      {activeTab === "submit" && (
        <form onSubmit={e => { e.preventDefault(); alert("Artikel berhasil disubmit! Tim kami akan melakukan review dalam 3-5 hari kerja."); setFormData({ nama: "", email: "", instansi: "", noWhatsapp: "", judul: "", kategori: "", abstrak: "" }); }}
          style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <input required placeholder="Nama Lengkap" value={formData.nama} onChange={e => setFormData(f => ({ ...f, nama: e.target.value }))} style={inputStyle} />
          <input required type="email" placeholder="Email" value={formData.email} onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} style={inputStyle} />
          <input required placeholder="Instansi" value={formData.instansi} onChange={e => setFormData(f => ({ ...f, instansi: e.target.value }))} style={inputStyle} />
          <input required placeholder="No. WhatsApp" value={formData.noWhatsapp} onChange={e => setFormData(f => ({ ...f, noWhatsapp: e.target.value }))} style={inputStyle} />
          <input required placeholder="Judul Artikel" value={formData.judul} onChange={e => setFormData(f => ({ ...f, judul: e.target.value }))} style={inputStyle} />
          <input required placeholder="Kategori" value={formData.kategori} onChange={e => setFormData(f => ({ ...f, kategori: e.target.value }))} style={inputStyle} />
          <textarea required placeholder="Abstrak" value={formData.abstrak} onChange={e => setFormData(f => ({ ...f, abstrak: e.target.value }))} rows={5} style={{ ...inputStyle, resize: "vertical" }} />
          <button type="submit" style={{ padding: "14px", borderRadius: "12px", background: "var(--electric-lime)", border: "none", color: "#000", fontWeight: "800", fontSize: "14px", cursor: "pointer" }}>
            Submit Artikel
          </button>
        </form>
      )}
      <AnimatePresence>
        {viewArticle && <ArticleViewer article={viewArticle} onClose={() => setViewArticle(null)} />}
      </AnimatePresence>
    </div>
  );
}

export default Artikel;
