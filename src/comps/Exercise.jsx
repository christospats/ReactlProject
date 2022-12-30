import { Container, Content } from 'rsuite';
import useFetch from '../hooks/useFetch';
import { useState, useEffect } from 'react';


function Exercise() {

    const {loading, error, data} = useFetch('https://strapi-gh2w.onrender.com/api/materials')
    const [mediumScreen, setMediumScreen] = useState(window.matchMedia("(min-width:1193px)").matches)
    const [smallScreen, setSmallScreen] = useState(window.matchMedia("(min-width:601px)").matches)

    useEffect(() => {
        window.matchMedia("(min-width: 1193px)").addEventListener('change', e => setMediumScreen(e.matches));
    })

    useEffect(() => {
        window.matchMedia("(min-width: 601px)").addEventListener('change', e => setSmallScreen(e.matches));
    })

    if (loading) return <p>Loading please wait...</p>
    if (error) return <p>Error T^T</p>

    return (
        <div>
            {mediumScreen && (
                <Container>
                    <div  style={{marginTop:'56px',background: "linear-gradient(to bottom, #166534,#16a34a)",display:'flex', flexDirection:'column', textAlign:'center', alignItems:'center',gap:'30px'}}>
                        {data.map(review => (
                            <div key={review.id} style={{backgroundColor:'#dcfce7',padding:'2%', width:'50%', borderRadius:'15px',boxShadow: "10px 5px 30px black"}}>
                                <br/>
                                <h3 style={{textAlign:'center'}}>{review.attributes.Header}</h3>
                                <br/>
                                <Content style={{textAlign:'justify'}}>{review.attributes.Content}</Content>
                                <br/>
                                <Content style={{textAlign:'right'}}>{review.attributes.date}</Content>
                            </div>
                        ))}
                    </div>
                </Container>
            )}
            {!mediumScreen && smallScreen &&(
                <Container>
                    <div  style={{marginTop:'56px',background: "linear-gradient(to bottom, #166534,#16a34a)",display:'flex', flexDirection:'column', textAlign:'center', alignItems:'center',gap:'30px'}}>
                        {data.map(review => (
                            <div key={review.id} style={{backgroundColor:'#dcfce7',padding:'2%', width:'70%', borderRadius:'15px',boxShadow: "10px 5px 30px black"}}>
                                <br/>
                                <h3 style={{textAlign:'center'}}>{review.attributes.Header}</h3>
                                <br/>
                                <Content style={{textAlign:'justify'}}>{review.attributes.Content}</Content>
                                <br/>
                                <Content style={{textAlign:'right'}}>{review.attributes.date}</Content>
                            </div>
                        ))}
                    </div>
                </Container>
            )}
            {!mediumScreen&&!smallScreen&&(
                <Container>
                    <div  style={{marginTop:'56px',background: "linear-gradient(to bottom, #166534,#16a34a)",display:'flex', flexDirection:'column', textAlign:'center', alignItems:'center',gap:'25px'}}>
                        {data.map(review => (
                            <div key={review.id} style={{backgroundColor:'#dcfce7',padding:'2%', borderRadius:'15px',boxShadow: "10px 5px 30px black"}}>
                                <br/>
                                <h3 style={{textAlign:'center'}}>{review.attributes.Header}</h3>
                                <br/>
                                <Content style={{textAlign:'justify'}}>{review.attributes.Content}</Content>
                                <br/>
                                <Content style={{textAlign:'right'}}>{review.attributes.date}</Content>
                            </div>
                        ))}
                    </div>
                </Container>
            )}
        </div>
     );
}

export default Exercise;