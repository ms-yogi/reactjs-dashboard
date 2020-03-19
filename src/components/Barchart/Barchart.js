import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './barchart.scss'

const Barchart = (props) => {
  return (
    <>
      {props.chartData
        ? <div className="mt-5 barchart-container">
          <ResponsiveContainer width="99%" aspect={4}>
            <BarChart width={930} height={350} data={props.chartData.value} barSize={12}>
              <CartesianGrid vertical={false} stroke="#00000020"/>
              <XAxis dataKey="date" />
              <YAxis tickCount={4}/>
              <Tooltip/>
              <Legend />
              <Bar dataKey="visitors" fill="#0c65d9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        : <p>loading</p>}
    </>
  )
}

export default Barchart
