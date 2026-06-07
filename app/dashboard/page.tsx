const Dashboard = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg text-gray-700">Welcome to your dashboard. Here you can access your notes, practice questions, and quizzes.</p>
            <div className="mt-6 space-y-4">
                {[
                    ["Notes", "Organize your study material with ease."],
                    ["Practice Questions", "Test your knowledge with curated questions."],
                    ["Quizzes", "Challenge yourself with interactive quizzes."],
                ].map(([title, description]) => (
                    <div key={title} className="rounded-lg border border-gray-300 p-4">
                        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                        <p className="mt-1 text-sm text-gray-600">{description}</p>
                    </div>
                ))}
            </div> 
    </div>
  )
}

export default Dashboard
