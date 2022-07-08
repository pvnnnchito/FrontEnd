import React from "react";


//esta funcion nos retornara un jsx
//className atributo de los div, lo mismo que haciamos con CSS
const App = () => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-8'>
                    <h1>Lista</h1>
                </div>
                <div className='col-4'>
                    <h1>Formularios</h1>
                </div>
            </div>
        </div>)
};
//para ocupar esta funcion, hay que exportarla, estamos habilitando
//para ocuparla en cualquier lado
export default App;