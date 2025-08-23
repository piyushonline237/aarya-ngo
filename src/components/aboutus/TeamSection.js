export default function TeamSection() {
  const team = [
    { name: "Aarya Sharma", role: "Founder", img: "/team1.jpg" },
    { name: "Piyush Goel", role: "Director", img: "/team2.jpg" },
    { name: "Ritika Mehra", role: "Program Manager", img: "/team3.jpg" },
  ]

  return (
    <div>
      <h3 className="text-3xl font-bold text-[#022741] text-center mb-8">Our Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="bg-white shadow rounded-2xl p-6 text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
            />
            <h4 className="text-xl font-bold text-[#FBBF24]">{member.name}</h4>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
