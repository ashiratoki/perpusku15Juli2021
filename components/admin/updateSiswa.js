//@ts-check


import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'

export default function Register() {
  const [_nis, setNis] = useState('')
  const [_nama, setNama] = useState('')
  const [_no_telp, setNotelp] = useState('')
  const [_jenis_kelamin, setKelamin] = useState('')
  const [_jurusan, setJurusan] = useState('')
  const [_angkatan, setAngkatan] = useState('')
  const [_username, setUsername] = useState('')
  const [_password, setPass] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const { nis, nama, no_telp, jenis_kelamin, jurusan, angkatan, username, password, nisLama } = router.query

  useEffect(() => {
    if (typeof nis == 'string') {
      setNis(nis)
    }
    if (typeof nama == 'string') {
      setNama(nama)
    }
    if (typeof no_telp == 'string') {
      setNotelp(no_telp)
    }
    if (typeof jenis_kelamin == 'string') {
      setKelamin(jenis_kelamin)
    }
    if (typeof jurusan == 'string') {
      setJurusan(jurusan)
    }
    if (typeof angkatan == 'string') {
      setAngkatan(angkatan)
    }
    if (typeof username == 'string') {
      setUsername(username)
    }
    if (typeof password == 'string') {
      setPass(password)
    }

  }, [nis, nama, no_telp, jenis_kelamin, jurusan, angkatan, username, password, nisLama])


  async function checkNis(nis){
    const data1 = await fetch(`http://localhost:3000/api/carisiswa/[nis]?nis=${nis}`)
    const hasil1 = await data1.json()
    // const data2 = await fetch(`http://localhost:3000/api/caribuku/[index_buku]?index_buku=${index_buku_lama}`)
    // const hasil2 = await data2.json()
    // console.log(hasil1)
    // console.log(hasil2)
    console.log(nis)
    if(hasil1.length >= 1 && nis != nisLama ){
       alert(`${nis} sudah terdaftar`)
       setNis('')
    }
  }

  async function submitHandler(e) {
    e.preventDefault()
    const data = await fetch(`http://localhost:3000/api/carisiswa/[nis]?nis=${nis}`)
    const hasil = await data.json()
    console.log(hasil)
    console.log(nis)
    console.log(nisLama)
      e.preventDefault()
      setSubmitting(true)
      try {
        const res = await fetch('http://localhost:3000/api/update-siswa', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nis: _nis,
            nama: _nama,
            no_telp: _no_telp,
            jenis_kelamin: _jenis_kelamin,
            jurusan: _jurusan,
            angkatan: _angkatan,
            username: _username,
            password: _password,
            nisLama: nisLama
          }),
        })
        const json = await res.json()
        setSubmitting(false)
        if (!res.ok) throw Error(json.message)

        alert("update data suskses" + _nis + _nama + _no_telp + _jenis_kelamin + _jurusan + _angkatan + _username + _password)
        Router.push('/admin/data-siswa')
      } catch (e) {
        throw Error(e.message)
      }


  }

  return (

    <div>
      <div className="container" style={{ width: 1048 }} onSubmit={submitHandler}>
        <div className="card shadow-lg o-hidden border-0 my-5" style={{ width: 571, margin: 'auto', marginLeft: 190 }}>
          <div className="card-body p-0" style={{ width: 944 }}>
            <div className="row" style={{ width: 1010 }}>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h4 className="text-dark mb-4">Register Siswa Anggota Perpustakaan</h4>
                  </div>
                  <form className="user" >
                    <div className="row mb-3">
                      <label htmlFor="" className="mb-2"><strong>Nama Siswa</strong></label>
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          className="form-control form-control-user"
                          type="text" id="namaSiswa"
                          placeholder="Nama Siswa"
                          name="nama"
                          style={{ width: 470 }}
                          value={_nama}
                          onChange={(e) => setNama(e.target.value)} />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="mb-2"><strong>No. Telp/No. WA</strong></label>
                      <input
                        className="form-control form-control-user"
                        type="text" id="noTelpSiswa"
                        placeholder="No Telp/WA"
                        name="noTelp"
                        style={{ width: 470 }}
                        value={_no_telp}
                        onChange={(e) => setNotelp(e.target.value)} />
                    </div>
                    <div className="mb-3" >
                      <label htmlFor="" className="mb-2"><strong>Jenis Kelamin</strong></label>
                      <select
                        name=""
                        id=""
                        className="form-select"
                        value={_jenis_kelamin}
                        onChange={(e) => setKelamin(e.target.value)}>
                        <option></option>
                        <option value='Laki-laki'>Laki-laki</option>
                        <option value='Perempuan' >Perempuan</option>
                      </select>
                    </div>
                    <div className="mb-3" >
                      <label htmlFor="" className="mb-2"><strong>Jurusan</strong></label>
                      <select
                        name=""
                        id=""
                        className="form-select"
                        value={_jurusan}
                        onChange={(e) => setJurusan(e.target.value)}>
                        <option></option>
                        <option value='S1 TEKNIK INFORMATIKA'>S1 TEKNIK INFORMATIKA</option>
                        <option value='S1 SISTEM INFORMASI' >S1 SITEM INFORMASI</option>
                        <option value='D3 MANAJEMEN INFORMATIKA' >D3 MANAJEMEN INFORMATIKA</option>
                        <option value='D3 TEKNIK KOMPUTER' >D3 TEKNIK KOMPUTER</option>
                      </select>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label htmlFor="" className="mb-2"><strong>Angkatan</strong></label>
                        <input
                          className="form-control form-control-user"
                          type="text"
                          id="angkatan"
                          placeholder="Angkatan"
                          name="angkatan"
                          value={_angkatan}
                          style={{ width: 470 }}
                          onChange={(e) => setAngkatan(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label htmlFor="" className="mb-2"><strong>NIS</strong></label>
                        <input
                          className="form-control form-control-user"
                          type="" id="examplePasswordInput"
                          placeholder="Nomor Induk Sekolah"
                          name="password"
                          value={_nis}
                          onChange={(e) => setNis(e.target.value)} 
                          onBlur = {(e) => checkNis(e.target.value)}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label htmlFor="" className="mb-2"><strong>Username</strong></label>
                        <input
                          className="form-control form-control-user"
                          type="" id="examplePasswordInput"
                          placeholder="Nomor Induk Sekolah"
                          name="username"
                          value={_username}
                          onChange={(e) => setUsername(e.target.value)} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label htmlFor="" className="mb-2"><strong>Password</strong></label>
                        <input
                          className="form-control form-control-user"
                          type="" id="examplePasswordInput"
                          placeholder="Nomor Induk Sekolah"
                          name="password"
                          value={_password}
                          onChange={(e) => setPass(e.target.value)} />
                      </div>
                    </div>
                    <button
                      className="btn btn-primary d-block btn-user w-100"
                      type="submit"
                      style={{ fontSize: '20.8px' }}
                      disabled={submitting}
                    > {submitting ? 'Updating Siswa ...' : 'Update'}</button>
                    <hr /><a href="beranda-admin.html" /><a className="btn btn-primary d-block btn-facebook btn-user w-100" role="button" style={{ fontSize: '18.8px' }}>Kembali</a>
                    <hr />
                  </form>
                  <div className="text-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}