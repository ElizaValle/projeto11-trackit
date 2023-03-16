import logo from "../../assets/logo.png"
import { ScreenContainer, Logo, FormContainer } from "./styled";
import { Link } from "react-router-dom";

export default function RegistrationPage() {
    return (
        <ScreenContainer>
            <Logo src={logo} />
            <FormContainer>
                <label htmlFor="email"></label>
                <input data-test="email-input" id="email" name="email" type="email" placeholder="email" required />
                <label htmlFor="senha"></label>
                <input data-test="password-input" id="senha" name="senha" type="password" placeholder="senha" required />
                <label htmlFor="nome"></label>
                <input data-test="user-name-input" id="nome" name="nome" type="text" placeholder="nome" required />
                <label htmlFor="foto"></label>
                <input data-test="user-image-input" id="foto" name="foto" type="link" placeholder="foto" required />

                <button data-test="signup-btn" type="submit">Cadastrar</button>

                <Link data-test="login-link">
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </FormContainer> 
        </ScreenContainer> 
    );
}