import { useState } from "react";

export default function DaysButton({ selectDay, setSelectDay,  }) {
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const [domingoSelecionado, setDomingoSelecionado] = useState(false);
    const [segundaSelecionada, setSegundaSelecionada] = useState(false);
    const [tercaSelecionada, setTercaSelecionada] = useState(false);
    const [quartaSelecionada, setQuartaSelecionada] = useState(false);
    const [quintaSelecionada, setQuintaSelecionada] = useState(false);
    const [sextaSelecionada, setSextaSelecionada] = useState(false);
    const [sabadoSelecionado, setSabadoSelecionado] = useState(false);

    const selecionarDia = (index) => {
        switch(index) {
            case 0:
                setDomingoSelecionado(!domingoSelecionado);
                break;
            case 1:
                setSegundaSelecionada(!segundaSelecionada);
                break;
            case 2: 
                setTercaSelecionada(!tercaSelecionada);
                break;
            case 3:
                setQuartaSelecionada(!quartaSelecionada);
                break;
            case 4:
                setQuintaSelecionada(!quintaSelecionada);
                break;
            case 5:
                setSextaSelecionada(!sextaSelecionada);
                break;
            case 6:
                setSabadoSelecionado(!sabadoSelecionado);
                break;
            default:
                break;
        }
    }

    const estiloBotao = (diaSelecionado) => {
        return diaSelecionado ? { backgroundColor: "#CFCFCF", color: "#FFFFFF" } : { backgroundColor: "#FFFFFF" }
    }

    function handleDaySelected(event) {
        const selectDay = event.target.value; 
        setSelectDay(selectDay);
    }
 
    return (
        <>
            {days.map((day, index) => (
                <button
                    key={index}
                    className={ selectDay === index ? estiloBotao(day) : "" }
                    onClick={() => {
                        handleDaySelected(index);
                        selecionarDia(index);
                    }}
                >
                    {day}
                </button>
            ))}
        </>

    );
}





/* <>
            <button 
                data-test="habit-day" 
                type="button" 
                onClick={selecionarDomingo} 
                style={estiloBotao(domingoSelecionado)}
            >
                D
            </button>
            <button 
                data-test="habit-day" 
                type="button" 
                onClick={selecionarSegunda}
                style={estiloBotao(segundaSelecionada)}
            >
                S
            </button>
            <button 
                data-test="habit-day" 
                type="button" 
                onClick={selecionarTerca}
                style={estiloBotao(tercaSelecionada)}
            >
                T
            </button>
            <button 
                data-test="habit-day" 
                type="button" 
                onClick={selecionarQuarta}
                style={estiloBotao(quartaSelecionada)}
            >
                Q
            </button>
            <button 
                data-test="habit-day" 
                type="button" 
                onClick={selecionarQuinta}
                style={estiloBotao(quintaSelecionada)}
            >
                Q
            </button>
            <button 
                data-test="habit-day" 
                type="button" 
                onClick={selecionarSexta}
                style={estiloBotao(sextaSelecionada)}
            >
                S
            </button>
            <button 
                data-test="habit-day" 
                type="button" 
                onClick={selecionarSabado}
                style={estiloBotao(sabadoSelecionado)}
            >
                S
            </button>
        </> */