import React, { useState, useEffect } from "react";


//formulario vacio - ingresar datos vacios
const initialValues = [
    {
        key: '',
        nombre: '',
        apellido: '',
        edad: '',
        password: ''
    }
]

//el set llena el formulario vacio, con todos los atributos

const FormularioComponent = ({ usuarioAdd, usuarioEditado, usuarioEdit}) => {

    const [values, setValues] = useState(initialValues);
    const { key, nombre, apellido, edad, password } = values;

    useEffect( //useEffect con funcion interna 
        () => {
            if (usuarioEditado !== null) {
                setValues(usuarioEditado)
            }

        }
        , [usuarioEditado]);

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...values,//conservando lo que ya tenemos 
            //el input se captura acá 
            [e.target.name]: e.target.value// agregamos esto 
        }
        setValues(changedFormValue)
    }

    const handleSubmit = (e) => {
        //el preventDefault, no produce la recarga de la pagina pero si capturo el evento 
        e.preventDefault();
        if (usuarioEditado !== null) {
            usuarioEdit(values)
        } else {
            usuarioAdd(values)
        }
    }

    return (
        // { usuarioEditado ?} = usuarioEditado es nulo? si no es nulo muestra 'xxx', si es nulo muestra 'yyy'
        //Antes de que hagas la ercarga, llama a la funcion
        <form onSubmit={handleSubmit}>
            <h1>{usuarioEditado ? 'Editar Usuario' : 'Ingresar usuario'}</h1>
            <div className="form-group">
                <label>ID</label>
                <input
                    type="text"
                    className="form-control"
                    id="id"
                    placeholder="Key"
                    value={key}
                    name='key'
                    //cuando cambie el valor interno --> mandame 
                    onChange={handleInputChange}
                />
                <br />
                <label>Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Nombre"
                    value={nombre}
                    name='nombre'
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div className="form-group">
                <label>Apellido</label>
                <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="Apellido"
                    value={apellido}
                    name='apellido'
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div className="form-group">
                <label>Edad</label>
                <input
                    type="number"
                    className="form-control"
                    id="edad"
                    placeholder="Edad"
                    value={edad}
                    name='edad'
                    onChange={handleInputChange}
                />
                <br />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    name='password'
                    onChange={handleInputChange}
                ></input>
                <br />
            </div>
            <button type="submit" className="btn btn-outline-primary" >Crear usuario</button>
        </form>);
}

export default FormularioComponent;