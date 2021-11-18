import {useState} from 'react'
import {Line} from 'react-chartjs-2'
import styles from '../../styles/Income.module.css'

const initialConfig = {}

const TotalIncome = () => {
    let [data, setData] = useState({
        labels:["", "1st June", "8th July", "16th Augt", "24 Sept", "15 Octo", "" ],
        datasets:[{
            data: [
                0, 
                50000, 
                110000, 
                30000, 
                66000, 
                43000, 
                43000
            ],
            tension: 0.5,
            borderColor:"#31517A"
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
            padding: 30
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
        aspectRatio:2.5
    })
    return(
        <Line 
            data={data}
            options={options}
        />
    )
}

const TotalAppointments = () => {

} 

const Charts = () => {

    return (
        <div className={`${styles.charts_container}`}>
            <div className={`${styles.chart}`}>
                <TotalIncome />
            </div>
            <div className={`${styles.chart}`}>
                <TotalIncome />
            </div>
        </div>
    );
}

export default Charts