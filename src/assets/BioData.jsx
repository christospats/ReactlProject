import React, {useEffect,useState} from 'react';
import { Content, FlexboxGrid, Panel } from 'rsuite';
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import { Icon } from '@rsuite/icons';
import { useNavigate } from "react-router-dom";
import paperText from '../photos/paperText.png';

function BioData({profData}) {
    let navigate = useNavigate();

    const handleClick = () =>{
        if(profData.name === "Γιώργος Λιάππης"){
            navigate("/biographypageliappis");
        }
        if(profData.name === "Αμαλία Τσικρίκα"){
            navigate("/biographypageamalia")
        }
    }

    return (
        <FlexboxGrid.Item>
            <Panel shaded bodyFill style={{backgroundColor:'#dcfce7',
                                            display: 'inline-block',
                                            borderRadius:"5px",
                                            boxShadow: "15px 10px 50px #001a00",
                                            color:'black'}}>
                <img src={profData.picUrl} width="250" height="250" />
                <Panel style={{textAlign:'center'}}>
                    <p style={{fontSize:'large', fontWeight:'bold'}}>{profData.name}</p>
                    <p>
                        <small>
                            {profData.prof}
                        </small>
                    </p>
                </Panel>
                <Content style={{textAlign:"center", borderTop:'inset',height:"3em"}} onClick={handleClick}>
                    <Content style={{fontWeight:'bold',fontSize:'medium', textAlign:'center',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        Κάνε κλικ εδώ
                        <Icon as={ArrowRightLineIcon} style={{ width:"1.5em", height:'2em'}}/>
                    </Content>
                </Content>
            </Panel>
        </FlexboxGrid.Item>
     );
}

export default BioData;