//@ts-check
import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'

export default function updateTransaksi(){
    const data=[]
    const [_nis, setNis] = useState('')
    const [_index_buku, setIndexBuku] = useState('')
    const [_no_klasifikasi, setNoKlasifikasi] = useState('')
    const [_tgl_pinjam, setTglPinjam] = useState('')
    const [_tgl_tempo, setTglTempo] = useState('')
    const [_tgl_kembali, setTglKembali] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()
    const { nis, index_buku, no_klasifikasi, tgl_pinjam, tgl_tempo, tgl_kembali, id_transaksi, nisLama, index_buku_lama, no_klasifikasi_lama } = router.query
  
    useEffect(() => {
      if (typeof nis == 'string') {
        setNis(nis)
      }
      if (typeof index_buku == 'string') {
        setIndexBuku(index_buku)
      }if (typeof no_klasifikasi == 'string') {
        setIndexBuku(no_klasifikasi)
      }
      if(typeof tgl_pinjam == 'string'){
          setTglPinjam(tgl_pinjam)
      }
      if(typeof tgl_tempo == 'string'){
          setTglTempo(tgl_tempo)
      }
      if(typeof tgl_kembali == 'string'){
          setTglKembali(tgl_kembali)
      }
  
    }, [nis, index_buku, no_klasifikasi, tgl_pinjam, tgl_tempo, tgl_kembali, id_transaksi])

    async function checkNis(nis){
      const data = await fetch(`http://localhost:3000/api/carisiswa/[nis]?nis=${nis}`)
      const hasil = await data.json()
      console.log(hasil)
      if(hasil.length < 1 && nis != nisLama){
         alert(`${nis} tidak ada, pastikan menggunakan No Klasifikasi yang sudah ada`)
         setNis('')
      }
    }
  
    async function checkNoIndexBuku(index_buku){
      const data = await fetch(`http://localhost:3000/api/caribuku/[index_buku]?index_buku=${index_buku}`)
      const hasil = await data.json()
      console.log(hasil)
      if(hasil.length < 1 && index_buku != index_buku_lama){
         alert(`${index_buku} tidak ada, pastikan menggunakan No Index Buku yang sudah ada`)
         setIndexBuku('')
      }
    }

    async function checkNoKlasifikasi(no_klasifikasi) {
      const data = await fetch(`http://localhost:3000/api/cariklasifikasi/[no_klasifikasi]?no_klasifikasi=${no_klasifikasi}`)
      const hasil = await data.json()
      console.log(hasil)
      if (hasil.length < 1 && no_klasifikasi != no_klasifikasi_lama) {
        alert(`${no_klasifikasi} tidak ada, pastikan menggunakan No Klasifikasi yang sudah ada`)
        setNoKlasifikasi('')
      }
    }
  
    async function submitHandler(e) {
      e.preventDefault()
      setSubmitting(true)
      try {
        const res = await fetch('http://localhost:3000/api/update-transaksi', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nis : _nis,
            index_buku : _index_buku,
            no_klasifikasi : _no_klasifikasi,
            tgl_pinjam : _tgl_pinjam,
            tgl_tempo : _tgl_tempo,
            tgl_kembali : _tgl_kembali,
            id_transaksi : id_transaksi
          }),
        })
        const json = await res.json()
        setSubmitting(false)
        if (!res.ok) throw Error(json.message)
  
        alert(`Update Data Sukses ${_nis}, ${_index_buku}`)
        Router.push('/admin/data-transaksi')
      } catch (e) {
        throw Error(e.message)
      }
    }
    return(
        <div>
        <div className="container-fluid">
          <h3 className="text-dark mb-4">Update Transaksi</h3>
          <div className="row mb-3">
            <div className="col-lg-8">
              <div className="row">
                <div className="col">
                  <div className="card shadow mb-3">
                    <div className="card-header py-3">
                      <p className="text-primary m-0 fw-bold">Tambah Transaksi</p>
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
                              placeholder="Isi No Index Buku" 
                              value = {_nis} 
                              onChange = {(e) => setNis(e.target.value)}
                              onBlur = {(e) => checkNis(e.target.value)}
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
                              value = {_index_buku} 
                              onChange = {(e) => setIndexBuku(e.target.value)}
                              onBlur = {(e) => checkNoIndexBuku(e.target.value)} 
                            />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="mb-3"><label className="form-label" htmlFor="username"><strong>NIS</strong><br /></label>
                            <input 
                              className="form-control" 
                              type="text" 
                              id="namaPengembalian" 
                              placeholder="Isi No Index Buku" 
                              value = {_nis} 
                              onChange = {(e) => setNis(e.target.value)}
                              onBlur = {(e) => checkNis(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="mb-3"><label className="form-label" htmlFor="email"><strong>No Klasifikasi Buku</strong></label>
                            <input 
                              className="form-control" 
                              type="text" 
                              id="siswaPengembalian" 
                              placeholder="Isi NIS Siswa"
                              value = {_no_klasifikasi} 
                              onChange = {(e) => setNoKlasifikasi(e.target.value)}
                              onBlur = {(e) => checkNoKlasifikasi(e.target.value)} 
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
                              value = {_tgl_pinjam} 
                              onChange = {(e) => setTglPinjam(e.target.value)}
                            />
                            </div>
                          </div>
                          <div className="col" id="tgl-tempo">
                            <div className="mb-3"><label className="form-label" htmlFor="judul Buku"><strong>Tanggal Tempo</strong></label>
                            <input 
                              className="form-control" 
                              type="date"
                              value = {_tgl_tempo} 
                              onChange = {(e) => setTglTempo(e.target.value)} 
                            />
                            </div>
                          </div>
                          
                        </div>
                        <div className="col" id="tgl-tempo">
                            <div className="mb-3"><label className="form-label" htmlFor="judul Buku"><strong>Tanggal Kembali</strong></label>
                            <input 
                              className="form-control" 
                              type="date"
                              value = {_tgl_kembali} 
                              onChange = {(e) => setTglKembali(e.target.value)} 
                            />
                            </div>
                        </div>
                        <div className="mb-3">
                          <button 
                            className="btn btn-primary btn-sm" 
                            type="submit" 
                            style={{padding: '11px 8px', fontSize: 17, marginTop: 11}}
                            disabled={submitting} 
                            > {submitting ? 'Saving ...' : 'Save'}</button>
                          <button className="btn btn-primary btn-sm" type="submit" style={{padding: '11px 8px', fontSize: 17, marginTop: 11, marginLeft: 39}}>Cetak Barcode</button></div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>  
    )
}