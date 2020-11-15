import { Box, Paper } from '@material-ui/core';
import React from 'react'
import { Line } from 'react-chartjs-2';
const chartData={
labels: ['Jan','Feb','Mar','April','May','June','July','Aug','Sept','Oct','Nov','Dec'],
datasets:[
    {
    
    data:[
        60,
        30,
        100,
        72,
        84,
        100,
        55,
        45
    ],
    backgroundColor:"rgba(78, 173, 95, 0.4)",
    borderColor: '#50AB63',
    fill: true,
    }
]
}
function Linechart() {
    return (
        <Paper className="chart" >
        <Line
        backgroundColor="blue"
        type="line"
            data={chartData}
            options={{
                title:{
                display:true,
                text:'Namecards collected green',
                fontSize:18,
                position:"top",
                textAlign:"left",
                fontColor:"black",
                
                },
                legend:{
                display:false,
                position:"right"
                },
                scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                    display: false
                    },
                    ticks: {
                    fontColor: "#AEA8A8",
                    fontSize:"10"
                }
                }],
                yAxes: [{
                display: true,
                gridLines: {
                    display: true
                },
                ticks: {
                    fontColor: "#AEA8A8",
                    fontSize:"10"
                }
                }]
                }
            }}
        />
        </Paper>
    )
}

export default Linechart;
