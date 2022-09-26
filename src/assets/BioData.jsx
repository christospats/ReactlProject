import React from 'react';
import { Content, FlexboxGrid, Panel } from 'rsuite';
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import { Icon } from '@rsuite/icons';

function BioData({profData}) {
    const handleClick = () =>{
        if(profData.name === "Γιώργος Λιάππης"){
            window.location.replace("/")
        }
        if(profData.name === "Αμαλία Τσικρικα"){
            window.location.replace("https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax")
        }
    }
    return (
        <FlexboxGrid.Item>
            <Panel shaded bordered bodyFill style={{ display: 'inline-block', backgroundColor:"white",borderRadius:"10px" }}>
                <img src={profData.picUrl} width="240" height="240" />
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