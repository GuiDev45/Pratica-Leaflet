// biblioteca React, que é usada para criar interfaces de usuário com componentes reutilizáveis e gerenciar o estado da aplicação.
import React from "react";
// importa o módulo ReactDOM, que é uma parte do React usada para renderizar componentes React em um ambiente de navegador.
import ReactDOM from "react-dom";
// importa o componente App
import App from "./App";

// Aqui começa o processo de renderização do React, que envolve a renderização do componente principal (App) na página HTML.
ReactDOM.render(
   // componente especial do React chamado StrictMode. Ele envolve a aplicação e ajuda a identificar potenciais problemas e práticas desatualizadas durante o desenvolvimento, exibindo avisos no console. Isso não afeta a produção e é destinado apenas ao desenvolvimento.
   <React.StrictMode>
     {/* o componente App é renderizado dentro do StrictMode. Isso significa que todo o conteúdo do componente App será renderizado no lugar onde ele é colocado.*/}
     <App />
   </React.StrictMode>,
   // seleciona o elemento HTML com o id "root" na página HTML, é onde o aplicativo React é renderizado.
   document.getElementById("root"),
 );
