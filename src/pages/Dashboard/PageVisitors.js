import React, { useState, useEffect } from 'react'
import moment from 'moment'
import data from '../../data/dailyVisitor.json'
import realtimeuser from '../../data/realtimeuser.json'
import totalvisits from '../../data/totalVisits.json'
import bouncerate from '../../data/bounceRate.json'
import visitduration from '../../data/visitDuration.json'
import Barchart from '../../components/Barchart'
import Form from 'react-bootstrap/Form'
import './dashboard.scss'
import Areachart from '../../components/Areachart/Areachart'
import MostVisitedPages from '../../components/MostVisitedPages/MostVisitedPages'
import SocialMediaTraffic from '../../components/SocialMediaTraffic/SocialMediaTraffic'

const GradientColor = ['#e7f0fa', '#ebf6ed', '#efeffe', '#fffaef']
const BorderColor = ['#387cdf', '#47b254', '#7b6ff3', '#fbd25e']

const PageVisitors = () => {
  const [formattedData, setFormattedData] = useState([])
  const [barChartData, setBarChartData] = useState({})
  const [monthlist, setMonths] = useState([])
  const [selectedMonth, setSelectedMonth] = useState('')

  const FormatDataByMonth = (data) => {
    let dataArray = []

    const allData = data.values.map(item => {
      const year = moment.unix(item.time).format('YYYY')
      const month = moment.unix(item.time).format('MMMM')
      const date = moment.unix(item.time).format('DD')
      const time = moment.unix(item.time).format('MMMM Do YYYY')
      const visitors = item.count
      return ({
        year, month, date, time, visitors
      })
    })
    const monthList = allData.map(record => record.month)
    const months = monthList.filter((v, i, a) => a.indexOf(v) === i)
    setMonths(months)
    months.map(month => {
      const newData = allData.filter(record => (
        record.month === month
      ))
      const monthObj = { month: month, value: newData }
      dataArray = [...dataArray, monthObj]
      setFormattedData(dataArray)
    })
    setSelectedMonth(months[0])
  }

  const getSelectedMonthData = () => {
    const selectedMonthData = formattedData.filter(record => (
      record.month === selectedMonth
    ))
    setBarChartData(selectedMonthData[0])
  }

  useEffect(() => {
    FormatDataByMonth(data)
  }, [])

  useEffect(() => {
    getSelectedMonthData()
  }, [selectedMonth])

  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-card">
          <div className="row">
            <div className="col-lg-12 heading-container">
              <p className="dashboard-card-heading">Page Visitors</p>
              <Form.Group controlId="formGridState">
                <Form.Control as="select" onChange={(e) => setSelectedMonth(e.target.value)}>
                  {monthlist && monthlist.map(record => (
                    <option key={record}>{record}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </div>
            {barChartData
              ? <Barchart chartData={barChartData} /> : <p>Loading</p>}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card small-card">
              {realtimeuser
                ? <Areachart
                  chartData={realtimeuser}
                  dataKey={'realtimeUsers'}
                  gradientColor={GradientColor[0]}
                  borderColor={BorderColor[0]}/> : <p>Loading</p>}

            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card small-card">
              {totalvisits
                ? <Areachart
                  chartData={totalvisits}
                  dataKey={'totalVisits'}
                  gradientColor={GradientColor[1]}
                  borderColor={BorderColor[1]}/> : <p>Loading</p>}

            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card small-card">
              {realtimeuser
                ? <Areachart
                  chartData={bouncerate}
                  dataKey={'bounceRate'}
                  gradientColor={GradientColor[2]}
                  borderColor={BorderColor[2]}/> : <p>Loading</p>}

            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="dashboard-card small-card">
              {realtimeuser
                ? <Areachart
                  chartData={visitduration}
                  dataKey={'visitDuration'}
                  gradientColor={GradientColor[3]}
                  borderColor={BorderColor[3]}/> : <p>Loading</p>}

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <MostVisitedPages/>
          </div>
          <div className="col-lg-5">
            <SocialMediaTraffic/>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageVisitors
