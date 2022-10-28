import React from 'react';
import { Container, Content, FlexboxGrid,Carousel } from 'rsuite';


function HomePage({homeRef}) {
    return ( 
        <div style={{minHeight:'100vh'}} ref={homeRef}>
            <FlexboxGrid>
                <Container style={{marginTop:'56px',position:'static',width:'100%',height:'100vh'}}>
                    <Carousel autoplay shape="bar" className="custom-slider" style={{position:'absolute',width:"100%", height:"100%"}}>
                        <img src='https://scontent.fskg1-1.fna.fbcdn.net/v/t31.18172-8/10258762_1391223734496916_2223556813288643439_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=19026a&_nc_ohc=eUL7ZpDLINYAX-PWFq9&tn=lGs49qPfaD2b0l28&_nc_ht=scontent.fskg1-1.fna&oh=00_AT_3vhCNrMU4OEdgCaQf2YEpHbmqHPi4CgwKz2o15SMMKA&oe=63582A98'alt="Classrooms" />
                        <img src='https://scontent.fskg1-2.fna.fbcdn.net/v/t31.18172-8/1973621_1391159501170006_7742655064997543171_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=B85YqIFLKiMAX8QcdsL&_nc_ht=scontent.fskg1-2.fna&oh=00_AT-iV539uvEcHG3yvDpawLxDmrw-dP5nw5RvJuEY9a9-wA&oe=6357B080' alt="Classrooms" />
                        <img src='https://scontent.fskg1-2.fna.fbcdn.net/v/t31.18172-8/10275455_1391154691170487_6968689000093356810_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=96SvL5MNHXUAX_Y5eMO&_nc_ht=scontent.fskg1-2.fna&oh=00_AT-z8b8n7JJJTzZxD02ioIUiEEu9-pxI01-Jq8MAT1TgJg&oe=6358E155' alt="Classrooms" />
                        <img src='https://scontent.fskg1-2.fna.fbcdn.net/v/t31.18172-8/860497_1391153864503903_4262795778155531845_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=UgimJyHiHmIAX_YioSg&_nc_ht=scontent.fskg1-2.fna&oh=00_AT9t0IldVO7U5wcLFSFgiZOHqO4YedWh1g2-hNqHboN5Ng&oe=635854DD' alt="Classrooms" />
                        <img src='https://scontent.fskg1-1.fna.fbcdn.net/v/t31.18172-8/10273179_1391152001170756_6868724052445308393_o.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=UdsFPzk2JwgAX95KUsn&_nc_ht=scontent.fskg1-1.fna&oh=00_AT_bAJWTBJ4dQ5yHgwOGEQRY8g5wZlDzAMVCZ_b_z5dg4g&oe=6356A788' alt="Classrooms" />
                    </Carousel>
                    <Content 
                        className='content'
                        style={{backgroundColor:"white", borderRadius:'25px',zIndex:1,display:"flex",opacity:'90%', flexFlow:'column',alignSelf:'center',marginTop:'145px',position:'absolute'}}
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