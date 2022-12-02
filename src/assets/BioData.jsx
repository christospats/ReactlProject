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
        if(profData.name === "Αμαλία Τσικρικα"){
            navigate("/biographypageamalia")
        }
    }

    return (
        <FlexboxGrid.Item>
            <Panel shaded bodyFill style={{backgroundColor:'#183a1d',
                                            display: 'inline-block',
                                            borderRadius:"5px",
                                            boxShadow: "15px 10px 50px #001a00",
                                            color:'#d9d9d9',
                                            border:'solid'}}>
                <img src={profData.picUrl} width="250" height="250" />
                <Panel style={{textAlign:'center'}}>
                    <p style={{fontSize:'large', fontWeight:'bold'}}>{profData.name}</p>
                    <p>
                        <small>
                            {profData.prof}
                        </small>
                    </p>
                </Panel>
                <Content style={{textAlign:"center", borderTop:'inset'}} onClick={handleClick}>
                    <Icon as={ArrowRightLineIcon} style={{height:"3em", width:"3em"}}/>
                </Content>
            </Panel>
        </FlexboxGrid.Item>
     );
}

export default BioData;