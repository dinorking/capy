const PHONE = "5532998389406";

const MESSAGE = encodeURIComponent(
  "Oi 🐹💛 Quero minha Capy Lucia Pelúcia!\n\n" +
  "• Edição desejada:\n" +
  "• Quantidade:\n" +
  "• CEP para envio:\n" +
  "• Pronta entrega ou encomenda?\n"
);

export const WHATSAPP_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;
