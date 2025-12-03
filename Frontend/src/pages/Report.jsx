import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'
import Textarea from '../components/Textarea'

const Report = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    category: '',
    urgency: '',
    anonymous: false
  })
  const [files, setFiles] = useState([])
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)
  const navigate = useNavigate()

  const categories = [
    'Harassment',
    'Discrimination',
    'Safety Concern',
    'Mental Health Crisis',
    'Other'
  ]

  const urgencyLevels = [
    { value: 'low', label: 'Low - Can wait 24-48 hours' },
    { value: 'medium', label: 'Medium - Needs attention within 24 hours' },
    { value: 'high', label: 'High - Needs immediate attention' },
    { value: 'urgent', label: 'Urgent - Emergency situation' }
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    setFiles(prev => [...prev, ...selectedFiles])
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles(prev => [...prev, ...droppedFiles])
  }

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    } else if (formData.description.length < 10) {
      newErrors.description = 'Description must be at least 10 characters'
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }
    
    if (!formData.category) {
      newErrors.category = 'Category is required'
    }
    
    if (!formData.urgency) {
      newErrors.urgency = 'Urgency level is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Report submitted:', { ...formData, files })
      alert('Report submitted successfully! We will review it and get back to you soon.')
      navigate('/dashboard')
    } catch (error) {
      console.error('Report submission error:', error)
      setErrors({ general: 'Failed to submit report. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Report an Incident</h1>
          <p className="text-lg text-gray-600">
            Your report is confidential and will be handled with care. We're here to help.
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {errors.general}
              </div>
            )}

            {/* Title */}
            <Input
              label="Incident Title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              error={errors.title}
              placeholder="Brief description of the incident"
            />

            {/* Description */}
            <Textarea
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              error={errors.description}
              placeholder="Please provide a detailed description of what happened, including dates, times, and any relevant details."
              rows={6}
            />

            {/* Location and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                error={errors.location}
                placeholder="Where did this occur?"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`input-field ${errors.category ? 'border-red-500 focus:ring-red-500' : ''}`}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                )}
              </div>
            </div>

            {/* Urgency Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Urgency Level
              </label>
              <div className="space-y-2">
                {urgencyLevels.map((level) => (
                  <label key={level.value} className="flex items-center">
                    <input
                      type="radio"
                      name="urgency"
                      value={level.value}
                      checked={formData.urgency === level.value}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                    />
                    <span className="ml-2 text-sm text-gray-700">{level.label}</span>
                  </label>
                ))}
              </div>
              {errors.urgency && (
                <p className="mt-1 text-sm text-red-600">{errors.urgency}</p>
              )}
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Attach Files (Optional)
              </label>
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${
                  isDragOver
                    ? 'border-primary-400 bg-primary-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="mt-2">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <span className="mt-2 block text-sm font-medium text-gray-900">
                      Drag & Drop files here, or{' '}
                      <span className="text-primary-600 hover:text-primary-500">browse</span>
                    </span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      multiple
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="mt-1 text-xs text-gray-500">
                    PNG, JPG, PDF up to 10MB each
                  </p>
                </div>
              </div>

              {/* File List */}
              {files.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Attached Files:</h4>
                  <div className="space-y-2">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-700">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Anonymous Option */}
            <div className="flex items-center">
              <input
                id="anonymous"
                name="anonymous"
                type="checkbox"
                checked={formData.anonymous}
                onChange={handleChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-900">
                Submit this report anonymously
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/dashboard')}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="min-w-[120px]"
              >
                {isLoading ? 'Submitting...' : 'Submit Report'}
              </Button>
            </div>
          </form>
        </Card>

        {/* Emergency Notice */}
        <Card className="mt-6 bg-red-50 border-red-200">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Emergency Notice
              </h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  If you are in immediate danger or experiencing a mental health crisis, please call:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li><strong>Emergency Services:</strong> 911</li>
                  <li><strong>Crisis Hotline:</strong> 1-800-273-8255</li>
                  <li><strong>Text Crisis Line:</strong> Text HOME to 741741</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Report
