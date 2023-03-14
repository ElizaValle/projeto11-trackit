import logo from "../../assets/logo.png"
import { ScreenContainer, Logo, FormContainer } from "./styled";
import { Link } from "react-router-dom";

export default function RegistrationPage() {
    return (
        <ScreenContainer>
            <Logo src={logo} />
            <FormContainer>
                <label htmlFor="email"></label>
                <input id="email" name="email" type="email" placeholder="email" required />
                <label htmlFor="senha"></label>
                <input id="senha" name="senha" type="password" placeholder="senha" required />
                <label htmlFor="nome"></label>
                <input id="nome" name="nome" type="text" placeholder="nome" required />
                <label htmlFor="foto"></label>
                <input id="foto" name="foto" type="link" placeholder="foto" required />

                <button type="submit">Cadastrar</button>

                <Link>
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </FormContainer> 
        </ScreenContainer> 
    );
}