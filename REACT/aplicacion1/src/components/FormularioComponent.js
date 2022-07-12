import React, { useState } from "react";


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

const FormularioComponent = ({usuarioAdd}) => {

    const [values, setValues] = useState(initialValues);
    const { key, nombre, apellido, edad, password } = values;

    const handleInputChange = (e) => {
        const changedFormValue = {
            ...values,
            //el input se captura acá 
            [e.target.name]: e.target.value
        }
        setValues(changedFormValue)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        usuarioAdd(values)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>ID</label>
                <input
                    type="text"
                    className="form-control"
                    id="id"
                    placeholder="Key"
                    value={key}
                    name='key'
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
            <button type="submit" className="btn btn-outline-primary">Crear usuario</button>
        </form>);
}

export default FormularioComponent;