import React, { Component } from 'react';

class LeftNav extends Component {
	render() {
		return(
			<div className="col-sm-2 leftdiv" style={{backgroundColor: "lavender"}}>        
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <div data-toggle="collapse" href="#categories">
                <button className="btn btn-default panel-title categbtn" type="button" style={{backgroundColor: "transparent", border: "transparent"}}	>
                  CATEGORIES
                  <i className="glyphicon glyphicon-menu-down"></i>
                </button>
              </div>
            </div>
            <div id="categories" className="panel-collapse collapse">
              <ul className="list-group">
                <div className="form-group">
                  <li className="list-group-item">
                    <div className="checkbox">
                      <label><input type="checkbox" value="" className="btn btn-default" />Adventure</label>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="checkbox">
                      <label><input type="checkbox" value="" className="btn btn-default" />Food</label>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="checkbox">
                      <label><input type="checkbox" value="" className="btn btn-default" />Romance</label>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="checkbox">
                      <label><input type="checkbox" value="" className="btn btn-default" />Leisure</label>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="checkbox">
                      <label><input type="checkbox" value="" className="btn btn-default" />Gaming</label>
                    </div>
                  </li>
                </div>
              </ul>
              
            </div>
          </div>
        </div>

        <label>Price</label>
        <form className="form-inline">
          <div className="form-group">
            <input type="number" value="" placeholder="Min" className="form-control" min="0" />
            <input type="number" value="" placeholder="Max" className="form-control" min="0" />
            <button className="btn btn-default" type="submit" style={{backgroundColor: "transparent", border: "transparent"}}>
              <i className="glyphicon glyphicon-ok"></i>
            </button>
          </div>
        </form>
      </div>
		)
	}
}

export default LeftNav;