import TrackIt from "../../assets/TrackIt.png";
import foto from "../../assets/foto.png";
import circulo from "../../assets/circulo.png";
import hoje from "../../assets/hoje.png";
import vector from "../../assets/vector.png";
import lixeira from "../../assets/lixeira.png";
import {  
    Header, Logo, Foto, ContentBody, ContentHeader, Footer, 
    Text, ImageFooter, ImageCircle, ImageText, ImageVector, 
    HabitsArea, FormContainer, ButtonsArea, CancelAndSave, 
    Habit, TrashButton, TrashImage, TextAndButtons
} from "./styled";
import { Link } from "react-router-dom";

export default function HabitsPage() {
    return (
        <>
            <Header data-test="header">
                <Logo src={TrackIt} />
                <Foto src={foto} />
            </Header>

            <ContentBody>
                <ContentHeader>
                    <p>Meus hábitos</p>
                    <button data-test="habit-create-btn" type="subimit">+</button>
                </ContentHeader>

                {/* Formulário vazio */}
                {/* <HabitsArea data-test="habit-create-container">
                    <FormContainer>
                        <label htmlFor="habit"></label>
                        <input data-test="habit-name-input" id="habit" name="habit" type="text" placeholder="nome do hábito" required />

                        <ButtonsArea>
                            <button data-test="habit-day" type="submit">D</button>
                            <button data-test="habit-day" type="submit">S</button>
                            <button data-test="habit-day" type="submit">T</button>
                            <button data-test="habit-day" type="submit">Q</button>
                            <button data-test="habit-day" type="submit">Q</button>
                            <button data-test="habit-day" type="submit">S</button>
                            <button data-test="habit-day" type="submit">S</button>
                        </ButtonsArea>

                        <CancelAndSave>
                            <button data-test="habit-create-cancel-btn" type="submit">Cancelar</button>       ===> tem que ser um botão
                            <button data-test="habit-create-save-btn" type="submit">Salvar</button>
                        </CancelAndSave>
                    </FormContainer> 
                </HabitsArea> */}


                <HabitsArea>
                    <Habit data-test="habit-container">
                        <TextAndButtons>
                            {/* texto que veio do input */}
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
                            {/* texto que veio do input */}
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
                            {/* texto que veio do input */}
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


               {/*  <Text>
                    <p>
                        Você não tem nenhum hábito
                        cadastrado ainda. Adicione um hábito
                        para começar a trackear!
                    </p>
                </Text> */}

                <Footer data-test="menu">
                    <Link data-test="habit-link">
                        <p>Hábitos</p>
                    </Link>
                    <ImageFooter data-test="today-link">
                        <ImageCircle src={circulo} alt="círculo azul" />
                        <ImageText src={hoje} alt="texto" />
                        <ImageVector src={vector} alt="vetor" />
                    </ImageFooter> 
                    <Link data-tes="history-link">
                        <p>Histórico</p>
                    </Link>
                </Footer>                
            </ContentBody>
        </>
    
    );
}

