//@ts-check
import useSWR from 'swr'
import Link from 'next/link'
import { mutate } from 'swr'
import { useState } from 'react'
import Moment from 'react-moment'
import Pagination from '../../components/Pagination'

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}
export default function tableDenda() {
  const [deleting, setDeleting] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const url = 'http://localhost:3000/api/tb_denda';

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });

  if (error) {
    return <div>error......</div>
  }
  if (!data) {
    return <div>loading......</div>
  }
  console.log(data);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(data.length / postsPerPage)

  async function clickHandlerDelete(value1, value2) {
    const isDelete = confirm(`Apakah Anda Ingin Menghapus data ini dengan NIS ${value2}?`)
    if (isDelete) {
      deleteEntry(value1)
    }
  }


  async function deleteEntry(value) {
    setDeleting(true)
    let res = await fetch(`http://localhost:3000/api/delete-denda?id=${value}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    alert("Data telah dihapus  ")
    mutate('http://localhost:3000/api/tb_denda')
    setDeleting(false)
  }


  return (
    <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
      <div className="row">
        <div className="col-md-6 text-nowrap">
          <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable"><label className="form-label">Show&nbsp;
            <select className="d-inline-block form-select form-select-sm" value={postsPerPage} onChange={(e) => { setPostsPerPage(e.target.value) }}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>&nbsp;</label></div>
        </div>
        <div className="col-md-6">
          <div className="text-md-end dataTables_filter" id="dataTable_filter"><label className="form-label">
            <input type="search"
              className="form-control form-control-sm"
              aria-controls="dataTable" placeholder="Search"
              onChange={event => { setSearchTerm(event.target.value) }} /></label></div>
        </div>
      </div>
      <table className="table my-0" id="dataTable">
        <thead>
          <tr>
            <th>No</th>
            <th>NIS</th>
            <th>No Index Buku</th>
            <th>Tanggal Tempo</th>
            <th>Tanggal Terlambat</th>
            <th>Denda</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.filter((tblDat) => {
            if (searchTerm == "") {
              return tblDat
            } else if (tblDat.nis.toLowerCase().includes(searchTerm.toLowerCase())) {
              return tblDat
            } else if (tblDat.index_buku.toLowerCase().includes(searchTerm.toLowerCase())) {
              return tblDat
            } else if (tblDat.tgl_tempo.toLowerCase().includes(searchTerm.toLowerCase())) {
              return tblDat
            } else if (tblDat.tgl_kembali.toLowerCase().includes(searchTerm.toLowerCase())) {
              return tblDat
            }
            else if (tblDat.denda.toLowerCase().includes(searchTerm.toLowerCase())) {
              return tblDat
            } else if (tblDat.status.toLowerCase().includes(searchTerm.toLowerCase())) {
              return tblDat
            }

          }).map((tblDat, index) =>
            <tr>
              <td>{index + 1}</td>
              <td>{tblDat.nis}</td>
              <td>{tblDat.index_buku}</td>
              <td><Moment format='DD/MM/YYYY'>{tblDat.tgl_tempo}</Moment></td>
              <td><Moment format='DD/MM/YYYY'>{tblDat.tgl_kembali}</Moment></td>
              <td>{tblDat.denda}</td>
              <td>{tblDat.status}</td>
              <td>
                <Link
                  href={`/admin/update-denda/?nis=${tblDat.nis}&index_buku=${tblDat.index_buku}&tgl_tempo=${tblDat.tgl_tempo}&tgl_kembali=${tblDat.tgl_kembali}&denda=${tblDat.denda}&status=${tblDat.status}&id=${tblDat.id}&nisLama=${tblDat.nis}&index_buku_lama=${tblDat.index_buku}`}>
                  <button
                    className="btn btn-primary"
                    id="updateButton"
                    type="button" style={{ background: 'rgb(255,172,47)' }}
                  >Update</button></Link>
                <button
                  className="btn btn-primary"
                  disabled={deleting}
                  value={tblDat.id}
                  onClick={e => clickHandlerDelete(e.target.value, tblDat.nis)}
                  type="button"
                  style={{ marginLeft: 13, background: 'rgb(247,75,75)' }}

                >{deleting ? 'Hapus... ' : ' Hapus'}
                </button>
              </td>
            </tr>
          )}

        </tbody>

      </table>
      <Pagination pages={howManyPages} setCurrentPage={setCurrentPage} />
    </div>
  )
}
