// Dependencias
import React, { Component } from 'react';

//Componentes
import Title from '../Global/Title';
import Busqueda from '../Global//Busqueda.js';
import Contenido from './Contenido.js';
//import data from './data.js';
import baseURL from '../../url';

class Docentes extends Component {
constructor() {
    super()
    this.state = { data_a: [] , count: 1}
     fetch(`${baseURL}/teachers?page=${this.state.count}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
       this.setState({ data_a: data ,page :2})
      })
      this.handleCountClick = this.handleCountClick.bind(this);
  }
 
  handleCountClick(e) {
    if (e.target.id === 'add') {
      this.setState({
        count: this.state.count + 1
      });
    } else if (e.target.id === 'subtract' && this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      });
    } else {
      this.setState({
        count: 1
      });
    }
    fetch(`${baseURL}/teachers?page=${this.state.count}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data_a: data })
      })
  }


	render(){
		
		return(
			<div>
				<Title title='Docentes'/>
				<Busqueda />
				<Contenido listado={this.state.data_a}/>
				<div className="col-md-12"> 
          <div className="pull-right">
            <div className="pagination">
                <ul>
                  <button type="submit" id = "subtract"onClick={this.handleCountClick} className="btn btn-default">Prev</button>
                  <button type="submit" className="btn btn-default">{this.state.count}</button>
                  <button type="submit" id = "add"onClick={this.handleCountClick} className="btn btn-default">Next</button>
                </ul>
            </div>
          </div>
        </div>
			</div>
		);
	}
}

export default Docentes;