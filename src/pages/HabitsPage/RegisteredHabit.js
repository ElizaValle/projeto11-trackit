import TrackIt from "../../assets/TrackIt.png";
import circulo from "../../assets/circulo.png";
import hoje from "../../assets/hoje.png";
import vector from "../../assets/vector.png";
import lixeira from "../../assets/lixeira.png";
import {  
    Header, Logo, Foto, ContentBody, Footer, 
    ImageCircle, ImageText, ImageVector, 
    HabitsArea, ButtonsArea, Loading,
    Habit, TrashButton, TrashImage, TextAndButtons
} from "./styled";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ImageContext } from "../../constants/ImageContext";

export default function RegisteredHabit() {
    const navigate = useNavigate();
    const { imageUrl } = useContext(ImageContext);

    return (
        <>
            <Header data-test="header">
                <Logo src={TrackIt} />
                <Foto src={imageUrl} />
            </Header>

            <ContentBody>
                <HabitsArea>
                    <Habit data-test="habit-container">
                        <TextAndButtons>
                            texto que veio do input
                            <p data-test="habit-name">Ler 1 capítulo de livro</p>

                            <ButtonsArea>
                                <button data-test="habit-day" type="submit">D</button>
                                <button data-test="habit-day" type="submit">S</button>
                                <button data-test="habit-day" type="submit">T</button>
                                <button data-test="habit-day" type="submit">Q</button>
                                <button data-test="habit-day" type="submit">Q</button>
                                <button data-test="habit-day" type="submit">S</button>
                                <button data-test="habit-day" type="submit">S</button>
                            </ButtonsArea>
                        </TextAndButtons>

                        <TrashButton>
                            <button data-test="habit-delete-btn">
                                <TrashImage src={lixeira} />
                            </button>
                        </TrashButton>
                    </Habit> 

                    <Habit data-test="habit-container">
                        <TextAndButtons>
                            texto que veio do input
                            <p data-test="habit-name">Ler 1 capítulo de livro</p>

                            <ButtonsArea>
                                <button data-test="habit-day" type="submit">D</button>
                                <button data-test="habit-day" type="submit">S</button>
                                <button data-test="habit-day" type="submit">T</button>
                                <button data-test="habit-day" type="submit">Q</button>
                                <button data-test="habit-day" type="submit">Q</button>
                                <button data-test="habit-day" type="submit">S</button>
                                <button data-test="habit-day" type="submit">S</button>
                            </ButtonsArea>
                        </TextAndButtons>

                        <TrashButton>
                            <button data-test="habit-delete-btn">
                                <TrashImage src={lixeira} />
                            </button>
                        </TrashButton>
                    </Habit> 

                    <Habit data-test="habit-container">
                        <TextAndButtons>
                            texto que veio do input
                            <p data-test="habit-name">Ler 1 capítulo de livro</p>

                            <ButtonsArea>
                                <button data-test="habit-day" type="submit">D</button>
                                <button data-test="habit-day" type="submit">S</button>
                                <button data-test="habit-day" type="submit">T</button>
                                <button data-test="habit-day" type="submit">Q</button>
                                <button data-test="habit-day" type="submit">Q</button>
                                <button data-test="habit-day" type="submit">S</button>
                                <button data-test="habit-day" type="submit">S</button>
                            </ButtonsArea>
                        </TextAndButtons>

                        <TrashButton>
                            <button data-test="habit-delete-btn">
                                <TrashImage src={lixeira} />
                            </button>
                        </TrashButton>
                    </Habit> 
                </HabitsArea>


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

