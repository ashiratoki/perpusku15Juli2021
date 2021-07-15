//@ts-check
import Pesan from '../../components/admin/Pesan'

export default function notifikasi() {
    const pesan=[
        { type:'Informasi',time:'12-07-2021 12.00',isi:'peminjam dengan id pinjam 00021 hampir melewati batas waktu'},
        { type:'peringatan',time:'12-07-2021 12.00',isi:'peminjam dengan id pinjam 0001 melewati'},
        { type:'Informasi',time:'12-07-2021 12.00',isi:'peminjam dengan id pinjam 0002 hampir melewati batas waktu'}
    ]
    return(
        <div>
  <div className="d-flex flex-column" id="content-wrapper">
    <div id="content">
      <div className="container-fluid">
        <h3 className="text-dark mb-4">Notifikasi</h3>
      </div>
      <div className="row projects">
          {pesan.map((pesan) => (
            <Pesan type={pesan.type} time={pesan.time}
                    isi={pesan.isi} />

          ))}
          
        </div>
    <footer className="bg-white sticky-footer">
      <div className="container my-auto">
        <div className="text-center my-auto copyright"><span>Powered by STIKOM PGRI BANYUWANGI ©&nbsp; 2021</span></div>
      </div>
    </footer>
  </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
  </div>
</div>

    
    )
}