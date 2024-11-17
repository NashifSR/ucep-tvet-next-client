import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-600 text-white h-screen p-6 my-3">
      <h2 className="text-2xl font-semibold mb-8">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard/profile">
            <p className="text-lg hover:text-gray-200">Profile</p>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/enrolledAssessment">
            <p className="text-lg hover:text-gray-200">Assessment Status</p>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/test-results">
            <p className="text-lg hover:text-gray-200">Test Results</p>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings">
            <p className="text-lg hover:text-gray-200">Settings</p>
          </Link>
        </li>
      </ul>
    </div>  
  )
}

export default Sidebar