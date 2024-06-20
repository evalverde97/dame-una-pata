import React, { useReducer, createContext, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../db/firebase";
import { onSnapshot, doc } from "firebase/firestore";

const estadoInicial = {
  usuario: {},
};

if (localStorage.getItem("IdToken")) {
  const usuarioData = {
    Metodo: localStorage.getItem("Metodo"),
    IdCliente: localStorage.getItem("IdCliente"),
    IdToken: localStorage.getItem("IdToken"),
    Correo: localStorage.getItem("Correo"),
    Nombres: localStorage.getItem("Nombres"),
    Apellidos: localStorage.getItem("Apellidos"),
    Genero: localStorage.getItem("Genero"),
    FechaNacimiento: localStorage.getItem("FechaNacimiento"),
    Celular: localStorage.getItem("Celular"),
    FotoUrl: localStorage.getItem("FotoUrl"),
    Rol: localStorage.getItem("Rol"),
  };
  estadoInicial.usuario = usuarioData;
} else {
  estadoInicial.usuario = {};
}

const EstadoContexto = createContext({
    usuario: {},
    cerrarSesion: () => {},
    iniciarSesion: (usuarioData) => {},
  });
  
  function estadoReductor(state, action) {
    switch (action.type) {
      case "NUEVA_SESION":
        return {
          ...state,
          usuario: Object.assign(state.usuario, action.payload),
        };
      case "CERRAR_SESION":
        return { ...state, usuario: {} };
      default:
        return state;
    }
  }
  
  function EstadoProveedor(props) {
    const [state, dispatch] = useReducer(estadoReductor, estadoInicial);
  
    useEffect(() => {
      if (localStorage.getItem("IdToken")) {
        const rolUsuario = localStorage.getItem("Rol");
        const clienteRef = doc(
          db,
          `${rolUsuario === "administrador" ? "Personales" : "Clientes"}`,
          localStorage.getItem("IdCliente")
        );
  
        onSnapshot(clienteRef, (doc) => {
          if (localStorage.getItem("IdToken") === doc.data().IdToken) {
            const userData = {
              Nombres: doc.data().Nombres,
              Apellidos: doc.data().Apellidos,
              Genero: doc.data().Genero,
              FechaNacimiento: doc.data().FechaNacimiento,
              Celular: doc.data().Celular,
              FotoUrl: doc.data().FotoUrl,
            };
  
            dispatch({
              type: "NUEVA_SESION",
              payload: userData,
            });
  
            localStorage.setItem("Nombres", doc.data().Nombres);
            localStorage.setItem("Apellidos", doc.data().Apellidos);
            localStorage.setItem("Genero", doc.data().Genero);
            localStorage.setItem("FechaNacimiento", doc.data().FechaNacimiento);
            localStorage.setItem("Celular", doc.data().Celular);
            localStorage.setItem("FotoUrl", doc.data().FotoUrl);
          } else {
            console.log("NO HAY USUARIO");
            cerrarSesion();
          }
        });
      }
    }, [state.user]);
  
    function iniciarSesion (usuarioData) {
        LocalStorage.setItem("Metodo", usuarioData-Metodo);
        localStorage.setItem("IdCliente", usuarioData.IdCliente);
        localStorage.setItem("IdToken", usuarioData.IdToken);
        localStorage.setItem("Correo", usuarioData.Correo);
        LocalStorage.setItem ("Nombres", usuarioData.Nombres);
        localStorage.setItem("Apellidos", usuarioData-Apellidos);
        localStorage.setItem("Genero", usuarioData.Genero);
        localStorage-setItem("FechaNacimiento", usuarioData.FechaNacimiento);
        localStorage.setItem("Celular", usuarioData.Celular);
        LocalStorage.setItem("Fotourl", usuarioData.Fotourl);
        localStorage.setItem("Rol", usuarioData.Rol);

        dispatch ({
            type:"NUEVA_SESION", 
            payload: usuarioData,
            });
    };

    function cerrarSesion (usuarioData) {
        LocalStorage.removeItem("Metodo", usuarioData-Metodo);
        localStorage.removeItem("IdCliente", usuarioData.IdCliente);
        localStorage.removeItem("IdToken", usuarioData.IdToken);
        localStorage.removeItem("Correo", usuarioData.Correo);
        LocalStorage.removeItem("Nombres", usuarioData.Nombres);
        localStorage.removeItem("Apellidos", usuarioData-Apellidos);
        localStorage.removeItem("Genero", usuarioData.Genero);
        localStorage.removeItem("FechaNacimiento", usuarioData.FechaNacimiento);
        localStorage.removeItem("Celular", usuarioData.Celular);
        LocalStorage.removeItem("Fotourl", usuarioData.Fotourl);
        localStorage.removeItem("Rol", usuarioData.Rol);

        signOut(auth)
        .then( () => dispatch(
            {type:"CERRAR SESION", user:{}}
        ))
        .catch( (e) => console.log(`Error al cerrar sesion: ${e}`));
    };

    return(
        <EstadoContexto.Provider
            value={{
                usuario: state.usuario,
                cerrarSesion,
                iniciarSesion,
            }}
        >
            {props}
        </EstadoContexto.Provider>
    );
};

export { EstadoContexto, EstadoProveedor};
