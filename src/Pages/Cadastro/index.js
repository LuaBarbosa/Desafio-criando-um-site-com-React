import react from "react";

import Logo from "../Login/Logo.svg";
import Olho from "./olho.svg";
import OlhoC from "./olhoc.svg";

export default function cadastro() {
	return (
		<div className="cadastro">
			<form>
				<label>
				<img src={Logo} />
				Nome 
				<input />
				Email 
				<input />
				Senha 
				<input />
				<button> Criar Conta </button>
				</label>
				Ja possui conta? Acesse agora.
			</form>
		</div>
	)
	
}