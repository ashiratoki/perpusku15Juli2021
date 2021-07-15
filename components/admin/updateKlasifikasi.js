//@ts-check
import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'

export default function updateKlasifikasi() {
  const data = []
  const [_no_klasifikasi, setNoKlasifikasi] = useState('')
  const [_judul, setJudul] = useState('')
  const [_pengarang, setPengarang] = useState('')
  const [_penerbit, setPenerbit] = useState('')
  const [_tahun_terbit, setTahunTerbit] = useState('')
  const [_stok, setStok] = useState('')
  const [_tersedia, setTersedia] = useState('')
  const [_gambar, setGambar] = useState(null)
  const [_rak, setRak] = useState('')
  const [_baris, setBaris] = useState('')
  const [selectedFile, setSelectedFile] = useState('')
  const [file, setFile] = useState('')

  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const { no_klasifikasi, judul, pengarang, penerbit, tahun_terbit, stok, tersedia, gambar, rak, baris, id, no_klasifikasi_lama } = router.query

  async function checkNoKlasifikasi(no_klasifikasi) {
    const data = await fetch(`http://localhost:3000/api/cariklasifikasi/[no_klasifikasi]?no_klasifikasi=${no_klasifikasi}`)
    const hasil = await data.json()
    console.log(hasil)
    if (hasil.length >= 1 && no_klasifikasi != no_klasifikasi_lama) {
      alert(`${no_klasifikasi} sudah terdaftar`)
      setNoKlasifikasi('')
    }
  }

  const onSelectImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    const _file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = function () {
      setFile(_file);
      setGambar(reader.result);
    }
    reader.readAsDataURL(_file)
  }

  useEffect(() => {
    if (typeof no_klasifikasi == 'string') {
      setNoKlasifikasi(no_klasifikasi)
    }
    if (typeof judul == 'string') {
      setJudul(judul)
    }
    if (typeof pengarang == 'string') {
      setPengarang(pengarang)
    }
    if (typeof penerbit == 'string') {
      setPenerbit(penerbit)
    }
    if (typeof tahun_terbit == 'string') {
      setTahunTerbit(tahun_terbit)
    }
    if (typeof stok == 'string') {
      setStok(stok)
    }
    if (typeof tersedia == 'string') {
      setTersedia(tersedia)
    }
    if (typeof gambar == 'string') {
      setGambar(gambar)
    }
    if (typeof rak == 'string') {
      setRak(rak)
    }
    if (typeof baris == 'string') {
      setBaris(baris)
    }
  }, [no_klasifikasi, judul, pengarang, penerbit, tahun_terbit, stok, tersedia, gambar, rak, baris, id])

  async function submitHandler(e) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('http://localhost:3000/api/update-klasifikasi', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          no_klasifikasi: _no_klasifikasi,
          judul: _judul,
          pengarang: _pengarang,
          penerbit: _penerbit,
          tahun_terbit: _tahun_terbit,
          stok: _stok,
          tersedia: _tersedia,
          gambar: _gambar,
          rak: _rak,
          baris: _baris,
          id: id
        }),
      })
      const json = await res.json()
      setSubmitting(false)
      if (!res.ok) throw Error(json.message)

      alert(`Update Buku Sukses ${no_klasifikasi}`)
      Router.push('/admin/data-klasifikasi')
    } catch (e) {
      throw Error(e.message)
    }
  }
  return (
    <div id="wrapper" style={{ width: 'auto' }}>
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">

          <div className="container-fluid">
            <h3 className="text-dark mb-4">Update Klasifikasi</h3>
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
                              <div className="mb-3"><label className="form-label" htmlFor="index_buku"><strong>No Klasifikasi</strong>&nbsp;<br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="index_buku"
                                  value={_no_klasifikasi}
                                  onChange={(e) => setNoKlasifikasi(e.target.value)}
                                  onBlur={(e) => checkNoKlasifikasi(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Judul Buku</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="judul"
                                  value={_judul}
                                  onChange={(e) => setJudul(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Pengarang</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="pengarang"
                                  value={_pengarang}
                                  onChange={(e) => setPengarang(e.target.value)}
                                /></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Penerbit</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="username"
                                  value={_penerbit}
                                  onChange={(e) => setPenerbit(e.target.value)}
                                /></div>
                            </div>
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Tahun Terbit</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="email"
                                  value={_tahun_terbit}
                                  onChange={(e) => setTahunTerbit(e.target.value)}
                                /></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Stok</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="username"
                                  value={_stok}
                                  onChange={(e) => setStok(e.target.value)}
                                /></div>
                            </div>
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Tersedia</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="email"
                                  value={_tersedia}
                                  onChange={(e) => setTersedia(e.target.value)}
                                /></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">

                              <label htmlFor="upload">
                                <strong>
                                  Gambar Sampul Buku
                                    </strong>
                              </label>
                              <input
                                className='form-control'
                                id="uploadGambar"
                                type="file"
                                onChange={onSelectImage}
                              />

                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Rak</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="username-2"
                                  value={_rak}
                                  onChange={(e) => setRak(e.target.value)}
                                /></div>
                            </div>
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Baris</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="username-2"
                                  value={_baris}
                                  onChange={(e) => setBaris(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Gambar Sampul Buku</strong><br /></label></div>
                            </div>
                            <div className="col">
                                <img
                                  src={_gambar}
                                  alt={_gambar}
                                  style={{ width: '70px', height: '70px' }}
                                />
                            </div>
                          </div>


                          <div className="mb-3">
                            <button
                              className="btn btn-primary btn-sm"
                              type="submit"
                              style={{ padding: '11px 8px', fontSize: 17, marginTop: 11 }}>
                              Update Klasifikasi Buku</button></div>
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