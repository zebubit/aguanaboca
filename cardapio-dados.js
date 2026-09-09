// Fonte única de preços e itens. Cardápio, site e (futuro) bio leem daqui.
const LOJA = {
  nome: "Doceria Água na Boca",
  whatsapp: "5565996112977",
  instagram: "https://www.instagram.com/aguanaboca.cuiaba",
  endereco: "Av. Brasília, 1258 - Jardim das Américas, Cuiabá - MT",
  nota: 4.6,
  pedidoMinimo: 15
};

const CARDAPIO = [
  {
    categoria: "Destaques",
    itens: [
      { nome: "Bolo no Pote Brownie com Mousse Meio Amargo", desc: "Brownie intercalado com mousse de chocolate meio amargo e calda de ganache. 230ml.", serve: "1 pessoa", preco: 15.00, precoDe: 25.00 },
      { nome: "Vulcão Duo", desc: "Massa de baunilha e cacau, molhadinha, com calda de leite Ninho e brigadeiro. Deve manter refrigerado.", serve: "4 a 8 pessoas", preco: 69.99, precoDe: 100.00 }
    ]
  },
  {
    categoria: "Morangos Hypados",
    itens: [
      { nome: "Morango Cravejado", desc: "Original - chocolate branco. Brigadeiro Ninho envolvendo um morango inteiro, banhado em chocolate branco com caramelo.", serve: "1 unidade", preco: 25.00, img: "img/morango-cravejado-arte.jpg" },
      { nome: "Morango do Amor", desc: "O clássico. 1 unidade.", serve: "1 unidade", preco: 25.00, img: "img/morango-do-amor-1.jpg" }
    ]
  },
  {
    categoria: "Ideal para Presentear",
    itens: [
      { nome: "Kit Amor", desc: "2un coxinha de brigadeiro com morango + 2un coxinha de leite Ninho com morango, com caixinha de presente.", preco: 78.60, img: "img/kit-bombons-1.jpg" },
      { nome: "Kit Carinho", desc: "2 morangos cravejados + 2 bombons de morango tradicional, com caixinha de presente.", preco: 98.80, img: "img/kit-bombons-2.jpg" },
      { nome: "Kit Encanto", desc: "2 bombons de morango tradicional + 2 morangos do amor, em caixa personalizada.", preco: 98.90, img: "img/kit-bombons-3.jpg" },
      { nome: "Kit Gratidão", desc: "4 morangos cravejados com caixinha de presente.", preco: 100.00, img: "img/vitrine-loja.jpg" },
      { nome: "Kit Sonho Meu", desc: "1 morango cravejado + 1 morango do amor + 1 bombom de morango + 1 coxinha de brigadeiro com morango.", preco: 92.80, img: "img/kit-bombons-3.jpg" },
      { nome: "Kit Ternura", desc: "4 bombons tradicionais de morango com caixinha de presente.", preco: 91.60, img: "img/mordida-1.jpg" }
    ]
  },
  {
    categoria: "As Fatias Mais Irresistíveis de Cuiabá",
    itens: [
      { nome: "Fatia Matilda", desc: "Bolo chocolatudo! Pra quem ama muito brigadeiro.", preco: 38.90, img: "img/fatia-chocolate-1.jpg" },
      { nome: "Fatia Suspiro Morango e Nata", desc: "", preco: 38.98, img: "img/fatia-morango-prato.jpg" },
      { nome: "Fatia Dois Amores", desc: "Massa de chocolate, com recheio de brigadeiro e leite Ninho. 330g.", serve: "1 pessoa", preco: 38.90, img: "img/fatia-chocolate-2.jpg" },
      { nome: "Fatia Floresta Negra", desc: "Massa de chocolate, brigadeiro cremoso e mousse de chocolate meio amargo intercalado com cerejas (só uma camada leva cereja). 230g.", preco: 38.90 }
    ]
  },
  {
    categoria: "Queridinhos",
    itens: [
      { nome: "Travessa Morango com Ganache", desc: "Camadas de Ninho, chocolate e morangos.", preco: 180.00, img: "img/travessa-morango-ganache.jpg" },
      { nome: "Travessa Nuvem de Morango", desc: "Serve em média 10 pessoas. Não contém massa de bolo.", preco: 180.00, img: "img/bolo-morango-completo.jpg" }
    ]
  },
  {
    categoria: "Tortas Babys",
    itens: [
      { nome: "Torta Baby Brigadeiro Belga", desc: "Massa de chocolate molhadinha e recheio de brigadeiro.", preco: 55.00, img: "img/torta-baby.jpg" },
      { nome: "Torta Baby Choco Ninho", desc: "Massa de baunilha com recheio de leite Ninho e brigadeiro.", preco: 55.00, img: "img/torta-baby.jpg" },
      { nome: "Caixinha Pra Presente Torta Baby", desc: "", preco: 15.00, img: "img/torta-baby.jpg" }
    ]
  },
  {
    categoria: "Nossos Queridinhos",
    itens: [
      { nome: "Pão de Mel", desc: "Massa fofinha, banhado na cobertura de chocolate.", preco: 20.00 }
    ]
  },
  {
    categoria: "Brownie",
    itens: [
      { nome: "Brownie Tradicional", desc: "Sem recheio. Massa crocante e macia.", serve: "1 pessoa", preco: 18.99 },
      { nome: "Lasanha de Brownie", desc: "Camadas de leite Ninho, brigadeiro e morango, com calda de chocolate quentinha.", serve: "1 pessoa (dá pra dividir)", preco: 50.00, img: "img/brownie-sorvete.jpg" },
      { nome: "Brownie Supremo de Nutella", desc: "Super recheado de Nutella.", preco: 20.00 }
    ]
  },
  {
    categoria: "Coxinha de Morango",
    itens: [
      { nome: "Coxinha Leite Ninho", desc: "Leite Ninho envolvendo um morango inteiro e Nutella na finalização.", serve: "1 pessoa", preco: 19.99, img: "img/coxinha-morango.jpg" },
      { nome: "Coxinha Ferrero Rocher", desc: "Massa de brigadeiro com morango dentro, finalizado com castanhas e Nutella.", preco: 19.90, img: "img/coxinha-morango.jpg" },
      { nome: "Coxinha de Brigadeiro", desc: "Brigadeiro envolvendo um morango inteiro, finalizado com granulado belga.", serve: "1 pessoa", preco: 19.90, img: "img/coxinha-morango.jpg" }
    ]
  },
  {
    categoria: "Bombons Mais Queridinhos",
    itens: [
      { nome: "Bombom de Morango Tradicional", desc: "Casquinha de chocolate, recheio de Ninho cremoso, morango inteiro. ~100g.", serve: "1 pessoa", preco: 22.90, img: "img/mordida-2.jpg" }
    ]
  },
  {
    categoria: "Verrine - Copo da Felicidade",
    itens: [
      { nome: "Copo da Felicidade Banoffe", desc: "Biscoito, doce de leite, banana, calda caramelizada e creme de leite Ninho. 250ml.", serve: "1 pessoa", preco: 28.00 },
      { nome: "Copo da Felicidade Bombom de Uva", desc: "Uva inteira, recheio de Ninho, musse de Ninho e cobertura de chocolate com ganache.", preco: 28.00 }
    ]
  },
  {
    categoria: "Bolo no Pote",
    itens: [
      { nome: "Bolo no Pote Brigadeiro", desc: "Massa de cacau com recheio cremoso de brigadeiro. 230ml.", serve: "1 pessoa", preco: 25.00 },
      { nome: "Bolo no Pote Brownie com Mousse Meio Amargo", desc: "Brownie intercalado com mousse de chocolate meio amargo e calda de ganache. 230ml.", serve: "1 pessoa", preco: 15.00, precoDe: 25.00 }
    ]
  },
  {
    categoria: "Cup Cake",
    itens: [
      { nome: "Cup Cake Dois Amores", desc: "Massa de cacau, com recheio de leite Ninho e brigadeiro.", serve: "1 pessoa", preco: 25.00 }
    ]
  },
  {
    categoria: "Bebidas",
    itens: [
      { nome: "Suco de Morango Natural", desc: "300ml na garrafa.", serve: "1 pessoa", preco: 25.00 },
      { nome: "Água com Gás", desc: "", preco: 8.00 },
      { nome: "Água sem Gás", desc: "", preco: 8.00 },
      { nome: "Coca-Cola", desc: "", preco: 8.00 },
      { nome: "Coca-Cola Zero", desc: "", preco: 8.00 },
      { nome: "Coca-Cola Garrafa 2L", desc: "Bem gelada.", preco: 18.00 }
    ]
  },
  {
    categoria: "Linha Cuiabana",
    itens: [
      { nome: "Pastel de Carne Seca com Banana", desc: "", preco: 16.00 }
    ]
  }
];
