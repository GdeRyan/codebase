import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <div style={{ padding: 32 }}>
      <h1>CRM — mulai dari sini</h1>
      <p>Edit <code>src/App.jsx</code>, tambah halaman di <code>src/pages/</code>, API di <code>src/api/</code>.</p>
      <nav style={{ display: 'flex', gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/contoh">Contoh</Link>
      </nav>
    </div>
  )
}

function Contoh() {
  return (
    <div style={{ padding: 32 }}>
      <h2>Halaman contoh</h2>
      <p>Duplikat file ini untuk halaman baru, daftarkan di Routes.</p>
      <Link to="/">Kembali</Link>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contoh" element={<Contoh />} />
      </Routes>
    </BrowserRouter>
  )
}
