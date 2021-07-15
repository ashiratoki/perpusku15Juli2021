//@ts-check
export default function CardPinjamanSaya(props){
    return(
    <>
          <div className="col-sm-6 col-lg-4 item" style={{color: 'var(--bs-dark)'}}><img className="img-fluid" src={props.imgUrl} style={{height: '258.141px'}} />
            <h3 className="name" style={{color: 'var(--bs-dark)'}}>{props.judulBuku}</h3><span style={{borderLeftColor: 'rgb(16,11,11)', marginBottom: '-8px'}}>Tgl-Pinjam : {props.tglPinjam}</span>
            <p className="description" style={{marginBottom: 10, marginTop: 7}}>{props.deskripsi}<br /></p><a href="/user/kembali"><button className="btn btn-primary" type="button" style={{borderRadius: 41, borderTopColor: 'var(--bs-gray-dark)', background: 'rgb(0,0,0)'}}>Kembalikan</button></a>
          </div>
    </>
    )
    
}
