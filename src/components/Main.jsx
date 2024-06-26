import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Main() {

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [listaContatos, setListaContatos] = useState([]);

    const salvar = function () {
        if(nome === "" || telefone === ""){
            console.log("O usuário não inseriu alguma das informações.");
            Swal.fire({
                title: "ERRO",
                text: "Não foram inseridos algumas das informações!",
                icon: "error"
            });
        }
        else {
            console.log("O nome do usuário é:", nome, "e seu telefone é:", telefone);
            Swal.fire({
                title: "Contato Salvo!",
                text: "Seu contato foi salvo com sucesso!",
                icon: "success"
            });
            registrar();
        }
    };

    const registrar = () => {
        console.table(listaContatos);
        setListaContatos([...listaContatos, {
            nomeSalvo: nome,
            telefoneSalvo: telefone
        }]);
    };

    return (
        <div id="centralizacao-main">
            <main>
                <div id="bloco-insersoes">
                    <form onSubmit={registrar}>
                        <label htmlFor="nome">Nome: </label>
                        <div className="padding-input"><input type="text" id="nome" value={nome} placeholder="Seu Nome" onChange={(event) => setNome(event.target.value)} /></div>
                        <label htmlFor="telefone">Telefone: </label>
                        <div className="padding-input"><input type="tel" id="telefone" value={telefone} placeholder="Seu Telefone" onChange={(event) => setTelefone(event.target.value)} /></div>
                        <button type="submit">Enviar</button>
                    </form>
                    {listaContatos.map((contato, index) => (
                        <div key={index}>
                            <p>Nome: {contato.nomeSalvo}</p>
                            <p>Telefone: {contato.telefoneSalvo}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
