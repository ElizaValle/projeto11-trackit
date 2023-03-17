import logo from "../../assets/logo.png"
import { ScreenContainer, Logo, FormContainer } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";
import { ThemeConsumer } from "styled-components";

export default function RegistrationPage() {
    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [disabledInput, setDisableInput] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if(form.email && form.name && form.image && form.password) {
            setDisableInput(false);
        } else {
            setDisableInput(true);
        }
    }, [form]);

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function register(e) {
        e.preventDefault();
        setIsLoading(true);

        const body = {...form};

        axios.post(`${BASE_URL}/auth/sign-up`, body)
            .then(() => {
                navigate("/");
                setDisableInput(true);
            })
            .catch((err) => {
                alert(`Erro ${err.response.status}`);
                setDisableInput(true);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <ScreenContainer onSubmit={register}>
            <Logo src={logo} />
            <FormContainer>
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
                <label htmlFor="password"></label>
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
                <label htmlFor="name"></label>
                <input 
                    data-test="user-name-input" 
                    id="name" 
                    name="name" 
                    type="text" 
                    value={form.name}
                    onChange={handleForm}
                    placeholder="nome" 
                    required 
                    disabled={isLoading}
                />
                <label htmlFor="image"></label>
                <input 
                    data-test="user-image-input" 
                    id="image" 
                    name="image" 
                    type="link" 
                    value={form.image}
                    onChange={handleForm}
                    placeholder="foto" 
                    required 
                    disabled={isLoading}
                />

                {isLoading ? (
                    <ThreeDots type="TailSpin" color="#00BFFF" />
                ) : (
                    <button 
                        data-test="signup-btn" 
                        type="submit"
                        disabled={isLoading}
                    >
                        Cadastrar
                    </button>
                )}

                <Link data-test="login-link" to={"/"}>
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </FormContainer> 
        </ScreenContainer> 
    );
}