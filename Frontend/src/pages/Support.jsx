import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const Support = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Support', icon: '🤝' },
    { id: 'psychological', name: 'Psychological Support', icon: '🧠' },
    { id: 'coping', name: 'Coping Strategies', icon: '💪' },
    { id: 'mental-health', name: 'Mental Health Tips', icon: '💚' },
    { id: 'self-care', name: 'Self-Care', icon: '🌸' }
  ]

  const supportResources = [
    {
      id: 1,
      title: 'Trauma-Informed Therapy',
      description: 'Professional therapy services specializing in trauma recovery and healing.',
      category: 'psychological',
      type: 'Therapy',
      icon: '🛋️',
      color: 'bg-blue-50 border-blue-200 text-blue-800',
      tips: ['Individual sessions available', 'Group therapy options', 'Sliding scale fees']
    },
    {
      id: 2,
      title: 'Breathing Exercises',
      description: 'Guided breathing techniques to help manage anxiety and stress.',
      category: 'coping',
      type: 'Technique',
      icon: '🫁',
      color: 'bg-green-50 border-green-200 text-green-800',
      tips: ['4-7-8 breathing method', 'Box breathing technique', 'Progressive muscle relaxation']
    },
    {
      id: 3,
      title: 'Mindfulness Meditation',
      description: 'Daily mindfulness practices to improve mental wellbeing and reduce stress.',
      category: 'mental-health',
      type: 'Practice',
      icon: '🧘',
      color: 'bg-purple-50 border-purple-200 text-purple-800',
      tips: ['10-minute daily sessions', 'Guided meditation apps', 'Walking meditation']
    },
    {
      id: 4,
      title: 'Journaling Prompts',
      description: 'Therapeutic writing exercises to process emotions and experiences.',
      category: 'coping',
      type: 'Activity',
      icon: '📝',
      color: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      tips: ['Daily reflection prompts', 'Gratitude journaling', 'Emotion tracking']
    },
    {
      id: 5,
      title: 'Sleep Hygiene Guide',
      description: 'Strategies for improving sleep quality and establishing healthy sleep patterns.',
      category: 'self-care',
      type: 'Guide',
      icon: '😴',
      color: 'bg-indigo-50 border-indigo-200 text-indigo-800',
      tips: ['Consistent sleep schedule', 'Bedroom environment optimization', 'Pre-sleep routine']
    },
    {
      id: 6,
      title: 'Support Group Sessions',
      description: 'Peer support groups for sharing experiences and building connections.',
      category: 'psychological',
      type: 'Group',
      icon: '👥',
      color: 'bg-pink-50 border-pink-200 text-pink-800',
      tips: ['Weekly group meetings', 'Online and in-person options', 'Confidential environment']
    },
    {
      id: 7,
      title: 'Nutrition for Mental Health',
      description: 'Dietary guidelines to support mental wellbeing and emotional stability.',
      category: 'self-care',
      type: 'Guide',
      icon: '🥗',
      color: 'bg-teal-50 border-teal-200 text-teal-800',
      tips: ['Omega-3 rich foods', 'Regular meal times', 'Hydration importance']
    },
    {
      id: 8,
      title: 'Crisis De-escalation',
      description: 'Immediate techniques for managing crisis situations and overwhelming emotions.',
      category: 'coping',
      type: 'Technique',
      icon: '🆘',
      color: 'bg-red-50 border-red-200 text-red-800',
      tips: ['Grounding techniques', '5-4-3-2-1 method', 'Safe space identification']
    },
    {
      id: 9,
      title: 'Art Therapy Activities',
      description: 'Creative expression through art to process emotions and reduce stress.',
      category: 'mental-health',
      type: 'Activity',
      icon: '🎨',
      color: 'bg-orange-50 border-orange-200 text-orange-800',
      tips: ['Mandala coloring', 'Emotion painting', 'Collage making']
    }
  ]

  const filteredResources = selectedCategory === 'all' 
    ? supportResources 
    : supportResources.filter(resource => resource.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support & Wellness</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover tools, techniques, and resources to support your mental health and wellbeing journey.
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

        {/* Support Resources Grid */}
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
                  <div className="mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {resource.type}
                    </span>
                  </div>
                  <div className="space-y-1">
                    {resource.tips.slice(0, 2).map((tip, index) => (
                      <p key={index} className="text-xs text-gray-500">• {tip}</p>
                    ))}
                    {resource.tips.length > 2 && (
                      <p className="text-xs text-gray-400">+{resource.tips.length - 2} more tips</p>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Support Tools */}
        <Card className="mb-12 bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Quick Support Tools</h2>
            <p className="text-primary-800 mb-6">
              Immediate tools you can use right now to help manage stress and emotions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-primary-200">
                <h3 className="font-semibold text-primary-900 mb-2">Breathing Exercise</h3>
                <p className="text-sm text-primary-700 mb-3">4-7-8 Breathing Technique</p>
                <Button size="sm" variant="outline" className="w-full">
                  Start Exercise
                </Button>
              </div>
              <div className="bg-white p-4 rounded-lg border border-primary-200">
                <h3 className="font-semibold text-primary-900 mb-2">Grounding Technique</h3>
                <p className="text-sm text-primary-700 mb-3">5-4-3-2-1 Method</p>
                <Button size="sm" variant="outline" className="w-full">
                  Try Now
                </Button>
              </div>
              <div className="bg-white p-4 rounded-lg border border-primary-200">
                <h3 className="font-semibold text-primary-900 mb-2">Mood Check-in</h3>
                <p className="text-sm text-primary-700 mb-3">Track your emotional state</p>
                <Button size="sm" variant="outline" className="w-full">
                  Check In
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Self-Care Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Daily Self-Care Checklist</h3>
            <div className="space-y-3">
              {[
                'Drink enough water (8 glasses)',
                'Take breaks from screens',
                'Get 7-9 hours of sleep',
                'Eat regular, balanced meals',
                'Spend time outdoors',
                'Practice gratitude',
                'Connect with loved ones',
                'Engage in a hobby'
              ].map((item, index) => (
                <label key={index} className="flex items-center">
                  <input type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                  <span className="ml-2 text-sm text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Crisis Support</h3>
            <p className="text-gray-600 mb-4">
              If you're experiencing a mental health crisis, these resources are available 24/7:
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <p className="font-medium text-red-900">Crisis Text Line</p>
                  <p className="text-sm text-red-700">Text HOME to 741741</p>
                </div>
                <Button size="sm" variant="outline" className="text-red-600 border-red-300">
                  Text Now
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-blue-900">National Suicide Prevention Lifeline</p>
                  <p className="text-sm text-blue-700">1-800-273-8255</p>
                </div>
                <Button size="sm" variant="outline" className="text-blue-600 border-blue-300">
                  Call Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Support
