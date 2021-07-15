//@ts-check
export default function CarBukuTerbaru(props){
    return (
        <div className="col-sm-6 col-lg-4 item" style={{color: 'var(--bs-dark)'}}><img className="img-fluid" src={props.imgUrl} style={{height: '258.141px'}} />
            <h3 className="name" style={{color: 'var(--bs-dark)'}}>{props.judulBuku}</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tersedia : {props.stokBuku} | Penerbit {props.penerbit}</span>
            <p className="description" style={{marginBottom: 10, marginTop: 7}}>{props.deskripsi}<br /></p><a href="/user/detailBuku"><button className="btn btn-primary" type="button" style={{background: '#2E8B57', borderRadius: 32}}>Pinjam</button></a>
          </div>
          
    )
}
{/* <div className="col-sm-6 col-lg-4 item" style={{color: 'var(--bs-dark)'}}><img className="img-fluid" src="assets/img/bse-a_5a0260a47533a722057742.jpg" style={{height: '258.141px'}} />
            <h3 className="name" style={{color: 'var(--bs-dark)'}}>Desain Multimedia</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tersedia : 10 buku | Penerbit Gramedia</span>
            <p className="description" style={{marginBottom: 10, marginTop: 7}}>Buku ini membahas tentang Desain Multimedia<br /></p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{background: '#2E8B57', borderRadius: 32}}>Pinjam</button></a>
          </div>
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/Buku%20Matematika%20Kurikulum%202013%20Kelas%20X%20XI%20SMA%20SMK%20MA.png" style={{height: '258.141px'}} />
            <h3 className="name">Matematika</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tersedia : 7 buku | Penerbit : Gramedia</span>
            <p className="description" style={{marginBottom: 8}}>Buku ini membahas tentang matematika</p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{borderRadius: 95, background: '#2E8B57'}}>Pinjam</button></a>
          </div>
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/gambar%20cover%20buku%20kimia%20BK%20Teknologi%20dan%20rekayasa.png" style={{height: '258.141px'}} />
            <h3 className="name">Bahan Ajar Kimia</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tersedia : 6 buku | Penerbit : Erlangga</span>
            <p className="description" style={{marginBottom: 10}}>Buku ini membahas tentang bahan ajar kimia</p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{borderRadius: 29, background: '#2E8B57'}}>Pinjam</button></a>
          </div>
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/simulasi-digital-jilid-2-1-638.jpg" style={{height: '258.141px'}} />
            <h3 className="name">Simulasi Digital</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tersedia : 3 buku | Penerbit Gramedia</span>
            <p className="description" style={{marginBottom: 10}}>Buku ini membahas tentang simulasi Digital<br /></p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{borderRadius: 45, background: '#2E8B57'}}>Pinjam</button></a>
          </div>
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/images.jpg" style={{height: '258.141px'}} />
            <h3 className="name">Sistem Operasi</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tersedia : 6 buku | Penerbit : Erlangga</span>
            <p className="description" style={{marginBottom: 10}}>Buku ini membahas tentang Sistem Operasi<br /></p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{borderRadius: 69, background: '#2E8B57'}}>Pinjam</button></a>
          </div>
          <div className="col-sm-6 col-lg-4 item"><img className="img-fluid" src="assets/img/buku-smk-kelas-10-pemrograman-webpdf-1-638.jpg" style={{height: '258.141px'}} />
            <h3 className="name">Pemrograman Web</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tersedia : 6 buku | Penerbit : Erlangga</span>
            <p className="description" style={{marginBottom: 10}}>Buku ini membahas tentang Pemograman Web<br /></p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{borderRadius: 64, background: '#2E8B57'}}>Pinjam</button></a>
          </div> */}
