//@ts-check
import TabelSiswa from '../../components/admin/tabelSiswa'
export default function dataSiswa() {

    return (
        <div className="container-fluid">
            <h3 className="text-dark mb-4">Data Siswa Anggota Perpustakaan</h3>
            <div className="card shadow">
                <div className="card-header py-3">
                    <p className="text-primary m-0 fw-bold">Tabel Data Siswa Anggota Perpustakaan</p>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <TabelSiswa />
                    </div>
                </div>
            </div>
        </div>

    )
}