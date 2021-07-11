import React from 'react'

function TimeLineList({timelines}) {
  return (
    <ul>
      {timelines.map(timeLine => (
        <li key={timeLine.id}>
          {timeLine.desc}
        </li>
      ))}
    </ul>
  )
}

export default TimeLineList
