import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
}

export function TestimonialCard({ name, text }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-4 border-emerald-100 relative">
      {/* Decorative emoji */}
      <div className="absolute -top-4 -right-4 text-4xl emoji-float">💛</div>
      
      {/* Stars */}
      <div className="flex gap-1 mb-3 justify-center">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} className="fill-amber-400 text-amber-400 sparkle" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-emerald-900 mb-4 italic text-center">"{text}"</p>

      {/* Name */}
      <p className="text-cyan-600 text-center font-bold">— {name}</p>
    </div>
  );
}