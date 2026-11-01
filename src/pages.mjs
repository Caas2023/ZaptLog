const neighborhoods = [
  ['motoboy-bras','Brás','Motoboy no Brás para lojas e atacado de roupas','Rua Oriente, Rua Miller e Rua Silva Teles','confecções, atacadistas e aviamentos','peças piloto, amostras e pedidos embalados','servicos/motoboy-confeccao-roupas-bras','rotas/motoboy-bras-para-bom-retiro'],
  ['motoboy-pari','Pari','Motoboy no Pari para atacadistas e importadores','Rua Canindé e Rua Santa Caetana','importadores, armarinhos e atacado','mostruários, documentos fiscais e itens pequenos','servicos/motoboy-graficas-amostras-impressos','rotas/motoboy-pari-para-bras'],
  ['motoboy-tatuape','Tatuapé','Motoboy no Tatuapé para clínicas, escritórios e comércio','Rua Tuiuti, Celso Garcia e Radial Leste','clínicas, escritórios e lojas','contratos, exames embalados e encomendas pequenas','servicos/motoboy-clinicas-proteses-dentarias','rotas/motoboy-tatuape-para-avenida-paulista'],
  ['motoboy-vila-guilherme','Vila Guilherme','Motoboy na Vila Guilherme para oficinas e autopeças','Avenida Joaquina Ramalho, Zaki Narchi e Expo Center Norte','oficinas, distribuidores de autopeças e eventos','sensores, correias, pastilhas e documentos técnicos','servicos/motoboy-autopecas-oficinas','rotas/motoboy-vila-guilherme-para-centro-sp'],
  ['motoboy-parque-novo-mundo','Parque Novo Mundo','Motoboy no Parque Novo Mundo para transportadoras','Marginal Tietê, Dutra e Fernão Dias','transportadoras, galpões e operadores logísticos','canhotos, CTe, notas fiscais e peças técnicas','servicos/motoboy-transportadoras-canhotos-nf','rotas/motoboy-parque-novo-mundo-para-aeroporto-guarulhos'],
  ['motoboy-belem','Belém','Motoboy no Belém para gráficas e comércio local','Avenida Celso Garcia e entorno do Belém','gráficas, indústrias leves e comércio','provas de impressão, embalagens e documentos','servicos/motoboy-graficas-amostras-impressos','rotas/motoboy-bras-para-tatuape'],
  ['motoboy-mooca','Mooca','Motoboy na Mooca para comércio e oficinas','Rua da Mooca e Avenida Paes de Barros','comércio tradicional, oficinas e escritórios','peças, contratos e pedidos embalados','servicos/motoboy-autopecas-oficinas','rotas/motoboy-tatuape-para-avenida-paulista'],
  ['motoboy-caninde','Canindé','Motoboy no Canindé para feiras e comércio popular','Rua Canindé e Avenida Cruzeiro do Sul','feiras populares, sacoleiros e comércio','amostras, documentos e pacotes pequenos','servicos/motoboy-feirinha-madrugada','rotas/motoboy-pari-para-bras'],
  ['motoboy-analia-franco','Jardim Anália Franco','Motoboy no Anália Franco para clínicas e boutiques','Rua Eleonora Cintra e Shopping Anália Franco','clínicas, estética e comércio premium','documentos, pequenas encomendas e insumos','servicos/motoboy-clinicas-proteses-dentarias','rotas/motoboy-bras-para-tatuape'],
  ['motoboy-ponte-pequena-armenia','Ponte Pequena e Armênia','Motoboy na Armênia e Ponte Pequena para eixo Centro-Norte','Avenida do Estado e Marginal Tietê','empresas do eixo logístico Centro-Norte','malotes, notas e pacotes pequenos','servicos/motoboy-escritorios-contabilidade-advocacia','rotas/motoboy-vila-guilherme-para-centro-sp']
];

const localPages = neighborhoods.map(([slug, area, h1, streets, audience, cargo, service, route]) => ({ slug, path: `/${slug}`, cluster: 'neighborhood', area, h1, title: `${h1} | Motoboy Express SP`, description: `Chame motoboy para ${area}. Atendimento por WhatsApp para ${audience}; só itens compatíveis com baú fechado.`, facts: { streets, audience, cargo }, relatedPaths: [`/${service}`, `/${route}`, '/limites-carga-bau-moto'] }));

const services = [
 ['motoboy-confeccao-roupas-bras','Motoboy para confecção e roupas no Brás','Peças piloto, aviamentos e pedidos de roupas embalados entre lojas, oficinas e clientes.','Brás'],
 ['motoboy-transportadoras-canhotos-nf','Motoboy para canhotos e notas fiscais','Coleta de canhotos, CTe e documentos operacionais para transportadoras e galpões.','Parque Novo Mundo'],
 ['motoboy-autopecas-oficinas','Motoboy para autopeças e oficinas','Despacho de sensores, correias e peças compactas para evitar parada de oficina.','Vila Guilherme'],
 ['motoboy-clinicas-proteses-dentarias','Motoboy para clínicas e próteses dentárias','Transporte cuidadoso de moldes, alinhadores e documentos entre clínicas e laboratórios.','Tatuapé'],
 ['motoboy-cartorios-reconhecimento-firma','Motoboy para cartórios e reconhecimento de firma','Malotes com contratos e certidões para rotinas administrativas e cartoriais.','Tatuapé'],
 ['motoboy-ecommerce-coleta-agencias-correios','Motoboy para e-commerce e coleta em agências','Apoio a despachos de pequenas encomendas em agências e pontos de postagem.','Brás'],
 ['motoboy-graficas-amostras-impressos','Motoboy para gráficas e amostras impressas','Entrega de provas de impressão, materiais compactos e embalagens pequenas.','Belém'],
 ['motoboy-feirinha-madrugada','Motoboy para Feirinha da Madrugada','Coleta organizada de volumes pequenos para lojistas e compradores do polo de confecção.','Brás'],
 ['motoboy-escritorios-contabilidade-advocacia','Motoboy para escritórios e contabilidade','Malotes de contratos, livros fiscais e documentos corporativos sob conferência.','Tatuapé'],
 ['motoboy-maquininhas-cartao-ti','Motoboy para maquininhas e equipamentos de TI','Entrega de POS, roteadores e pequenos acessórios para pontos comerciais.','Vila Guilherme']
].map(([slug,h1,detail,area]) => ({ slug, path:`/servicos/${slug}`, cluster:'service', area, h1, title:`${h1} | Motoboy Express SP`, description:`${detail} Atendimento humano por WhatsApp, com triagem do baú antes da coleta.`, facts:{ detail }, relatedPaths:['/como-solicitar-cotacao-motoboy','/limites-carga-bau-moto', `/${localPages.find(p=>p.area===area)?.slug||'motoboy-bras'}`] }));

const routes = [
  ['motoboy-bras-para-bom-retiro','Brás','Bom Retiro','confecção entre polos têxteis'],
  ['motoboy-bras-para-tatuape','Brás','Tatuapé','atacado e varejo da Zona Leste'],
  ['motoboy-parque-novo-mundo-para-aeroporto-guarulhos','Parque Novo Mundo','Aeroporto de Guarulhos','documentos e itens compatíveis com despacho'],
  ['motoboy-vila-guilherme-para-centro-sp','Vila Guilherme','Centro de São Paulo','autopeças compactas e malotes'],
  ['motoboy-pari-para-bras','Pari','Brás','utilidades, documentos e reposição pequena'],
  ['motoboy-tatuape-para-avenida-paulista','Tatuapé','Avenida Paulista','malotes e documentos corporativos'],
  ['motoboy-bras-para-itaim-bibi','Brás','Itaim Bibi','amostras e mostruários de confecção para boutiques'],
  ['motoboy-bras-para-santana','Brás','Santana','reposição ágil de confecção e pedidos para a Zona Norte'],
  ['motoboy-bras-para-santo-andre','Brás','Santo André','despacho avulso de atacado de roupas para o ABC'],
  ['motoboy-pari-para-santa-efigenia','Pari','Santa Efigênia','componentes eletrônicos, cabos e suprimentos'],
  ['motoboy-tatuape-para-faria-lima','Tatuapé','Faria Lima','malotes jurídicos, contratos e documentos corporativos'],
  ['motoboy-mooca-para-centro-sp','Mooca','Centro de São Paulo','documentos fiscais, cartórios e certidões'],
  ['motoboy-bras-para-rodoviaria-tiete','Brás','Rodoviária do Tietê','despacho expresso de encomendas para ônibus'],
  ['motoboy-zona-leste-para-congonhas','Zona Leste','Aeroporto de Congonhas','documentos e encomendas para o terminal de cargas']
].map(([slug,from,to,detail]) => ({slug,path:`/rotas/${slug}`,cluster:'route',area:`${from} para ${to}`,h1:`Motoboy do ${from} para ${to}`,title:`Motoboy ${from} para ${to} | Motoboy Express SP`,description:`Entrega de moto do ${from} para ${to} para ${detail}. Confirme carga e receba cotação no WhatsApp.`,facts:{detail},relatedPaths:['/como-solicitar-cotacao-motoboy','/limites-carga-bau-moto']}));

const tools = [
 ['como-solicitar-cotacao-motoboy','Como solicitar cotação de motoboy','Envie o tipo de material, as medidas e os endereços para receber uma cotação da central.'],
 ['limites-carga-bau-moto','Limites de carga para baú de moto','Veja dimensões, peso e itens que não podem seguir na moto.'],
 ['conferir-medidas-bau-moto','Conferir medidas para o baú da moto','Confira se o volume cabe no baú antes de pedir a cotação.'],
 ['motoboy-para-empresas','Motoboy para empresas com demanda recorrente','Veja como organizar endereços e solicitações recorrentes.'],
 ['termos-e-condicoes-transporte','Termos e condições de transporte','Regras de coleta, carga, comprovantes e privacidade.']
].map(([slug,h1,detail]) => ({slug,path:`/${slug}`,cluster:'tool',area:'Zona Leste e Norte de São Paulo',h1,title:`${h1} | Motoboy Express SP`,description:`${detail} Atendimento para comércio, empresas e profissionais em São Paulo.`,facts:{detail},relatedPaths:['/','/limites-carga-bau-moto','/como-solicitar-cotacao-motoboy']}));

const home = {slug:'inicio',path:'/',cluster:'home',area:'Zona Leste e Zona Norte Central de São Paulo',h1:'Motoboy para entregas no Brás, Pari, Tatuapé e região',title:'Motoboy na Zona Leste e Norte de SP | Motoboy Express',description:'Entregas de moto para comércio, clínicas, transportadoras e escritórios. Cotação humana pelo WhatsApp para cargas de baú.',facts:{streets:'Brás, Pari, Tatuapé, Vila Guilherme e Parque Novo Mundo',audience:'lojistas e empresas',cargo:'documentos e encomendas pequenas'},relatedPaths:[...localPages.map(p=>p.path),...services.map(p=>p.path),...routes.map(p=>p.path),...tools.map(p=>p.path)]};

export const pages = [home,...localPages,...services,...routes,...tools];
