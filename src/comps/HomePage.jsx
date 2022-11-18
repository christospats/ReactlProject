import React from 'react';
import { Container, Content, FlexboxGrid,Carousel } from 'rsuite';
import liappis1 from '../photos/liappis1.jpg'
import liappis2 from '../photos/liappis2.jpg'
import liappis3 from '../photos/liappis3.jpg'
import liappis4 from '../photos/liappis4.jpg'
import liappis5 from '../photos/liappis5.jpg'


function HomePage({homeRef}) {
    return ( 
        <div style={{minHeight:'100vh'}} ref={homeRef}>
            <FlexboxGrid>
                <Container style={{marginTop:'56px',position:'static',width:'100%',height:'50em'}}>
                    <Carousel autoplay shape="bar" className="custom-slider" style={{position:'absolute',width:"100%", height:"100%"}}>
                        <img src={liappis1} alt="Classrooms" />
                        <img src={liappis2} alt="Classrooms" />
                        <img src={liappis3} alt="Classrooms" />
                        <img src={liappis4} alt="Classrooms" />
                        <img src={liappis5} alt="Classrooms" />
                    </Carousel>
                    <Content
                        className='content'
                        style={{backgroundColor:"white", borderRadius:'25px',zIndex:1,display:"flex",opacity:'90%', flexFlow:'column',alignSelf:'center',marginTop:'5em',position:'absolute'}}
                    >
                        <h3 style={{textAlign:'center',fontFamily:'Halvetica'}}>Το φροντιστήριό μας</h3>
                        <p style={{textAlign:'center',fontSize:'large',fontFamily:'Halvetica'}}>
                        <br/>Από το 2015 στο κέντρο του Βόλου λειτουργούμε το φιλολογικό μας φροντιστήριο μέσης<br/>
                        εκπαίδευσης. Για πάνω από 15 χρόνια εργαστήκαμε στο χώρο της ιδιωτικής εκπαίδευσης, έως την<br/>
                        ώρα που αποφασίσαμε να «αυτονομηθούμε». Στο φροντιστήριό μας διδάσκονται τα μαθήματα των<br/>
                        Αρχαίων Ελληνικών, της Ιστορίας, των Λατινικών, της Νεοελληνικής Γλώσσας και Λογοτεχνίας, στα<br/>
                        οποία και εξετάζονται στις πανελλαδικές οι υποψήφιοι του 1ου πεδίου (ανθρωπιστικών σπουδών).<br/>
                        Προσπαθήσαμε και προσπαθούμε να προσφέρουμε στους μαθητές μας ένα ζεστό, «σπιτίσιο» χώρο,<br/>
                        όπου θα μπορούν να αισθάνονται άνετα και οικεία, παραμένοντας σε αυτόν πριν και μετά το πέρας<br/>
                        των μαθημάτων τους, ώστε να διαβάζουν ή να καλύπτουν τα κενά τους. Άλλωστε, και για εμάς ο<br/>
                        χώρος αυτός αποτελεί «δεύτερο» ή και κανονικό σπίτι !<br/>
                        Θέλουμε να παρέχουμε στους μαθητές μας το καλύτερο δυνατό, επιχειρώντας να τους «πείσουμε»<br/>
                        για την αξία της μόρφωσης και της κατάρτισης, που απαραίτητα όμως χρειάζεται να συμπορεύεται<br/>
                        με το ήθος και την ανθρωπιά. Παρέχουμε σε μαθητές και γονείς έναν ηλεκτρονικό Οδηγό<br/>
                        Σταδιοδρομίας πληρέστατο, ο οποίος διαρκώς επικαιροποιείται, γιατί πιστεύουμε πολύ στη σωστή<br/>
                        στοχοθεσία. Στην εποχή της πληροφορίας επιβάλλεται κανείς να γνωρίζει, ώστε να κυνηγήσει τους<br/>
                        στόχους του με ρεαλισμό και όραμα μαζί ! Οργανώνουμε το μάθημα σε ολιγομελή και ομοιογενή<br/>
                        τμήματα, επιδιώκοντας το «δέσιμο» των μαθητών, τη συνεργασία και την αλληλοϋποστήριξη,<br/>
                        δεδομένου ότι η πορεία προς τις εξετάσεις αποβαίνει συχνά ψυχοφθόρα.<br/>
                        Δεν τρέφουμε την ψευδαίσθηση ότι θα πετύχουμε με όλους όσοι ζητούν τη βοήθειά μας, αλλά δε<br/>
                        σταματούμε να προσπαθούμε – και αυτό ζητούμε από τους μαθητές μας ...<br/>
                        </p>
                    </Content>
                </Container>
            </FlexboxGrid>
        </div>
     );
}

export default HomePage;