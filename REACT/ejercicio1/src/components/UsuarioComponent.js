import React from "react";
import FormularioComponent from "./FormularioComponent";
import ListaComponent from "./ListaComponent";

const actividades = [
    {
        key:'0',
        nombre: 'Futbol',
        cantidad: '3',
        
    },
    {
        key:'1',
        nombre: 'Bicicleta',
        cantidad: '4',
        
    },
    {
        key:'2',
        nombre: 'Natacion',
        cantidad: '2',
        
    },

]

const UsuarioComponent = () => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-8'>
                    <h1>Lista</h1>
                    {/* Iteracion de usuarios con map */}
                    {/* traemos posicion del array */}
                    {
                        actividades.map(deportes => <ListaComponent key={deportes.key} usuario={deportes}/>)
                    }
                    {/* <TarjetaComponent usuario={usuario1}/> */}
                    {/* <TarjetaComponent usuario={usuario2}/> */}

                </div>
                <div className='col-4 bg-info'>
                    <h1>Formularios</h1>
                    <FormularioComponent />
                </div>
            </div>
        </div>);

};

export default UsuarioComponent