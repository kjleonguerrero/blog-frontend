/* eslint-disable react/prop-types */
// import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <section className="modal-body">
                {props.children}
                <button
                  type="button"
                  className="close btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={props.onClose}
                >
                  &#x2715;
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
