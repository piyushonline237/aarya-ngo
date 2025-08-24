export default function WorkOpportunities() {
  const jobs = [
    { title: "Program Coordinator", location: "Delhi", type: "Full-time" },
    { title: "Fundraising Executive", location: "Remote", type: "Part-time" },
    { title: "Community Outreach Officer", location: "Lucknow", type: "Full-time" },
  ]

  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-[rgb(1,23,40)] mb-10">
        Current Opportunities
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 bg-white shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-600">{job.location}</p>
            <p className="text-gray-600 mb-4">{job.type}</p>
            <button className="bg-[rgb(255,183,11)] text-white px-4 py-2 rounded-lg">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
