interface StepCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function StepCard({ number, icon, title, description }: StepCardProps) {
  const getGradient = () => {
    if (number === '1') return 'from-cyan-400 to-cyan-500';
    if (number === '2') return 'from-emerald-400 to-emerald-500';
    if (number === '3') return 'from-amber-400 to-amber-500';
    return 'from-pink-400 to-pink-500';
  };

  const getBgColor = () => {
    if (number === '1') return 'card-gradient-blue';
    if (number === '2') return 'card-gradient-green';
    if (number === '3') return 'card-gradient-orange';
    return 'bg-pink-50';
  };

  return (
    <div className={`relative ${getBgColor()} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-4 border-white`}>
      {/* Number Badge */}
      <div className={`absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br ${getGradient()} text-white rounded-full flex items-center justify-center shadow-xl border-4 border-white`}>
        <span className="font-bold text-2xl">{number}</span>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-4 text-emerald-700">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-center text-emerald-900 mb-2 font-bold">{title}</h4>

      {/* Description */}
      <p className="text-center text-emerald-800">{description}</p>
    </div>
  );
}