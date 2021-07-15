//@ts-check
import TableBuku from '../../components/admin/tableBuku'

export default function DataBuku() {
    const tb_buku = [];
    return (
        <>
            <div className="container-fluid">
                <h3 className="text-dark mb-4">Tabel Data Buku</h3>
                <div className="card shadow " style={{ width: '100%' }}>
                    <div className="card-header py-3">
                        <p className="text-primary m-0 fw-bold">Tabel Buku</p>
                    </div>
                    <div className="card-body col-md-12 ">
                        <div className="row">
                            <div className="table-responsive mb-5" style={{ maxWidth: "auto" }}>
                                <TableBuku />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}