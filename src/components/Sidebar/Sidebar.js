import React, { useState } from 'react'
import './sidebar.scss'
import { NavLink } from 'react-router-dom'
import dashboard from '../../assets/dashboard.svg'
import calender from '../../assets/calendar.svg'
import inbox from '../../assets/inbox.svg'
import invoice from '../../assets/invoice.svg'
import lab from '../../assets/lab.svg'
import HomeIcon from '../../assets/home.svg'

const Sidebar = props => {
  const [isOpen, setOpen] = useState(true)

  const sidebarElements = [
    {
      name: 'Dashboard',
      label: 'dashboard',
      icon: dashboard,
      subtabs: [
        { name: 'page-visitors', label: 'dashboard/page-visitors' },
        { name: 'post-performance', label: 'dashboard/post-performance' },
        { name: 'team-overall', label: 'dashboard/team-overall' }
      ]
    },
    {
      name: 'Calender',
      label: 'calender',
      icon: calender
    },
    { name: 'Inbox', label: 'inbox', icon: inbox },
    { name: 'Invoicing', label: 'invoicing', icon: invoice },
    { name: 'Lab/Experimental', label: 'lab-experimental', icon: lab }
  ]

  const recentViews = [
    { name: 'Overall Performance', label: 'overall-performance' },
    { name: 'Invoice #964', label: 'invoice-964' },
    { name: 'Customer: Minerva Viewer', label: 'customer-minerva-viewver' }
  ]

  return (
    <>
      <div className="sidebar">
        <div className='navbar-border'>
          <a href='/'>
            <img
              alt='espressif-icon'
              src={HomeIcon}
              className='logo'
              onClick={() => {
                props.history.push('/home/devices/')
              }}
            />
          </a>
        </div>
        <div className='user-profile'>
          <img src={props.user.profile} alt='user' />
          <h3>{props.user.name}</h3>
          <p>{props.user.role}</p>
        </div>
        <ul className='list-group'>
          {sidebarElements.map(tab => (
            <li className='list-group-item sidebar-links' key={tab.label}>
              <NavLink
                to={`/${tab.label}/`}
                activeClassName={Array.isArray(tab.subtabs) ? '' : 'active'}
                onClick={() => Array.isArray(tab.subtabs) ? setOpen(isOpen => !isOpen) : null}
              >
                <img src={tab.icon} alt={tab.name} className="icon"/>
                {tab.name}
              </NavLink>
              {Array.isArray(tab.subtabs) ? (
                isOpen ? (
                  <ul className='list-group subtab'>
                    {tab.subtabs.map(subItem => (
                      <NavLink
                        to={`/${subItem.label}/`}
                        activeClassName='active'
                        key={subItem.label}
                      >
                        <li className='subtab-item'>
                          {subItem.name}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                ) : null
              ) : null}
            </li>
          ))}
        </ul>

        <ul className="recently-viewed-tabs">
          <li className="recently-viewed-title">Recently Viewed</li>
          {recentViews.map(recent => (
            <li className='' key={recent.label}>
              <NavLink
                to={`/${recent.label}/`}
                activeClassName='active'
              >
                <i
                  className={[recent.iconClass, 'icon'].join(
                    ' '
                  )}
                ></i>
                {recent.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar
