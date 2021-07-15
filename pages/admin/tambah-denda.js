//@ts-check
import { useState } from 'react'
import TableDenda from '../../components/admin/tableDenda'
import Dendaperhari from '../../components/admin/dendaPerhari'
import useSWR from 'swr'
export default function TambahDenda(){
  const [nis, setNis] = useState('')
  const [index_buku, setBuku] = useState('')
  const [tgl_tempo, setTglTempo] = useState('')
  const [tgl_kembali, setTglKembali] = useState('')
  const [dendaPerHari, setDendaPerHari] = useState()
  const [denda, setDenda] = useState('')
  const [status, setStatus] = useState('')

  const clearInput = () => {
    setNis('')
    setBuku('')
    setTglTempo('')
    setTglKembali('')
    setDenda('')
    setStatus('')
  }

  async function checkNis(nis){
    const data = await fetch(`http://localhost:3000/api/carisiswa/[nis]?nis=${nis}`)
    const hasil = await data.json()
    console.log(hasil)
    if(hasil.length < 1){
       alert(`${nis} tidak ada, pastikan menggunakan No Klasifikasi yang sudah ada`)
       setNis('')
    }
  }

  async function checkNoIndexBuku(index_buku){
    const data = await fetch(`http://localhost:3000/api/caribuku/[index_buku]?index_buku=${index_buku}`)
    const hasil = await data.json()
    console.log(hasil)
    if(hasil.length < 1){
       alert(`${index_buku} tidak ada, pastikan menggunakan No Index Buku yang sudah ada`)
       setBuku('')
    }
  }

  async function hitungDenda(){
    const data = await fetch(`http://localhost:3000/api/tb_dendaperhari`)
    const hasil = await data.json()
    console.log(hasil)
    let dateTempo = new Date(tgl_tempo)
    let dateKembali = new Date(tgl_kembali)
    let differenceInTime = dateKembali.getTime() - dateTempo.getTime()
    let differenceInDays = differenceInTime / (1000 * 3600 * 24);
    setDendaPerHari(hasil[0].denda_perhari)
    let dendaTemp = parseInt(hasil[0].denda_perhari)
    let denda = dendaTemp * differenceInDays
    console.log(dateTempo)
    console.log(dateKembali)
    console.log(dendaTemp)
    console.log(differenceInDays)
    console.log(denda)
    setDenda(denda.toString())
  }

  const callFunction = (value) => {
    setTglKembali(value)
    hitungDenda()
  }

  async function submitHandler(e) {
    // setSubmitting(true)
    e.preventDefault()
    try {
      const res = await fetch('http://localhost:3000/api/create-denda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nis,
          index_buku,
          tgl_tempo,
          tgl_kembali,
          denda,
          status
        }),
      })
      // setSubmitting(false)
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      // Router.push('/')
      alert("Penambahan Data Sukses")
      clearInput()
    } catch (e) {
      throw Error(e.message)
    }
  }

    return(
 <div id="wrapper" style={{width: 'auto'}}>
  <div className="d-flex flex-column" id="content-wrapper">
    <div id="content">
      <div className="container-fluid">
        <h3 className="text-dark mb-4">Tambah Data Denda</h3>
        <div className="row mb-3">
          <div className="col-lg-8">
            <div className="row">
              <div className="col" style={{width: '489.328px'}}>
                <div className="card shadow mb-3" style={{width: '516.328px'}}>
                  <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Tambah Denda</p>
                  </div>
                  <div className="card-body">

                    <form onSubmit={submitHandler}>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="username"><strong>NIS</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="text" id="nis" 
                            placeholder="NISN" 
                            name="username" 
                            value = {nis} 
                            onChange = {(e) => setNis(e.target.value)}
                            onBlur = {(e) => checkNis(e.target.value)}
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
                            value = {index_buku} 
                            onChange = {(e) => setBuku(e.target.value)}
                            onBlur = {(e) => checkNoIndexBuku(e.target.value)}
                          /></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="date"><strong>Tanggal Tempo</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="date" 
                            placeholder="" 
                            value = {tgl_tempo} 
                            onChange = {(e) => setTglTempo(e.target.value)}
                          /></div>
                        </div>
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="date"><strong>Tanggal Kembali</strong><br /></label>
                          <input 
                            className="form-control" 
                            type="date" 
                            placeholder="" name="username" 
                            value = {tgl_kembali} 
                            onChange = {(e) => setTglKembali(e.target.value)}
                            onBlur = {() => hitungDenda()}
                          /></div>
                        </div>
                      </div>
                      <div className="row">
                      <div className="col">
                            <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Denda Per Hari</strong><br /></label>
                            <input 
                              className="form-control" 
                              type="text" id="denda" 
                              readOnly
                              name="email" 
                              value = {dendaPerHari} 
                            /></div>
                        </div>
                        <div className="col">
                            <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Denda</strong><br /></label>
                            <input 
                              className="form-control" 
                              type="text" id="denda" 
                              placeholder="Jumlah Denda" 
                              name="email" 
                              value = {denda} 
                              onChange = {(e) => setDenda(e.target.value)}
                            /></div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Status</strong><br /></label>
                          <select 
                          className="form-control form-control-sm form-select"
                          value={status}
                          onChange = {(e) => setStatus(e.target.value)}
                          >
                            <option></option>
                            <option value="Belum Bayar">Belum Bayar</option>
                            <option value="Sudah Bayar">Sudah Bayar</option>
                          </select></div>
                        </div>
                      </div>
                      
                      
                      <div className="mb-3"><button className="btn btn-primary btn-sm" type="submit" style={{padding: '11px 8px', fontSize: 17, marginTop: 11}}>Tambah Denda</button></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow" style={{width: 'auto'}}>
          <div className="card-header py-3">
            <p className="text-primary m-0 fw-bold">Tabel Denda</p>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 text-nowrap">

              <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
            <Dendaperhari/>
        </div>  
        </div>
            </div>
            <div className="table-responsive table mt-2" style={{maxWidth:"auto"}} id="dataTable-1" role="grid" aria-describedby="dataTable_info">
            <TableDenda/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
</div>

  
    )
}