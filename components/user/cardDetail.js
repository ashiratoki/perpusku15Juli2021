//@ts-check
export default function cardDetail(props){
    return(
    <div id="body-buku" style={{marginTop: 28}}>
                    <section className="article-clean" style={{background: 'var(--bs-white)', paddingBottom: 78}}>
                        <div className="container" style={{paddingTop: '-138px', paddingBottom: '-36px', marginBottom: 20}}>
                        <div className="row">
                            <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                            <div className="m-auto justify-content-lg-center align-items-lg-center" id="image"><img className="d-flex d-xl-flex flex-shrink-1 justify-content-center align-items-center justify-content-xl-start align-items-xl-center" src={props.imgUrl} style={{width: 200, margin: 'auto'}} /></div>
                            <div className="intro">
                                <h1 className="text-center" style={{marginTop: 20}}>{props.judulBuku}</h1>
                            </div>
                            <div className="text">
                                <p style={{textAlign: 'center', fontWeight: 'bold', marginBottom: '-2px'}}>ID Buku : {props.idBuku} | Penerbit : {props.penerbit}</p>
                                <p style={{textAlign: 'center', fontWeight: 'bold', marginBottom: 0}}>Pengarang : {props.pengarang}</p>
                                <h2 style={{textAlign: 'center', marginBottom: 14, marginTop: 4}}>Tersedia :{props.stokBuku}</h2>
                                <p style={{textAlign: 'center', marginBottom: 24}}>{props.deskripsi}a</p>
                            </div>
                            <div id="button"><a href="user/pinjamanSukses"><button className="btn btn-primary text-center d-flex d-lg-flex m-auto justify-content-lg-center" type="button" style={{padding: '12px 12px', fontSize: 24, borderRadius: 75}}>Pinjam Buku Ini</button></a></div>
                            <div id="button-kembali" style={{marginTop: 13, marginBottom: '-80px', paddingTop: '-12px', paddingBottom: '-29px'}}><a href="/user/home"><button className="btn btn-primary text-center d-flex d-lg-flex m-auto justify-content-lg-center" type="button" style={{padding: '12px 12px', fontSize: 24, background: 'var(--bs-red)', borderRadius: 62, borderTopStyle: 'none', borderTopColor: 'var(--bs-red)'}}>Kembali</button></a></div>
                            </div>
                        </div>
                        </div>
                    </section>
    </div>
    )
}