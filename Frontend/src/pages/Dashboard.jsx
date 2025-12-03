import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const sidebarItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '🏠', active: true },
    { name: 'Report', href: '/report', icon: '📝' },
    { name: 'Resources', href: '/resources', icon: '📚' },
    { name: 'Feedback', href: '/feedback', icon: '💬' },
    { name: 'Profile', href: '/profile', icon: '👤' },
  ]

  const statsCards = [
    {
      title: 'Reports Submitted',
      value: '12',
      change: '+2 this month',
      changeType: 'positive',
      icon: '📊'
    },
    {
      title: 'Resources Accessed',
      value: '8',
      change: '+3 this week',
      changeType: 'positive',
      icon: '📖'
    },
    {
      title: 'Support Sessions',
      value: '5',
      change: '2 pending',
      changeType: 'neutral',
      icon: '🤝'
    },
    {
      title: 'Community Points',
      value: '1,250',
      change: '+150 this month',
      changeType: 'positive',
      icon: '⭐'
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'report',
      title: 'Incident Report Submitted',
      description: 'Your report has been received and is being reviewed',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      type: 'resource',
      title: 'New Resource Available',
      description: 'Mental Health Support Guide has been added',
      time: '1 day ago',
      status: 'available'
    },
    {
      id: 3,
      type: 'feedback',
      title: 'Feedback Response',
      description: 'Thank you for your feedback. We appreciate your input',
      time: '3 days ago',
      status: 'completed'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="flex flex-col flex-grow pt-5 bg-white overflow-y-auto border-r border-gray-200">
            <div className="flex items-center flex-shrink-0 px-4">
              <div className="h-8 w-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Save Heaven</span>
            </div>
            <div className="mt-5 flex-grow flex flex-col">
              <nav className="flex-1 px-2 space-y-1">
                {sidebarItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                      item.active
                        ? 'bg-primary-100 text-primary-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1">
          {/* Top bar */}
          <div className="bg-white shadow-sm border-b border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    Settings
                  </Button>
                  <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-700">U</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page content */}
          <div className="flex-1 p-4 sm:p-6 lg:p-8">
            {/* Welcome section */}
            <div className="mb-8">
              <div className="flex items-center">
                <span className="text-2xl mr-3">🏠</span>
                <h2 className="text-3xl font-bold text-gray-900">Welcome, User</h2>
              </div>
              <p className="mt-2 text-lg text-gray-600">
                Here's what's happening with your account today.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statsCards.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">{stat.icon}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                      <p className={`text-sm ${
                        stat.changeType === 'positive' ? 'text-green-600' : 
                        stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {stat.change}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <Card>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                            <span className="text-sm">
                              {activity.type === 'report' ? '📝' : 
                               activity.type === 'resource' ? '📚' : '💬'}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                          <p className="text-sm text-gray-600">{activity.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            activity.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            activity.status === 'completed' ? 'bg-green-100 text-green-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {activity.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Quick Actions */}
              <div>
                <Card>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h3>
                  <div className="space-y-4">
                    <Link to="/report">
                      <Button className="w-full justify-start">
                        <span className="mr-2">📝</span>
                        Submit Report
                      </Button>
                    </Link>
                    <Link to="/resources">
                      <Button variant="outline" className="w-full justify-start">
                        <span className="mr-2">📚</span>
                        Browse Resources
                      </Button>
                    </Link>
                    <Link to="/feedback">
                      <Button variant="outline" className="w-full justify-start">
                        <span className="mr-2">💬</span>
                        Share Feedback
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full justify-start">
                        <span className="mr-2">📞</span>
                        Contact Support
                      </Button>
                    </Link>
                  </div>
                </Card>

                {/* Support Resources */}
                <Card className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Support Resources</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900">Crisis Hotline</h4>
                      <p className="text-sm text-blue-700">Available 24/7</p>
                      <p className="text-sm font-mono text-blue-800">1-800-273-8255</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900">Emergency Services</h4>
                      <p className="text-sm text-green-700">Call 911 for immediate help</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
