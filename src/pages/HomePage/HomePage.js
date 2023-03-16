import logo from "../../assets/logo.png"
import { ScreenContainer, Logo, FormContainer } from "./styled";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <ScreenContainer>
            <Logo src={logo} />
            <FormContainer>
                <label htmlFor="email"></label>
                <input data-test="email-input" id="email" name="email" type="email" placeholder="email" required />
                <label htmlFor="senha"></label>
                <input data-test="password-input" id="senha" name="senha" type="password" placeholder="senha" required />

                <button data-test="login-btn" type="submit">Entrar</button>

                <Link data-test="signup-link">
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </FormContainer> 
        </ScreenContainer> 
    );
}
