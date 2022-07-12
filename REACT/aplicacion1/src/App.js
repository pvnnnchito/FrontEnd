import React from "react";
import UsuarioComponent from "./components/UsuarioComponent";

//esta funcion nos retornara un jsx
//className atributo de los div, lo mismo que haciamos con CSS
const App = () => {
    return (
        <UsuarioComponent/>
    )
};
//para ocupar esta funcion, hay que exportarla, estamos habilitando
//para ocuparla en cualquier lado
export default App;