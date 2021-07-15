//@ts-check
import { useState } from 'react'
import TableKlasifikasi from '../../components/admin/tableKlasifikasi'

export default function TambahBuku() {
  const data = []
  const [no_klasifikasi, setNoKlasifikasi] = useState('')
  const [judul, setJudul] = useState('')
  const [pengarang, setPengarang] = useState('')
  const [penerbit, setPenerbit] = useState('')
  const [tahun_terbit, setTahunTerbit] = useState('')
  const [stok, setStok] = useState('')
  const [tersedia, setTersedia] = useState('')
  const [rak, setRak] = useState('')
  const [baris, setBaris] = useState('')
  const [gambar, setGambar] = useState(null)
  const [selectedFile, setSelectedFile] = useState('')
  const [file, setFile] = useState('')

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

  const clearInput = () => {
    setNoKlasifikasi('');
    setJudul('');
    setPengarang('');
    setPenerbit('');
    setTahunTerbit('');
    setStok('');
    setTersedia('');
    setRak('');
    setBaris('');
    setGambar('');
    setFile('')
    setSelectedFile('')
  }

  async function checkNoKlasifikasi(no_klasifikasi) {
    const data = await fetch(`http://localhost:3000/api/cariklasifikasi/[no_klasifikasi]?no_klasifikasi=${no_klasifikasi}`)
    const hasil = await data.json()
    console.log(hasil)
    if (hasil.length >= 1) {
      alert(`${no_klasifikasi} sudah terdaftar`)
      setNoKlasifikasi('')
    }
  }

  async function submitHandler(e) {
    // setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/create-klasifikasi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          no_klasifikasi, judul, pengarang, penerbit, tahun_terbit, stok, tersedia,
          gambar, rak, baris,
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
                              <div className="mb-3"><label className="form-label" htmlFor="index_buku"><strong>No Klasifikasi</strong>&nbsp;<br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="index_buku"
                                  value={no_klasifikasi}
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
                                  value={judul}
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
                                  value={pengarang}
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
                                  value={penerbit}
                                  onChange={(e) => setPenerbit(e.target.value)}
                                /></div>
                            </div>
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Tahun Terbit</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="email"
                                  value={tahun_terbit}
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
                                  value={stok}
                                  onChange={(e) => setStok(e.target.value)}
                                /></div>
                            </div>
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Tersedia</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="email"
                                  value={tersedia}
                                  onChange={(e) => setTersedia(e.target.value)}
                                /></div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Rak</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="username-2"
                                  value={rak}
                                  onChange={(e) => setRak(e.target.value)}
                                /></div>
                            </div>
                            <div className="col">
                              <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Baris</strong><br /></label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="username-2"
                                  value={baris}
                                  onChange={(e) => setBaris(e.target.value)}
                                />
                              </div>
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
                              <div className="mb-3"><label className="form-label" htmlFor="username"><strong>Gambar Sampul Buku</strong><br /></label></div>
                            </div>
                            <div className="col">
                                <img
                                  src={gambar}
                                  alt="Gambar Sampul Buku"
                                  style={{ width: '70px', height: '70px' }}
                                />
                            </div>
                          </div>

                          <div className="mb-3">
                            <button
                              className="btn btn-primary btn-sm"
                              type="submit"
                              style={{ padding: '11px 8px', fontSize: 17, marginTop: 11 }}>
                              Tambah Klasifikasi Buku</button></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow">
              <div className="card-header py-3">
                <p className="text-primary m-0 fw-bold">Tabel Klasifikasi Buku</p>
              </div>
              <div className="card-body">
                <div className="table-responsive" style={{ maxWidth: "auto" }} id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                  <TableKlasifikasi />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
    </div>


  )
}