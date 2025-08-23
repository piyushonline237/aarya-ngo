export default function MissionVision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white shadow rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-[#FBBF24] mb-4">Our Mission</h3>
        <p className="text-gray-700">
          To empower underprivileged communities by providing access to education, 
          healthcare, and sustainable livelihood opportunities.
        </p>
      </div>
      <div className="bg-white shadow rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-[#FBBF24] mb-4">Our Vision</h3>
        <p className="text-gray-700">
          A world where every individual has the opportunity to live with dignity, 
          equal opportunities, and a sustainable future.
        </p>
      </div>
    </div>
  )
}
