//@ts-check

import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'

export default function updateDenda() {

  const [_nis, setNis] = useState('')
  const [_index_buku, setBuku] = useState('')
  const [_tgl_tempo, setTglTempo] = useState('')
  const [_tgl_kembali, setTglKembali] = useState('')
  const [_denda, setDenda] = useState('')
  const [_status, setStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const { nis, index_buku, tgl_tempo, tgl_kembali, denda, status, id, nisLama, index_buku_lama } = router.query

  useEffect(() => {
    if (typeof nis == 'string') {
      setNis(nis)
    }
    if (typeof index_buku == 'string') {
      setBuku(index_buku)
    }
    if (typeof tgl_tempo == 'string') {
      setTglTempo(tgl_tempo)
    }
    if (typeof tgl_kembali == 'string') {
      setTglKembali(tgl_kembali)
    }
    if (typeof denda == 'string') {
      setDenda(denda)
    } if (typeof status == 'string') {
      setStatus(status)
    }

  }, [nis, index_buku, tgl_tempo, tgl_kembali, denda, id])

  async function submitHandler(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('http://localhost:3000/api/update-denda', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nis: _nis,
          index_buku: _index_buku,
          tgl_tempo: _tgl_tempo,
          tgl_kembali: _tgl_kembali,
          denda: _denda,
          status: _status,
          id: id
        }),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)
      alert("Update data suskses")
      Router.push('/admin/data-denda')
    } catch (e) {
      throw Error(e.message)
    }
  }

  async function checkNis(nis) {
    const data = await fetch(`http://localhost:3000/api/carisiswa/[nis]?nis=${nis}`)
    const hasil = await data.json()
    console.log(hasil)
    if (hasil.length < 1 && nis != nisLama) {
      alert(`${nis} tidak ada, pastikan menggunakan No Klasifikasi yang sudah ada`)
      setNis('')
    }
  }

  async function checkNoIndexBuku(index_buku) {
    const data = await fetch(`http://localhost:3000/api/caribuku/[index_buku]?index_buku=${index_buku}`)
    const hasil = await data.json()
    console.log(hasil)
    if (hasil.length < 1 && index_buku != index_buku_lama) {
      alert(`${index_buku} tidak ada, pastikan menggunakan No Index Buku yang sudah ada`)
      setBuku('')
    }
  }

  return (
    <div id="wrapper" style={{ width: 'auto' }} onSubmit={submitHandler}>
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">

          <div className="container-fluid">
            <h3 className="text-dark mb-4">Update Data Denda</h3>
            <div className="row mb-3">
              <div className="col-lg-8">
                <div className="row mb-3 d-none">
                  <div className="col">
                    <div className="card textwhite bg-primary text-white shadow">
                      <div className="card-body">
                        <div className="row mb-2">
                          <div className="col">
                            <p className="m-0">Peformance</p>
                            <p className="m-0"><strong>65.2%</strong></p>
                          </div>
                          <div className="col-auto"><i className="fas fa-rocket fa-2x" /></div>
                        </div>
                        <p className="text-white-50 small m-0"><i className="fas fa-arrow-up" />&nbsp;5% since last month</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card textwhite bg-success text-white shadow">
                      <div className="card-body">
                        <div className="row mb-2">
                          <div className="col">
                            <p className="m-0">Peformance</p>
                            <p className="m-0"><strong>65.2%</strong></p>
                          </div>
                          <div className="col-auto"><i className="fas fa-rocket fa-2x" /></div>
                        </div>
                        <p className="text-white-50 small m-0"><i className="fas fa-arrow-up" />&nbsp;5% since last month</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={{ width: '489.328px' }}>
                    <div className="card shadow mb-3" style={{ width: '516.328px' }}>
                      <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold">Tambah Denda</p>
                      </div>
                      <div className="card-body">

                        <form >
                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="username"><strong>NIS</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text" id="nis"
                                  placeholder="NISN"
                                  name="username"
                                  value={_nis}
                                  onChange={(e) => setNis(e.target.value)}
                                  onBlur={(e) => checkNis(e.target.value)}
                                /></div>
                            </div>
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="email"><strong>No Index Buku</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="index_buku"
                                  placeholder="No Buku"
                                  name="email"
                                  value={_index_buku}
                                  onChange={(e) => setBuku(e.target.value)}
                                  onBlur={(e) => checkNoIndexBuku(e.target.value)}
                                /></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="date"><strong>Tanggal Tempo</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="date" id="tgl_terlambat"
                                  placeholder="" name="username"
                                  value={_tgl_tempo}
                                  onChange={(e) => setTglTempo(e.target.value)}
                                /></div>
                            </div>
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="date"><strong>Tanggal Terlambat</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="date" id="tgl_terlambat"
                                  placeholder="" name="username"
                                  value={_tgl_kembali}
                                  onChange={(e) => setTglKembali(e.target.value)}
                                /></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Denda</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text" id="denda"
                                  placeholder="Jumlah Denda"
                                  name="email"
                                  value={_denda}
                                  onChange={(e) => setDenda(e.target.value)}
                                /></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Status</strong><br /></label>
                                <select
                                  className="form-control form-control-sm form-select"
                                  value={_status}
                                  onChange={(e) => setStatus(e.target.value)}
                                >
                                  <option></option>
                                  <option value="Belum Bayar">Belum Bayar</option>
                                  <option value="Sudah Bayar">Sudah Bayar</option>
                                </select></div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <button
                              className="btn btn-primary btn-sm"
                              type="submit"
                              style={{ padding: '11px 8px', fontSize: 17, marginTop: 11 }}
                              disabled={submitting}
                            > {submitting ? 'Saving ...' : 'Save'}
                            </button></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
    </div>


  )
}