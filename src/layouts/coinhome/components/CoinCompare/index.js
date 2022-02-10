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

import TextField from '@mui/material/TextField';

function CoinCompare(props) {
    // const coinPrice = 0.0;
    // const percent = 34.57;
  return (
    <VuiBox display="flex" justifyContent="center">
        <VuiBox pt={10} px={3}>
            <Card style={{paddingTop:"1rem", paddingBottom:"0.5rem"}}>            
            <VuiBox display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <p style={{fontSize:"1rem"}}>
                    {props.firstCoin + " with the market cap of " + props.secondCoin}
                </p>
                <VuiBox display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <img
                        loading="lazy"                        
                        src={props.firstCoinImage}                                            
                        alt=""    
                        style={{width:"2.25rem", height:"2.25rem", marginRight:"0.2rem", marginLeft:"0.2rem"}}                   
                    />
                    <h1 style={{fontSize:"2.25rem"}}>
                        {"$"+props.coinPrice}
                    </h1>                    
                    <span style={{fontSize:"1.5rem", color:"green"}}>
                        ({props.percent}
                        <span style={{fontWeight:700, color:"green"}}>
                        {'\u00D7'}
                        </span>
                        )
                    </span>
                </VuiBox>
                {
                    <VuiBox display="flex" position="relative"  px={1.5}>
                        <svg xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 440 512" style={{width:"0.875em", fontSize:"1.5rem", color:"white"}} >
                            {/* <path className="polymorph" d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z">
                            </path> */}
                            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
                            </path>                    
                        </svg>
                    </VuiBox>
                }
                {
                    <VuiBox display="flex" position="absolute" right="0.5rem">
                        <svg xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 440 512" style={{width:"0.875em", fontSize:"1.5rem", color:"white"}} >
                            {/* <path className="polymorph" d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z">
                            </path> */}
                            <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                            </path>                  
                        </svg>
                    </VuiBox>
                }

                <VuiBox display="flex" flexDirection="column" alignItems="center" justifyContent="center" pb={1}>
                    <h2 style={{fontSize:"0.95rem"}}>
                        Market cap
                    </h2>
                    <VuiBox>
                        <VuiBox display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end">
                            <img
                                loading="lazy"                        
                                src={props.firstCoinImage}                                            
                                alt=""    
                                style={{width:"1.05rem", height:"1.05rem", marginRight:"0.2rem", marginLeft:"0.2rem"}}                   
                            />
                            <h2 style={{fontSize:"1.05rem"}}>
                                $
                            </h2>
                            <h2 style={{fontSize:"1.05rem"}}>
                                {props.firstCoinMarketCap}
                            </h2>                        
                        </VuiBox>
                        <VuiBox display="flex" flexDirection="row" alignItems="center" justifyContent="flex-end">
                            <img
                                loading="lazy"                        
                                src={props.secondCoinImage}                                            
                                alt=""    
                                style={{width:"1.05rem", height:"1.05rem", marginRight:"0.2rem", marginLeft:"0.2rem"}}                   
                            />
                            <h2 style={{fontSize:"1.05rem"}}>
                                $
                            </h2>
                            <h2 style={{fontSize:"1.05rem"}}>
                                {props.secondCoinMarketCap}
                            </h2>                        
                        </VuiBox>
                    </VuiBox>
                </VuiBox>

                <VuiBox width="100%" height={45} mb={2} px={2}>                   
                            <VuiProgress value={((100 / props.percent) > 100) ? 100 : (100 / props.percent).toFixed(2)} color="info" sx={{ background: "#2D2E5F" }} label/>
                </VuiBox>  
                <VuiBox mb={2} px={2}>
                    <VuiBox
                        color="white"
                        bgColor="info"
                        variant="gradient"
                        borderRadius="md"
                        shadow="lg"
                        opacity={1}
                        // p={2}  
                        display="flex" flexDirection="row" alignItems="center" justifyContent="center" 
                    >
                        <p style={{paddingLeft:"0.3rem", paddingRight:"0.3rem"}}> Amount</p>                                          
                        <input style={{height:"30px"}}/>                        
                        <p style={{paddingLeft:"0.3rem", paddingRight:"0.3rem"}}> ETH</p>
                    </VuiBox>
                </VuiBox>              
                <p style={{fontSize:"0.7rem", position:"absolute", right:"1rem", bottom:"0.25rem"}}>
                    marketcapof.com
                </p>               
            </VuiBox>
            </Card>
        </VuiBox>
    </VuiBox>
  );
}

export default CoinCompare;
