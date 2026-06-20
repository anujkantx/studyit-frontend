"use client";

import { useState } from "react";

export default function DashboardPage() {
  const [university, setUniversity] = useState("");
  const [program, setProgram] = useState("");
  const [semester, setSemester] = useState("");

  const subjects = [
    "DBMS",
    "Operating System",
    "Computer Networks",
    "Artificial Intelligence",
    "DAA",
  ];

  return (
    <div className="p-6">
      <div className="grid gap-6 lg:grid-cols-4">

        {/* Subscription Card */}
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

        {/* Selection Section */}
        <div className="rounded-xl border bg-white p-5 shadow-sm lg:col-span-3">
          <h2 className="text-lg font-semibold">
            Select Your Course
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">

            <select
              value={university}
              onChange={(e) =>
                setUniversity(e.target.value)
              }
              className="rounded-lg border p-3"
            >
              <option value="">
                Select University
              </option>
              <option value="AKTU">
                AKTU
              </option>
              <option value="DU">
                Delhi University
              </option>
            </select>

            <select
              value={program}
              onChange={(e) =>
                setProgram(e.target.value)
              }
              className="rounded-lg border p-3"
            >
              <option value="">
                Select Program
              </option>
              <option value="BTech CSE">
                B.Tech CSE
              </option>
              <option value="BCA">
                BCA
              </option>
            </select>

            <select
              value={semester}
              onChange={(e) =>
                setSemester(e.target.value)
              }
              className="rounded-lg border p-3"
            >
              <option value="">
                Select Semester
              </option>
              <option value="4">
                Semester 4
              </option>
              <option value="5">
                Semester 5
              </option>
            </select>

          </div>

          <button className="mt-4 rounded-lg bg-black px-5 py-2 text-white">
            Load Subjects
          </button>
        </div>
      </div>

      {/* Subjects */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">
          Subjects
        </h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject) => (
            <div
              key={subject}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold">
                📘 {subject}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Notes, PYQs and Quizzes available
              </p>

              <button className="mt-4 rounded-lg border px-4 py-2">
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}