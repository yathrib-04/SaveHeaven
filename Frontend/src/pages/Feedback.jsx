import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Textarea from '../components/Textarea'

const Feedback = () => {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!message.trim()) newErrors.message = 'Feedback is required'
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Share Your Feedback</h1>
          <p className="text-gray-600 mt-2">Help us improve the platform. Your thoughts matter.</p>
        </div>

        <Card>
          {submitted ? (
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h2>
              <p className="text-gray-600">We received your feedback and appreciate your time.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email (optional)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <Textarea
                label="Your feedback"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={errors.message}
                rows={6}
                placeholder="Tell us what we can improve..."
              />

              <div className="flex justify-end">
                <Button type="submit">Submit Feedback</Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  )
}

export default Feedback


