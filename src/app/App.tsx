import { useState, useEffect } from 'react';
import { PRODUCT } from "../config/product";
import { WHATSAPP_URL } from "../config/whatsapp";
import { Header } from '../app/components/Header';
import { ProductCard } from '../app/components/ProductCard';
import { TestimonialCard } from '../app/components/TestimonialCard';
import { StepCard } from '../app/components/StepCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../app/components/ui/accordion';
import {
  Heart,
  Sparkles,
  Shield,
  Package,
  Truck,
  Globe,
  MessageCircle,
  MapPin,
  CreditCard,
  Instagram,
  ChevronUp,
} from 'lucide-react';


export default function App() {
  const [showMobileButton, setShowMobileButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-emerald-50 to-amber-50">
      <Header whatsappUrl={WHATSAPP_URL} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-cyan-100 via-emerald-100 to-yellow-100">
        {/* Decorative Elements - More vivid and playful */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blob-decoration absolute top-10 left-10 w-64 h-64 bg-emerald-400"></div>
          <div className="blob-decoration absolute top-40 right-20 w-80 h-80 bg-cyan-400" style={{ animationDelay: '2s' }}></div>
          <div className="blob-decoration absolute bottom-20 left-1/4 w-72 h-72 bg-yellow-300" style={{ animationDelay: '4s' }}></div>
          <div className="blob-decoration absolute bottom-40 right-1/3 w-56 h-56 bg-pink-300" style={{ animationDelay: '1s' }}></div>
          
          {/* Floating emojis */}
          <div className="absolute top-32 right-1/4 text-4xl emoji-float">🌿</div>
          <div className="absolute top-1/2 left-10 text-3xl emoji-float" style={{ animationDelay: '1s' }}>💦</div>
          <div className="absolute bottom-32 right-10 text-3xl emoji-float" style={{ animationDelay: '0.5s' }}>✨</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl leading-tight">
                <span className="text-orange-600">Uma capivara fofinha,</span>{' '}
                <span className="text-emerald-600">macia</span>{' '}
                <span className="text-cyan-600">e pronta pra morar com você</span>{' '}
                <span className="inline-block emoji-float">🧡</span>
              </h1>

              <p className="text-xl text-amber-900">
                  <strong>{PRODUCT.size} de maciez</strong> + carinha de "me leva pra casa".{" "}
                  {PRODUCT.shipping.ready}. Quando acaba, é encomenda ({PRODUCT.shipping.order}) 💛
              </p>
              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-white/60 p-3 rounded-2xl backdrop-blur-sm">
                  <Sparkles className="text-cyan-500 flex-shrink-0 mt-1 sparkle" size={24} />
                  <div>
                    <p className="text-emerald-900">Pelo macio de verdade (daqueles que dá vontade de apertar)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/60 p-3 rounded-2xl backdrop-blur-sm">
                  <Heart className="text-pink-500 flex-shrink-0 mt-1 sparkle" size={24} />
                  <div>
                    <p className="text-emerald-900">Enchimento fofinho (abraço aprovado)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/60 p-3 rounded-2xl backdrop-blur-sm">
                  <Shield className="text-emerald-500 flex-shrink-0 mt-1 sparkle" size={24} />
                  <div>
                    <p className="text-emerald-900">Costura reforçada (pra aguentar carinho)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/60 p-3 rounded-2xl backdrop-blur-sm">
                  <Package className="text-amber-500 flex-shrink-0 mt-1 sparkle" size={24} />
                  <div>
                    <p className="text-emerald-900">Edições com acessórios (alguns removíveis ✨)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/60 p-3 rounded-2xl backdrop-blur-sm">
                  <Truck className="text-cyan-600 flex-shrink-0 mt-1 sparkle" size={24} />
                  <div>
                    <p className="text-emerald-900">{PRODUCT.shipping.ready}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/60 p-3 rounded-2xl backdrop-blur-sm">
                  <Globe className="text-emerald-600 flex-shrink-0 mt-1 sparkle" size={24} />
                  <div>
                    <p className="text-emerald-900">Envio pro Brasil todo</p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MessageCircle size={24} />
                  <span className="font-bold">Quero minha Capy 🐾</span>
                </a>
                <button
                  onClick={() => document.getElementById('edicoes')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white border-3 border-emerald-500 text-emerald-700 rounded-full hover:bg-emerald-50 transition-colors shadow-md font-bold"
                >
                  Ver edições 🌿
                </button>
              </div>

              {/* Microcopy */}
              <div className="bg-yellow-100 border-2 border-yellow-400 p-4 rounded-2xl">
                <p className="text-sm text-amber-900 flex items-center gap-2">
                  <span className="text-2xl">⏰</span>
                  <span>
                    <strong>Estoque limitado</strong> na pronta entrega. Quando acaba, é encomenda ({PRODUCT.shipping.order}) 🐾
                  </span>
                  </p>
              </div>
            </div>

            {/* Right Column - Hero Image with Sticker Effect */}
            <div className="relative">
              <div className="sticker-frame bg-gradient-to-br from-white to-cyan-50 p-2">
                <img
                  src="https://images.unsplash.com/photo-1691063056270-678efd5af347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXB5YmFyYSUyMGN1dGV8ZW58MXx8fHwxNzY4NzY1MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Capivara fofa"
                  className="w-full h-auto rounded-3xl"
                />
              </div>
              {/* Decorative stickers around image */}
              <div className="absolute -top-4 -right-4 text-5xl emoji-float">🌿</div>
              <div className="absolute -bottom-6 -left-6 text-5xl emoji-float" style={{ animationDelay: '1s' }}>💦</div>
              <div className="absolute top-1/2 -right-8 text-4xl emoji-float" style={{ animationDelay: '0.5s' }}>✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Editions Section */}
      <section id="edicoes" className="py-16 md:py-24 bg-gradient-to-b from-white via-cyan-50 to-emerald-50 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-48 h-48 bg-emerald-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-cyan-300 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">
              <span className="text-emerald-600">3 edições</span>{' '}
              <span className="text-orange-500">pra escolher</span>{' '}
              <span className="text-cyan-600">a sua Capy favorita</span>{' '}
              <span className="inline-block emoji-float">🐾</span>
            </h2>
            <p className="text-xl text-amber-900">
              Todas com <strong>23 cm</strong>. Mudam os acessórios e o mood.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <ProductCard
              name="Aventureira"
              features={[
                'Vem com mochilinha de tartaruga removível (sim, é tão fofa quanto parece) 🎒🐢',
                'Vibe exploradora',
                'Perfeita pra quem ama natureza',
              ]}
              tag="Pronta entrega"
              imageUrl="https://images.unsplash.com/photo-1736067780889-740ea83acad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXB5YmFyYSUyMHBsdXNoJTIwdG95fGVufDF8fHx8MTc2ODc2NTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <ProductCard
              name="Moranguinho"
              features={[
                'Chapéu de morango removível pra ficar "ai que gracinha" 🍓',
                'Fofo nível máximo',
                'Cara de presente',
              ]}
              tag="Pronta entrega"
              imageUrl="https://images.unsplash.com/photo-1691063056270-678efd5af347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXB5YmFyYSUyMGN1dGV8ZW58MXx8fHwxNzY4NzY1MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
            <ProductCard
              name="Aniversariante"
              features={[
                'Chapéu fixo pra viver em clima de parabéns 🎉',
                'Pronta pra festa',
                'A mais "parabéns" de todas',
              ]}
              tag="Encomenda"
              imageUrl="https://images.unsplash.com/photo-1691063056270-678efd5af347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXB5YmFyYSUyMGN1dGV8ZW58MXx8fHwxNzY4NzY1MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            />
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section id="detalhes" className="py-16 md:py-24 bg-gradient-to-br from-emerald-100 to-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1668765688107-dfe291d7605e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGxlYXZlcyUyMGdyZWVufGVufDF8fHx8MTc2ODc2NTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Detalhes da pelúcia"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl text-emerald-800">
                Detalhes que você sente na mão
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md">
                  <Sparkles className="text-cyan-500 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="text-emerald-800 mb-1">Pelo bem macio</h4>
                    <p className="text-gray-600">Sensação gostosa de apertar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md">
                  <Heart className="text-pink-500 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="text-emerald-800 mb-1">Enchimento fofinho</h4>
                    <p className="text-gray-600">Macio e confortável</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md">
                  <Shield className="text-emerald-500 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="text-emerald-800 mb-1">Costura reforçada</h4>
                    <p className="text-gray-600">Feita pra durar</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md">
                  <Package className="text-amber-500 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="text-emerald-800 mb-1">23 cm (tamanho perfeito pra abraço)</h4>
                    <p className="text-gray-600">Nem muito grande, nem muito pequeno</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-md">
                  <Sparkles className="text-amber-400 flex-shrink-0" size={28} />
                  <div>
                    <h4 className="text-emerald-800 mb-1">Acessórios (dependendo da edição)</h4>
                    <p className="text-gray-600">Removíveis na Aventureira e Moranguinho</p>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-500 p-6 rounded-2xl text-white shadow-lg">
                <p className="flex items-center gap-2">
                  <MapPin size={24} />
                  Me manda seu CEP e a edição que você quer que eu já te diga o frete 🐾
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="como-comprar" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-emerald-800 mb-4">
              Como comprar (sem mistério)
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <StepCard
              number="1"
              icon={<MessageCircle size={48} />}
              title="Clica em 'Quero minha Capy'"
              description="Vai abrir o WhatsApp direto comigo"
            />
            <StepCard
              number="2"
              icon={<MapPin size={48} />}
              title="Me manda: edição + CEP + quantidade"
              description="Te passo o valor do frete na hora"
            />
            <StepCard
              number="3"
              icon={<CreditCard size={48} />}
              title="Fechou! Eu envio em até 2 dias úteis"
              description="Ou faço por encomenda em até 30 dias"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-16 md:py-24 bg-gradient-to-br from-cyan-100 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-emerald-800 mb-4">
              O que estão falando
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Ju..."
              text="Chegou rapidinho e é MUITO macia. Vontade de levar pra todo lugar."
            />
            <TestimonialCard
              name="Mari..."
              text="A edição Moranguinho é perfeita, dá pra tirar o chapéu e fica uma fofura."
            />
            <TestimonialCard
              name="Gui..."
              text="Bem feita, costura firme, e ainda mais bonita ao vivo."
            />
          </div>
        </div>
      </section>

      {/* Instagram CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl text-white mb-4">
            Bora encher o feed de Capy?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Segue a gente pra ver novas edições e reposições.
          </p>
          <a
            href="https://www.instagram.com/capy.lucia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Instagram size={28} />
            Seguir @capy.lucia
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl text-emerald-800 mb-4">
              Perguntas frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-emerald-50 rounded-2xl px-6 border-none">
              <AccordionTrigger className="text-emerald-800 hover:no-underline">
                Qual o tamanho?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Aproximadamente 23 cm.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-emerald-50 rounded-2xl px-6 border-none">
              <AccordionTrigger className="text-emerald-800 hover:no-underline">
                Vocês enviam pro Brasil todo?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Sim, enviamos para todo o Brasil.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-emerald-50 rounded-2xl px-6 border-none">
              <AccordionTrigger className="text-emerald-800 hover:no-underline">
                Em quanto tempo vocês postam?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Em até 2 dias úteis para produtos em pronta entrega.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-emerald-50 rounded-2xl px-6 border-none">
              <AccordionTrigger className="text-emerald-800 hover:no-underline">
                E se acabar?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Dá pra encomendar com prazo de até 30 dias.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-emerald-50 rounded-2xl px-6 border-none">
              <AccordionTrigger className="text-emerald-800 hover:no-underline">
                Tem troca?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {PRODUCT.exchange}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-emerald-50 rounded-2xl px-6 border-none">
              <AccordionTrigger className="text-emerald-800 hover:no-underline">
                Os acessórios são removíveis?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Depende da edição: Aventureira e Moranguinho são removíveis; Aniversariante não.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl mb-3">🦫 Capy Lucia Pelúcia</h3>
              <p className="text-emerald-200">
                A capivara mais fofa do seu feed
              </p>
            </div>

            <div>
              <h4 className="mb-3">Redes Sociais</h4>
              <a
                href="https://www.instagram.com/capy.lucia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-200 hover:text-white transition-colors justify-center md:justify-start"
              >
                <Instagram size={20} />
                @capy.lucia
              </a>
            </div>

            <div>
              <h4 className="mb-3">Atendimento</h4>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-200 hover:text-white transition-colors justify-center md:justify-start"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <p className="text-emerald-300 text-sm mt-4">
                {PRODUCT.exchange}
              </p>
            </div>
          </div>

          <div className="border-t border-emerald-700 mt-8 pt-8 text-center text-emerald-300 text-sm">
            <p>© 2026 Capy Lucia Pelúcia. Feito com amor e capivara. 🦫💚</p>
          </div>
        </div>
      </footer>

      {/* Mobile Fixed Button */}
      {showMobileButton && (
        <div className="fixed bottom-6 left-0 right-0 z-40 px-4 md:hidden">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-all shadow-2xl"
          >
            <MessageCircle size={24} />
            Quero minha Capy
          </a>
        </div>
      )}

      {/* Floating Fixed Button - Always Visible */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Quero minha Capy no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3.5 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 active:scale-95"
      >
        <MessageCircle size={22} />
        <span className="hidden sm:inline">Quero minha Capy 🐾</span>
      </a>

      {/* Scroll to Top Button */}
      {showMobileButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hidden md:flex fixed bottom-24 right-6 z-40 items-center justify-center w-12 h-12 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}