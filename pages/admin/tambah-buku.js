//@ts-check
import { useState } from 'react'
import TableBuku from '../../components/admin/tableBuku'

export default function TambahBuku() {
  const data = []
  const [index_buku, setIndexBuku] = useState('')
  const [no_klasifikasi, setNoKlasifikasi] = useState('')
  const [judul, setJudul] = useState('')
  const [pengarang, setPengarang] = useState('')
  const [penerbit, setPenerbit] = useState('')
  const [stok, setStok] = useState('')
  const [tersedia, setTersedia] = useState('')
  const [status, setStatus] = useState('')
  const [rak, setRak] = useState('')
  const [baris, setBaris] = useState('')
  const [tgl_masuk, setTglMasuk] = useState('')
  const [gambar, setGambar] = useState('')

  const clearInput = () => {
    setIndexBuku('');
    setNoKlasifikasi('');
    setJudul('');
    setPengarang('');
    setPenerbit('');
    setStok('');
    setTersedia('');
    setStatus('');
    setRak('');
    setBaris('');
    setTglMasuk('');
    setGambar('')
  }

  async function checkNoKlasifikasi(no_klasifikasi) {
    const data = await fetch(`http://localhost:3000/api/cariklasifikasi/[no_klasifikasi]?no_klasifikasi=${no_klasifikasi}`)
    const hasil = await data.json()
    console.log(hasil)
    if (hasil.length < 1) {
      alert(`${no_klasifikasi} tidak ada, pastikan menggunakan No Klasifikasi yang sudah ada`)
      setNoKlasifikasi('')
    }
  }

  async function checkNoIndexBuku(index_buku) {
    const data = await fetch(`http://localhost:3000/api/caribuku/[index_buku]?index_buku=${index_buku}`)
    const hasil = await data.json()
    console.log(hasil)
    if (hasil.length >= 1) {
      alert(`${index_buku} sudah terdaftar`)
      setIndexBuku('')
    }
  }

  async function submitHandler(e) {
    // setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/create-buku', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          index_buku, no_klasifikasi, status, tgl_masuk
        }),
      })
      // setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      // Router.push('/')
      clearInput();
      alert("Penambahan Data Sukses")
    } catch (e) {
      throw Error(e.message)
    }
  }
  return (
    <div id="wrapper" style={{ width: 'auto' }}>
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">

          <div className="container-fluid">
            <h3 className="text-dark mb-4">Tambah Data Buku</h3>
            <div className="row mb-3">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col" style={{ width: '489.328px' }}>
                    <div className="card shadow mb-3" style={{ width: '516.328px' }}>
                      <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold">Tambah Buku</p>
                      </div>
                      <div className="card-body">
                        <form onSubmit={submitHandler}>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="index_buku"><strong>No Index Buku</strong>&nbsp;<br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="index_buku"
                                  value={index_buku}
                                  onChange={(e) => setIndexBuku(e.target.value)}
                                  onBlur={(e) => checkNoIndexBuku(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="no_klasifikasi"><strong>No Klasifikasi Buku</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="no_klasifikasi"
                                  value={no_klasifikasi}
                                  onChange={(e) => setNoKlasifikasi(e.target.value)}
                                  onBlur={(e) => checkNoKlasifikasi(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Tanggal Masuk</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="date"
                                  id="tgl-masuk"
                                  value={tgl_masuk}
                                  onChange={(e) => setTglMasuk(e.target.value)}
                                /></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Status</strong><br /></label>
                                <select
                                  className="form-control form-control-sm form-select"
                                  value={status}
                                  onChange={(e) => setStatus(e.target.value)}
                                >
                                  <option></option>
                                  <option value="Normal">Normal</option>
                                  <option value="Rusak">Rusak</option>
                                  <option value="Hilang">Hilang</option>
                                </select></div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <button
                              className="btn btn-primary btn-sm"
                              type="submit"
                              style={{ padding: '11px 8px', fontSize: 17, marginTop: 11 }}>
                              Tambah Buku</button></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow">
              <div className="card-header py-3">
                <p className="text-primary m-0 fw-bold">Tabel Buku</p>
              </div>
              <div className="card-body">
                <div className="table-responsive" style={{ maxWidth: "auto" }} id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                  <TableBuku />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
    </div>


  )
}