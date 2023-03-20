import logo from "../../assets/logo.png"
import { ScreenContainer, Logo, FormContainer, Loading } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";
import { ImageContext, ImageProvider  } from "../../constants/ImageContext";

export default function RegistrationPage() {
    const navigate = useNavigate();
    const { setImage } = useContext(ImageContext);

    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [disabledInput, setDisableInput] = useState(true);

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
        <ImageProvider>    
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
                        type="url" 
                        value={form.image}
                        onChange={e => {
                            setForm({...form, image: e.target.value});
                            setImage(e.target.value);
                        }}
                        placeholder="foto" 
                        required 
                        disabled={disabledInput}
                    />

                    {isLoading ? (
                        <Loading isLoading={true}>
                            <ThreeDots type="TailSpin" color="#FFFFFF" />
                        </Loading>
                    ) : (
                        <button 
                            data-test="signup-btn" 
                            type="submit"
                            /* disabled={disabledInput} */
                        >
                            Cadastrar
                        </button>
                    )}

                    <Link data-test="login-link" to={"/"}>
                        <p>Já tem uma conta? Faça login!</p>
                    </Link>
                </FormContainer> 
            </ScreenContainer>
        </ImageProvider> 
    );
}