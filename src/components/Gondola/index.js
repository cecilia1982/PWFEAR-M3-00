import React from "react";

class Producto extends React.Component {
  //1) Antes de "nacer" el componente
  constructor() {
    super();
    this.state = {
      isLoaded: false
    };
  }

  //2) Al "montar" el componente en el Virtual DOM
  componentDidMount() {
    //<-- Ideal para operaciones asincrónicas (AJAX)
    this.setState({ ...this.props.datos, isLoaded: true });
  }
  //3) Mostrar el componente en el Real DOM
  render() {
    //<-- Se re-ejecuta cada vez que se ejecuta primero el setState()
    if (!this.state.isLoaded) {
      return <em>Cargando...</em>;
    } else {
      return (
        <cite style={{}} onClick={this.onUpdatePrice.bind(this)}>
          Soy un producto llamado {this.state.nombre} y valgo ARS
          {this.state.precio}...
        </cite>
      );
    }
  }

  //////////////////////////////////////////////

  onUpdatePrice() {
    //alert( `Si, en serio soy el componente Producto llamado "${this.state.nombre}"`);
    let newPrice = prompt("Ingrese nuevo precio");

    this.setState({ precio: newPrice });
  }
}

class Gondola extends React.Component {
  //1) Antes de "nacer" el componente
  constructor() {
    super();
    this.state = {};
  }

  //2) Al "montar" el componente en el Virtual DOM
  componentDidMount() {
    //<-- Ideal para operaciones sincrónicas (Iteraciones)
  }

  //3) Mostrar el componente en el Real DOM
  render() {
    return (
      <div>
        {this.props.productos.map((e, i) => (
          <Producto datos={e} key={i} />
        ))}
      </div>
    );
  }
}

export default Gondola;
