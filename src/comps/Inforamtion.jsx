import schData from "../assets/schData";
import InfoPage from "../pages/InfoPage"

function Info({infoRef}) {
    return ( 
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor:'#fefbe9'}}ref={infoRef}>
            {schData.map((schData) => (
                <InfoPage schData={schData} key={schData.title} />
            ))}
        </div>
     );
}

export default Info;