import {useState} from 'react'
import {Line} from 'react-chartjs-2'
import styles from '../../styles/Income.module.css'

const initialConfig = {}

const TotalIncome = () => {
    let [data, setData] = useState({
        labels:["", "1st June", "8th July", "16th Augt", "24 Sept", "15 Octo", "" ],
        datasets:[{
            data: [0, 50000, 110000, 30000, 66000, 43000, 43000],
            tension: 0.5
        }]
    })

    let [options, setOptions] = useState({
        plugins:{
            title:{
                display:true,
                text:"$120,111",
                align:"start",
                color:"#000000"
            },
            subtitle: {
                display: true,
                text:"Income in current month",
                align:"end",
                color:"#000000"
            },
            legend:{
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid:{
                    borderDash:[4],
                    borderDashOffset:20,
                    tickLength:0
                }
            },
            x:{
                beginAtZero:true,
                grid:{
                    display:false
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