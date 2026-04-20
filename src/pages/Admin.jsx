import { useState, useEffect, memo } from 'react';
import { supabase } from '../lib/supabaseClient';
import {
  LogOut, Plus, Trash2, Edit, Save, X, Check, Clock,
  Menu, ChevronRight, FileText, Download, User,
  Search, Eye, Filter, RefreshCcw, ShieldCheck,
  MessageSquare, Settings, Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SUPERADMIN_EMAIL = 'mukhsin9@gmail.com';

const btnLime = {
  background: 'var(--electric-lime)',
  color: 'black',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '12px',
  fontWeight: '800',
  fontSize: '13px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
};

const btnGhost = {
  background: 'rgba(255,255,255,0.05)',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '12px',
  fontWeight: '700',
  fontSize: '13px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  transition: 'all 0.3s'
};

const inputStyle = {
  width: '100%',
  padding: '14px 18px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '14px',
  color: 'white',
  fontSize: '14px',
  outline: 'none',
  transition: 'all 0.3s'
};

// --- Sub Components ---

const Modal = ({ title, children, onClose }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backdropFilter: 'blur(10px)' }}>
    <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
      style={{ width: '100%', maxWidth: '600px', background: '#111', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
      <div style={{ padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '900' }}>{title}</h2>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}><X size={24} /></button>
      </div>
      <div style={{ padding: '32px', maxHeight: '70vh', overflowY: 'auto' }}>
        {children}
      </div>
    </motion.div>
  </motion.div>
);

const TabPelatihan = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(null);
  const [form, setForm] = useState({ judul: '', tanggal: '', lokasi: '', harga: '', deskripsi: '', kategori: 'Manajemen Keuangan' });

  const load = async () => {
    const { data } = await supabase.from('pelatihan').select('*').order('created_at', { ascending: false });
    setData(data || []);
  };

  useEffect(() => { load(); }, []);

  const save = async () => {
    const payload = {
      judul: form.judul,
      deskripsi: form.deskripsi,
      tanggal_mulai: form.tanggal,
      lokasi: form.lokasi,
      investasi_single: parseInt(form.harga.replace(/[^0-9]/g, '')) || 0,
      kategori: form.kategori,
      status: 'aktif'
    };

    if (modal === 'add') {
      await supabase.from('pelatihan').insert([payload]);
    } else {
      await supabase.from('pelatihan').update(payload).eq('id', modal.id);
    }
    setModal(null);
    load();
  };

  const remove = async (id) => {
    if (confirm('Hapus jadwal ini?')) {
      await supabase.from('pelatihan').delete().eq('id', id);
      load();
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: '900' }}>Manajemen Jadwal Pelatihan</h2>
        <button style={btnLime} onClick={() => { setForm({ judul: '', tanggal: '', lokasi: '', harga: '', deskripsi: '', kategori: 'Manajemen Keuangan' }); setModal('add'); }}><Plus size={18} /> Tambah Jadwal</button>
      </div>

      <div style={{ display: 'grid', gap: '16px' }}>
        {data.map(item => (
          <div key={item.id} style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '12px', color: 'var(--electric-lime)', fontWeight: '800', marginBottom: '4px', textTransform: 'uppercase' }}>{item.kategori}</p>
              <h3 style={{ fontSize: '16px', fontWeight: '800', marginBottom: '4px' }}>{item.judul}</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{item.tanggal_mulai} · {item.lokasi}</p>
              <p style={{ fontSize: '14px', fontWeight: '800', color: 'var(--electric-lime)' }}>Rp {item.investasi_single?.toLocaleString()}</p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => { setForm(item); setModal(item); }} style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none', cursor: 'pointer' }}><Edit size={16} /></button>
              <button onClick={() => remove(item.id)} style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255,68,68,0.1)', color: '#ff4444', border: 'none', cursor: 'pointer' }}><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {modal && (
          <Modal title={modal === 'add' ? 'Tambah Pelatihan' : 'Edit Pelatihan'} onClose={() => setModal(null)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input placeholder="Judul Pelatihan" style={inputStyle} value={form.judul} onChange={e => setForm({ ...form, judul: e.target.value })} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <input placeholder="Tanggal (e.g. 12-14 Okt 2024)" style={inputStyle} value={form.tanggal} onChange={e => setForm({ ...form, tanggal: e.target.value })} />
                <input placeholder="Lokasi" style={inputStyle} value={form.lokasi} onChange={e => setForm({ ...form, lokasi: e.target.value })} />
              </div>
              <input placeholder="Harga (e.g. Rp 3.500.000)" style={inputStyle} value={form.harga} onChange={e => setForm({ ...form, harga: e.target.value })} />
              <select style={inputStyle} value={form.kategori} onChange={e => setForm({ ...form, kategori: e.target.value })}>
                {['Manajemen Keuangan', 'Manajemen Resiko', 'Manajemen Komplain', 'Manajemen SDM', 'Lainnya'].map(c => <option key={c} value={c} style={{ background: '#111' }}>{c}</option>)}
              </select>
              <textarea placeholder="Deskripsi Singkat" style={{ ...inputStyle, minHeight: '120px' }} value={form.deskripsi} onChange={e => setForm({ ...form, deskripsi: e.target.value })} />
              <button style={{ ...btnLime, width: '100%', justifyContent: 'center', padding: '16px', marginTop: '12px' }} onClick={save}>Simpan Data</button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

const TabArtikel = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(null);
  const [reviewNotes, setReviewNotes] = useState('');
  const [doiInput, setDoiInput] = useState('');

  const load = async () => {
    const { data } = await supabase.from('artikel').select('*').order('created_at', { ascending: false });
    setData(data || []);
  };

  useEffect(() => { load(); }, []);

  const updateStatus = async (id, status) => {
    const { error } = await supabase.from('artikel').update({
      status,
      reviewer_notes: reviewNotes,
      doi: doiInput
    }).eq('id', id);
    if (error) alert(error.message);
    setModal(null);
    load();
  };

  return (
    <div>
      <h2 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '24px' }}>Review Publikasi Jurnal</h2>
      <div style={{ display: 'grid', gap: '16px' }}>
        {data.map(item => (
          <div key={item.id} style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <span style={{ fontSize: '10px', fontWeight: '900', padding: '4px 10px', borderRadius: '10px', background: item.status === 'approved' ? 'rgba(198,255,0,0.1)' : item.status === 'review' ? 'rgba(0,255,255,0.1)' : 'rgba(255,255,255,0.05)', color: item.status === 'approved' ? 'var(--electric-lime)' : item.status === 'review' ? '#00ffff' : 'white', marginBottom: '8px', display: 'inline-block' }}>
                  {item.status.toUpperCase()}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: '800' }}>{item.judul}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Oleh: {item.penulis} ({item.instansi})</p>
              </div>
              <button onClick={() => { setModal(item); setReviewNotes(item.reviewer_notes || ''); setDoiInput(item.doi || ''); }} style={btnGhost}><Search size={16} /> Review</button>
            </div>
            {item.reviewer_notes && <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '10px' }}>Notes: {item.reviewer_notes}</p>}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {modal && (
          <Modal title="Detail Review Artikel" onClose={() => setModal(null)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h4 style={{ fontSize: '12px', color: 'var(--electric-lime)', fontWeight: '800', marginBottom: '8px' }}>ABSTRAK</h4>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'white' }}>{modal.abstrak}</p>
              </div>
              <div>
                <h4 style={{ fontSize: '12px', color: 'var(--electric-lime)', fontWeight: '800', marginBottom: '8px' }}>KONTAK PENULIS</h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Email: {modal.email}</p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>WA: {modal.no_whatsapp}</p>
              </div>
              <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: '800', marginBottom: '16px' }}>Tindakan Moderasi</h4>
                <input placeholder="DOI Number (jika disetujui)" style={{ ...inputStyle, marginBottom: '12px' }} value={doiInput} onChange={e => setDoiInput(e.target.value)} />
                <textarea placeholder="Catatan untuk penulis..." style={{ ...inputStyle, minHeight: '80px', marginBottom: '16px' }} value={reviewNotes} onChange={e => setReviewNotes(e.target.value)} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <button onClick={() => updateStatus(modal.id, 'review')} style={{ ...btnGhost, color: '#00ffff', justifyContent: 'center' }}><Clock size={18} /> Set Review</button>
                    <button onClick={() => updateStatus(modal.id, 'rejected')} style={{ ...btnGhost, color: '#ff4444', justifyContent: 'center' }}><X size={18} /> Tolak</button>
                  </div>
                  <button onClick={() => updateStatus(modal.id, 'approved')} style={{ ...btnLime, width: '100%', justifyContent: 'center' }}><ShieldCheck size={18} /> Approve & Publish</button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

const TabRegistrasi = () => {
  const [data, setData] = useState([]);
  const load = async () => {
    const { data } = await supabase.from('registrasi_pelatihan').select('*').order('created_at', { ascending: false });
    setData(data || []);
  };
  useEffect(() => { load(); }, []);
  return (
    <div>
      <h2 style={{ fontSize: '22px', fontWeight: '900', marginBottom: '24px' }}>Daftar Registrasi Peserta</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px' }}>
          <thead>
            <tr style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>NAMA</th>
              <th style={{ padding: '12px' }}>INSTANSI</th>
              <th style={{ padding: '12px' }}>PELATHIAN</th>
              <th style={{ padding: '12px' }}>METODE BAYAR</th>
              <th style={{ padding: '12px' }}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {data.map(reg => (
              <tr key={reg.id} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                <td style={{ padding: '16px', fontSize: '14px', fontWeight: '700', borderRadius: '12px 0 0 12px' }}>{reg.nama_lengkap}</td>
                <td style={{ padding: '16px', fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{reg.instansi}</td>
                <td style={{ padding: '16px', fontSize: '13px', fontWeight: '600' }}>{reg.judul_pelatihan}</td>
                <td style={{ padding: '16px', fontSize: '12px' }}>{reg.metode_pembayaran}</td>
                <td style={{ padding: '16px', borderRadius: '0 12px 12px 0' }}>
                  <span style={{ fontSize: '10px', fontWeight: '900', padding: '4px 10px', borderRadius: '10px', background: reg.pembayaran_status === 'paid' ? 'rgba(198,255,0,0.1)' : 'rgba(255,255,255,0.05)', color: reg.pembayaran_status === 'paid' ? 'var(--electric-lime)' : 'white' }}>
                    {reg.pembayaran_status?.toUpperCase()}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TabKonten = () => {
  const [csData, setCsData] = useState([]);
  const [konten, setKonten] = useState([]);
  const [csModal, setCsModal] = useState(null);
  const [kontenModal, setKontenModal] = useState(null);
  const [csForm, setCsForm] = useState({ nama: '', nomor: '', status: 'aktif' });
  const [kontenForm, setKontenForm] = useState({ halaman: '', key: '', value: '', tipe: 'text' });

  const load = async () => {
    const { data: cs } = await supabase.from('cs_whatsapp').select('*');
    const { data: con } = await supabase.from('konten_halaman').select('*');
    setCsData(cs || []);
    setKonten(con || []);
  };

  useEffect(() => { load(); }, []);

  const saveCs = async () => {
    if (csModal === 'add') await supabase.from('cs_whatsapp').insert([csForm]);
    else await supabase.from('cs_whatsapp').update(csForm).eq('id', csModal.id);
    setCsModal(null); load();
  };

  const deleteCs = async (id) => { if (confirm('Hapus CS ini?')) { await supabase.from('cs_whatsapp').delete().eq('id', id); load(); } };

  const saveKonten = async () => {
    if (kontenModal === 'add') await supabase.from('konten_halaman').insert([kontenForm]);
    else await supabase.from('konten_halaman').update(kontenForm).eq('id', kontenModal.id);
    setKontenModal(null); load();
  };

  const deleteKonten = async (id) => { if (confirm('Hapus konten ini?')) { await supabase.from('konten_halaman').delete().eq('id', id); load(); } };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '32px' }}>
      {/* Customer Service */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '900' }}>Admin CS (WA)</h3>
          <button style={btnLime} onClick={() => { setCsForm({ nama: '', nomor: '', status: 'aktif' }); setCsModal('add'); }}><Plus size={16} /> Tambah</button>
        </div>
        {csData.map(cs => (
          <div key={cs.id} style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '700' }}>{cs.nama}</p>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{cs.nomor} · <span style={{ color: cs.status === 'aktif' ? 'var(--electric-lime)' : '#ff4444' }}>{cs.status}</span></p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => { setCsForm(cs); setCsModal(cs); }} style={{ padding: '8px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none', cursor: 'pointer' }}><Edit size={14} /></button>
              <button onClick={() => deleteCs(cs.id)} style={{ padding: '8px', borderRadius: '10px', background: 'rgba(255,68,68,0.1)', color: '#ff4444', border: 'none', cursor: 'pointer' }}><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Konten Halaman & Global Settings */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '900' }}>Pengaturan Global & Konten</h3>
          <button style={btnGhost} onClick={() => { setKontenForm({ halaman: '', key: '', value: '', tipe: 'text' }); setKontenModal('add'); }}><Plus size={16} /> Tambah</button>
        </div>

        {/* Signature Management Section */}
        <div style={{ marginBottom: '24px', padding: '24px', background: 'rgba(198,255,0,0.05)', border: '1px solid rgba(198,255,0,0.2)', borderRadius: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <ImageIcon size={20} color="var(--electric-lime)" />
            <h4 style={{ fontSize: '15px', fontWeight: '800' }}>Tanda Tangan Elektronik</h4>
          </div>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>Masukkan URL file PNG tanda tangan (disarankan transparan). File ini akan otomatis tampil di PDF TOR & Kurikulum.</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              placeholder="URL Tanda Tangan (PNG Transparan)"
              style={{ ...inputStyle, background: 'rgba(0,0,0,0.4)' }}
              value={konten.find(k => k.halaman === 'global' && k.key === 'signature_url')?.value || ''}
              onChange={async (e) => {
                const val = e.target.value;
                const existing = konten.find(k => k.halaman === 'global' && k.key === 'signature_url');
                if (existing) {
                  await supabase.from('konten_halaman').update({ value: val }).eq('id', existing.id);
                } else {
                  await supabase.from('konten_halaman').insert({ halaman: 'global', key: 'signature_url', value: val, tipe: 'text' });
                }
                load();
              }}
            />
          </div>
        </div>

        {konten.filter(k => k.key !== 'signature_url').map(k => (
          <div key={k.id} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', marginBottom: '10px', border: '1px solid rgba(255,255,255,0.03)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '11px', color: 'var(--electric-lime)', fontWeight: '800', textTransform: 'uppercase' }}>{k.halaman} / {k.key}</p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>{k.value?.substring(0, 60)}{k.value?.length > 60 ? '...' : ''}</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => { setKontenForm(k); setKontenModal(k); }} style={{ padding: '8px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none', cursor: 'pointer' }}><Edit size={14} /></button>
              <button onClick={() => deleteKonten(k.id)} style={{ padding: '8px', borderRadius: '10px', background: 'rgba(255,68,68,0.1)', color: '#ff4444', border: 'none', cursor: 'pointer' }}><Trash2 size={14} /></button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {csModal && (
          <Modal title={csModal === 'add' ? 'Tambah CS' : 'Edit CS'} onClose={() => setCsModal(null)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input placeholder="Nama CS" style={inputStyle} value={csForm.nama} onChange={e => setCsForm({ ...csForm, nama: e.target.value })} />
              <input placeholder="Nomor WhatsApp (e.g. 628...)" style={inputStyle} value={csForm.nomor} onChange={e => setCsForm({ ...csForm, nomor: e.target.value })} />
              <select style={inputStyle} value={csForm.status} onChange={e => setCsForm({ ...csForm, status: e.target.value })}>
                <option value="aktif" style={{ background: '#111' }}>Aktif</option>
                <option value="nonaktif" style={{ background: '#111' }}>Nonaktif</option>
              </select>
              <button style={{ ...btnLime, width: '100%', justifyContent: 'center', padding: '16px' }} onClick={saveCs}>Simpan CS</button>
            </div>
          </Modal>
        )}
        {kontenModal && (
          <Modal title={kontenModal === 'add' ? 'Tambah Konten' : 'Edit Konten'} onClose={() => setKontenModal(null)}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input placeholder="Halaman (e.g. home, artikel)" style={inputStyle} value={kontenForm.halaman} onChange={e => setKontenForm({ ...kontenForm, halaman: e.target.value })} />
              <input placeholder="Key (e.g. welcome_text)" style={inputStyle} value={kontenForm.key} onChange={e => setKontenForm({ ...kontenForm, key: e.target.value })} />
              <textarea placeholder="Value" style={{ ...inputStyle, minHeight: '120px' }} value={kontenForm.value} onChange={e => setKontenForm({ ...kontenForm, value: e.target.value })} />
              <button style={{ ...btnLime, width: '100%', justifyContent: 'center', padding: '16px' }} onClick={saveKonten}>Simpan Konten</button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

const Admin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pelatihan');
  const [authError, setAuthError] = useState('');
  const [pendingCount, setPendingCount] = useState(0);

  const fetchPendingCount = async () => {
    try {
      const { count } = await supabase
        .from('artikel')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'pending');
      setPendingCount(count || 0);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (user) fetchPendingCount();
  }, [user, activeTab]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) setUser(session.user);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user || null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    const { data, error } = await supabase.auth.signInWithPassword({
      email: e.target.email.value,
      password: e.target.password.value
    });
    if (error) { setAuthError(error.message); return; }
    if (data.user.email !== SUPERADMIN_EMAIL) {
      await supabase.auth.signOut();
      setAuthError('Hanya superadmin yang diizinkan masuk.');
      return;
    }
    setUser(data.user);
  };

  if (loading) return <div style={{ background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--electric-lime)' }}>⚡ AKAPRO SYSTEM SECURING...</div>;

  if (!user) return (
    <div style={{ background: 'var(--midnight-carbon)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} style={{ width: '100%', maxWidth: '400px', padding: '40px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '40px', backdropFilter: 'blur(20px)' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ background: 'rgba(198,255,0,0.1)', width: '70px', height: '70px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', border: '1px solid var(--electric-lime)' }}>
            <ShieldCheck size={32} color="var(--electric-lime)" />
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '900', color: 'white', marginBottom: '8px' }}>Superadmin Login</h2>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontWeight: '600' }}>Selamat datang kembali di sistem AKAPRO</p>
        </div>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input name="email" type="email" placeholder="Email Address" style={inputStyle} required />
          <input name="password" type="password" placeholder="Password" style={inputStyle} required />
          {authError && <p style={{ fontSize: '12px', color: '#ff4444', textAlign: 'center' }}>{authError}</p>}
          <button type="submit" style={{ ...btnLime, justifyContent: 'center', padding: '18px', fontSize: '15px' }}>Masuk Dashboard ⚡</button>
        </form>
      </motion.div>
    </div>
  );

  const tabs = [
    { id: 'pelatihan', label: 'Pelatihan', icon: <Clock size={16} /> },
    { id: 'artikel', label: 'Review Artikel', icon: <FileText size={16} /> },
    { id: 'registrasi', label: 'Registrasi', icon: <User size={16} /> },
    { id: 'konten', label: 'Setting & Konten', icon: <Settings size={16} /> },
  ];

  return (
    <div style={{ background: 'var(--midnight-carbon)', minHeight: '100vh', color: 'white' }}>
      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(13,13,13,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0 24px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--electric-lime)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontWeight: '900' }}>A</div>
            <div>
              <h1 style={{ fontSize: '18px', fontWeight: '900' }}>AKAPRO Admin</h1>
              <p style={{ fontSize: '11px', color: 'var(--electric-lime)', fontWeight: '800' }}>SECURE DASHBOARD</p>
            </div>
          </div>
          <button onClick={() => supabase.auth.signOut()} style={{ ...btnGhost, color: 'rgba(255,255,255,0.5)' }}><LogOut size={16} /> Logout</button>
        </div>
      </nav>

      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', overflowX: 'auto', paddingBottom: '4px' }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '12px 24px', borderRadius: '16px', border: 'none',
                background: activeTab === tab.id ? 'var(--electric-lime)' : 'rgba(255,255,255,0.03)',
                color: activeTab === tab.id ? 'black' : 'white',
                fontSize: '13px', fontWeight: '800', cursor: 'pointer', whiteSpace: 'nowrap',
                display: 'flex', alignItems: 'center', gap: '10px', transition: '0.3s'
              }}>
              {tab.icon} {tab.label}
              {tab.id === 'artikel' && (
                <span style={{
                  marginLeft: '8px',
                  background: activeTab === 'artikel' ? 'black' : 'var(--electric-lime)',
                  color: activeTab === 'artikel' ? 'var(--electric-lime)' : 'black',
                  padding: '2px 8px',
                  borderRadius: '100px',
                  fontSize: '10px',
                  fontWeight: '900'
                }}>
                  {pendingCount}
                </span>
              )}
            </button>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={activeTab} style={{ background: 'rgba(255,255,255,0.01)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.04)', padding: '32px', minHeight: '60vh' }}>
          {activeTab === 'pelatihan' && <TabPelatihan />}
          {activeTab === 'artikel' && <TabArtikel />}
          {activeTab === 'registrasi' && <TabRegistrasi />}
          {activeTab === 'konten' && <TabKonten />}
        </motion.div>
      </main>
    </div>
  );
};

export default Admin;
