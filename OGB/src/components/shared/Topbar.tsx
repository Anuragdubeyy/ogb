// import { bell } from './src/assets/icon/bell.svg'
export default function TopBar() {
  return (
    <header>
        
      <nav className="ml-56 mt-6">
        
        <div className="row">
            
          <div className="col-md-12 grid-margin">
            
            <div className="row flex justify-between">
              <div className="col-16 col-xl-8 mb-4 mb-xl-0">
                <h3 className="font-weight-bold" style={{ fontSize: "36px" }}>
                  <span
                    style={{ color: "rgba(0, 0, 0, 0.50)", fontSize: "36px" }}
                  >
                    Good afternoon
                  </span>
                  , Raj Deep
                </h3>
                <h6 className="font-weight-normal mb-0">
                  <span
                    style={{
                      color: "rgba(0, 0, 0, 0.50)",
                      fontSize: "18px",
                      fontWeight: 400,
                      lineHeight: "24px",
                    }}
                  >
                    Your performance summary
                  </span>
                </h6>
              </div>
              <div className="col-2 col-xl-4 text-right float-left flex">
                <div className="text-center d-none d-md-block float-left mt-2">
                  <p
                    className="text-center statistics-title"
                    style={{ margin: "0px 30px" , color: "black", fontWeight: 600 }}
                  >
                    Today 10 Gram Rate
                  </p>

                  <button
                    type="button"
                    className="ml-12 mt-1 flex gap-2 p-1 pl-2 pr-2 "
                    style={{ borderRadius: "4px", color: "black", border:"2px solid rgba(0, 0, 0, 0.03)" }}
                    // data-bs-toggle="modal"
                    // data-bs-target="#exampleModal"
                  >
                    <span id="rate" style={{ color: "black", fontWeight: 700 }}>
                      ₹ 62,000
                    </span>
                    <img src="./src/assets/icon/pencil.svg" alt="" />
                  </button>
                </div>
                <a href="#" style={{ margin: "13px 40px" }}>
                  <img src="./src/assets/icon/bell.svg" alt="" />
                </a>
                <img
                  className="w-14  h-14 mt-2 mr-6"
                  src="..\src\assets\faces\face28.jpg"
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
