import { Link } from "react-router-dom";
import { CurrentLine, Cyan, Orange, Purple, Red } from "../../helpers/colors";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className="col-md-6">
      <div style={{ backgroundColor: CurrentLine }} className="card my-2">
        <div className="card-body">
          <div className="row align-items-center d-flex justify-content-around">
            <div className="col-md-4 col-sm-4">
              <img
                src={contact.photo}
                alt={contact.fullName}
                style={{ border: `1px solid ${Purple}` }}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 col-sm-7">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  نام و نام خانوداگی :{"  "}
                  <span className="fw-bold">{contact.fullName}</span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  شماره موبایل :{"  "}
                  <span className="fw-bold">{contact.mobile}</span>
                </li>

                <li className="list-group-item list-group-item-dark">
                  آدرس ایمیل :{"  "}
                  <span className="fw-bold">{contact.email}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              <Link to={`/contacts/${contact.id}`} className="btn my-1" style={{ backgroundColor: Orange }}>
                <i className="fa fa-eye" />
              </Link>

              <Link to={`/contacts/edit/${contact.id}`} className="btn my-1" style={{ backgroundColor: Cyan}}>
                <i className="fa fa-pen" />
              </Link>
              <button onClick={deleteContact} className="btn my-1" style={{ backgroundColor: Red }}>
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
