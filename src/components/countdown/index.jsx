import React, { useEffect, useState } from 'react'
import './countdown.css'
import hourGlass from './hourGlass_2.gif'


export default () => {

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const updateCountDown = () => {
            const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
            let endDate = '12/16/2022';
            const countDown = new Date(endDate).getTime();    
            const now = new Date().getTime();
            let distance = countDown - now;
            setDays(Math.floor(distance / (day)))
            setHours(Math.floor((distance % (day)) / (hour)))
            setMinutes(Math.floor((distance % (hour)) / (minute)))
            setSeconds(Math.floor((distance % (minute)) / second))
        }
        updateCountDown();

    }, [])

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    return (
        <div className='container'>
            <div className='hourglass'>
                <img src={hourGlass} alt="gif"></img>
            </div>
            <div className='texts'>
                <h2>Gotowi na</h2>
                <h1 style={{color: "#79d9f2"}}>1giet 2.0?</h1>
                <div className='countDown'>
                {zeroPad(days,2) + ' : ' + zeroPad(hours,2) + ' : ' + zeroPad(minutes,2) + " : " + zeroPad(seconds,2) } 
                    <div className='countDown-label'>
                        <div>
                        D
                        </div>
                        <div>
                        H
                        </div> 
                        <div>
                        M
                        </div>
                        <div>
                        S
                        </div> 
                    </div>
                </div>
                <h2>
                    już niedługo!
                </h2>
            </div>
        </div>
    )
}