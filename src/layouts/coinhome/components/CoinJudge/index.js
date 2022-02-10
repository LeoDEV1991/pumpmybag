/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// React icons
import { BsCheckCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { SiDropbox } from "react-icons/si";

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import AdobeXD from "examples/Icons/AdobeXD";

// Vision UI Dashboard theme imports
import palette from "assets/theme/base/colors";
import VuiInputIconBoxRoot from "components/VuiInput/VuiInputIconBoxRoot";
import VuiProgress from "components/VuiProgress";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";

import TextField from '@mui/material/TextField';

import { useState, useEffect } from "react";   
import axios from "axios";


function CoinCompare(props) {

    const [showJudgeValue, setShowJudgeValue] = useState(false);   
    const [isInvalid, setIsInvalid] = useState(false);   
    const [judgeValue, setJudgeValue] = useState('---');   
    useEffect(() => {
        console.log("judge components is updated");
        
    },[]);
    
    const judgeCoin = () => {
        // setIsInvalid(false);
        const date = document.getElementById('date').value;
        console.log(date);
        document.getElementById('judgeButton').setAttribute("disabled", "true");
        const URL = "https://api.coingecko.com/api/v3/coins/" + props.firstCoin + "/history?date=" + date + "&localization=false";
        axios.get(URL).then((response) => {            
            const responseOne = response.data.market_data.current_price.usd;
            const URL = "https://api.coingecko.com/api/v3/coins/" + props.secondCoin + "/history?date=" + date + "&localization=false";
            axios.get(URL).then((response) => { 
                const responseTwo = response.data.market_data.current_price.usd;                
                const currentOne = props.firstCoinPrice;
                const currentTwo = props.secondCoinPrice;
                console.log(responseOne, responseTwo, currentOne, currentTwo);
                const percentageOne = (currentOne == responseOne) ? 100 : (currentOne - responseOne) / responseOne * 100.0;
                const percentageTwo = (currentTwo == responseTwo) ? 100 : (currentTwo - responseTwo) / responseTwo * 100.0;
                console.log(percentageOne - percentageTwo);
                // document.getElementById("judgeValue").innerHTML = (percentageOne - percentageTwo).toFixed(2);
                setJudgeValue((percentageOne - percentageTwo).toFixed(2));
                setShowJudgeValue(true);
                document.getElementById('judgeButton').removeAttribute("disabled");
            }); 
        })
        .catch((error) => {
            // handle error
            console.log(error);
            setIsInvalid(true);
            document.getElementById('judgeButton').removeAttribute("disabled");
        })
        .then(() => {
        // always executed
        }); 
        // setShowJudgeValue(true);
    }
    const handleChange = () => {
        console.log("input changed");
        setIsInvalid(false);

    }

  return (          
    <VuiBox pt={10} px={3}>
        <Card style={{paddingTop:"1rem", paddingBottom:"0.5rem"}}>            
            <VuiBox display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="300px">                    
                <VuiBox mt={2} mb={2} width="100%">                    
                    <VuiInput id="date" placeholder="dd-mm-yyyy" error={isInvalid} onChange={handleChange}>
                    </VuiInput>
                </VuiBox> 
                <VuiBox width="100%" pb={2}>
                    <VuiButton id="judgeButton" variant="gradient" color="info" size="small" fullWidth onClick={judgeCoin} >
                        Judge
                    </VuiButton>
                </VuiBox>
                {showJudgeValue && <VuiBox display="flex" flexDirection="column" alignItems="center" justifyContent="center" pb={1} >                       
                    <VuiBox>                            
                        <VuiBox display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end">
                            <img
                                loading="lazy"                        
                                src={props.firstCoinImage}                                            
                                alt=""    
                                style={{width:"2rem", height:"2rem", marginRight:"1rem"}}                   
                            />
                            <h1 id="judgeValue" style={{color:"white"}}>
                                {judgeValue}
                            </h1>
                            <img
                                loading="lazy"                        
                                src={props.secondCoinImage}                                            
                                alt=""    
                                style={{width:"2rem", height:"2rem", marginLeft:"1rem"}}                   
                            />                                                   
                        </VuiBox>
                    </VuiBox>
                </VuiBox>}
            </VuiBox>
        </Card>
    </VuiBox>
   
  );
}

export default CoinCompare;
