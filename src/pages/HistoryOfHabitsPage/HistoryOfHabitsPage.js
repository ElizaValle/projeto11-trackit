import TrackIt from "../../assets/TrackIt.png";
import foto from "../../assets/foto.png";
import circulo from "../../assets/circulo.png";
import hoje from "../../assets/hoje.png";
import vector from "../../assets/vector.png";
import {  
    Header, Logo, Foto, ContentBody, ContentHeader, Footer, 
    ImageFooter, ImageCircle, ImageText, ImageVector
} from "./styled";
import { Link } from "react-router-dom";

export default function HistoryOfHabitsPage() {
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
