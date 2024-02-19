import React from "react";

function Dashboard() {
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div className="container">
        <div className="col">
          <div className="card radius-10 border-start border-0 border-3 border-warning">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div>
                  <p className="mb-0 text-secondary">Tambah Siswa</p>
                  <h4 className="my-1 text-warning">8.4K</h4>
                </div>
                <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto">
                  <i className="fa fa-users"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
