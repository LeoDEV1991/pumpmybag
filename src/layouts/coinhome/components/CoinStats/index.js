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
import LineChart from "examples/Charts/LineCharts/LineChart";
import ReactApexChart from "react-apexcharts";

function CoinStats(props) {  
    const [lineChartData, setLineChartData] = useState([]);    
    // const [lineChartOptions, setLineChartOptions] = useState(null);   

    useEffect(() => {
        const marketChartURL = "https://api.coingecko.com/api/v3/coins/" + props.coin.id + "/market_chart?vs_currency=USD&days=1"
        axios.get(marketChartURL).then((response) => {            
            console.log(response.data.prices);
            const lineChartData1 = [       
                {
                  name: "price",
                  data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550,],
                },
              ]; 
            setLineChartData(lineChartData1);            
            // console.log(lineChartData);
        }); 
    }, []);
    // const lineChartData1 = [       
    //     {
    //       name: "price",
    //       data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550,],
    //     },
    //   ]; 
    // const handleClick = () => {        
    //     console.log(lineChartData);
    //     setLineChartData(lineChartData1);
    // }
    
    // const lineChartData = [       
    //     {
    //       name: "price",
    //     //   data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550,],
    //       data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550,],
    //     },
    //   ];       
    
    const lineChartOptions = {
        chart: {
        toolbar: {
            show: false,
        },
        },
        tooltip: {
        theme: "dark",
        },
        dataLabels: {
        enabled: false,
        },
        stroke: {
        // curve: "smooth",
        curve: "straight",
        width: 2
        },
        xaxis: {
        type: "datetime",
        // categories: [
        //     "Jan",
        //     "Feb",
        //     "Mar",
        //     "Apr",
        //     "May",
        //     "Jun",
        //     "Jul",
        //     "Aug",
        //     "Sep",
        //     "Oct",
        //     "Nov",
        //     "Dec",
        // ],
        labels: {
            style: {
            colors: "#c8cfca",
            fontSize: "10px",
            },
            
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    
        tooltip:{
            enabled:false 
        }
        
        },
        yaxis: {
        labels: {
            style: {
            colors: "#c8cfca",
            fontSize: "10px",
            },
        },
        },
        legend: {
        show: false,
        },
        grid: {
        strokeDashArray: 5,
        borderColor: "#56577A",
        },
        fill: {
        type: "gradient",
        gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: [],
        },
        colors: ["#0075FF", "#2CD9FF"],
        },
        colors: ["#0075FF", "#2CD9FF"],
    };
  
  return (
    <VuiBox  >
        <VuiBox display="flex" flexDirection="row" alignItems="center" px={2} py={2}>            
            <img
                loading="lazy"
                width="30"                     
                src={props.coin.image}                                            
                alt=""
            />             
            <h4>
               {props.coin.name +" $"+ props.coin.current_price}
            </h4>           
            <p>
                {"(0.045%)"}
            </p>
            <VuiBox position="absolute" sx={{right:"1rem", top:"0.8rem"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" style={{width:"1em", fontSize:"1.5rem", color:"white"}}>
                    <path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                    </path>
                </svg>
            </VuiBox>
        </VuiBox>
        <VuiBox sx={{ height: "310px" }}>
            {/* <ReactApexChart
                // lineChartData={lineChartData}
                // lineChartOptions={lineChartOptions}
                series={lineChartData}
                options={lineChartOptions}
                type="area"
                width="100%"
                height="100%"
            /> */}
            <LineChart
                lineChartData={lineChartData}
                lineChartOptions={lineChartOptions}                
                type="area"
                width="100%"
                height="100%"
            />
        </VuiBox>
        <VuiBox display="flex" justifyContent="center" py={2}>
            <VuiButton variant="gradient" color="info" size="small" sx={{width:"60%"}}>
                Configure data
            </VuiButton>
        </VuiBox>
        {/* <VuiBox> */}
            <table style={{width:"100%", height:"40%"}}>
                <tbody style={{display:"flex", justifyContent:"center", flexWrap:"wrap", width:"100%", height:"100%"}}>
                    <tr style={{display:"flex", flexDirection:"column", alignItems:"center", width:"50%", padding:"0.5rem", border:"0.5px solid"}}>
                        <th>Market cap</th>
                        <td>$353B</td>
                    </tr>
                    <tr style={{display:"flex", flexDirection:"column", alignItems:"center", width:"50%", padding:"0.5rem", border:"0.5px solid"}}>
                        <th>Rank</th>
                        <td>2</td>
                    </tr>
                    <tr style={{display:"flex", flexDirection:"column", alignItems:"center", width:"50%", padding:"0.5rem", border:"0.5px solid"}}>
                        <th>Circulating supply</th>
                        <td>119M</td>
                    </tr>
                    <tr style={{display:"flex", flexDirection:"column", alignItems:"center", width:"50%", padding:"0.5rem", border:"0.5px solid"}}>
                        <th>Volume (24H)</th>
                        <td>$18B</td>
                    </tr>
                    <tr style={{display:"flex", flexDirection:"column", alignItems:"center", width:"50%", padding:"0.5rem", border:"0.5px solid"}}>
                        <th>All time high</th>
                        <td>$4.9K</td>
                    </tr>
                    <tr style={{display:"flex", flexDirection:"column", alignItems:"center", width:"50%", padding:"0.5rem", border:"0.5px solid"}}>
                        <th>All time low</th>
                        <td>$0.43</td>
                    </tr>
                </tbody>
            </table>
        {/* </VuiBox> */}
    </VuiBox>
  );
}

export default CoinStats;
