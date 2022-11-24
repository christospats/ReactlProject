import {Content} from 'rsuite'

function InfoPage({schData}) {
    return ( 
        <div style={{marginTop:'4em',
                    border:'solid',
                    borderRadius:"10px",
                    padding:'2em',
                    boxShadow: "10px 5px 30px black",
                    backgroundColor:"#e1eedd"}}>
            <h3 style={{textAlign:'center'}}>{schData.title}</h3>
            <Content>{schData.content}</Content>
        </div>
    );
}

export default InfoPage;