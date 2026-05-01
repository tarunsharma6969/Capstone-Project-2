function SummaryCard({ title, value, icon, color }) {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 border border-slate-800">
      <div className="flex justify-between items-center">
        
        {/* Text */}
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <h2 className="text-3xl font-bold mt-2">{value}</h2>
        </div>

        {/* Icon */}
        <div className={`text-4xl ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;