import TrackIt from "../../assets/TrackIt.png";
import foto from "../../assets/foto.png";
import circulo from "../../assets/circulo.png";
import hoje from "../../assets/hoje.png";
//import vector from "../../assets/vector.png";
import check from "../../assets/check.png";
import {  
    Header, Logo, Foto, ContentBody, ContentHeader, Footer, 
    Text, ImageFooter, ImageCircle, ImageText,
    ImageVector, HabitsArea, CheckButton, Habit
} from "./styled";
import { Link } from "react-router-dom";

export default function HabitTodayPage() {
    return (
        <>
            <Header data-test="header">
                <Logo src={TrackIt} />
                <Foto src={foto} />
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
                    <Link data-test="habit-link">
                        <p>Hábitos</p>
                    </Link>
                    <ImageFooter data-test="today-link">
                        <ImageCircle src={circulo} alt="círculo azul" />
                        <ImageText src={hoje} alt="texto" />
                        {/* <ImageVector src={vector} alt="vetor" /> */}
                    </ImageFooter> 
                    <Link data-tes="history-link">
                        <p>Histórico</p>
                    </Link>
                </Footer>                
            </ContentBody>
        </>
    
    );
}
