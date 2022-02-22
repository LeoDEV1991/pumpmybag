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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";


import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
// import Paper from "@material-ui/core/Paper";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';


// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
import VuiInput from "components/VuiInput";
import VuiButton from "components/VuiButton";


// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

//import axios
import { useState, useEffect } from "react";
import axios from "axios";

import CoinJudge from "layouts/coinhome/components/CoinJudge";
import CoinCompare from "layouts/coinhome/components/CoinCompare";
import CoinStats from "layouts/coinhome/components/CoinStats";


function Home() { 
  // const getCoinURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=10";
  // const getCoinURL = "https://api.coingecko.com/api/v3/coins/list";
  //state
  const [coins, setCoins] = useState([]);
  const [isFirstCoinSelected, setIsFirstCoinSelected] = useState(false);
  const [isSecondCoinSelected, setIsSecondCoinSelected] = useState(false);
  const [showFirstCoinStats, setShowFirstCoinStats] = useState(false);
  const [showSecondCoinStats, setShowSecondCoinStats] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const [firstSelectedCoin, setFirstSelectedCoin] = useState(null);
  const [secondSelectedCoin, setSecondSelectedCoin] = useState(null);
 
  const { gradients } = colors;
  const { cardContent } = gradients;


  useEffect(() => {
    function sleep(milliseconds) {
      var start = new Date().getTime();
      for(let i = 0; i < 1e7; i++) {
        if((new Date().getTime() - start) > milliseconds){
          break;
        }
      }
    }
    // const coinList = [];
    let coinList = [];
    for(let i = 0; i < 2; i++)
    {
      const getCoinURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=" + (i + 1);
      axios.get(getCoinURL).then((response) => {      
        console.log('++++'+ i + '+++++'); 
        coinList = coinList.concat(response.data);  
        if(i == 1)
        {       
          console.log('+++++++++');    
          setCoins(coinList);  
          console.log(coinList);
        }      
      });  
      sleep(500);
    }  
  }, []);
  
  
  const handleChange1 = (event, value) => {
    if(value){
      setIsFirstCoinSelected(true);
      setFirstSelectedCoin(value);
      
    }
    else{
      setIsFirstCoinSelected(false); 
      setFirstSelectedCoin(null);   
      setShowFirstCoinStats(false);  
    }  
  }
  const handleChange2 = (event, value) => {
    if(value){
      setIsSecondCoinSelected(true);
      setSecondSelectedCoin(value);
      
    }
    else{
      setIsSecondCoinSelected(false);    
      setSecondSelectedCoin(null);
      setShowSecondCoinStats(false);  
    }  
  }
  const handleButtonClick = () => {
    let tempCoin = firstSelectedCoin;
    setFirstSelectedCoin(secondSelectedCoin);
    setSecondSelectedCoin(tempCoin);
    
  }
  const handleClose = () => {
    setShowHelp(false);    
  }
  return (     
    <VuiBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
      <DashboardNavbar  changeState={setShowHelp}/>
      <VuiBox  display="flex" flexDirection="column" alignItems="center" height="100%">      
        {(showFirstCoinStats || showSecondCoinStats) &&        
          <VuiBox  position="absolute" borderRadius="0.5rem" bgColor='#0f0540' shadow="lg" maxWidth="720px" maxHeight="650px" width="90%" height="90%" zIndex={2} border="solid" overflowX="hidden">
            <CoinStats
              coin = {showFirstCoinStats? firstSelectedCoin: secondSelectedCoin}            
            >            
            </CoinStats>
          </VuiBox>          
        }

        {showHelp &&
          <VuiBox  position="absolute" borderRadius="0.5rem" bgColor='#0f0540' shadow="lg" maxWidth="690px" maxHeight="520px" width="90%" height="90%" zIndex={2} border="solid" overflowX="hidden">
            <VuiBox  display="flex" justifyContent="center" px={6} py={10} height="85%">
              <p style={{color:'white'}}>
              Pumpy my bag is a crypto tool which helps traders identify whether moving their bags from one coin to another gonna help them gain more pump potential
              </p>
            </VuiBox>
            <VuiBox  display="flex" justifyContent="center">
              <VuiBox >
                <VuiButton variant="gradient" color="info" size="small" fullWidth onClick={handleClose} >
                    I got it
                </VuiButton>
              </VuiBox>
            </VuiBox>
          </VuiBox>
        }

        <VuiBox>
          <h2 style={{textAlign:"center", color:"white"}}>
            Pump My Bag
          </h2>
        </VuiBox>
        <VuiBox display="flex" flexDirection="row" justifyContent="center" mt={5} alignItems="flex-end">

          <Grid container spacing={0}>
            <Grid item xs={12} md={4} xl={5}>
              <VuiBox display="flex" flexDirection="column" alignItems="center">
                <h1 style={{textAlign:"center", fontSize:25, color:"white"}}>
                  Dump it              
                </h1>
                <VuiBox/>
                <VuiBox>
                  <Autocomplete
                    disablePortal
                    id="firstCoin"
                    value={firstSelectedCoin}
                    options={coins}
                    sx={{ width: 300 }}
                    autoHighlight
                    loading="true"
                    loadingText="Loading"
                    clearText=""
                    closeText=""
                    openText=""   
                    onChange={handleChange1}  
                    getOptionLabel={option => 
                      ' ' + option.name + '(' + option.symbol.toUpperCase() + ')' + '  $' + option.current_price
                    }
                  
                    renderOption={(props, option) => (
                      <VuiBox component="li" 
                        sx={{ '& > img': { mr: 1, ml:1, flexShrink: 0 } }} 
                        display="flex"
                        flexDirection="row"
                        width="100%"
                        {...props}>
                        <p style={{fontSize:10}}> 
                          #{option.market_cap_rank}
                        </p>
                        <img
                          loading="lazy"
                          width="20"                     
                          src={option.image}                                            
                          alt=""
                        />
                        <VuiBox display="flex" flexDirection="row" width="100%" justifyContent="space-between">
                          <VuiBox>{option.name}</VuiBox>
                          <VuiBox textAlign="right">{option.symbol.toUpperCase()}</VuiBox>
                        </VuiBox>
                      </VuiBox>                 
                    )}
                    renderInput={(params) => {                   
                      return(                
                        <TextField 
                          {...params}                     
                          placeholder="e.g.Ethereum"  
                          inputProps={{
                          ...params.inputProps,
                          autoComplete: 'new-password', // disable autocomplete and autofill
                          }}  
                        />);
                    }}
                  />
                </VuiBox>
              </VuiBox>
            </Grid>
            <Grid item xs={12} md={4} xl={2} position="relative">
              <VuiBox display="flex" justifyContent="center" height="40px" px={1.5} >
                <VuiButton variant="text" sx={{position:"absolute", bottom:0}} onClick={handleButtonClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width:"1.5em", color:"white"}}>
                    <path fill="currentColor" d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z">
                    </path>
                  </svg>
                </VuiButton>
              </VuiBox> 
            </Grid>

            <Grid item xs={12} md={4} xl={5}>
              <VuiBox display="flex" flexDirection="column" alignItems="center">
                <h1 style={{textAlign:"center", fontSize:25, color:"white"}}>
                  Pump it
                </h1>
                <VuiBox ml={0} px={0}>
                  <Autocomplete
                    disablePortal
                    id="secondCoin"
                    value={secondSelectedCoin}
                    options={coins}
                    sx={{ width: 300, }}
                    autoHighlight
                    //fullWidth
                    loading="true"
                    loadingText="Loading"
                    clearText=""
                    closeText=""
                    openText=""    
                    onChange={handleChange2} 
                    getOptionLabel={option => 
                      ' ' + option.name + '(' + option.symbol.toUpperCase() + ')' + '  $' + option.current_price
                    }
                    // PaperComponent={({ children }) => (
                    //   <Paper style={{ background: "yellow"}}>{children}</Paper>
                    // )}               
                    renderOption={(props, option) => (
                      <VuiBox component="li" 
                        sx={{ '& > img': { mr: 1, ml:1, flexShrink: 0 } }} 
                        display="flex"
                        flexDirection="row"
                        width="100%"
                        {...props}>
                        <p style={{fontSize:10}}> 
                          #{option.market_cap_rank}
                        </p>
                        <img
                          loading="lazy"
                          width="20"                     
                          src={option.image}                                            
                          alt=""
                        />
                        <VuiBox 
                          display="flex"
                          flexDirection="row"
                          width="100%"                      
                          justifyContent="space-between">
                          <VuiBox>{option.name}</VuiBox>
                          <VuiBox textAlign="right">{option.symbol.toUpperCase()}</VuiBox>
                        </VuiBox>
                      </VuiBox>                 
                    )}
                    renderInput={(params) => { 
                      return(                
                        <TextField 
                          {...params}                        
                          placeholder="e.g.Bitcoin"  
                          inputProps={{
                          ...params.inputProps,
                          autoComplete: 'new-password', // disable autocomplete and autofill                    
                          }}  
                        />);
                    }}
                  />
                </VuiBox>
              </VuiBox>
            </Grid>
          </Grid>
        </VuiBox>

        <VuiBox>
          {isFirstCoinSelected && isSecondCoinSelected &&
            // <CoinCompare 
            //   coinPrice={firstSelectedCoin.current_price} 
            //   firstCoinImage={firstSelectedCoin.image}
            //   secondCoinImage={secondSelectedCoin.image}
            //   // title={firstSelectedCoin.symbol.toUpperCase() + " with the market cap of " + secondSelectedCoin.symbol.toUpperCase()}
            //   firstCoin={firstSelectedCoin.symbol.toUpperCase()}
            //   secondCoin={secondSelectedCoin.symbol.toUpperCase()}
            //   firstCoinMarketCap={firstSelectedCoin.market_cap}
            //   secondCoinMarketCap={secondSelectedCoin.market_cap}
            //   percent={(secondSelectedCoin.market_cap / firstSelectedCoin.market_cap).toFixed(2)}
            // >
            // </CoinCompare>
            <CoinJudge
              firstCoinImage={firstSelectedCoin.image}
              secondCoinImage={secondSelectedCoin.image}
              firstCoin={firstSelectedCoin.id}
              secondCoin={secondSelectedCoin.id}
              firstCoinPrice={firstSelectedCoin.current_price}
              secondCoinPrice={secondSelectedCoin.current_price}
            >

            </CoinJudge>
          }
        </VuiBox>
      </VuiBox>   
      <Footer />
    </VuiBox>
    
  );
}


export default Home;
