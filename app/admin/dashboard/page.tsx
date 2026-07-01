import {
  Users,
  BookOpen,
  Crown,
  Activity,
  UserPlus,
  Upload,
  Building2,
  Bell,

} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "12,540",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Basic Users",
    value: "245",
    icon: Users,
    color: "bg-green-500",
  },
  {
    title: "Premium Users",
    value: "1,245",
    icon: Crown,
    color: "bg-yellow-500",
  },
  {
    title: "Notes Uploaded",
    value: "8,921",
    icon: BookOpen,
    color: "bg-purple-500",
  },
];

const recentActivities = [
  "New user registered",
  "Premium subscription purchased",
  "New notes uploaded",
  "University added",
  "Payment received",
];

const recentUsers = [
  {
    name: "Anuj",
    email: "anuj@example.com",
    role: "Student",
  },
  {
    name: "Rahul",
    email: "rahul@example.com",
    role: "Teacher",
  },
  {
    name: "Priya",
    email: "priya@example.com",
    role: "Student",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              <div
                className={`h-12 w-12 rounded-lg flex items-center justify-center text-white ${item.color}`}
              >
                <item.icon size={24} />
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Middle Section */}

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Recent Activity */}

        <div className="lg:col-span-2 rounded-xl border bg-white p-6 shadow-sm">

          <div className="flex items-center gap-2 mb-4">
            <Activity size={20} />
            <h2 className="font-semibold text-lg">
              Recent Activity
            </h2>
          </div>

          <div className="space-y-4">

            {recentActivities.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 border-b pb-3 last:border-none"
              >
                <div className="h-2 w-2 rounded-full bg-blue-600" />

                <p>{item}</p>
              </div>
            ))}

          </div>

        </div>

        {/* Quick Actions */}

        <div className="rounded-xl border bg-white p-6 shadow-sm">

          <h2 className="font-semibold text-lg mb-5">
            Quick Actions
          </h2>

          <div className="space-y-4">

            <button className="w-full rounded-lg bg-blue-600 text-white p-3 flex items-center gap-3 hover:bg-blue-700">
              <Building2 size={18} />
              Add University
            </button>

            <button className="w-full rounded-lg bg-green-600 text-white p-3 flex items-center gap-3 hover:bg-green-700">
              <Upload size={18} />
              Upload Notes
            </button>

            <button className="w-full rounded-lg bg-purple-600 text-white p-3 flex items-center gap-3 hover:bg-purple-700">
              <UserPlus size={18} />
              Manage Users
            </button>

            <button className="w-full rounded-lg bg-orange-600 text-white p-3 flex items-center gap-3 hover:bg-orange-700">
              <Bell size={18} />
              Announcement
            </button>

          </div>

        </div>

      </div>

      {/* Recent Users */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="text-lg font-semibold mb-5">
          Recent Users
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b text-left">

                <th className="pb-3">Name</th>
                <th className="pb-3">Email</th>
                <th className="pb-3">Role</th>

              </tr>

            </thead>

            <tbody>

              {recentUsers.map((user) => (
                <tr
                  key={user.email}
                  className="border-b last:border-none"
                >
                  <td className="py-4">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}