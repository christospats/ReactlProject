import { Container, Content } from 'rsuite';
import useFetch from '../hooks/useFetch';


function Exercise() {

    const {loading, error, data} = useFetch('https://strapi-gh2w.onrender.com/api/materials')

    if (loading) return <p>Loading please wait...</p>
    if (error) return <p>Error T^T</p>

    return (
        <Container>
            <div  style={{marginTop:'56px'}}>
                {data.map(review => (
                    <div key={review.id}>
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
     );
}

export default Exercise;