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
            <Panel shaded bordered bodyFill style={{ display: 'inline-block',backgroundImage: `url(${paperText})`, paddingBlock: "11%" , borderRadius:"5px", boxShadow: "15px 10px 50px #001a00"}}>
                <img src={profData.picUrl} width="250" height="200" />
                <Panel header={profData.name} style={{textAlign:'center'}}>
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