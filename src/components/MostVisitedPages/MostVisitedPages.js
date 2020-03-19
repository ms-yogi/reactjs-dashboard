import React from 'react'
import Table from 'react-bootstrap/Table'
import './mostvisitedpages.scss'
import mostvisitedpages from '../../data/mostVisitedPages.json'
import redirect from '../../assets/redirect.svg'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import { Link } from 'react-router-dom'

const MostVisitedPages = () => {
  return (
    <>
      <div className="dashboard-card">
        <div className="heading-container">
          <p className="dashboard-card-heading">Most Visited Pages</p>
        </div>

        <Table>
          <thead>
            <tr>
              <th>Page Name</th>
              <th></th>
              <th>Visitors</th>
              <th>Unique Page Visits</th>
              <th>Bounce Rate</th>
              <th>Chart</th>
            </tr>
          </thead>
          <tbody>
            {mostvisitedpages.pages.map(page => (
              <tr key={page.pageName}>
                <td>{page.pageName}</td>
                <td>
                  <Link to={page.pageName} target={'_blank'}>
                    <img src={redirect} alt="link"/>
                  </Link>
                </td>
                <td>{page.visitors}</td>
                <td>{page.uniquePageVisits}</td>
                <td>{page.bounceRate}</td>
                <td>
                  <ResponsiveContainer width="99%" height="auto" aspect={4}>
                    <AreaChart width={730} height={400} data={page.visitsData}>
                      <Area type="monotone" dataKey='totalVisits' stroke='#387cdf' fillOpacity={1} fill='#e7f0fa' />
                    </AreaChart>
                  </ResponsiveContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default MostVisitedPages
