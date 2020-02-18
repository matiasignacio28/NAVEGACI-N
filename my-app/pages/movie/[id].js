import React from "react";
import Menu from "../../components/Menu";
import Router, { useRouter } from "next/router";

export default function movie() {
    const router = useRouter();
    const { id } = router.query;
    
const goToHome = () => {
    Router.push("/movies");
};

         return (
        <div>
        <Menu/>
        <h2 style={{ textAling:"center" }}>PAGINAS SECUENDARIAS </h2>
    <h1 style={{ textAling:"center"}}>{id}</h1>
    <div style={{ textAlign: "center" }}>
        <button onClick={goToHome}>IR A LA PAGINA DE PELICULAS </button>
    </div>
</div>
    );
}