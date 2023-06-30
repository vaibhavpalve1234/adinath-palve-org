import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaHome, FaInstagram, FaPhotoVideo, FaWordpress, FaBook, FaConciergeBell } from 'react-icons/fa';

function Register() {
  return (
    <div className='d-flex justify-content-around'>
    <form className="row g-3">
      <div className="col-md-4">
        <label for="inputEmail4" className="form-label">Name</label>
        <input type="text" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-md-4">
        <label for="inputEmail4" className="form-label">PhoneNumber</label>
        <input type="number" className="form-control" id="inputEmail4" />
      </div>
      <div className="col-4">
        <label for="inputAddress" className="form-label">Address</label>
        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
      </div>
      <div className="col-4">
        <label for="inputAddress2" className="form-label">Address 2</label>
        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
      </div>
      <div className="col-md-4">
        <label for="inputState" className="form-label">State</label>
        <select id="inputState" className="form-select" defaultValue={"none"}>
          <option selected >Choose...</option>
          <option>Maharshtra</option>
        </select>
      </div>
      <div className="col-md-4">
        <label for="inputState" className="form-label">Dist</label>
        <select id="inputState" className="form-select" defaultValue={"none"}>
          <option selected>Choose...</option>
          <option>Thane</option>
        </select>
      </div>
      <div className="col-md-2">
        <label for="inputZip" className="form-label">Zip</label>
        <input type="text" className="form-control" id="inputZip" />
      </div>
      <div className="col-md-6">
        <label for="inputCity" className="form-label">City</label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div className="col-md-12 text-center">
        <button type="submit" className="btn btn-primary">Sign in</button>
      </div>
    </form>
    </div>
  );
};


export default Register