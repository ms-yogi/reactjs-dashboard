import PageVisitors from '../pages/Dashboard/PageVisitors'
import PostPerformance from '../pages/Dashboard/PostPerformance'
import TeamOverall from '../pages/Dashboard/TeamOverall'
import Calender from '../pages/Calender/Calender'
import Inbox from '../pages/Inbox/Inbox'
import Invoicing from '../pages/Invoicing/Invoicing'
import LabExperimental from '../pages/LabExperimental/LabExperimental'
import Store from '../pages/Store/Store'
import Styleguide from '../pages/Store/Styleguide'
import DashboardUiKit from '../pages/Store/DashboardUiKit'
import WebflowCards from '../pages/Store/WebflowCards'

export const routes = [
  {
    key: 'page-visitors',
    path: '/dashboard/page-visitors',
    component: PageVisitors
  },
  {
    key: 'post-performance',
    path: '/dashboard/post-performance',
    component: PostPerformance
  },
  {
    key: 'team-overall',
    path: '/dashboard/team-overall',
    component: TeamOverall
  },
  {
    key: 'calender',
    path: '/calender',
    component: Calender
  },
  {
    key: 'inbox',
    path: '/inbox',
    component: Inbox
  },
  {
    key: 'invoicing',
    path: '/invoicing',
    component: Invoicing
  },
  {
    key: 'lab-experimental',
    path: '/lab-experimental',
    component: LabExperimental
  },
  {
    key: 'store',
    path: '/store',
    component: Store,
    exact: true
  },
  {
    key: 'styleguides',
    path: '/store/symbols-styleguides',
    component: Styleguide
  },
  {
    key: 'dashboard-ui-kit',
    path: '/store/dashboard-ui-kit',
    component: DashboardUiKit
  },
  {
    key: 'webflow-cards',
    path: '/store/webflow-cards',
    component: WebflowCards
  }
]
