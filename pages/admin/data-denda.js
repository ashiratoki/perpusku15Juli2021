//@ts-check
import TableDenda from '../../components/admin/tableDenda'
import Dendaperhari from '../../components/admin/dendaPerhari'

export default function TambahDenda() {


  return (
    <div id="wrapper" style={{ width: "auto" }}>
      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">

          <div className="container-fluid">
            <h3 className="text-dark mb-4">Data Denda</h3>
            <div className="row mb-3">
              <div className="col-lg-8">
                <div className="row mb-3 d-none">
                  <div className="col">
                    <div className="card textwhite bg-primary text-white shadow">
                      <div className="card-body">
                        <div className="row mb-2">
                          <div className="col">
                            <p className="m-0">Peformance</p>
                            <p className="m-0"><strong>65.2%</strong></p>
                          </div>
                          <div className="col-auto"><i className="fas fa-rocket fa-2x" /></div>
                        </div>
                        <p className="text-white-50 small m-0"><i className="fas fa-arrow-up" />&nbsp;5% since last month</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card textwhite bg-success text-white shadow">
                      <div className="card-body">
                        <div className="row mb-2">
                          <div className="col">
                            <p className="m-0">Peformance</p>
                            <p className="m-0"><strong>65.2%</strong></p>
                          </div>
                          <div className="col-auto"><i className="fas fa-rocket fa-2x" /></div>
                        </div>
                        <p className="text-white-50 small m-0"><i className="fas fa-arrow-up" />&nbsp;5% since last month</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col" style={{ width: '489.328px' }}>
                    <div className="card shadow mb-3" style={{ width: '516.328px' }}>


                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow" style={{ width: 'auto' }}>
              <div className="card-header py-3">
                <p className="text-primary m-0 fw-bold">Tabel Denda</p>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 text-nowrap">

                    <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                      <Dendaperhari />
                    </div>
                  </div>
                </div>
                <div className="table-responsive table mt-2" id="dataTable-1" role="grid" aria-describedby="dataTable_info">
                  <TableDenda />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-white sticky-footer">
          <div className="container my-auto">
            <div className="text-center my-auto copyright"><span>Powered by STIKOM PGRI BANYUWANGI ©&nbsp; 2021</span></div>
          </div>
        </footer>
      </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
    </div>
    


  )
}

