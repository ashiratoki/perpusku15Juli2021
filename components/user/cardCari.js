//@ts-check
export default function CardCari (props){
    return(

        <div className="col-sm-6 mb-4 item">
          <div className="row">
            <div className="col-md-12 col-lg-5" style={{background: 'var(--bs-white)'}}><a href="#"><img className="img-fluid" src={props.imgUrl}  style={{height: '203.281px', marginLeft: 38, width: 147}} /></a></div>
            <div className="col">
              <h3 className="name">{props.judulBuku}</h3><span>Tersedia : {props.stokBuku} | Penerbit {props.penerbit}</span>
              <p className="description" style={{marginBottom: 42}}>{props.deskripsi}<br /></p><a href="/user/detailBuku"><button className="btn btn-primary" type="button" style={{marginTop: '-64px', background: '#2E8B57'}}>Pinjam</button></a>
            </div>
          </div>
        </div>
     
    )
} 

{/* <section className="projects-horizontal" style={{background: 'var(--bs-white)', marginTop: 37, marginBottom: 54}}>
<div className="container" style={{marginBottom: '-45px', marginTop: 29}}>
  <div className="row projects">
    <div className="col-sm-6 item">
      <div className="row">
        <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="assets/img/bse-a_5a0260a47533a722057742.jpg" style={{height: '203.281px', marginLeft: 38}} /></a></div>
        <div className="col">
          <h3 className="name">DESAIN MULTIMEDIA</h3><span>Tersedia : 10 buku | Penerbit : Erlangga</span>
          <p className="description" style={{marginBottom: 42}}>Buku ini membahas tentang Desain Multimedia</p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{marginTop: '-64px', background: '#2E8B57'}}>Pinjam</button></a>
        </div>
      </div>
    </div>
    
    <div className="col-sm-6 item">
      <div className="row">
        <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="assets/img/gambar%20cover%20buku%20kimia%20BK%20Teknologi%20dan%20rekayasa.png" style={{height: '203.281px', marginLeft: 38, marginTop: 13}} /></a></div>
        <div className="col">
          <h3 className="name">KIMIA</h3><span>Tersedia : 10 buku | Penerbit : Erlangga</span>
          <p className="description" style={{marginBottom: 42}}>Buku ini membahas tentang Kimia<br /></p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{marginTop: '-64px', background: '#2E8B57'}}>Pinjam</button></a>
        </div>
      </div>
    </div>
    <div className="col-sm-6 item">
      <div className="row">
        <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="assets/img/buku-smk-kelas-10-pemrograman-webpdf-1-638.jpg" style={{height: '203.281px', marginLeft: 38, marginTop: 14}} /></a></div>
        <div className="col">
          <h3 className="name">PEMOGRAMAN WEB</h3><span>Tersedia : 10 buku | Penerbit : Erlangga</span>
          <p className="description" style={{marginBottom: 42}}>Buku ini membahas tentang pemograman Web<br /></p><a href="detail-buku.html"><button className="btn btn-primary" type="button" style={{marginTop: '-64px', background: '#2E8B57'}}>Pinjam</button></a>
        </div>
      </div>
    </div>
  </div>
</div>
</section> */}