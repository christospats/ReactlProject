import schData from "../assets/schData";
import InfoPage from "../pages/InfoPage"

function Info({infoRef}) {
    return ( 
        <div ref={infoRef}>
            {schData.map((schData) => (
                <InfoPage schData={schData} key={schData.title} />
            ))}
        </div>
     );
}

export default Info;