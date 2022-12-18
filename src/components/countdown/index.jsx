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
            let endDate = '12/18/2022 17:00:00';
            const countDown = new Date(endDate).getTime();    
            const now = new Date().getTime();
            let distance = countDown - now;
            setDays(Math.floor(distance / (day)))
            setHours(Math.floor((distance % (day)) / (hour)))
            setMinutes(Math.floor((distance % (hour)) / (minute)))
            setSeconds(Math.floor((distance % (minute)) / second))
        }
        updateCountDown();

        setInterval(() => {
            updateCountDown() 
        }, 1000);

    }, [])

    const zeroPad = (num, places) => String(num).padStart(places, '0')

    return (
        <div className='container'>
            <div className="anis_cover_wrap">
                <video autoPlay muted loop className='anis_cover'>
                    <source src="/bg.mp4" type="video/mp4" />
                </video>
            </div>
            <div className='hourglass'>
                <img src={hourGlass} alt="gif" style={{zIndex: "2"}}></img>
            </div>
            <div className='texts'>
                <img src="https://cdn.discordapp.com/attachments/1041443734216261632/1050170655313776780/13.png" style={{maxWidth: "100%", height: "auto", position: "absolute", right: 0}} />
                <div className='countDown' data-content={zeroPad(days,2) + ' : ' + zeroPad(hours,2) + ' : ' + zeroPad(minutes,2) + " : " + zeroPad(seconds,2) }  style={{zIndex: "2"}}>
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
                <h2 style={{zIndex: "2", fontWeight: "normal", color: "#fff"}}><strong>1giet</strong> is back <strong>!</strong></h2>
            </div>
        </div>
    )
}