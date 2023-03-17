import logo from "../../assets/logo.png"
import { ScreenContainer, Logo, FormContainer } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useEffect, useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [disableInput, setDisableInput] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if(form.email && form.password) {
            setDisableInput(false);
        } else {
            setDisableInput(true);
        }
    }, [form]);

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function toEnter(e) {
        e.preventDefault();
        setIsLoading(true);

        const body = {...form}
        console.log(body);
        
        axios.post(`${BASE_URL}/auth/login`, body)
            .then(() => {
                navigate("/hoje");
                setDisableInput(true);
            })
            .catch((err) => { 
                //alert("Não foi possível efetuar o login, tente novamente!");
                alert(`Erro ${err.response.status}`);
                setDisableInput(false);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <ScreenContainer>
            <Logo src={logo} />
            <FormContainer onSubmit={toEnter}>
                <label htmlFor="email"></label>
                <input 
                    data-test="email-input"
                    id="email" 
                    name="email" 
                    type="email" 
                    value={form.email}
                    onChange={handleForm}
                    placeholder="email" 
                    required 
                    disabled={isLoading}
                />
                <label htmlFor="senha"></label>
                <input 
                    data-test="password-input" 
                    id="password" 
                    name="password" 
                    type="password"
                    value={form.password}
                    onChange={handleForm} 
                    placeholder="senha"
                    required 
                    disabled={isLoading}
                />

                {isLoading ? (
                    <ThreeDots type="TailSpin" color="#00BFFF" />
                ) : (
                    <button 
                        data-test="login-btn" 
                        type="submit" 
                        disabled={isLoading}
                    >
                    Entrar
                </button>
                )}

                <Link data-test="signup-link" to={"/cadastro"}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </FormContainer> 
        </ScreenContainer> 
    );
}
