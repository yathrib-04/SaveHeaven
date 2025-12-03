import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Resources', icon: '📚' },
    { id: 'mental-health', name: 'Mental Health Support', icon: '🧠' },
    { id: 'legal', name: 'Legal Help', icon: '⚖️' },
    { id: 'medical', name: 'Medical Services', icon: '🏥' },
    { id: 'community', name: 'Community Programs', icon: '🤝' }
  ]

  const resources = [
    {
      id: 1,
      title: 'Crisis Intervention Services',
      description: '24/7 crisis support and intervention services for immediate mental health assistance.',
      category: 'mental-health',
      type: 'Hotline',
      contact: '1-800-273-8255',
      icon: '📞',
      color: 'bg-red-50 border-red-200 text-red-800'
    },
    {
      id: 2,
      title: 'Legal Aid Society',
      description: 'Free legal assistance for victims of harassment, discrimination, and abuse.',
      category: 'legal',
      type: 'Organization',
      contact: '1-800-555-0123',
      icon: '⚖️',
      color: 'bg-blue-50 border-blue-200 text-blue-800'
    },
    {
      id: 3,
      title: 'Women\'s Health Center',
      description: 'Comprehensive medical services including trauma-informed care and counseling.',
      category: 'medical',
      type: 'Medical Center',
      contact: '555-0123',
      icon: '🏥',
      color: 'bg-green-50 border-green-200 text-green-800'
    },
    {
      id: 4,
      title: 'Support Group Network',
      description: 'Peer support groups for survivors of various types of trauma and abuse.',
      category: 'community',
      type: 'Support Group',
      contact: 'support@example.com',
      icon: '🤝',
      color: 'bg-purple-50 border-purple-200 text-purple-800'
    },
    {
      id: 5,
      title: 'Therapy and Counseling',
      description: 'Professional therapy services with licensed counselors specializing in trauma recovery.',
      category: 'mental-health',
      type: 'Therapy',
      contact: 'therapy@example.com',
      icon: '💬',
      color: 'bg-pink-50 border-pink-200 text-pink-800'
    },
    {
      id: 6,
      title: 'Emergency Shelter',
      description: 'Safe housing options for those in immediate danger or experiencing homelessness.',
      category: 'community',
      type: 'Shelter',
      contact: '1-800-SHELTER',
      icon: '🏠',
      color: 'bg-yellow-50 border-yellow-200 text-yellow-800'
    },
    {
      id: 7,
      title: 'Legal Protection Orders',
      description: 'Assistance with obtaining restraining orders and other legal protections.',
      category: 'legal',
      type: 'Legal Service',
      contact: 'legal@example.com',
      icon: '🛡️',
      color: 'bg-indigo-50 border-indigo-200 text-indigo-800'
    },
    {
      id: 8,
      title: 'Medical Advocacy',
      description: 'Support during medical examinations and documentation of injuries.',
      category: 'medical',
      type: 'Advocacy',
      contact: 'advocacy@example.com',
      icon: '👩‍⚕️',
      color: 'bg-teal-50 border-teal-200 text-teal-800'
    }
  ]

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory)

  const handleContact = (resource) => {
    if (resource.type === 'Hotline' || resource.type === 'Shelter') {
      window.open(`tel:${resource.contact}`)
    } else {
      window.open(`mailto:${resource.contact}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the support and resources you need. All services are confidential and designed to help you on your journey to healing and recovery.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                <span className="mr-2 text-lg">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${resource.color}`}>
                  <span className="text-2xl">{resource.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {resource.type}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleContact(resource)}
                    >
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Emergency Resources */}
        <Card className="bg-red-50 border-red-200">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-900 mb-4">Emergency Resources</h2>
            <p className="text-red-800 mb-6">
              If you are in immediate danger or experiencing a crisis, please contact these emergency services:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">Emergency Services</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">911</p>
                <p className="text-sm text-red-700">For immediate danger</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">Crisis Hotline</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">1-800-273-8255</p>
                <p className="text-sm text-red-700">24/7 mental health support</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">Text Crisis Line</h3>
                <p className="text-2xl font-bold text-red-600 mb-2">Text HOME to 741741</p>
                <p className="text-sm text-red-700">Crisis text support</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Use These Resources</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>All resources are confidential and free to use</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>You can contact multiple resources for different types of support</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Many services offer 24/7 availability for immediate help</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Don't hesitate to reach out - these organizations are here to help</span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help Finding Resources?</h3>
            <p className="text-gray-600 mb-4">
              Our support team can help you find the right resources for your specific situation.
            </p>
            <div className="space-y-3">
              <Button className="w-full">
                Contact Support Team
              </Button>
              <Button variant="outline" className="w-full">
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Resources
