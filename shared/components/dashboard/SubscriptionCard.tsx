import React from 'react'

const SubscriptionCard = () => {
  return (
    <div>
      <div className="rounded-xl border bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">
            Active Subscription
          </h2>

          <div className="mt-4 space-y-2">
            <p className="font-medium">Premium Plan</p>
            <p className="text-sm text-gray-500">
              AKTU
            </p>
            <p className="text-sm text-gray-500">
              B.Tech CSE
            </p>
            <p className="text-sm text-gray-500">
              Semester 4
            </p>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-500">
              Expires On
            </p>
            <p className="font-medium">
              12 Jan 2027
            </p>
          </div>

          <button className="mt-4 w-full rounded-lg border px-4 py-2">
            Manage Plan
          </button>
        </div>
    </div>
  )
}

export default SubscriptionCard
