import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatDate = (date) => {
    const day = date.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase()
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toLowerCase()
    const dayNumber = date.getDate()
    const hours = date.getHours() % 12 || 12
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const meridiem = date.getHours() >= 12 ? 'PM' : 'AM'

    return `${day} ${month} ${dayNumber} ${hours}:${minutes} ${meridiem}`
  }

  return <div>{formatDate(currentDate)}</div>
}

export default DateTime
