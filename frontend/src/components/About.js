import React from "react";
export const About = () => (
<form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Nombre(s)</label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputApellidos4" className="form-label">Apellido(s)</label>
          <input type="text" className="form-control" id="inputApellidos4" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Direccion</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">Referencias</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">Ciudad</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">Estado</label>
          <select id="inputState" className="form-select">
            <option selected>Oaxaca</option>
            <option selected>Tehuantepec</option>
            <option selected>Juchitan</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Codigo Postal</label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
         
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" style={{"float" : "right;"}}>Agregar</button>
        </div>
      </form>
    );