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
    const [isInvalid1, setIsInvalid1] = useState(false);   
    const [judgeValue, setJudgeValue] = useState('---');   
    const [inputDate, setInputDate] = useState("");   
    const [currentDate, setCurrentDate] = useState("");   
    useEffect(() => {
        console.log("judge components is created");  
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = dd + '-' + mm + '-' + yyyy;
        setCurrentDate(today);
    },[]);
    
    const judgeCoin = () => {        
        document.getElementById('judgeButton').setAttribute("disabled", "true");
        let URL = "https://api.coingecko.com/api/v3/coins/" + props.firstCoin + "/history?date=" + inputDate + "&localization=false";
        axios.get(URL).then((response) => {            
            const responseOne = response.data.market_data.current_price.usd;
            URL = "https://api.coingecko.com/api/v3/coins/" + props.secondCoin + "/history?date=" + inputDate + "&localization=false";
            axios.get(URL).then((response) => { 
                const responseTwo = response.data.market_data.current_price.usd;   
                //judge if second date is today or not
                let today = new Date();
                let dd = String(today.getDate()).padStart(2, '0');
                let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                let yyyy = today.getFullYear();
                today = dd + '-' + mm + '-' + yyyy;                  
                if(currentDate == today) //if today
                {
                    console.log("======>>>>>>====== current day is today=====")
                    const currentOne = props.firstCoinPrice;
                    const currentTwo = props.secondCoinPrice;
                    // console.log(responseOne, responseTwo, currentOne, currentTwo);
                    let percentageOne = 0;
                    if(responseOne)
                    {
                        percentageOne = (currentOne == responseOne) ? 100 : (currentOne - responseOne) / responseOne * 100.0;
                    }
                    let percentageTwo = 0;
                    if(responseTwo)
                    {
                        percentageTwo = (currentTwo == responseTwo) ? 100 : (currentTwo - responseTwo) / responseTwo * 100.0;
                    }
                    console.log(percentageOne - percentageTwo);
                    // document.getElementById("judgeValue").innerHTML = (percentageOne - percentageTwo).toFixed(2);
                    setJudgeValue(((percentageOne - percentageTwo)/1000).toFixed(6));
                    setShowJudgeValue(true);
                    document.getElementById('judgeButton').removeAttribute("disabled");
                }
                else
                {
                    URL = "https://api.coingecko.com/api/v3/coins/" + props.firstCoin + "/history?date=" + currentDate + "&localization=false";
                    axios.get(URL).then((response) => { 
                        const currentOne = response.data.market_data.current_price.usd;
                        URL = "https://api.coingecko.com/api/v3/coins/" + props.secondCoin + "/history?date=" + currentDate + "&localization=false";
                        axios.get(URL).then((response) => { 
                            const currentTwo = response.data.market_data.current_price.usd;
                            // console.log(responseOne, responseTwo, currentOne, currentTwo);
                            let percentageOne = 0;
                            if(responseOne)
                            {
                                percentageOne = (currentOne == responseOne) ? 100 : (currentOne - responseOne) / responseOne * 100.0;
                            }
                            let percentageTwo = 0;
                            if(responseTwo)
                            {
                                percentageTwo = (currentTwo == responseTwo) ? 100 : (currentTwo - responseTwo) / responseTwo * 100.0;
                            }
                            console.log(percentageOne - percentageTwo);
                            // document.getElementById("judgeValue").innerHTML = (percentageOne - percentageTwo).toFixed(2);
                            setJudgeValue(((percentageOne - percentageTwo)/1000).toFixed(6));
                            setShowJudgeValue(true);
                            document.getElementById('judgeButton').removeAttribute("disabled");
                        }) 
                    })
                    .catch((error) => {
                        // handle error
                        console.log(error);
                        setIsInvalid1(true);
                        document.getElementById('judgeButton').removeAttribute("disabled");
                    })
                    .then(() => {
                    // always executed
                    }); 
                }
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
    }
    const handleChange = (e) => {
        setIsInvalid(false);
    }
    const handleChange1 = (e) => {
        setIsInvalid1(false);
    }
    const handleInput = (e) => {
        console.log("onInput executed");
        console.log(e.target.value);                       
        let value = e.target.value;
        if(value.length >= 11)
        {
            return;
        }
        let newValue = value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
        const dayOrMonth = (index) => index % 2 === 1 && index < 4;
        // on delete key.  
        if (!e.nativeEvent.data) {
            setInputDate(value);
            return ;
        }
        setInputDate(newValue.split('').map((v, i) => dayOrMonth(i) ? v + '-' : v).join(''));
    }
    const handleInput1 = (e) => {
        let value = e.target.value;
        if(value.length >= 11)
        {
            return;
        }
        let newValue = value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
        const dayOrMonth = (index) => index % 2 === 1 && index < 4;
        // on delete key.  
        if (!e.nativeEvent.data) {
            setCurrentDate(value);
            return ;
        }
        setCurrentDate(newValue.split('').map((v, i) => dayOrMonth(i) ? v + '-' : v).join(''));
    }

  return (          
    <VuiBox pt={10} pb={10} px={3}>
        <Card > 
            <Grid container spacing={0}>
                <Grid item display="flex" justifyContent="center" xs={12} md={6} xl={6}>   
                    <VuiBox  py={1} px={1} width="300px">                    
                        <VuiInput 
                            id="date" 
                            type="text" 
                            value={inputDate} 
                            placeholder="dd-mm-yyyy" 
                            error={isInvalid} 
                            onInput={handleInput} 
                            onChange={handleChange}
                            inputProps={{style:{textAlign:"center"}}}
                        >
                        </VuiInput>
                    </VuiBox> 
                </Grid>  
                <Grid item display="flex" justifyContent="center" xs={12} md={6} xl={6}> 
                    <VuiBox  py={1} px={1} width="300px">                    
                        <VuiInput 
                            id="currentDate" 
                            type="tel" 
                            value={currentDate} 
                            placeholder={currentDate} 
                            error={isInvalid1} 
                            onInput={handleInput1}
                            onChange={handleChange1}
                            inputProps={{style:{textAlign:"center"}}}
                        >
                        </VuiInput>
                    </VuiBox> 
                </Grid> 
            </Grid>           
            <Grid pt={3} container spacing={0}>
                <Grid item display="flex" justifyContent="center" xs={2} md={2} xl={3}>   
                    {showJudgeValue && 
                            <VuiBox display="flex" justifyContent="center" alignItems="center" width="30%">
                                <img
                                    loading="lazy"                        
                                    src={props.firstCoinImage}                                            
                                    alt=""    
                                    style={{width:"3rem", height:"3rem", marginRight:"1rem"}}                   
                                />
                            </VuiBox>
                    }  
                </Grid>
                <Grid item display="flex" justifyContent="center" xs={8} md={8} xl={6}>       
                    <VuiBox display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" pb={2}>
                        <VuiButton id="judgeButton" variant="gradient" color="info" size="small"  fullWidth sx={{maxWidth:"280px"}} onClick={judgeCoin} >
                            Please pump my bags!
                        </VuiButton>
                        {showJudgeValue && 
                            <h3 id="judgeValue" style={{color:"white", marginTop:"1rem"}}>
                                {judgeValue + ' ' }pumps
                            </h3>
                        }
                    </VuiBox>
                </Grid>
                <Grid item display="flex" justifyContent="center" xs={2} md={2} xl={3}>      
                    {showJudgeValue && 
                        <VuiBox display="flex" justifyContent="center" alignItems="center" width="30%">
                            <img
                                loading="lazy"                        
                                src={props.secondCoinImage}                                            
                                alt=""    
                                style={{width:"3rem", height:"3rem", marginLeft:"1rem"}}                   
                            />    
                        </VuiBox>
                    }
                </Grid>
            </Grid>    
        </Card>
    </VuiBox>   
  );
}

export default CoinCompare;
