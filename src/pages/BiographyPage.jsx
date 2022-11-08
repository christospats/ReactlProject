import React, { useEffect, useState } from 'react';
import profData from '../assets/profData';
import BioInfoPage from "../assets/BioInfoPage";

function BiographyPage() {
    const [profName, setProfName] = useState("");
    const [correctProf, setCorrectProf] = useState([]);

    useEffect(() => {
        if(window.location.pathname === "/biographypageliappis"){
            setProfName("Γιώργος Λιάππης")
        }
        if(window.location.pathname === "/biographypageamalia"){
            setProfName("Αμαλία Τσικρικα")
        }
    },[profName])

    useEffect(() => {
        const correctProf = getCorrectProfByName(profName);
        setCorrectProf(correctProf);
    },[profName])

    const getCorrectProfByName = (profName) => 
        profData.filter((data) => data.name === profName);

    return ( 
        <>
            {correctProf.map((correctProf) => (
                <BioInfoPage correctProf={correctProf} key={correctProf.name} />
            ))}
        </>
    );
}

export default BiographyPage;