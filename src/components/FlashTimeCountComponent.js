import React from 'react'
import { useTimer } from 'react-timer-hook';
function FlashTimeCountComponent({expiryTimestamp}) {
    const {
        seconds,
        minutes,
        hours,
        days,
      } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    return (
        <div className="time_count_area">
            <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    )
}

export default FlashTimeCountComponent
