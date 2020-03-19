import React from 'react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import './areachart.scss'

const Areachart = (props) => {
  return (
    <>
      <div className="area-chart-container">
        <p className="area-chart-heading">{props.chartData.title}</p>
        <p className="area-chart-total">{props.chartData.totalCount}</p>
        <p
          className="area-chart-analysis"
          style={props.chartData.analysis && props.chartData.analysis.includes('+') ? { color: 'green' } : { color: 'red' }}
        >
          {props.chartData.analysis}
        </p>
        <ResponsiveContainer width="99%" aspect={3}>
          <AreaChart width={730} height={400} data={props.chartData.data}>
            <Area type="monotone" dataKey={props.dataKey} stroke={props.borderColor} fillOpacity={1} fill={props.gradientColor} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default Areachart
