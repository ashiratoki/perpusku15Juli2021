//@ts-check
import TableTransaksi from "../../components/admin/tableTransaksi"
import TableTransaksiTemp from "../../components/admin/tableTransaksiTemp"
import { useState } from 'react'

export default function TambahTransaksi() {


  const data = []
  const [nis, setNis] = useState('')
  const [index_buku, setIndexBuku] = useState('')
  const [tgl_pinjam, setTglPinjam] = useState('')
  const [tgl_tempo, setTglTempo] = useState('')
  const [tgl_kembali, setTglKembali] = useState('')
  const [no_klasifikasi, setNoKlasifikasi] = useState('')

  const callTanggal = (value) => {
    setTglTempo(value)
    setTglKembali('belum kembali')
  }
  const clearInput = () => {
    setNis('')
    setIndexBuku('')
    setNoKlasifikasi('')
    setTglPinjam('')
    setTglTempo('')
    setTglKembali('')
  }

  async function checkNis(nis) {
    const data = await fetch(`http://localhost:3000/api/carisiswa/[nis]?nis=${nis}`)
    const hasil = await data.json()
    console.log(hasil)
    if (hasil.length < 1) {
      alert(`${nis} tidak ada, pastikan menggunakan No Klasifikasi yang sudah ada`)
      setNis('')
    }
  }

  async function checkNoIndexBuku(index_buku) {
    const data = await fetch(`http://localhost:3000/api/caribuku/[index_buku]?index_buku=${index_buku}`)
    const hasil = await data.json()
    console.log(hasil)
    if (hasil.length < 1) {
      alert(`${index_buku} tidak ada, pastikan menggunakan No Index Buku yang sudah ada`)
      setIndexBuku('')
    }
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

  async function minusTersedia(e) {
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/update-tersedia', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          no_klasifikasi

        }),
      })
      const json = await res.json()
      if (!res.ok) throw Error(json.message)

      alert(`Update Buku Sukses ${no_klasifikasi}`)
    } catch (e) {
      throw Error(e.message)
    }
  }

  async function submitHandler(e) {
    // setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/create-transaksi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nis,
          index_buku,
          no_klasifikasi,
          tgl_pinjam,
          tgl_tempo,
          tgl_kembali
        }),
      })
      // setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      // Router.push('/')
      clearInput()
      minusTersedia(e)
      alert("Penambahan Data Sukses")
    } catch (e) {
      throw Error(e.message)
    }
  }
  return (
    <div>
      <div className="container-fluid">
        <h3 className="text-dark mb-4">Tambah Transaksi</h3>
        <div className="row mb-3">
          <div className="col-lg-8">

            <div className="row">
              <div className="col">
                <div className="card shadow mb-3">
                  <div className="card-header py-3">
                  </div>
                  <div className="card-body">
                    <form id="Form-Transaksi" onSubmit={submitHandler}>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="username"><strong>NIS</strong><br /></label>
                            <input
                              className="form-control"
                              type="text"
                              id="namaPengembalian"
                              value={nis}
                              onChange={(e) => setNis(e.target.value)}
                              onBlur={(e) => checkNis(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="email"><strong>No Index Buku</strong></label>
                            <input
                              className="form-control"
                              type="text"
                              id="siswaPengembalian"
                              placeholder="Isi NIS Siswa"
                              value={index_buku}
                              onChange={(e) => setIndexBuku(e.target.value)}
                              onBlur={(e) => checkNoIndexBuku(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="username"><strong>No Klasifikasi Buku</strong><br /></label>
                            <input
                              className="form-control"
                              type="text"
                              id="namaPengembalian"
                              value={no_klasifikasi}
                              onChange={(e) => setNoKlasifikasi(e.target.value)}
                              onBlur={(e) => checkNoKlasifikasi(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row" id="Tanggal">
                        <div className="col" id="tgl-pinjam">
                          <div className="mb-3"><label className="form-label" htmlFor="first_name"><strong>Tanggal Pinjam</strong></label>
                            <input
                              className="form-control"
                              type="date"
                              value={tgl_pinjam}
                              onChange={(e) => setTglPinjam(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col" id="tgl-tempo">
                          <div className="mb-3"><label className="form-label" htmlFor="judul Buku"><strong>Tanggal Tempo</strong></label>
                            <input
                              className="form-control"
                              type="date"
                              value={tgl_tempo}
                              onChange={(e) => callTanggal(e.target.value)}
                            />
                          </div>
                        </div>

                      </div>

                      <div className="mb-3">
                        <button
                          className="btn btn-primary btn-sm"
                          type="submit"
                          style={{ padding: '11px 8px', fontSize: 17, marginTop: 11 }}
                        >Tambah Transaksi</button>
                        <button className="btn btn-primary btn-sm" type="submit" style={{ padding: '11px 8px', fontSize: 17, marginTop: 11, marginLeft: 39 }}>Cetak Barcode</button></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow">
          <div className="card-header py-3">
            <p className="text-primary m-0 fw-bold">Tabel Transaksi Pending</p>
          </div>
          <div className="card-body">

            <div className="table-responsive table mt-2" id="dataTable-1" role="grid" style={{ width: "auto" }} aria-describedby="dataTable_info">
              <TableTransaksiTemp />
            </div>

          </div>
        </div>
        <div className="card shadow">
          <div className="card-header py-3">
            <p className="text-primary m-0 fw-bold">Tabel Data Transaksi</p>
          </div>
          <div className="card-body">

            <div className="table-responsive table mt-2" id="dataTable-1" role="grid" style={{ width: "auto" }} aria-describedby="dataTable_info">
              <TableTransaksi />
            </div>

          </div>
        </div>
      </div>
      <a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
    </div>


  )
}