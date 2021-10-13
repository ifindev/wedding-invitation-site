import React from 'react'
import { Timeline } from '../../components'
import { data } from './data'

const TimelineContent = () => {
  return (
    <div>
      <Timeline data={data} />
    </div>
  )
}

export default TimelineContent
