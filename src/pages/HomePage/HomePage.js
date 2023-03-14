import logo from "../../assets/logo.png"
import { ScreenContainer, Logo, FormContainer,  } from "./styled";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <ScreenContainer>
            <Logo src={logo} />
            <FormContainer>
                <label htmlFor="email"></label>
                <input id="email" name="email" type="email" placeholder="email" required />
                <label htmlFor="senha"></label>
                <input id="senha" name="senha" type="password" placeholder="senha" required />

                <button type="submit">Entrar</button>

                <Link>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </FormContainer> 
        </ScreenContainer> 
    );
}
