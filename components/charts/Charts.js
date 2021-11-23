import {useState, useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import styles from '../../styles/Charts.module.css'


const TotalIncome = () => {
    let [data, setData] = useState({
        labels:["", "1 June", "8 July", "16 Augt", "24 Sept", "15 Octo"],
        datasets:[{
            data: [
                0, 
                50000, 
                110000, 
                30000, 
                66000, 
                43000
            ],
            clip: {left: -20, top: false, right: 20, bottom: 0},
            tension: 0.5,
            borderColor:"#336CFB",
            pointRadius:5,
            pointBackgroundColor:"#A9C1FD",
        }]
    })

    let [options, setOptions] = useState({
        plugins:{
            title:{
                display:true,
                text:"$120,111",
                align:"start",
                color:"#000000",
                font:{
                    size:25
                }
            },
            subtitle: {
                display: true,
                text:"Income in current month",
                align:"end",
                font:{
                    size:15
                },
                padding:10,
                color:"#A0A4A8",
                fullSize:false
            },
            legend:{
                display: false
            }
        },
        layout: {
            padding:{
                left:8,
                right:8,
                top:3,
                bottom:3
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks:{
                    callback: function(value, index, values) {
                        return `$${value}`;
                    }
                },
                grid:{
                    borderDash:[4],
                    borderDashOffset:20,
                    tickLength:0,
                    drawBorder: false
                }
            },
            x:{
                beginAtZero:true,
                grid:{
                    tickLength:6,
                    color:"transparent",
                    tickColor:"#A0A4A8"
                }
            }
        },
        maintainAspectRatio: true,
        responsive:true,
        aspectRatio:2.4
    })
    return(
        <Line 
            data={data}
            options={options}
        />
    )
}

const TotalAppointments = () => {
    let [data, setData] = useState({
        labels:["", "25 April", "26 May", "27 June", "28 July", "29 Augt", "30 Sept", "01 Octo"],
        datasets:[{
            data: [
                0, 
                4000, 
                1800, 
                2700, 
                2100, 
                4900, 
                800,
                2500
            ],
            clip: {left: -20, top: false, right: 20, bottom: 0},
            pointRadius:5,
            pointBackgroundColor:"#FCDF98",
            tension: 0.5,
            borderColor:"#FAC032"
        }]
    })

    let [options, setOptions] = useState({
        plugins:{
            title:{
                display:true,
                text:"5,210",
                align:"start",
                color:"#000000",
                font:{
                    size:25
                }
            },
            subtitle: {
                display: true,
                text:"Total Number of Appointments",
                align:"end",
                font:{
                    size:15
                },
                padding:10,
                color:"#A0A4A8",
                fullSize:false
            },
            legend:{
                display: false
            }
        },
        layout: {
            padding:{
                left:8,
                right:8,
                top:3,
                bottom:3
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid:{
                    borderDash:[4],
                    borderDashOffset:20,
                    tickLength:0,
                    drawBorder: false
                }
            },
            x:{
                beginAtZero:true,
                grid:{
                    tickLength:6,
                    color:"transparent",
                    tickColor:"#A0A4A8"
                }
            }
        },
        maintainAspectRatio: true,
        responsive:true,
        aspectRatio:2.4
    })
    return(
        <Line 
            data={data}
            options={options}
        />
    )
}

const Charts = () => {

    return (
        <div className={`${styles.charts_layout}`}>
            <div className={`${styles.charts_container}`}>
                <div className={`${styles.chart}`}>
                    <TotalIncome />
                </div>
            </div>
            <div className={`${styles.charts_container}`}>
                <div className={`${styles.chart}`}>
                    <TotalAppointments />
                </div>
            </div>
        </div>
    );
}

export default Charts