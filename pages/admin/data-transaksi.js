//@ts-check
import TabelTransaksi from '../../components/admin/tableTransaksi'

export default function dataPeminjamAktif() {
  const dataPinjam = [{ no: '01', idPinjam: 'P01', idSiswa: 'S01', idBuku: 'B01', tglPinjam: '12-01-2021', tglTempo: '20-02-2021', tglKembali: '-' },
  { idSiswa: 'S01', idBuku: 'B01', tglPinjam: '12-01-2021', tglTempo: '21-01-2021', tglKembali: '-' },
  { idSiswa: 'S01', idBuku: 'B01', tglPinjam: '12-01-2021', tglTempo: '22-01-2021', tglKembali: '-' },
  { idSiswa: 'S01', idBuku: 'B01', tglPinjam: '12-01-2021', tglTempo: '13-08-2021', tglKembali: '-' },
  { idSiswa: 'S01', idBuku: 'B01', tglPinjam: '12-01-2021', tglTempo: '15-08-2021', tglKembali: '-' }]
  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">Data Transaksi</h3>
      <div className="card shadow">
        <div className="card-header py-3">
          <p className="text-primary m-0 fw-bold">Tabel Data Transaksi</p>
        </div>
        <div className="card-body">
          {/* Tabel disini */}
          <TabelTransaksi />
        </div>
      </div>
    </div>


  )
}