import TrackIt from "../../assets/TrackIt.png";
import circulo from "../../assets/circulo.png";
import hoje from "../../assets/hoje.png";
import vector from "../../assets/vector.png";
//import lixeira from "../../assets/lixeira.png";
import {  
    Header, Logo, Foto, ContentBody, ContentHeader, Footer, 
    Text, ImageCircle, ImageText, ImageVector, 
    HabitsArea, FormContainer, ButtonsArea, CancelAndSave, Loading 
} from "./styled";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../../constants/ImageContext";
import { BASE_URL } from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import RegisteredHabit from "./RegisteredHabit";
import DaysButton from "./DaysButton";

export default function HabitsPage() {
    const navigate = useNavigate();
    const { imageUrl } = useContext(ImageContext);

    const [showForm, setShowForm] = useState(false);
    const [textValue, setTesxtValue] = useState("");
    const [selectDay, setSelectDay] = useState([]);
    const [isSave, setIsSave] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [disabledInput, setDisableInput] = useState(true);

    function saveForm(e) {
        e.preventDefault();
        setIsLoading(true);

        const data = { dayOfWeek: selectDay };
        const habit = { name: textValue, ...data };

        axios.post(
            `${BASE_URL}/habits`,
            habit,
            {
                headers: { Authorization: 'Bearer TOKEN' }
            }
            )
            .then(() => {
                setDisableInput(true);
                setIsSave(true);
            })
            .catch(() => {
                alert("Erro ao salvar um hábito, tente novamente.");
                setDisableInput(true);
            })
            .finally(() => setIsLoading(false));
    }

    /* function handleNameChange(e) {
        setHabitName(e.target.value);
    } */

    function handleDaySelected(day) {
        setSelectDay(day);
    }


    function formDispaly() {
        setShowForm(true);
        setIsSave(false);
    }

  /*   useEffect(() => {
        if(habitName.name && selectDay) {
            setDisableInput(false);
        } else {
            setDisableInput(true);
        }
    }, [habitName, selectDay]); */

    /* function handleDayClick(day) {
        setSelectDays((prevSelectDays) => {
            if(prevSelectDays.includes(day)) {
                return prevSelectDays.filter((selectDay) => selectDay !== day);
            } else {
                return [...prevSelectDays, day];
            }
        });
    } */

    /* function saveForm(e) {
        e.preventDefault();
        setIsLoading(true);
        
        const data

        const habit = { name: habitName };

        axios.post(
                `${BASE_URL}/habits`,
                habit,
                {
                    headers: { Authorization: 'Bearer TOKEN' }
                } 
             )
            .then(() => {
                setDisableInput(true);
                setIsSave(true);
            })
            .catch(() => {
                alert("Erro ao salvar um hábito, tente novamnte.");
                setDisableInput(true);
            })
            .finally(() => setIsLoading(false));
    } */

    return (
        <>
            <Header data-test="header">
                <Logo src={TrackIt} />
                <Foto src={imageUrl} />
            </Header>

            <ContentBody>

                {isSave ? (
                    <RegisteredHabit />
                ) : (
                    <>
                        <ContentHeader>
                            <p>Meus hábitos</p>
                            <button data-test="habit-create-btn" onClick={formDispaly}>+</button>
                        </ContentHeader>

                        {/* exibe ou não o formulário conforme valor do estado */}
                        {showForm && (
                            <HabitsArea data-test="habit-create-container" onSubmit={saveForm}>
                                <FormContainer>
                                    <label htmlFor="habit"></label>
                                    <input 
                                        data-test="habit-name-input" 
                                        id="habit" 
                                        name="habit" 
                                        type="text" 
                                        placeholder="nome do hábito"
                                        value={textValue}
                                        onChange={(e) => setTesxtValue(e.target.value)} 
                                        onKeyDown={(e) => {
                                            if(e.key === "Enter") {
                                                saveForm(e);
                                            }
                                        }}
                                        required 
                                        disabled={isLoading}
                                    />

                                    <ButtonsArea>
                                        <DaysButton selectDays={selectDay} handleDayClick={handleDaySelected} />
                                    </ButtonsArea>

                                    <CancelAndSave>
                                        <button data-test="habit-create-cancel-btn" type="submit">Cancelar</button>

                                        {isLoading ? (
                                            <button 
                                                data-test="habit-create-save-btn" 
                                                type="submit"
                                                disabled={disabledInput}
                                            >
                                                <Loading isLoading={true}>
                                                    <ThreeDots type="TailSpin" color="#FFFFFF" />
                                                </Loading>
                                            </button>
                                        ) : (
                                            <button data-test="habit-create-save-btn" type="submit">
                                                Salvar
                                            </button>
                                        )}

                                    </CancelAndSave>
                                </FormContainer> 
                            </HabitsArea>
                        )}

                        <Text>
                            <p>
                                Você não tem nenhum hábito
                                cadastrado ainda. Adicione um hábito
                                para começar a trackear!
                            </p>
                        </Text>
                    </>
                )}

            

                <Footer data-test="menu">
                    <button data-test="habit-link" onClick={() => navigate("/habitos")}>
                        Hábitos
                    </button>
                    <button data-test="today-link" onClick={() => navigate("/hoje")}>
                        <ImageCircle src={circulo} alt="círculo azul" />
                        <ImageText src={hoje} alt="texto" />
                        <ImageVector src={vector} alt="vetor" />
                    </button> 
                    <button data-tes="history-link" onClick={() => navigate("/historico")}>
                        Histórico
                    </button>
                </Footer>                
            </ContentBody>
        </>
    
    );
}

