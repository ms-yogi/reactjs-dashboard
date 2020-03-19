import React from 'react'
import Table from 'react-bootstrap/Table'
import socialmediatraffic from '../../data/SocialMediaTraffic.json'
import { ProgressBar } from 'react-bootstrap'
import './socialmediatraffic.scss'

const SocialMediaTraffic = () => {
  return (
    <>
      <div className="dashboard-card">
        <div className="heading-container">
          <p className="dashboard-card-heading">Social Media Traffic</p>
        </div>

        <Table>
          <thead>
            <tr>
              <th>Network</th>
              <th>Visitors</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {socialmediatraffic.trafficData.map(record => (
              <tr key={record.network}>
                <td className="half-column">{record.network}</td>
                <td className="half-column">{record.visitors}</td>
                <td>
                  <ProgressBar now={record.visitsRate}/>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default SocialMediaTraffic
