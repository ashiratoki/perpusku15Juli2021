//@ts-check
import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import Moment from 'react-moment'

export default function updateTransaksi(){
    const data=[]
    const [_index_buku, setIndexBuku] = useState('')
    const [_no_klasifikasi, setNoKlasifikasi] = useState('')
    const [_status, setStatus] = useState('')
    const [_tgl_masuk, setTglMasuk] = useState('')
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)
    const { index_buku, no_klasifikasi, status, tgl_masuk, id_buku, index_buku_lama, no_klasifikasi_lama } = router.query

    useEffect(() => {
      if (typeof index_buku == 'string') {
        setIndexBuku(index_buku)
      }
      if (typeof no_klasifikasi == 'string') {
        setNoKlasifikasi(no_klasifikasi)
      }
      if (typeof status == 'string') {
        setStatus(status)
      }
      if(typeof tgl_masuk == 'string'){
          setTglMasuk(tgl_masuk)
      }
    }, [index_buku, no_klasifikasi, status, tgl_masuk, id_buku, index_buku_lama])
  
    async function checkNoKlasifikasi(no_klasifikasi){
      const data = await fetch(`http://localhost:3000/api/cariklasifikasi/[no_klasifikasi]?no_klasifikasi=${no_klasifikasi}`)
      const hasil = await data.json()
      console.log(hasil)
      console.log(index_buku_lama)
      if(hasil.length < 1 && index_buku != no_klasifikasi_lama){
         alert(`${no_klasifikasi} tidak ada, pastikan menggunakan No Klasifikasi yang sudah ada`)
         setNoKlasifikasi('')
      }
    }
  
    async function checkNoIndexBuku(index_buku){
      const data1 = await fetch(`http://localhost:3000/api/caribuku/[index_buku]?index_buku=${index_buku}`)
      const hasil1 = await data1.json()
      // const data2 = await fetch(`http://localhost:3000/api/caribuku/[index_buku]?index_buku=${index_buku_lama}`)
      // const hasil2 = await data2.json()
      // console.log(hasil1)
      // console.log(hasil2)
      console.log(index_buku_lama)
      if(hasil1.length >= 1 && index_buku != index_buku_lama ){
         alert(`${index_buku} sudah terdaftar`)
         setIndexBuku('')
      }
    }

    async function submitHandler(e) {
      e.preventDefault()
      setSubmitting(true)
      try {
        const res = await fetch('http://localhost:3000/api/update-buku', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            index_buku : _index_buku,
            no_klasifikasi : _no_klasifikasi,
            status : _status,
            tgl_masuk : _tgl_masuk,
            id_buku : id_buku
          }),
        })
        const json = await res.json()
        setSubmitting(false)
        if (!res.ok) throw Error(json.message)
  
        alert(`Update Buku Sukses ${id_buku}, ${_index_buku}, ${_no_klasifikasi}`)
        Router.push('/admin/data-buku')
      } catch (e) {
        throw Error(e.message)
      }
    }
    
    // let tgl = <Moment format="MM/DD/YYYY">{_tgl_masuk.toString()}</Moment>

    return(
        <div>
        <div className="container-fluid">
          <h3 className="text-dark mb-4">Update Buku</h3>
          <div className="row mb-3">
            <div className="col-lg-8">
              <div className="row">
                <div className="col">
                  <div className="card shadow mb-3">
                    <div className="card-header py-3">
                      <p className="text-primary m-0 fw-bold">Meng-update Buku</p>
                    </div>
                    <div className="card-body">
                      <form id="Form-Transaksi" onSubmit={submitHandler}>
                        <div className="row">
                          <div className="col">
                            <div className="mb-3"><label className="form-label" htmlFor="username"><strong>No. Index Buku</strong><br /></label>
                            <input 
                              className="form-control" 
                              type="text" 
                              id="namaPengembalian" 
                              placeholder="Isi No Index Buku" 
                              value = {_index_buku} 
                              onChange = {(e) => setIndexBuku(e.target.value)}
                              onBlur = {(e) => checkNoIndexBuku(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="mb-3"><label className="form-label" htmlFor="email"><strong>No Klasifikasi Buku</strong></label>
                            <input 
                              className="form-control" 
                              type="text" 
                              id="siswaPengembalian" 
                              placeholder="Isi no Klasifikasi Buku"
                              value = {_no_klasifikasi} 
                              onChange = {(e) => setNoKlasifikasi(e.target.value)}
                              onBlur = {(e) => checkNoKlasifikasi(e.target.value)} 
                            />
                            </div>
                          </div>
                        </div>
                        <div className="row" id="Tanggal">
                        <div className="row">
                          <div className="col">
                            <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Status</strong><br /></label>
                            <select 
                            className="form-control form-control-sm form-select"
                            value={_status}
                            onChange = {(e) => setStatus(e.target.value)}
                            >
                              <option></option>
                              <option value="Normal">Normal</option>
                              <option value="Rusak">Rusak</option>
                              <option value="Hilang">Hilang</option>
                            </select></div>
                          </div>
                      </div>
                          
                        </div>
                        <div className="row" id="Tanggal">
                          <div className="col" id="tgl-pinjam">
                            <div className="mb-3"><label className="form-label" htmlFor="first_name"><strong>Tanggal Masuk Buku</strong></label>
                            <input 
                              className="form-control" 
                              type="date" 
                              value = {_tgl_masuk} 
                              onChange = {(e) => setTglMasuk(e.target.value)}
                            />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <button 
                            className="btn btn-primary btn-sm" 
                            type="submit" 
                            style={{padding: '11px 8px', fontSize: 17, marginTop: 11}}
                            disabled={submitting} 
                            > {submitting ? 'Updating Buku ...' : 'Update'}</button>
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