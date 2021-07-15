//@ts-check
import CardCari from '../../components/user/cardCari'

export default function Cari(){
  const dataBuku=[{imgUrl: '../../assets/img/bse-a_5a0260a47533a722057742.jpg', 
  judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
  penerbit: 'Gramedia', 
  deskripsi: 'Buku ini membahas tentang Desain Multimedia' },
  {imgUrl: '../../assets/img/bse-a_5a0260a47533a722057742.jpg', 
  judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
  penerbit: 'Gramedia', 
  deskripsi: 'Buku ini membahas tentang Desain Multimedia' },
  {imgUrl: '../../assets/img/bse-a_5a0260a47533a722057742.jpg', 
  judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
  penerbit: 'Gramedia', 
  deskripsi: 'Buku ini membahas tentang Desain Multimedia' },
  {imgUrl: '../../assets/img/bse-a_5a0260a47533a722057742.jpg', 
  judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
  penerbit: 'Gramedia', 
  deskripsi: 'Buku ini membahas tentang Desain Multimedia' },
  {imgUrl: '../../assets/img/bse-a_5a0260a47533a722057742.jpg', 
  judulBuku: 'Desain Multimedia', stokBuku: '13 buku',
  penerbit: 'Gramedia', 
  deskripsi: 'Buku ini membahas tentang Desain Multimedia' }]

    return(
     <div>
  <section className="projects-horizontal" style={{background: 'var(--bs-white)', marginTop: 37, marginBottom: 54}}>
    <div className="container" style={{marginBottom: '-45px', marginTop: 29}}>
      <div className="row projects">
      {dataBuku.map((buku) => (
            <CardCari imgUrl={buku.imgUrl} judulBuku={buku.judulBuku}
                    stokBuku={buku.stokBuku} penerbit={buku.penerbit} deskripsi={buku.deskripsi}/>
          ))}
        </div>
    </div>
  </section>
  <br/>
  <br/>
 <nav className="text-start d-xl-flex justify-content-xl-center" style={{marginTop: 15, fontSize: 17}}>
  <ul className="pagination">
    <li className="page-item"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
    <li className="page-item active"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item"><a className="page-link" href="#">4</a></li>
    <li className="page-item"><a className="page-link" href="#">5</a></li>
    <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
  </ul>
</nav>
 </div>

    )
}
