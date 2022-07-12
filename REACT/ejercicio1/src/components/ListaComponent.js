import React from "react";

const ListaComponent = ({ usuario }) => {
    return (
        <><div>
            <div>
                <ul>
                    <h4>Actividades</h4>
                    <li><p>{usuario.nombre}: {usuario.cantidad} horas a la semana </p>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-sm btn-outline-primary me-2">Editar</button>
                            <button className="btn btn-sm btn-outline-danger">Eliminar</button>
                        </div></li>
                    <hr />
                </ul>
                <br />


            </div>
        </div>


        </>);

};

export default ListaComponent