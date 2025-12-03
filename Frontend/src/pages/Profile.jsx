import Card from '../components/Card'
import Button from '../components/Button'

const Profile = () => {
  const user = {
    name: 'Sample User',
    email: 'user@example.com',
    joined: 'Jan 2024'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
          <p className="text-gray-600">Manage your account information and preferences.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <div className="flex items-center">
              <div className="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold text-gray-700">
                {user.name[0]}
              </div>
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-900">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-500 text-sm">Joined {user.joined}</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Preferences</h2>
            <div className="space-y-3">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                <span className="ml-2 text-sm text-gray-700">Email notifications</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
                <span className="ml-2 text-sm text-gray-700">SMS alerts</span>
              </label>
            </div>
            <div className="mt-4">
              <Button>Save Changes</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Profile


