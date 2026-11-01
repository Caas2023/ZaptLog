// Conteúdo editorial dos guias, calculadora, tabela de preços e termos.

export const editorialTools = {
  'como-solicitar-cotacao-motoboy': {
    lead:
      'A tabela da ZaptLog é direta: os primeiros 7 km custam R$ 35,00 e o quilômetro seguinte sai por R$ 2,60. O preço cobre uma coleta e uma entrega, e a central fecha o valor pela rota mais curta do mapa.',
    sections: [
      [
        'O que compõe o preço',
        'A referência cobre a saída da moto, a coleta de um volume compatível com o baú, o deslocamento e a entrega em um endereço. Não há taxa de cadastro, mensalidade ou cobrança por consulta. O preço publicado é uma referência operacional, não uma estimativa de aplicativo que muda a cada minuto. A central confirma o valor antes de despachar. A conta, portanto, começa em R$ 35,00 e só cresce quando o trajeto passa de 7 km.',
        'A medida sai do Google Maps, pela rota mais curta, no instante em que a cotação é feita. Se o endereço tiver acesso restrito, a central pode ajustar o ponto de encontro. O valor não inclui espera prolongada, segunda tentativa por ausência do destinatário, retorno de documento ou uma parada extra. Essas condições são informadas separadamente, nunca escondidas no comprovante.',
      ],
      [
        'Faixa mínima e quilômetro adicional',
        'A faixa mínima é R$ 35,00 até 7 km; acima disso, o adicional é de R$ 2,60 por km. O cálculo é linear sobre a diferença: uma corrida de 8 km fica em R$ 37,60; uma de 12 km, em R$ 48,00. Distâncias fracionadas são consideradas no cálculo da central, com arredondamento transparente na cotação.',
        'A distância não é a distância em linha reta. É o percurso que a moto precisa fazer, considerando o sentido das vias e o acesso ao endereço. Dois pontos próximos podem ter rotas diferentes por causa de uma alça, uma ponte ou uma restrição. Por isso, a central usa o mapa e confirma o trajeto antes de fechar o valor.',
        {
          type: 'table',
          caption: 'Exemplos de referência com a regra publicada',
          head: ['Distância', 'Cálculo', 'Referência'],
          rows: [
            ['Até 7 km', 'Taxa mínima', 'R$ 35,00'],
            ['8 km', '35 + 1 × 2,60', 'R$ 37,60'],
            ['10 km', '35 + 3 × 2,60', 'R$ 42,80'],
            ['12 km', '35 + 5 × 2,60', 'R$ 48,00'],
            ['15 km', '35 + 8 × 2,60', 'R$ 55,80'],
          ],
        },
      ],
      [
        'O que não está incluído',
        'Cada solicitação atende uma coleta e uma entrega. Uma segunda parada não é automaticamente incluída; se precisar, pergunte à central antes. O retorno de documento ou protocolo assinado é uma etapa adicional. A espera no endereço também tem limite operacional. Se o destinatário não estiver disponível, uma nova tentativa pode gerar custo.',
        'Não cobramos por peso dentro do limite de 20 kg, mas o volume precisa caber no baú. Não transportamos valores, joias, documentos de alto valor, animais, inflamáveis ou produtos ilícitos. Se o item não for compatível, a central informa antes. O preço é de transporte, não de embalagem, seguro ou armazenagem. A embalagem é responsabilidade do remetente.',
      ],
      [
        'Como confirmar o valor',
        'O caminho mais direto é usar o validador de carga no fim desta página, marcar as três confirmações e continuar pelo WhatsApp. A mensagem chega com a origem da página e o contexto. A central pede os endereços, o conteúdo e a condição de recebimento. Com isso, calcula a distância e responde com o valor final.',
        'Se você já sabe a distância, pode usar a calculadora para ter uma referência. Ela aplica a mesma fórmula, mas não substitui a confirmação humana. O valor pode mudar se o endereço estiver incompleto ou se houver uma condição não informada. A cotação vale para a corrida descrita, não para uma sequência ilimitada de entregas.',
      ],
      [
        'Para empresas e corridas recorrentes',
        'Lojistas, clínicas, escritórios e transportadoras que pedem corridas com frequência podem organizar o atendimento com endereços usuais, contatos e forma de pagamento. A central avalia condições de faturamento para demanda recorrente, sempre com registro individual de cada solicitação. Não existe contrato automático nem cobrança escondida.',
        'Para demandas concentradas, vale informar a previsão de volume e os horários. Cada janela de atendimento é confirmada na hora. O faturamento não congela o preço nem garante atendimento imediato em qualquer momento. Ele organiza a relação comercial para que a cotação seja mais rápida e a conferência de carga continue sendo feita.',
      ],
    ],
    checklist: {
      intro:
        'Antes de pedir a cotação, confirme os dados que impactam o valor e a viabilidade da corrida.',
      items: [
        'Endereço de coleta e de entrega com número e referência.',
        'Distância estimada pela rota mais curta, não em linha reta.',
        'Carga fechada em até 40 × 40 × 35 cm e 20 kg.',
        'Confirmação de que é uma coleta e uma entrega.',
        'Ciência de que retorno e segunda tentativa são etapas adicionais.',
        'Forma de pagamento e necessidade de comprovante.',
      ],
    },
    faq: [
      [
        'O preço é fixo para qualquer bairro?',
        'Não. Até 7 km, a referência é R$ 35,00; acima disso, R$ 2,60 por quilômetro. Os endereços definem a distância, e a central confere o trajeto no mapa antes de despachar.',
      ],
      [
        'Há taxa de saída separada?',
        'A taxa mínima de R$ 35,00 já inclui a saída e os primeiros 7 km. Não cobramos uma taxa de cadastro ou mensalidade. Condições adicionais são informadas antes da corrida.',
      ],
      [
        'Posso pagar com PIX?',
        'Sim. A central confirma a forma de pagamento antes do despacho. Empresas com demanda recorrente podem solicitar análise para faturamento, que depende de cadastro e histórico.',
      ],
    ],
  },

  'limites-carga-bau-moto': {
    lead:
      'O baú da moto é fechado, rígido e tem limites claros: 40 cm de largura, 40 cm de profundidade, 35 cm de altura e até 20 kg. Medir antes de pedir a corrida evita recusa, atraso e dano à mercadoria.',
    sections: [
      [
        'As três medidas que definem a viagem',
        'O baú não é uma caixa elástica. A embalagem precisa entrar inteira, com a tampa fechando e a trava funcionando. A medida de referência é 40 × 40 × 35 cm. Uma caixa pode ter 38 cm de largura e ainda assim não entrar se estiver torta ou se a tampa não vencer o volume. Meça a embalagem fechada, não o produto solto.',
        'A altura de 35 cm é frequentemente o limite mais esquecido. Uma pilha de roupas compactada pode parecer baixa, mas a caixa que a contém é mais alta. O mesmo vale para uma peça com cabo ou alça. Se o volume não entrar sem forçar, ele não deve ser levado. O baú não pode ser deixado entreaberto durante a rota.',
        [
          'Meça comprimento, largura e altura da embalagem fechada.',
          'Confira se a tampa fecha sem pressão e a trava engata.',
          'Retire alças, suportes e partes soltas que aumentem o volume.',
          'Não considere medidas do produto sem a embalagem.',
        ],
      ],
      [
        'Quanto pesa o que você quer enviar',
        'O limite é 20 kg, incluindo a embalagem. Uma caixa de papel pode parecer leve, mas 5.000 folhas A4 já passam de 20 kg. Peças metálicas pequenas também podem surpreender. Use uma balança de balcão ou doméstica. Se não tiver, compare com um peso conhecido e, na dúvida, informe a central antes de solicitar.',
        'O peso precisa ficar distribuído e sem folga. Um volume muito pesado em uma base pequena pode se mover dentro do baú. Use papel ou espuma para preencher vãos. Não coloque objetos soltos que possam bater na carga. O motoboy não tem como pesar o volume no momento da coleta; a conferência é feita por quem despacha.',
      ],
      [
        'O que cabe: exemplos práticos',
        'Uma caixa de sapatos, um envelope rígido com contratos, uma peça de roupa dobrada, um conjunto de sensores automotivos, uma maquininha de cartão, um molde odontológico em caixa e uma prova de impressão pequena são exemplos compatíveis. Vários itens pequenos podem ser consolidados em uma caixa maior, desde que o conjunto respeite as medidas e o peso.',
        'Não cabem: fardos de roupa que não fecham, sacolas de feira abertas, caixas de mudança, pneus, para-choques, móveis, eletrodomésticos, banners rígidos, placas, animais e volumes que precisam ficar na garupa. Se o item não entra fechado, a corrida de moto não é o transporte adequado. A central pode orientar outra solução, mas não força o encaixe.',
        {
          type: 'table',
          caption: 'Referências rápidas de compatibilidade',
          head: ['Item', 'Cabe?', 'Observação'],
          rows: [
            ['Caixa de sapatos', 'Sim', 'Se fechada e dentro das medidas'],
            ['Envelope A4 rígido', 'Sim', 'Não dobrar'],
            ['Fardo de roupas', 'Depende', 'Precisa fechar e pesar até 20 kg'],
            ['Pneu de carro', 'Não', 'Excede o volume do baú'],
            ['Para-choque', 'Não', 'Volume incompatível'],
            ['Maquininha POS', 'Sim', 'Com acessórios em saco separado'],
          ],
        },
      ],
      [
        'Embalagem, chuva e fragilidade',
        'O baú protege do vento e da maior parte da chuva, mas não é um ambiente selado. Use saco plástico em papel, tecido e equipamentos eletrônicos. Itens frágeis precisam de proteção interna e identificação externa. Líquidos permitidos devem estar vedados e separados de documentos. Nada de produto que vaze ou exale odor forte.',
        'Cargas amarradas na garupa não são aceitas. Também não aceitamos sacolas com alças para fora, caixas entreabertas ou volumes que impeçam a tampa de travar. Se a embalagem estiver úmida, suja ou soltando resíduo, deve ser substituída antes da coleta. O baú só fecha com o volume seco e firme; do contrário, a coleta é recusada.',
      ],
      [
        'Itens que não transportamos',
        'Ficam fora da operação: dinheiro, joias, cartões, cheques e documentos de alto valor; inflamáveis, botijões, tintas, solventes e baterias com ácido livre; animais vivos; armas, munições e produtos ilícitos; alimentos preparados abertos sem embalagem adequada; e materiais que exijam refrigeração ou acondicionamento especial.',
        'A declaração de valor vai até R$ 1.500 por corrida. Acima disso, a central avalia a viabilidade. Se o conteúdo for sensível, informe antes. Não esconda a natureza do item para conseguir a corrida. Dizer o que vai dentro antes da coleta evita a viagem perdida e a recusa no balcão.',
      ],
    ],
    checklist: {
      intro:
        'Meça, pese e proteja o volume antes de pedir a corrida. Esta é a conferência que evita a recusa no balcão.',
      items: [
        'Embalagem fechada medindo até 40 × 40 × 35 cm.',
        'Peso total de até 20 kg, incluindo a caixa.',
        'Tampa fechando e trava funcionando sem esforço.',
        'Conteúdo protegido contra umidade e impacto.',
        'Nenhum item proibido ou de alto valor dentro do volume.',
        'Etiqueta com destinatário e contato visível.',
      ],
    },
    faq: [
      [
        'O baú aceita 20 kg de qualquer material?',
        'O limite é 20 kg, mas o conteúdo também precisa ser permitido e caber nas medidas. Itens perigosos, valores e volumes que não fecham não são aceitos, mesmo dentro do peso.',
      ],
      [
        'Posso levar uma caixa um pouco maior se ela for leve?',
        'Não. O limite de volume é físico. Se a caixa não entra com a tampa fechada, a corrida não pode ser feita. Medida e peso são critérios independentes.',
      ],
      [
        'O que acontece se o item não couber na coleta?',
        'O motoboy não força o encaixe. A central é avisada e orienta o remetente sobre a necessidade de reorganizar o volume ou buscar outro transporte. Pode haver custo de deslocamento.',
      ],
    ],
  },

  'conferir-medidas-bau-moto': {
    lead:
      'A calculadora repete a conta da central: os primeiros 7 km custam R$ 35,00 e cada quilômetro seguinte soma R$ 2,60. O resultado serve como ponto de partida; os detalhes da corrida são confirmados no WhatsApp.',
    sections: [
      [
        'Como usar a calculadora',
        'Informe a distância estimada em quilômetros e clique em calcular. A ferramenta mostra a referência para uma coleta e uma entrega. Se a distância for até 7 km, o resultado será R$ 35,00. Acima disso, o acréscimo é de R$ 2,60 por quilômetro. O valor é uma simulação, não uma cobrança automática.',
        'Use a quilometragem da rota de moto, não a linha reta entre os pontos. Você pode consultar o Google Maps entre os dois endereços e digitar o número aproximado. Se houver dúvida, passe os endereços à central. O mapa pode considerar uma alça, uma ponte ou uma restrição que muda o percurso.',
      ],
      [
        'Exemplos para conferir a conta',
        'Para 3 km, a referência é R$ 35,00, porque está dentro da faixa mínima. Para 7 km, também R$ 35,00. Para 8 km, o cálculo é 35 + 1 × 2,60, resultando em R$ 37,60. Para 12 km, 35 + 5 × 2,60, ou R$ 48,00. Para 20 km, 35 + 13 × 2,60, ou R$ 68,80.',
        'A calculadora não inclui retorno de documento, segunda tentativa, espera prolongada ou parada extra. Também não verifica se o volume cabe no baú. Antes de usar o resultado em uma negociação, confirme o conteúdo e as condições de acesso. O valor final é sempre informado pela central antes do despacho.',
        [
          'Use a distância da rota, não a distância em linha reta.',
          'Confira se o trajeto considera o sentido das vias.',
          'Lembre que cada corrida tem uma coleta e uma entrega.',
          'Valide o volume no guia do baú antes de cotar.',
        ],
      ],
      [
        'Por que o valor final pode variar',
        'Dois endereços podem parecer próximos no mapa, mas exigir um desvio por causa de obra, sentido único ou acesso restrito. O ponto de coleta pode não ter estacionamento para a moto, exigindo um encontro em outra esquina. O destinatário pode não estar disponível, gerando uma segunda tentativa. Essas condições não são adivinhadas pela calculadora.',
        'A central confirma a distância e o escopo antes de acionar o motoboy. Se houver uma condição adicional, ela é informada e aceita antes da corrida. Não cobramos um valor diferente do combinado sem justificativa. Condição extra só entra na conta depois de combinada, com o motivo explicado antes do despacho.',
      ],
      [
        'Quando a moto não é a melhor opção',
        'Se o volume passar de 40 × 40 × 35 cm ou 20 kg, a calculadora ainda mostra um preço, mas a corrida não pode ser realizada. O mesmo vale para itens proibidos, valores, animais, inflamáveis ou materiais que exijam refrigeração. Nesses casos, o transporte correto não é a moto.',
        'Para cargas maiores, o cliente deve buscar um veículo utilitário ou uma transportadora. A ZaptLog não simula esse tipo de frete. A calculadora serve para cargas de baú; se tiver dúvida, envie as medidas e o peso à central antes de cotar.',
      ],
      [
        'Como estimar endereços em bairros diferentes',
        'Se a coleta e a entrega estão em bairros distintos, não some a distância de cada trecho até o centro. Use o trajeto completo entre os dois endereços. Um erro comum é medir a partir do bairro e não da rua: dentro do mesmo bairro, dois números podem estar a vários quilômetros de distância. Outro erro é considerar o caminho de carro, que pode incluir uma via com restrição ou um retorno longo.',
        'Para conferir, abra o mapa com a opção de rota mais curta e observe se o trajeto usa viadutos, túneis ou ruas com restrição. Se a rota parecer estranha, passe os endereços completos à central. A calculadora aceita o número digitado; ela não valida o trajeto.',
      ],
      [
        'Da simulação à confirmação',
        'Depois de calcular, use o validador de carga no fim da página. Marque as três confirmações e continue pelo WhatsApp. A mensagem inclui a origem da página e o contexto. A central responde com o valor confirmado, a disponibilidade e as instruções de coleta.',
        'Antes do despacho, a central combina o pagamento, normalmente por PIX. Se a empresa tem demanda recorrente, pode pedir uma análise de faturamento. A calculadora não reserva motoboy nem garante atendimento imediato. Ela ajuda a planejar, mas a corrida só existe depois da confirmação humana.',
      ],
    ],
    checklist: {
      intro:
        'Para a simulação fazer sentido, confirme a distância e a compatibilidade da carga.',
      items: [
        'Distância da rota mais curta entre coleta e entrega.',
        'Uma coleta e uma entrega, sem paradas extras.',
        'Volume que caiba fechado em 40 × 40 × 35 cm e pese até 20 kg.',
        'Endereços completos, com acesso para moto.',
        'Ciência de que o valor é uma referência, não uma reserva.',
        'Confirmação final pela central antes do despacho.',
      ],
    },
    faq: [
      [
        'A calculadora cobra automaticamente?',
        'Não. Ela apenas aplica a fórmula de referência. Nenhum pagamento é processado no site. O valor final e a disponibilidade são confirmados pela central no WhatsApp.',
      ],
      [
        'Qual distância devo usar?',
        'A quilometragem da rota de moto entre os dois endereços, consultada no Google Maps. Não use a linha reta nem uma estimativa baseada apenas no bairro.',
      ],
      [
        'O resultado inclui retorno de documento?',
        'Não. Retorno, segunda tentativa, espera prolongada e parada extra são condições separadas. Informe a necessidade na cotação para receber o valor correto.',
      ],
    ],
  },

  'motoboy-para-empresas': {
    lead:
      'Empresas que pedem corridas com frequência precisam de mais do que preço: precisam de endereços organizados, conferência de carga e uma forma de pagamento que acompanhe o volume. O faturamento é avaliado caso a caso.',
    sections: [
      [
        'Quando o faturamento faz sentido',
        'Uma loja que faz uma corrida por semana provavelmente não precisa de um processo comercial complexo. Já um escritório, uma clínica, uma transportadora ou um e-commerce com várias entregas por dia ganha tempo quando os endereços usuais, contatos e condições de pagamento estão registrados. O faturamento organiza essa recorrência, mas não elimina a conferência de cada corrida.',
        'A ZaptLog avalia a demanda com base no volume, na regularidade, nos tipos de carga e na área de cobertura. Não existe um botão de adesão automática. A central conversa com a empresa, entende a rotina e informa se há condição de faturamento. O contato serve para saber se essa rotina cabe no atendimento e quais condições a central consegue manter.',
      ],
      [
        'O que a empresa precisa organizar',
        'Antes de solicitar análise, reúna os endereços de coleta e entrega mais usados, os contatos de portaria e recebimento, os tipos de documento que costumam acompanhar a carga e a pessoa responsável por autorizar as corridas. Também é útil ter uma previsão de volume por semana e os horários de pico. Essas informações reduzem o tempo de cotação.',
        'Cada corrida continua sendo registrada individualmente, com descrição do volume, origem, destino, valor e comprovante. A empresa deve indicar quem pode solicitar em nome dela. Sem essa definição, qualquer pessoa poderia acionar uma corrida faturada, e ninguém reconheceria a cobrança no fechamento.',
        [
          'Lista de endereços usuais com contatos de recebimento.',
          'Pessoa autorizada a solicitar e confirmar corridas.',
          'Tipos de volume e documentos que costumam circular.',
          'Previsão de volume e horários de maior demanda.',
        ],
      ],
      [
        'Como funciona a análise',
        'A central verifica a regularidade da demanda e a capacidade de atendimento na região. Também alinha a forma de cobrança, o prazo de fechamento e os comprovantes necessários. A liberação não é garantida apenas pelo interesse: depende de histórico e de condições operacionais. Se não houver condição, a central diz o motivo e mantém a cobrança por corrida.',
        'Se o faturamento não for a melhor opção no momento, a empresa pode continuar usando PIX por corrida. Não há obrigação de contratar um pacote. Prometer faturamento sem análise e depois cobrar outro valor seria pior do que dizer não desde o início.',
      ],
      [
        'Faturamento não é mensalidade',
        'O modelo não é uma assinatura com corridas ilimitadas. Cada solicitação tem um escopo, uma distância e um valor. O faturamento agrupa o pagamento das corridas realizadas em um período, conforme a condição aprovada. Não há cobrança por mês sem uso nem cota escondida de quilômetros.',
        'Também não há garantia de atendimento imediato em qualquer horário. Cada janela é confirmada separadamente. Em dias de pico, a empresa pode precisar planejar com antecedência. O contrato comercial organiza a relação, mas não aumenta a frota nem o número de entregadores disponíveis.',
      ],
      [
        'Conferência dos registros',
        'Faturamento funciona melhor quando a empresa confere as corridas antes do fechamento. A central reúne os registros com data, origem, destino, valor e comprovante. O responsável compara com as solicitações internas e aponta divergências enquanto a memória da operação ainda está fresca. Não é necessário criar um sistema: uma planilha simples com o número de cada corrida já ajuda.',
        'Também vale separar o que é corrida recorrente do que é exceção. Uma entrega urgente para um cliente novo pode não entrar na mesma rotina de faturamento. Se a empresa tem várias filiais, defina se cada filial solicita diretamente ou se tudo passa por um contato central. Essa definição evita pedidos duplicados e cobranças que ninguém reconhece.',
      ],
      [
        'Como começar',
        'O primeiro passo é usar o validador de carga ou falar com a central pelo WhatsApp. Informe que a empresa tem demanda recorrente, a região de atuação e uma estimativa de corridas por semana. A central explica o que precisa ser cadastrado e quais são as condições possíveis.',
        'Depois da análise, a empresa recebe as instruções para solicitar corridas e conferir os registros. O processo pode começar com PIX e migrar para faturamento quando houver histórico. Não é necessário esperar um volume grande para conversar. Uma estimativa honesta de corridas por semana e a lista de cargas usuais já dão base para a análise.',
      ],
    ],
    checklist: {
      intro:
        'Para avaliar faturamento, a central precisa entender a rotina da empresa. Organize estas informações.',
      items: [
        'Endereços usuais de coleta e entrega.',
        'Contatos de portaria, recepção e responsáveis.',
        'Pessoa autorizada a solicitar corridas.',
        'Volume estimado por semana e horários de pico.',
        'Tipos de carga e documentos que costumam circular.',
        'Forma de pagamento e necessidade de comprovantes.',
      ],
    },
    faq: [
      [
        'Existe mensalidade para empresas?',
        'O faturamento agrupa corridas realizadas, não é uma assinatura com entregas ilimitadas. As condições são definidas após análise da demanda e informadas antes do início. Não há cobrança automática pelo site.',
      ],
      [
        'Qual o volume mínimo para solicitar?',
        'Não há um número público fixo. A central avalia regularidade, região e tipo de carga. O histórico e a capacidade operacional influenciam a resposta. Uma estimativa de corridas por semana e os endereços mais usados já dão base para a análise.',
      ],
      [
        'Posso usar PIX e depois migrar para faturamento?',
        'Sim. A empresa pode começar com PIX e pedir análise depois de acumular histórico. A migração depende das condições comerciais e operacionais confirmadas pela central.',
      ],
    ],
  },

  'termos-e-condicoes-transporte': {
    lead:
      'Estes termos resumem como a ZaptLog recebe, cota, coleta e entrega volumes por moto. Eles existem para que cliente, destinatário e operação tenham a mesma expectativa sobre escopo, limites e responsabilidades.',
    sections: [
      [
        'Objeto do serviço',
        'A ZaptLog realiza transporte de volumes compatíveis com baú de moto entre endereços em São Paulo, mediante solicitação, confirmação de disponibilidade e aceite do valor. O serviço padrão compreende uma coleta e uma entrega. Não inclui embalagem, armazenagem, montagem, instalação, configuração de equipamentos ou execução de serviços técnicos.',
        'A solicitação pode ser feita pelo WhatsApp ou pelos links do site. A mensagem de origem identifica a página de contato, mas não cria uma reserva automática. A corrida só existe depois que a central confirma o escopo, o valor e a disponibilidade. O cliente deve fornecer informações verdadeiras sobre o conteúdo e os endereços.',
      ],
      [
        'Carga, limites e conferência',
        'O volume deve caber fechado no baú, com dimensões de até 40 cm de largura, 40 cm de profundidade e 35 cm de altura, e pesar no máximo 20 kg. A tampa precisa fechar e travar. Não são aceitos volumes amarrados na garupa, sacolas abertas ou embalagens que impeçam o fechamento. A conferência é feita antes do despacho.',
        'O cliente é responsável pela embalagem e pela identificação do conteúdo. O motoboy não abre o volume para conferir o produto. Se o item não corresponder ao descrito ou não puder ser transportado com segurança, a corrida pode ser recusada. Nesse caso, a central informa o cliente e orienta sobre a alternativa possível.',
      ],
      [
        'Itens proibidos e valor declarado',
        'Não transportamos dinheiro, joias, cartões, cheques ou documentos de alto valor; inflamáveis, botijões, tintas, solventes e baterias com ácido livre; animais vivos; armas, munições e produtos ilícitos; alimentos preparados abertos sem embalagem adequada; e materiais que exijam refrigeração ou acondicionamento especial não previsto na operação.',
        'O valor declarado máximo é R$ 1.500 por corrida. O cliente deve informar o conteúdo e o valor quando solicitado. A ocultação de um item proibido ou de um valor superior pode resultar em recusa e em responsabilização do remetente. A ZaptLog não atua como seguradora nem como transportadora de valores.',
      ],
      [
        'Preço, pagamento e cancelamento',
        'Até 7 km, a referência publicada é R$ 35,00; o quilômetro seguinte custa R$ 2,60. A central fecha o valor com base na rota mais curta do mapa e nas condições da corrida. Retorno de documento, segunda tentativa, espera prolongada e parada extra podem gerar custo adicional, informado antes.',
        'O pagamento é combinado antes do despacho, normalmente por PIX. Empresas com demanda recorrente podem solicitar análise de faturamento. Cancelamentos devem ser comunicados o quanto antes. Se o motoboy já estiver em deslocamento, pode haver cobrança proporcional ao serviço realizado. A central informa a condição antes de concluir o cancelamento.',
      ],
      [
        'Entrega, comprovante e responsabilidade',
        'A entrega é concluída quando o volume é recebido no endereço indicado e o nome de quem recebeu é registrado. Se o cliente solicitar protocolo, assinatura ou foto, isso deve ser combinado antes. A ZaptLog não se responsabiliza por atraso causado por endereço incorreto, ausência do destinatário, recusa de recebimento ou informação incompleta.',
        'A responsabilidade sobre o conteúdo é limitada ao valor declarado e às condições informadas. O cliente deve embalar adequadamente itens frágeis. Não há cobertura para valores, joias ou documentos não declarados. Em caso de ocorrência, a central deve ser informada imediatamente, com os dados da corrida e o comprovante.',
      ],
      [
        'Privacidade e LGPD',
        'Os dados informados no atendimento são usados para executar a corrida, emitir comprovantes e manter o histórico comercial. O site não possui cadastro, banco de dados de clientes nem armazenamento de dados pessoais em formulário. As conversas e comprovantes ficam no ambiente de atendimento e são tratados com acesso restrito.',
        'O cliente deve evitar enviar informações sensíveis que não sejam necessárias para a entrega. Quando o conteúdo envolver dados de terceiros, o remetente é responsável por ter base legal para compartilhá-los. Solicitações de correção ou exclusão podem ser feitas pelos canais de atendimento. Estes termos podem ser atualizados para refletir mudanças na operação.',
      ],
    ],
    checklist: {
      intro:
        'Antes de confirmar uma corrida, verifique se você compreendeu o escopo e os limites do serviço.',
      items: [
        'Caixa que entra fechada no baú: 40 × 40 × 35 cm e até 20 kg.',
        'Conteúdo permitido e valor declarado dentro do limite.',
        'Endereços completos e destinatário disponível.',
        'Embalagem adequada e identificação externa.',
        'Ciência de que o serviço cobre uma coleta e uma entrega.',
        'Concordância com o valor e a forma de pagamento confirmados.',
      ],
    },
    faq: [
      [
        'A ZaptLog oferece seguro de carga?',
        'A operação não é apresentada como seguradora. A responsabilidade é limitada ao valor declarado e às condições informadas. Valores, joias e documentos de alto valor não são transportados. Informe o conteúdo antes da cotação.',
      ],
      [
        'O que acontece se o destinatário não estiver no local?',
        'A central orienta sobre a possibilidade de deixar o volume com outra pessoa autorizada ou de realizar uma segunda tentativa. A segunda tentativa pode gerar custo adicional, informado antes.',
      ],
      [
        'Como solicitar correção dos meus dados?',
        'Fale com a central pelo WhatsApp e descreva a solicitação. O site não mantém cadastro próprio; os dados operacionais ficam no ambiente de atendimento e são tratados conforme a finalidade da corrida.',
      ],
    ],
  },
};
