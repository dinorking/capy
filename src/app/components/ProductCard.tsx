import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from "../../config/whatsapp";
import { PRODUCT } from "../../config/product";


interface ProductCardProps {
  name: string;
  features: string[];
  tag?: string;
  imageUrl: string;
}

export function ProductCard({ name, features, tag, imageUrl }: ProductCardProps) {
  // Define gradient based on edition name
  const getGradient = () => {
    if (name === 'Aventureira') return 'card-gradient-green';
    if (name === 'Moranguinho') return 'card-gradient-pink';
    if (name === 'Aniversariante') return 'card-gradient-orange';
    return 'card-gradient-blue';
  };

  const getEmoji = () => {
    if (name === 'Aventureira') return '🎒';
    if (name === 'Moranguinho') return '🍓';
    if (name === 'Aniversariante') return '🎉';
    return '🐾';
  };

  return (
    <div className="group relative">
      {/* Floating emoji decoration */}
      <div className="absolute -top-6 -right-6 text-6xl emoji-float z-10">
        {getEmoji()}
      </div>

      <div className={`${getGradient()} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-white`}>
        {/* Image Container with sticker effect */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-white m-3 rounded-3xl overflow-hidden border-4 border-white shadow-inner">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          {tag && (
            <div className="absolute top-6 right-6 bg-gradient-to-r from-amber-400 to-yellow-400 text-amber-900 px-4 py-2 rounded-full shadow-lg font-bold border-2 border-white">
              {tag} ⭐
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 bg-white">
          <h3 className="text-emerald-800 text-2xl">{name}</h3>
          
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-emerald-900">
                <span className="text-cyan-500 mt-1 text-xl sparkle">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <p className="text-center text-2xl font-bold text-emerald-700">
            {PRODUCT.price}
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:from-emerald-600 hover:to-emerald-700 transition-colors shadow-md hover:shadow-lg font-bold"
          >
            <MessageCircle size={20} />
            Quero essa no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}