import React, { useState } from "react";
import TarjetaComponent from "./TarjetaComponent";
import FormularioComponent from "./FormularioComponent";

// Constantes separadas x cada usuario
/*const usuario1 = {
    nombre: 'Francisco',
    apellido: 'Perez',
    edad: '26'
}
const usuario2 ={
    nombre:'Javier',
    apellido:'Morales',
    edad:'26'
}*/

//Arreglo de usuarios
const initialUsuarios = [
    {
        key: '0',
        nombre: 'Francisco',
        apellido: 'Perez',
        edad: '26'
    },
    {
        key: '1',
        nombre: 'Javier',
        apellido: 'Morales',
        edad: '26'
    },
    {
        key: '2',
        nombre: 'Agnes',
        apellido: 'Winklmeier',
        edad: '28'
    }

]

const UsuarioComponent = () => {

    // HOOKS, son cambios en tiempo real

    // funcionalidad de cambiar las cosas en tiempo real
    // la primera posicion sera el estado inicial y el segundo donde se hara el cambio
    const [usuarios, setUsuarios] = useState(initialUsuarios);

    //state[0]=initialUsuarios
    //state[1]= funcion que nos permite hacer cambios

    //funcion para eliminar 
    const tarjetaDelete = (usuarioKey) => {
        const changeUsuarios = usuarios.filter(personas => personas.key !== usuarioKey)
        setUsuarios(changeUsuarios)
    };

    //funcion para agregar
    const usuarioAdd = (usuario) =>{
        const addUsuarios = [
            ...usuarios,
            usuario
        ]
        setUsuarios(addUsuarios)
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-8'>
                    <h1>Lista</h1>
                    {/* Iteracion de usuarios con map */}
                    {/* traemos posicion del array */}
                    {
                        usuarios.map(personas => 
                        <TarjetaComponent 
                        key={personas.key} 
                        usuario={personas} 
                        tarjetaDelete={tarjetaDelete} />)
                    }
                    {/* <TarjetaComponent usuario={usuario1}/> */}
                    {/* <TarjetaComponent usuario={usuario2}/> */}

                </div>
                <div className='col-4'>
                    <h1>Formularios</h1>
                    <FormularioComponent usuarioAdd={usuarioAdd}/>
                </div>
            </div>
        </div>);

}

export default UsuarioComponent;