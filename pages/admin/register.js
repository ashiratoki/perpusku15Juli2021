//@ts-check
import { useState } from 'react'
export default function Register(){
  const [nis, setNis] = useState('')
  const [nama, setNama] = useState('')
  const [no_telp, setNotelp] = useState('')
  const [jenis_kelamin, setKelamin] = useState('')
  const [jurusan, setJurusan] = useState('')
  const [angkatan, setAngkatan] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPass] = useState('')
  const clearInput = () => {
    setNis('')
    setNama('')
    setNotelp('')
    setKelamin('')
    setJurusan('')
    setAngkatan('')
    setUsername('')
    setPass('')
  }

  const onChangeHandler = (value) => {
    setNis(value);
    setPass(value);
    setUsername(value);
  }

  // async function nisDetection(value){
  //   const data = await fetch(`http://localhost:3000/api/carisiswa/[nis]?nis=${value}`)
  //   const hasil = await data.json()
  //   console.log(hasil)
  //   if(hasil.length < 1){
  //       setNis(value);
  //       setPass(value);
  //       setUsername(value);
  //   }else{
  //       alert(`NIM dengan angka ${value} sudah terdaftar`)
  //       setNis('')
  //       setPass('')
  //       setUsername('')
  //   }
  // }
  
  async function submitHandlerSiswa(e) {
    e.preventDefault()
      try {
        const siswa = await fetch('http://localhost:3000/api/create-siswa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nis, nama, no_telp, jenis_kelamin, jurusan, angkatan
          }),
        })
        const json = await siswa.json()
        if (!siswa.ok) throw Error(json.message)
        alert("Penambahan Data Siswa Sukses")
      } catch (e) {
        throw Error(e.message)
      }
    } 
    async function submitHandlerUser(e) {
      e.preventDefault()
      try {
        const user = await fetch('http://localhost:3000/api/create-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nis, username, password
          }),
        })
        const json = await user.json()
        if (!user.ok) throw Error(json.message)
        alert("Penambahan Data User Sukses")
      } catch (e) {
        throw Error(e.message)
      }
    }
    
    async function submitHandler(e){
      e.preventDefault();
      const data = await fetch(`http://localhost:3000/api/carisiswa/[nis]?nis=${nis}`)
      const hasil = await data.json()
      console.log(hasil)
      if(hasil.length < 1){
          e.preventDefault();
          submitHandlerSiswa(e);
          submitHandlerUser(e);
          clearInput();
      }else{
        e.preventDefault();
        alert(`NIM dengan angka ${nis} sudah terdaftar`)
        setNis('')
        setPass('')
        setUsername('')
      }
      
    }

    return(
     <div>
  <div className="container" style={{width: 1048}}>
    <div className="card shadow-lg o-hidden border-0 my-5" style={{width: 571, margin: 'auto', marginLeft: 190}}>
      <div className="card-body p-0" style={{width: 944}}>
        <div className="row" style={{width: 1010}}>
          <div className="col-lg-7">
            <div className="p-5">
              <div className="text-center">
                <h4 className="text-dark mb-4">Register Siswa Anggota Perpustakaan</h4>
              </div>
              <form className="user" onSubmit={submitHandler}>
                <div className="row mb-3">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input 
                      className="form-control form-control-user" 
                      type="text" id="namaSiswa" 
                      placeholder="Nama Siswa" 
                      name="nama" 
                      style={{width: 470}}
                      value = {nama} 
                      onChange = {(e) => setNama(e.target.value)} />
                  </div>
                </div> 
                <div className="mb-3">
                  <input 
                    className="form-control form-control-user" 
                    type="text" id="noTelpSiswa"  
                    placeholder="No Telp/WA" 
                    name="noTelp" 
                    style={{width: 470}} 
                    value = {no_telp} 
                    onChange = {(e) => setNotelp(e.target.value)}/>
                </div>
                <div className="mb-3" >
                  <label htmlFor="" className="">Jenis Kelamin</label>                
                    <select 
                      name="" 
                      id="" 
                      className="form-select" 
                      value = {jenis_kelamin} 
                      onChange = {(e) => setKelamin(e.target.value)}>
                        <option></option>
                        <option value='Laki-laki'>Laki-laki</option>
                        <option value='Perempuan' >Perempuan</option>
                    </select> 
                </div>
                <div className="mb-3" >
                  <label htmlFor="" className="">Jurusan</label>                
                    <select 
                      name="" 
                      id="" 
                      className="form-select" 
                      value = {jurusan} 
                      onChange = {(e) => setJurusan(e.target.value)}>
                        <option></option>
                        <option value='S1 TEKNIK INFORMATIKA'>S1 TEKNIK INFORMATIKA</option>
                        <option value='S1 SISTEM INFORMASI' >S1 SITEM INFORMASI</option>
                        <option value='D3 MANAJEMEN INFORMATIKA' >D3 MANAJEMEN INFORMATIKA</option>
                        <option value='D3 TEKNIK KOMPUTER' >D3 TEKNIK KOMPUTER</option>
                    </select> 
                </div>
                
                <div className="row mb-3">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input 
                      className="form-control form-control-user" 
                      type="text" 
                      id="angkatan" 
                      placeholder="Angkatan" 
                      name="angkatan"
                      value={angkatan} 
                      style={{width: 470}}
                      onChange = {(e) => setAngkatan(e.target.value)} 
                    />
                    </div>
                </div> 
                <div className="row mb-3"> 
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input 
                    className="form-control form-control-user" 
                    type="" id="examplePasswordInput" 
                    placeholder="Nomor Induk Sekolah" 
                    name="password" 
                    value = {nis} 
                    onChange = {(e) => onChangeHandler(e.target.value)}/>
                    {/* onBlur = {(e) => nisDetection(e.target.value)}/> */}
                  </div>
                </div>
                <button className="btn btn-primary d-block btn-user w-100" type="submit" style={{fontSize: '20.8px'}}>Register Siswa</button>
                <hr /><a href="beranda-admin.html" /><a className="btn btn-primary d-block btn-facebook btn-user w-100" role="button" style={{fontSize: '18.8px'}}>Kembali</a>
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