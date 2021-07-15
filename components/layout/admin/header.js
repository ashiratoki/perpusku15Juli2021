//@ts-check
export default function  header (){
    return (

 
      <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
      <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars" /></button>
        <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 ">
        <b><h2 style={{color:"blue"}}> PERPUSTAKAAN    SMK DARUL ANWAR  </h2></b>
        </form>
        <ul className="navbar-nav flex-nowrap ms-auto">
          <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search" /></a>
            <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
              <form className="me-auto navbar-search w-100">
                <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                  <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
                </div>
              </form>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw" /></a>
              <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                <h6 className="dropdown-header">Notifikasi</h6><a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="me-3">
                    <div className="bg-primary icon-circle"><i className="fas fa-info text-white" /></div>
                  </div>
                  <div><span className="small text-gray-500">December 12, 2019</span>
                    <p>Data pengembalian berhasil ditambahkan</p>
                  </div>
                </a><a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="me-3">
                    <div className="bg-success icon-circle"><i className="fas fa-check text-white" /></div>
                  </div>
                  <div><span className="small text-gray-500">December 7, 2019</span>
                    <p>Siswa B sudah melewati tanggal kembali</p>
                  </div>
                </a><a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="me-3">
                    <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white" /></div>
                  </div>
                  <div><span className="small text-gray-500">December 2, 2019</span>
                    <p>Siswa C sudah melewati tanggal kembali</p>
                  </div>
                </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown" />
          </li>

          <div className="d-none d-sm-block topbar-divider" />
          <li className="nav-item dropdown no-arrow">
          
            <div className="nav-item dropdown no-arrow">
              <a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="d-none d-lg-inline me-2 text-gray-600 small">Mary Jane</span><img className="border rounded-circle img-profile" src="../../assets/img/avatars/avatar1.jpeg" /></a>
              <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="/admin/ganti-pas"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />&nbsp;Ganti Password</a>
                <div className="dropdown-divider" /><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400" />&nbsp;Logout</a>
              </div>
            
            </div>
             
          </li>
        </ul>
      </div>
    </nav>
     

    )
}
