import TrackIt from "../../assets/TrackIt.png";
import foto from "../../assets/foto.png";
import circulo from "../../assets/circulo.png";
import hoje from "../../assets/hoje.png";
import vector from "../../assets/vector.png";
import {  
    Header, Logo, Foto, ContentBody, ContentHeader, Footer, 
    ImageCircle, ImageText, ImageVector
} from "./styled";
import { useNavigate } from "react-router-dom";

export default function HistoryOfHabitsPage() {
    const navigate = useNavigate();

    return (
        <>
            <Header data-test="header">
                <Logo src={TrackIt} />
                <Foto src={foto} />
            </Header>

            <ContentBody>
                <ContentHeader>
                    <p>Histórico</p>
                    <p>
                        Em breve você poderá ver o Histórico
                        dos seus hábitos aqui!
                    </p>
                </ContentHeader>


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
