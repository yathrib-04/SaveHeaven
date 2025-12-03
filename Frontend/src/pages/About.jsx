import Card from '../components/Card'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">About Save Heaven</h1>
          <p className="text-lg text-gray-600">Our mission is to provide a safe, supportive, and secure platform for reporting and accessing resources.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600">We empower individuals with confidential reporting tools and connect them with the right support.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
            <p className="text-gray-600">Compassion, privacy, and accessibility are at the heart of everything we do.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Community</h3>
            <p className="text-gray-600">We foster a supportive community and collaborate with trusted partners and professionals.</p>
          </Card>
        </div>

        <Card>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How it works</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Submit a confidential report with details you are comfortable sharing.</li>
            <li>Our team reviews and routes your report to appropriate support channels.</li>
            <li>Access tailored resources and track updates from your dashboard.</li>
          </ol>
        </Card>
      </div>
    </div>
  )
}

export default About


