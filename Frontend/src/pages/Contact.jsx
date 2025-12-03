import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email is invalid'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-600 mt-2">We aim to respond within 1–2 business days.</p>
        </div>
        <Card>
          {sent ? (
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Message sent</h2>
              <p className="text-gray-600">Thanks for reaching out. We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={onSubmit}>
              <Input name="name" label="Name" value={form.name} onChange={handleChange} error={errors.name} />
              <Input name="email" type="email" label="Email" value={form.email} onChange={handleChange} error={errors.email} />
              <Textarea name="message" label="Message" value={form.message} onChange={handleChange} error={errors.message} rows={6} />
              <div className="flex justify-end">
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </div>
  )
}

export default Contact


