import TrackIt from "../../assets/TrackIt.png";
import circulo from "../../assets/circulo.png";
import hoje from "../../assets/hoje.png";
//import vector from "../../assets/vector.png";
import check from "../../assets/check.png";
import {  
    Header, Logo, Foto, ContentBody, ContentHeader, Footer, 
    Text, ImageCircle, ImageText,
    ImageVector, HabitsArea, CheckButton, Habit
} from "./styled";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ImageContext } from "../../constants/ImageContext";

export default function HabitTodayPage() {
    const navigate = useNavigate();
    const { imageUrl } = useContext(ImageContext);



    return (
        <>
            <Header data-test="header">
                <Logo src={TrackIt} />
                <Foto src={imageUrl} />
            </Header>

            <ContentBody>
                <ContentHeader>
                    <>
                        <p data-test="today">Segunda, 17/05</p>  
                        <p data-test="today-cpunter">Nenhum hábito concluído ainda</p>
                    </>
                </ContentHeader>

                
                <HabitsArea>
                    <Habit data-test="today-habit-container">
                        <Text>
                            {/* texto que veio do input */}
                            <p data-test="today-habit-name">Ler 1 capítulo de livro</p>
                            <>
                                <p data-test="today-habit-sequence">Sequência atual: 3 dias</p> 
                                <p data-test="today-habit-record">Seu recorde: 5 dias</p>
                            </>
                        </Text>

                        <CheckButton> 
                            <button data-test="today-habit-check-btn" type="submit">
                                <ImageVector src={check} />
                            </button>
                        </CheckButton>
                    </Habit> 

                    <Habit data-test="today-habit-container">
                        <Text>
                            {/* texto que veio do input */}
                            <p data-test="today-habit-name">Ler 1 capítulo de livro</p>
                            <>
                                <p data-test="today-habit-sequence">Sequência atual: 3 dias</p> 
                                <p data-test="today-habit-record">Seu recorde: 3 dias</p>
                            </>
                        </Text>

                        <CheckButton>
                            <button data-test="today-habit-check-btn" type="submit">
                                <ImageVector src={check} />
                            </button>
                        </CheckButton>
                    </Habit> 

                    <Habit data-test="today-habit-container">
                        <Text>
                            {/* texto que veio do input */}
                            <p data-test="today-habit-name">Ler 1 capítulo de livro</p>
                            <>
                                <p data-test="today-habit-sequence">Sequência atual: 1 dias</p>
                                <p data-test="today-habit-record">Seu recorde: 5 dias</p>
                            </>
                        </Text>

                        <CheckButton>
                            <button data-test="today-habit-check-btn" type="submit">
                                <ImageVector src={check} />    
                            </button>
                        </CheckButton>
                    </Habit> 
                </HabitsArea>

                <Footer data-test="menu">
                    <button data-test="habit-link" onClick={() => navigate("/habitos")}>
                        Hábito
                    </button>
                    <button data-test="today-link" onClick={() => navigate("/hoje")}>
                        <ImageCircle src={circulo} alt="círculo azul" />
                        <ImageText src={hoje} alt="texto" />
                        {/* <ImageVector src={vector} alt="vetor" /> */}
                    </button> 
                    <button data-test="history-link" onClick={() => navigate("/historico")}>
                        <p>Histórico</p>
                    </button>
                </Footer>                
            </ContentBody>
        </>
    
    );
}
