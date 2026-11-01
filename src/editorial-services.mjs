// Conteúdo editorial dos serviços verticais especializados.
// Cada página descreve um fluxo operacional próprio, sem substituição automática de nomes.

export const editorialServices = {
  'motoboy-confeccao-roupas-bras': {
    lead:
      'Peças piloto, amostras de tecido, aviamentos e pedidos embalados circulam todos os dias entre confecções, oficinas e lojas do Brás. O transporte precisa preservar forma, cor, identificação e prazo de aprovação.',
    sections: [
      [
        'O que muda no transporte de confecção',
        'Na confecção, o volume pequeno nem sempre é simples. Uma peça piloto pode definir uma coleção inteira; uma amostra de tecido pode ser a diferença entre fechar ou não um pedido; um lote de botões pode parar uma oficina. O material costuma ser leve, mas exige cuidado com dobra, umidade, sujeira e identificação. Uma caixa aberta no balcão errado pode misturar tamanhos e cores.',
        'A ZaptLog trata cada envio como uma amostra de trabalho, não como uma sacola qualquer. A central pergunta o que está sendo enviado, se há peça única ou lote, se o destino é loja, oficina, mostruário ou hotel, e se existe necessidade de protocolo. A partir disso, orienta a embalagem e confirma a compatibilidade com o baú. O motoboy não confere o produto; ele preserva o volume fechado até a entrega.',
      ],
      [
        'Como embalar peças, tecidos e aviamentos',
        'Roupas devem ser dobradas sem vincos forçados e acomodadas em caixa ou saco inviolável. Se a peça for delicada, use papel sem ácido ou tecido de proteção e avise a central. Tecidos soltos precisam de saco plástico individual antes da caixa, para não enroscar em zíperes ou aviamentos. Amostras pequenas, como botões, linhas e etiquetas, devem ir em saco interno fechado e identificado.',
        'A caixa precisa fechar sem esforço. Não compacte uma peça para caber: isso pode marcar o tecido e comprometer a amostra. Se o volume tiver partes rígidas, como cabides ou moldes, proteja as pontas. Em dias de chuva, use saco externo impermeável. O limite é 40 × 40 × 35 cm e 20 kg, incluindo a embalagem. Uma sacola de feira aberta ou um fardo que fique para fora do baú não é aceito.',
        [
          'Identifique peça, referência, tamanho e destinatário na etiqueta externa.',
          'Proteja tecidos claros contra poeira e umidade.',
          'Separe aviamentos pequenos em saco interno fechado.',
          'Não dobre uma peça que precisa ser aprovada em cabide ou superfície lisa.',
        ],
      ],
      [
        'Coleta em ateliê, oficina ou loja',
        'A coleta pode acontecer em uma confecção com balcão, uma oficina no fundo de um prédio ou uma loja em galeria movimentada. Informe o nome do responsável, o horário em que a peça estará pronta e o ponto de acesso. Em ruas estreitas do Brás, o motoboy pode precisar combinar a retirada na esquina ou na entrada do prédio. Sem alguém com o volume em mãos, a corrida vira espera no balcão.',
        'Se a peça ainda estiver em produção, não solicite a corrida como se estivesse pronta. A disponibilidade do motoboy é reservada para uma janela. Atrasos na costura, na lavagem ou na aprovação devem ser avisados à central para reorganizar o horário. O mesmo vale para uma coleta que depende de conferência de nota fiscal ou de liberação do balcão. O entregador não resolve pendências comerciais no balcão.',
      ],
      [
        'Entrega para loja, cliente ou hotel',
        'No destino, a peça pode ir para o balcão de uma loja, a recepção de um hotel ou a mão de um comprador. Informe o nome de quem recebe e o setor. Em hotéis, confirme se a recepção pode guardar o volume e se o hóspede autorizou. Em lojas, diga se a entrega é para o gerente, o caixa ou o estoque. A confirmação de recebimento é registrada com o nome da pessoa.',
        'Quando a peça precisa ser experimentada ou aprovada na hora, isso deve ser combinado como uma entrega com espera ou como uma segunda corrida. O motoboy não fica aguardando indefinidamente no provador. Se houver retorno de peça recusada, a central avalia a viabilidade e a necessidade de uma nova cotação. A comunicação evita que uma troca simples se transforme em duas corridas sem previsão.',
      ],
      [
        'Cotação e janela de produção',
        'A cotação é feita pela central depois que o cliente envia as medidas da embalagem fechada, o peso e os endereços de coleta e entrega. A central confere o acesso e a disponibilidade para a janela de produção, e responde com o valor. Retorno de peça entra na mesma conversa, com cotação própria.',
        'O tempo varia com a costura, a lavagem e o trânsito do Brás; não existe minuto cravado. A ZaptLog responde pela coleta do volume pronto, pela proteção no trajeto e pela confirmação no destino. Para prazos de coleção, programe os envios com antecedência e deixe um contato disponível nas duas pontas.',
      ],
    ],
    checklist: {
      intro:
        'Antes de despachar uma peça de confecção, confirme embalagem, identificação e disponibilidade nas duas pontas.',
      items: [
        'Peça dobrada ou enrolada conforme o material, sem vincos forçados.',
        'Tecido e roupa clara protegidos por saco plástico.',
        'Aviamentos em saco interno fechado e identificado.',
        'Referência, tamanho e destinatário visíveis na etiqueta.',
        'Caixa fechada, com 40 × 40 × 35 cm no máximo e até 20 kg.',
        'Confirmação de quem recebe e se haverá retorno de peça.',
      ],
    },
    faq: [
      [
        'Vocês levam peça piloto para aprovação?',
        'Sim. Embale a peça sem compactar e informe o destinatário e o prazo. Se a aprovação exigir espera, combine antes com a central, pois o motoboy não pode permanecer indefinidamente no local.',
      ],
      [
        'Posso enviar tecido em rolo?',
        'Rolos precisam caber inteiros no baú, com a tampa fechada, e respeitar 40 × 40 × 35 cm. Rolos maiores devem ser avaliados para outro transporte. Informe as medidas antes da cotação.',
      ],
      [
        'Vocês entregam em hotéis no Brás?',
        'Sim, com nome do hóspede, hotel e autorização da recepção. A central confirma o procedimento antes da coleta e registra quem recebeu o volume.',
      ],
    ],
  },

  'motoboy-transportadoras-canhotos-nf': {
    lead:
      'Canhotos de nota fiscal, CTe e comprovantes assinados são documentos que destravam pagamentos e encerram operações. O transporte precisa ser rastreável na conversa, identificado por cliente e devolvido a quem de direito.',
    sections: [
      [
        'Por que o canhoto não pode atrasar',
        'Em uma transportadora, a entrega da mercadoria não termina quando o caminhão descarrega. O canhoto assinado comprova que o destinatário recebeu e permite cobrar o frete, fechar a ordem de serviço e responder a uma contestação. Quando a via fica em uma doca, esquecida em um escritório ou entregue sem identificação, o prejuízo aparece dias depois, na conciliação.',
        'A corrida de moto resolve o trecho curto entre a transportadora, o cliente e o setor administrativo. A ZaptLog coleta o envelope, confirma o destino e registra quem recebeu. Não interpretamos a nota nem validamos a regularidade fiscal. O papel da operação é transportar o documento certo, para a pessoa certa, no endereço combinado, com o cuidado que um comprovante exige.',
      ],
      [
        'Organização do envelope e das vias',
        'Separe os documentos por cliente, obra ou placa. Cada conjunto deve ter uma etiqueta externa com nome do destinatário, número da nota ou CTe e quantidade de vias. Se houver mais de um cliente no mesmo endereço, não misture os envelopes. Documentos soltos podem ser separados pelo vento ou entregues à pessoa errada na portaria.',
        'Use envelope rígido, de preferência com lacre. Se o documento não puder dobrar, escreva isso na etiqueta. Para retorno assinado, informe quais vias devem voltar e quem assina. O motoboy não preenche campo fiscal nem coleta assinatura em documento que não foi preparado pelo remetente. A conferência é de quem despacha.',
        [
          'Um envelope por cliente ou operação.',
          'Etiqueta com nota, CTe, destinatário e quantidade de vias.',
          'Lacre ou fecho que mostre violação.',
          'Indicação clara das vias que precisam retornar assinadas.',
        ],
      ],
      [
        'Acesso à transportadora e ao cliente',
        'Transportadoras têm portaria, doca, pátio e setor administrativo. O motoboy pode ser direcionado para a recepção, para a expedição ou para um guichê. Informe o nome da empresa, o setor e a pessoa de contato. Se a coleta for em doca, confirme se há acesso seguro para moto e se o envelope estará pronto. Não é seguro circular entre carretas sem acompanhamento.',
        'No destino, pode ser um cliente com portaria, um escritório ou outra transportadora. Confirme quem pode assinar e se a entrega deve ser feita em mãos. Em alguns casos, a recepção aceita o envelope, mas não assina o canhoto. A central precisa saber disso antes para não prometer um comprovante que o local não fornece.',
      ],
      [
        'Prazos administrativos e retorno',
        'Muitas empresas trabalham com janelas de fechamento, conciliação e cobrança. Um canhoto que chega depois do corte pode esperar o próximo ciclo. Por isso, a corrida deve ser pedida quando o documento estiver na mão, não quando o sistema apenas indica que ele foi separado. A central confirma a disponibilidade e a cotação antes de acionar o motoboy.',
        'Quando a via assinada precisa voltar, isso é uma segunda etapa. A central verifica a distância e a agenda e inclui o retorno na cotação. O motoboy pode aguardar a assinatura se isso for combinado, mas não por tempo indeterminado. Se o destinatário não estiver no local, a central orienta sobre a segunda tentativa e confirma as condições antes de sair.',
      ],
      [
        'Cotação e transparência',
        'A cotação é feita pela central depois que o remetente envia as medidas do envelope fechado, o peso e os endereços de coleta e entrega. A central verifica o acesso à transportadora e ao destinatário, a disponibilidade para a janela e então responde com o valor. Acesso restrito ou segunda parada precisa entrar nessa conversa antes do despacho.',
        'O prazo segue a agenda do dia, sem promessa de minutos. A central confirma a disponibilidade e mantém o remetente informado por mensagem, da saída à assinatura. Para transportadoras com volume recorrente, contatos, endereços e o histórico de envios podem ser organizados com antecedência. Cada envelope sai com remetente e destinatário identificados; quando há retorno combinado, o comprovante assinado volta para quem despachou.',
      ],
    ],
    checklist: {
      intro:
        'Canhotos e CTe exigem separação por cliente e clareza sobre o retorno. Revise o envelope antes da coleta.',
      items: [
        'Documentos separados por cliente, obra ou placa.',
        'Etiqueta com número da nota ou CTe e quantidade de vias.',
        'Envelope rígido, lacrado e protegido contra umidade.',
        'Nome do setor e da pessoa que vai assinar.',
        'Indicação das vias que precisam voltar assinadas.',
        'Confirmação de que o documento está liberado para sair.',
      ],
    },
    faq: [
      [
        'Vocês esperam a assinatura do canhoto?',
        'Combinar a espera antes evita surpresa no balcão. Se o destinatário estiver disponível e a assinatura for rápida, a central orienta o motoboy. Esperas longas ou uma segunda tentativa precisam ser combinadas antes com a central.',
      ],
      [
        'Como é calculado o retorno do documento?',
        'O retorno é uma etapa separada, com distância e disponibilidade próprias. A central inclui o retorno na cotação depois de verificar a agenda. O retorno não entra automaticamente na cotação de ida.',
      ],
      [
        'Posso enviar documentos de vários clientes no mesmo envelope?',
        'Não recomendamos. Separe por cliente para evitar troca. Se o destinatário for o mesmo, ainda assim identifique cada conjunto. A conferência é responsabilidade de quem despacha.',
      ],
    ],
  },

  'motoboy-autopecas-oficinas': {
    lead:
      'Uma peça pequena pode liberar um elevador e destravar o dia de uma oficina. O transporte de autopeças exige referência correta, embalagem firme e clareza sobre o que é peça, o que é documento e o que não pode vazar.',
    sections: [
      [
        'A urgência da oficina e o limite da moto',
        'Oficinas trabalham com veículos ocupando espaço e clientes esperando. Quando falta um sensor, uma correia ou um filtro, a corrida de moto é uma forma de repor o item sem esperar o próximo ciclo de entrega. Mas a urgência não torna qualquer peça transportável. O baú tem 40 × 40 × 35 cm e 20 kg, e a tampa precisa fechar.',
        'A ZaptLog separa a urgência comercial da viabilidade física. A central pergunta a referência da peça, as dimensões da embalagem, o peso e o endereço da oficina. Se a peça couber, orienta o posicionamento e prepara a cotação. Se não couber, diz com clareza para que o cliente procure outro transporte. Essa triagem evita deslocamento perdido e protege o mecânico de uma promessa que não será cumprida.',
      ],
      [
        'Referência, embalagem e proteção',
        'A embalagem original é a melhor opção para sensores, módulos e componentes eletrônicos. Se ela estiver danificada, use uma caixa rígida com proteção interna. A referência e o número de série devem estar visíveis. Peças com superfície de contato, como pastilhas e discos, precisam de proteção contra impacto. Não coloque ferramentas soltas junto da peça.',
        'Óleo, fluido de freio, aditivo e qualquer líquido devem ser drenados ou vedados antes da coleta. A operação não transporta inflamáveis nem baterias com ácido livre. Se a peça tiver resíduo, ela deve ser limpa e embalada. O motoboy não avalia compatibilidade técnica, mas pode recusar um volume que esteja vazando ou que não feche no baú.',
        [
          'Referência e número de série visíveis na etiqueta.',
          'Embalagem original ou caixa rígida com proteção interna.',
          'Nenhuma ferramenta solta dentro do volume.',
          'Peças com fluido drenadas e vedadas antes da coleta.',
        ],
      ],
      [
        'Coleta no balcão e entrega no box',
        'A coleta pode ser no balcão de uma autopeças, no estoque ou em um distribuidor. Informe o nome do vendedor e o horário em que a peça estará separada. Se a nota fiscal precisar acompanhar a peça, ela deve estar no envelope. A conferência de quantidade e referência é feita por quem despacha, não pelo motoboy.',
        'Na oficina, a entrega pode ser para o balcão, o gerente ou o mecânico responsável. Informe o box e o nome do contato. Não é seguro circular entre veículos no elevador ou na área de reparo sem autorização. Se a oficina estiver fechada para almoço, confirme o horário. A confirmação de recebimento é registrada com quem aceitou a peça.',
      ],
      [
        'Devolução, troca e garantia',
        'Se a peça não servir, a devolução é uma nova corrida. O motoboy não decide sobre troca, garantia ou reembolso. A central orienta o remetente a preparar a peça na embalagem original e a informar o motivo da devolução. O retorno entra na cotação depois que a central verifica a distância e a disponibilidade.',
        'Peças usadas ou com resíduo podem ser recusadas quando faltam vedação e proteção contra atrito. O mesmo vale para componentes que vazem. Não transporte dinheiro, joias, documentos de alto valor ou materiais ilícitos. A operação é de transporte, não de arbitragem comercial entre fornecedor e oficina.',
      ],
      [
        'Cotação e devolução',
        'A cotação depende do volume e dos endereços, não de uma conta por trecho. O cliente envia as medidas da embalagem fechada, o peso, o ponto de coleta e o ponto de entrega. A central confere o acesso à autopeça e à oficina, a disponibilidade do motoboy e responde com o valor. Devolução de nota ou peça entra como etapa separada, com nova cotação.',
        'A central confere a agenda antes de despachar e avisa a oficina quando a peça sai. O retorno do motoboy chega pelo mesmo contato que pediu a corrida. Oficinas com demanda recorrente podem deixar contatos e endereços organizados para as próximas corridas. Sem a referência conferida, a peça volta e a corrida se repete.',
      ],
    ],
    checklist: {
      intro:
        'A peça certa, embalada do jeito certo, evita uma segunda viagem. Confira antes de acionar a central.',
      items: [
        'Referência da peça e número de série visíveis.',
        'Embalagem rígida, sem vazamento de óleo ou fluido.',
        'Nota fiscal separada e protegida, se precisar acompanhar.',
        'Nome da oficina, box e pessoa de contato.',
        'Peça embalada em caixa que feche no baú de 40 × 40 × 35 cm, pesando no máximo 20 kg.',
        'Confirmação de que o local estará aberto no horário da entrega.',
      ],
    },
    faq: [
      [
        'Vocês entregam peça no mesmo dia?',
        'A central verifica a disponibilidade para a janela solicitada. Se houver motoboy, a corrida é confirmada com a cotação e o ponto de coleta; se não houver, a central diz na hora.',
      ],
      [
        'Posso enviar óleo ou fluido de freio?',
        'Líquidos inflamáveis e produtos perigosos não são transportados. Pequenas peças com resíduo devem ser drenadas e vedadas. Informe o conteúdo antes da cotação para evitar recusa.',
      ],
      [
        'Como funciona a devolução de uma peça?',
        'A devolução é uma nova corrida, com cotação e disponibilidade próprias. Embale a peça na embalagem original e informe o motivo. A central confirma o procedimento antes do despacho.',
      ],
    ],
  },

  'motoboy-clinicas-proteses-dentarias': {
    lead:
      'Moldes, próteses, alinhadores e materiais odontológicos circulam entre clínicas e laboratórios com cuidado e discrição. O transporte precisa preservar a forma, a identificação e a cadeia de responsabilidade.',
    sections: [
      [
        'Cuidado que começa na identificação',
        'Um molde ou uma prótese é um item único, feito para uma pessoa. A troca de etiqueta ou a mistura de caixas pode inutilizar o trabalho e atrasar o atendimento. Por isso, a identificação externa deve ser clara, mas discreta: nome do paciente, referência do caso e clínica de destino não precisam ficar visíveis para terceiros. Um código interno ou iniciais podem ser suficientes quando as duas pontas conhecem o padrão.',
        'A ZaptLog não abre o volume nem avalia o material clínico. O papel da central é orientar a embalagem, confirmar o endereço e registrar quem recebeu. O remetente é responsável pela identificação e pelas condições de assepsia. O motoboy transporta um volume fechado, em posição estável, sem contato com outros pacotes que possam pressionar.',
      ],
      [
        'Embalagem rígida e posicionamento',
        'Moldes e próteses devem ir em caixa rígida, com espuma, papel ou outro apoio que impeça o movimento. O volume não pode ser inclinado se o material exigir posição específica. Avise a central sobre essa necessidade para que o posicionamento no baú seja planejado. Sacos plásticos são úteis contra umidade, mas não substituem a proteção mecânica.',
        'Materiais que precisam de refrigeração ou cadeia de temperatura não fazem parte da operação padrão. Se o item tiver essa exigência, a central avalia e pode orientar outro transporte. Líquidos, resinas e produtos químicos devem seguir as regras do fabricante e do remetente. Não aceitamos inflamáveis, materiais infectantes sem acondicionamento adequado ou itens que vazem.',
        [
          'Caixa rígida com apoio interno para evitar movimento.',
          'Identificação discreta, com código ou iniciais combinados.',
          'Proteção contra umidade sem substituir a proteção mecânica.',
          'Posição vertical ou horizontal informada na cotação.',
        ],
      ],
      [
        'Clínica, laboratório e recepção',
        'A coleta pode ser na recepção da clínica, no laboratório ou em um setor específico. Informe o nome do responsável e o horário em que o caso estará pronto. Se a entrega for para um consultório, confirme se a recepção pode receber o volume. Em prédios com portaria, pode ser necessário autorizar a entrada ou descer para buscar o item.',
        'A discrição é parte do serviço. Não é necessário anunciar o conteúdo na recepção nem expor o nome do paciente. A etiqueta e o contato bastam. Se o destinatário não estiver disponível, a central orienta o remetente sobre a possibilidade de deixar com outra pessoa autorizada. O comprovante é registrado com o nome de quem recebeu.',
        'Prova e ajuste não são a mesma etapa da entrega final. Uma prótese que volta ao laboratório para ajuste é uma nova corrida, com o mesmo cuidado de embalagem e identificação. Avise se o item é urgente para a agenda do paciente; a central verifica a disponibilidade, mas não promete encaixe imediato. O motoboy não transporta o item solto junto de outros volumes e não entra em consultório sem autorização.',
      ],
      [
        'O que não segue na moto',
        'O baú aceita até 40 × 40 × 35 cm e 20 kg. Caixas de equipamentos grandes, cadeiras odontológicas, volumosos de laboratório e materiais que precisam de refrigeração não são compatíveis. Também não transportamos animais, dinheiro, joias, inflamáveis ou produtos ilícitos. Amostras biológicas exigem regulamentação e embalagem específicas que não fazem parte do serviço padrão.',
        'Se o volume não entrar fechado no baú, não deve ser acomodado na garupa. A integridade do material e a segurança do entregador vêm antes da urgência. A central informa a limitação e orienta o cliente a buscar um transporte adequado. Um item único danificado não tem reposição imediata; recusar a corrida é mais seguro do que forçar o encaixe.',
      ],
      [
        'Cotação e retorno',
        'A cotação é feita pela central com as medidas da caixa fechada, o peso e os endereços de clínica e laboratório. A central verifica o acesso, a disponibilidade para o horário do caso e responde com o valor. Retorno de molde, prótese para ajuste ou protocolo é uma segunda etapa, cotada na mesma conversa.',
        'A central verifica a agenda no momento do pedido e mantém clínica e laboratório informados sobre coleta e entrega. Para clínicas com agenda, essa confirmação ajuda a encaixar o caso do paciente. O registro de recebimento fecha o ciclo: as duas pontas sabem quem pegou e quem entregou.',
      ],
    ],
    checklist: {
      intro:
        'Moldes e próteses exigem proteção mecânica e identificação discreta. Revise os itens antes de pedir a corrida.',
      items: [
        'Caixa rígida com apoio interno e fechamento seguro.',
        'Identificação discreta, sem expor dados do paciente.',
        'Posição de transporte informada e respeitada.',
        'Volume que caiba fechado no baú de 40 × 40 × 35 cm, com até 20 kg.',
        'Nome do responsável na clínica ou laboratório.',
        'Confirmação de quem pode receber e se haverá retorno.',
      ],
    },
    faq: [
      [
        'Vocês transportam moldes e próteses?',
        'Sim, em embalagem rígida e com posicionamento estável. Informe o conteúdo e as dimensões na cotação. O volume precisa caber fechado no baú e não pode ser pressionado por outros pacotes.',
      ],
      [
        'É possível levar material que precisa de refrigeração?',
        'A operação padrão não oferece cadeia de temperatura. Informe o requisito antes da cotação para que a central avalie a viabilidade ou oriente outro transporte.',
      ],
      [
        'A clínica precisa assinar algum comprovante?',
        'Se houver necessidade de protocolo ou assinatura, avise na cotação. A central combina o procedimento e registra o nome de quem recebeu o volume.',
      ],
    ],
  },

  'motoboy-cartorios-reconhecimento-firma': {
    lead:
      'Contratos, procurações, certidões e documentos para reconhecimento de firma precisam chegar ao cartório certo, com vias organizadas e retorno combinado. O transporte é simples, mas a conferência não pode ser.',
    sections: [
      [
        'Documento original não é encomenda comum',
        'Um contrato assinado, uma procuração ou uma certidão pode ter peso legal e não pode ser substituído facilmente. A perda de uma via original gera retrabalho, atraso e desgaste. Por isso, o envelope precisa ser rígido, lacrado e identificado. O motoboy não dobra documento, não abre para conferir e não deixa o volume com terceiros sem autorização.',
        'A ZaptLog não presta consultoria jurídica nem confirma a validade do documento. A central organiza o transporte entre o remetente e o cartório, registra quem recebeu e, quando combinado, acompanha o retorno. O remetente deve saber qual cartório, qual setor e qual procedimento será feito. O entregador não resolve dúvidas de reconhecimento de firma no balcão.',
      ],
      [
        'Como organizar as vias e o envelope',
        'Separe os documentos por finalidade: reconhecimento de firma, autenticação, registro ou simples entrega. Use clipes ou pastas internas para não misturar vias. A etiqueta externa deve trazer o nome do destinatário, o cartório e a quantidade de documentos. Se houver uma via que precisa voltar assinada, sinalize isso sem expor dados sensíveis na parte de fora.',
        'Prefira envelope rígido, com lacre. Documentos que não podem dobrar devem ser acomodados sem pressão. Se o cartório exigir original e cópia, confirme a quantidade com o remetente. O motoboy não tira cópias nem preenche formulários. O serviço é de transporte, não de execução cartorial.',
        [
          'Documentos separados por finalidade e por cartório.',
          'Envelope rígido, lacrado e identificado.',
          'Quantidade de vias e necessidade de retorno anotadas.',
          'Nome do responsável e setor do cartório.',
        ],
      ],
      [
        'Chegada ao cartório e protocolo',
        'Cartórios costumam ter recepção, senha e setores específicos. O motoboy pode entregar no balcão e aguardar um protocolo, mas isso precisa ser combinado. Em alguns casos, o documento é protocolado e o resultado fica para outro dia; em outros, o serviço é feito na hora. A central não promete que o cartório concluirá o ato no momento da entrega.',
        'Se houver retorno, ele é uma segunda etapa. A central verifica a distância e a disponibilidade e inclui o retorno na cotação. O entregador não espera por tempo indeterminado nem resolve pendências de documentação. Se o cartório recusar o documento por falta de alguma via, a central informa o remetente e orienta a correção antes de uma nova corrida.',
      ],
      [
        'O que não faz parte do serviço',
        'Não transportamos dinheiro, joias, cartões ou cheques. Animais, inflamáveis, armas e produtos ilícitos também ficam fora. A operação leva documentos em envelope rígido, com até 20 kg e dentro dos 40 × 40 × 35 cm do baú.',
        'Se o volume incluir um objeto que acompanha o documento, ele deve ser embalado separadamente e informado na cotação. Não coloque objetos soltos que possam amassar o papel. Um selo, uma chave ou um lacre precisam de proteção. A triagem é feita antes do despacho, não no balcão do cartório.',
      ],
      [
        'Confirme o cartório e o ato',
        'Antes de despachar, confirme o nome e o endereço do cartório indicado para aquele ato. Cartórios diferentes cuidam de atos diferentes; o documento precisa chegar ao balcão correto. Verifique também se o reconhecimento será feito na hora ou se o cartório devolverá a via em outro momento. Essa informação muda a necessidade de retorno e o tempo de permanência do entregador.',
        'Se o remetente não souber qual unidade procurar, a orientação deve vir dele ou de quem cuida do documento. O motoboy não escolhe cartório nem decide se uma firma pode ser reconhecida. O serviço termina com o registro de quem recebeu.',
      ],
      [
        'Cotação e acompanhamento',
        'A cotação é feita pela central com as medidas do envelope fechado, o peso e os endereços de coleta e entrega. A central confere o acesso ao cartório, o horário de funcionamento e a disponibilidade, e responde com o valor. Se o documento protocolado precisar voltar, o retorno ganha cotação própria.',
        'A central avisa quando o envelope sai e registra o nome de quem recebeu no cartório. O tempo dentro do cartório depende da fila e do ato; o trânsito também não tem horário fixo. Para documentos com prazo, peça a corrida com antecedência e confirme o funcionamento do setor. O original tem um destino único; por isso a conferência começa antes da saída.',
      ],
    ],
    checklist: {
      intro:
        'Documentos cartoriais pedem envelope rígido e clareza sobre retorno. Passe pelos itens antes do despacho.',
      items: [
        'Documentos separados por cartório e finalidade.',
        'Envelope que não dobre, com lacre e etiqueta legível.',
        'Nome do setor e responsável no cartório.',
        'Confirmação do horário de funcionamento.',
        'Necessidade de protocolo, assinatura ou retorno de via.',
        'Envelope ou caixa que feche no baú, dentro de 40 × 40 × 35 cm e 20 kg.',
      ],
    },
    faq: [
      [
        'Vocês esperam o reconhecimento de firma no cartório?',
        'A espera deve ser acertada na cotação. O cartório pode ter fila ou concluir o ato em outro momento. A central orienta o procedimento e confirma se a espera ou o retorno cabem na janela do motoboy.',
      ],
      [
        'O motoboy pode tirar cópia ou preencher formulário?',
        'Não. O serviço é de transporte. Cópias, formulários e conferência jurídica são responsabilidade do remetente e do cartório. O entregador apenas transporta o envelope fechado e registra o recebimento.',
      ],
      [
        'Posso enviar documentos originais?',
        'A central precisa saber o conteúdo antes da cotação. Dinheiro, joias, cheques e cartões não são transportados. Documentos originais exigem envelope rígido e identificação; se o conjunto não couber no baú, a central orienta outro transporte.',
      ],
    ],
  },

  'motoboy-ecommerce-coleta-agencias-correios': {
    lead:
      'Lojas virtuais e pequenos vendedores precisam levar pedidos até agências, pontos de coleta e transportadoras sem perder prazo nem etiqueta. A corrida de moto organiza o último trecho entre o estoque e o despacho.',
    sections: [
      [
        'O elo entre o pedido e a agência',
        'No e-commerce, o pedido só começa a existir para o cliente quando é postado e o código de rastreio passa a funcionar. Entre a separação na loja e a entrega na agência existe um trecho que pode atrasar: a caixa não está pronta, a etiqueta foi impressa errada, o ponto de coleta fecha mais cedo ou o volume não cabe no baú. A corrida de moto resolve esse trecho quando ele é curto e o volume é compacto.',
        'A ZaptLog não vende etiqueta nem gerencia pedido. A central transporta volumes já preparados, com destinatário e código de postagem, entre o endereço da loja e a agência ou ponto combinado. Se a etiqueta precisar ser impressa, isso é feito pelo remetente. O motoboy não corrige dados de envio nem decide sobre frete.',
      ],
      [
        'Preparação do pacote e da etiqueta',
        'A caixa deve estar fechada, com a etiqueta legível e o código de barras sem dobras. Se o pedido tiver mais de um volume, identifique cada um como parte do mesmo envio. Não cole a etiqueta sobre fita que possa soltar. Em dias de chuva, proteja o pacote com saco plástico transparente, sem cobrir o código de barras.',
        'Volumes frágeis precisam de proteção interna e identificação externa. Líquidos devem estar vedados e separados. O limite é 40 × 40 × 35 cm e 20 kg por volume. Se a loja tiver vários pedidos, a central avalia quantos cabem em uma corrida e se serão necessárias viagens separadas. Não compacte caixas para forçar o encaixe.',
        [
          'Etiqueta legível, sem dobras sobre o código de barras.',
          'Caixa fechada e reforçada nas bordas.',
          'Proteção externa contra chuva sem esconder a etiqueta.',
          'Separação por agência ou ponto de postagem.',
        ],
      ],
      [
        'Agências, pontos de coleta e horários',
        'Agências dos Correios, pontos do Mercado Livre, Jadlog e outras transportadoras têm horários, filas e procedimentos próprios. O motoboy precisa saber qual unidade, qual endereço e se o recebimento é no balcão ou em uma doca. Não basta dizer o nome da transportadora: duas agências da mesma rede podem ter regras diferentes.',
        'Confirme o horário de fechamento e a documentação exigida. Se a loja precisa de comprovante de postagem, ele deve ser solicitado no balcão e devolvido ao remetente em uma etapa combinada. O entregador não assina declaração de conteúdo nem resolve divergência de etiqueta. A conferência é feita pela agência no ato do recebimento.',
      ],
      [
        'Coletas, devoluções e pedidos grandes',
        'A corrida também pode apoiar a coleta de devoluções em uma agência ou a retirada de um pedido pronto. Nesse caso, o volume precisa estar disponível e identificado. Se a agência exigir autorização ou código de retirada, o remetente deve fornecer antes. O motoboy não retira pedido sem comprovação de que está autorizado.',
        'Para um volume maior de pedidos, uma única moto pode não ser suficiente. A central calcula a capacidade e informa se serão necessárias corridas adicionais. Não amarramos sacolas na garupa nem transportamos caixas que impeçam o fechamento do baú. A loja deve ter um plano para os dias de pico, com os pedidos separados por prioridade.',
      ],
      [
        'Cotação e postagem',
        'A cotação é feita pela central com as medidas da caixa fechada, o peso e os endereços da loja e da agência. A central confere o horário de recebimento da unidade, a disponibilidade do motoboy e responde com o valor. Se a corrida incluir mais de uma agência, cada destino entra na mesma cotação antes da confirmação.',
        'A postagem depende do horário da agência e da fila; a central não fixa um prazo de balcão. A ZaptLog responde pela coleta e pela entrega na agência, com confirmação de recebimento. O prazo de transporte e o rastreio ficam com a transportadora escolhida pelo lojista. Lojas com envios diários podem fixar um ponto de coleta e uma janela com a central.',
      ],
    ],
    checklist: {
      intro:
        'Pacote fechado, etiqueta legível e agência certa. Cheque a lista antes de chamar o motoboy.',
      items: [
        'Caixa fechada, com etiqueta e código de barras legíveis.',
        'Proteção contra chuva sem cobrir a etiqueta.',
        'Pedidos divididos por unidade de postagem.',
        'Confirmação do horário de funcionamento da unidade.',
        'Cada pacote com até 40 × 40 × 35 cm e 20 kg, sem forçar a tampa.',
        'Necessidade de comprovante de postagem.',
      ],
    },
    faq: [
      [
        'Vocês levam pedidos para os Correios?',
        'Sim, para a agência indicada, com o volume já etiquetado e pronto para postagem. O prazo de entrega ao cliente final é da transportadora. A central confirma o horário e a cotação antes do despacho.',
      ],
      [
        'O motoboy pode imprimir a etiqueta?',
        'Não. A etiqueta deve ser preparada e impressa pelo remetente. O entregador transporta o pacote fechado e não corrige dados de envio nem emite declaração de conteúdo.',
      ],
      [
        'Quantos pedidos cabem em uma corrida?',
        'Depende do tamanho e do peso de cada volume. O limite é 20 kg e 40 × 40 × 35 cm por pacote, além da capacidade do baú. A central avalia a quantidade e informa se serão necessárias corridas adicionais.',
      ],
    ],
  },

  'motoboy-graficas-amostras-impressos': {
    lead:
      'Provas de impressão, banners dobrados, cartões e embalagens precisam chegar sem dobra, umidade ou atraso. Para uma gráfica, o transporte é parte da aprovação do material.',
    sections: [
      [
        'O material impresso perde qualidade quando chega danificado',
        'Uma prova de cor amassada não permite avaliar a impressão. Um banner dobrado sem critério pode marcar a lona. Um pacote de cartões apertado demais pode unir as bordas. Na gráfica, o acabamento é parte do produto. O transporte começa por preservar a apresentação e termina quando o material chega em condições de aprovação.',
        'A ZaptLog orienta a embalagem de acordo com o formato: envelope rígido, tubo, caixa ou pasta. A central pergunta se o material pode dobrar, se precisa ficar plano e se há prazo de aprovação. O motoboy não avalia cor nem conteúdo. Ele mantém o volume fechado e posicionado, sem pressão de outros pacotes.',
      ],
      [
        'Provas, banners e grandes formatos',
        'Provas pequenas devem ir em envelope rígido com papelão de reforço. Materiais que precisam ficar planos não podem ser dobrados, mesmo que caibam em uma caixa menor. Banners e lonas devem ser dobrados em medidas definidas e protegidos por saco plástico. Se o volume dobrar muito ou passar das medidas do baú, a corrida não é viável.',
        'Grandes formatos montados, placas rígidas e cavaletes não cabem na moto. O espaço útil do baú é de 40 × 40 × 35 cm, com 20 kg de limite. Uma pilha de papel pode parecer compacta, mas pesar mais de 20 kg. Pese o volume antes de solicitar. Se a gráfica tiver vários itens, a central avalia se cada um cabe ou se serão necessárias corridas separadas.',
        [
          'Envelope rígido com reforço para provas que não podem dobrar.',
          'Tubo resistente para peças que devem permanecer enroladas.',
          'Saco plástico externo para proteger do clima.',
          'Identificação do job, cliente e contato de aprovação.',
        ],
      ],
      [
        'Entrega para aprovação e para o cliente final',
        'Quando o destino é uma agência, um cliente corporativo ou uma loja, confirme quem vai receber e se o material será aprovado na hora. O motoboy não explica a arte nem negocia alterações. Se houver dúvida técnica, o contato é com a gráfica. A entrega termina quando o volume é recebido e o nome é registrado.',
        'Se a gráfica precisar de uma prova assinada de volta, isso é uma segunda etapa. A central verifica a distância e a disponibilidade antes e inclui o retorno na cotação. O mesmo vale para uma entrega em evento, em que o material pode precisar ser levado até a entrada ou a recepção. O acesso a área restrita depende de autorização do organizador.',
      ],
      [
        'O que não transportamos',
        'Não levamos tintas inflamáveis, solventes, produtos químicos, animais, dinheiro ou joias. Materiais que precisam de refrigeração ou de veículo fechado maior também não fazem parte da operação padrão. Se o item for úmido, sujo ou estiver soltando resíduo, deve ser embalado antes da coleta.',
        'Cargas amarradas na garupa e volumes que impedem a tampa de fechar não são aceitos. O baú é fechado, mas não é rígido o suficiente para proteger uma placa sem apoio. O bom senso na triagem evita perda de material e um prejuízo que não pode ser resolvido depois.',
      ],
      [
        'Identificação do job e da versão',
        'Uma gráfica pode ter várias provas do mesmo job em circulação. A etiqueta externa deve trazer o número do job, a versão da prova, o cliente e o contato de aprovação. Não escreva direto sobre a prova nem use fita adesiva na área impressa.',
        'Quando houver mais de uma prova para o mesmo destinatário, separe cada versão em envelope próprio. Misturar versões pode fazer o cliente aprovar a arte errada. O motoboy não abre o envelope para conferir a prova. Se a gráfica precisa de uma assinatura de aprovação, o retorno é combinado como etapa separada.',
      ],
      [
        'Cotação e aprovação',
        'A cotação é feita pela central com as medidas da embalagem fechada, o peso e os endereços de coleta e entrega. A central confere o acesso ao destino, a disponibilidade para a janela de aprovação e responde com o valor. Retorno de prova assinada é uma etapa separada, com cotação própria.',
        'A gráfica define o prazo de produção e o cliente define o de aprovação; a corrida começa quando o material está liberado. A central marca a coleta e confirma a entrega com o nome de quem recebeu. Para lançamentos e feiras, programe a entrega com antecedência e deixe um contato disponível no destino. A produção fica com a gráfica. O trecho entre a coleta e o recebimento fica com a ZaptLog.',
      ],
    ],
    checklist: {
      intro:
        'Formato, umidade e destino definem a embalagem. Confira o volume antes da coleta.',
      items: [
        'Provas em envelope rígido ou tubo, sem dobras não combinadas.',
        'Banners dobrados e protegidos por saco plástico.',
        'Job e contato de aprovação identificados por fora.',
        'Volume plano ou enrolado que caiba no baú (40 × 40 × 35 cm) e pese até 20 kg.',
        'Confirmação de quem vai receber e aprovar.',
        'Necessidade de retorno de prova assinada.',
      ],
    },
    faq: [
      [
        'Vocês entregam banners e lonas?',
        'Sim, se o material dobrado couber fechado no baú e não ultrapassar 20 kg. Placas rígidas e grandes formatos montados não são compatíveis com a moto.',
      ],
      [
        'Uma prova de impressão pode ir plana?',
        'Sim. Use envelope rígido com reforço e avise que o material não pode dobrar. O volume precisa caber no baú sem ser pressionado.',
      ],
      [
        'Vocês entregam em eventos?',
        'É possível entregar em um ponto de encontro acessível, como a entrada ou a recepção do evento. O acesso a pavilhão ou área restrita depende de autorização do organizador.',
      ],
    ],
  },

  'motoboy-feirinha-madrugada': {
    lead:
      'A Feirinha da Madrugada movimenta o Brás e o Pari antes do amanhecer. Sacoleiros, lojistas e hotéis precisam de um transporte que entenda o horário, o ponto de encontro e o limite do baú.',
    sections: [
      [
        'Uma operação que começa antes do sol',
        'A Feirinha da Madrugada tem um ritmo próprio. Compradores chegam de outras cidades, lojistas abrem cedo, hotéis recebem hóspedes que viajam a negócios e as ruas ficam movimentadas antes do horário comercial tradicional. Quem trabalha nesse período precisa de uma entrega que não dependa de horário de shopping ou de escritório.',
        'A ZaptLog atende quando há motoboy disponível e um ponto de encontro seguro. O pedido precisa do endereço exato, do horário em que o volume estará pronto e do contato de quem recebe. Não há cobertura permanente durante toda a madrugada. A confirmação sai na cotação, com a janela possível informada antes do despacho.',
      ],
      [
        'Volumes típicos e embalagem',
        'Sacoleiros costumam levar amostras, pequenos lotes de roupas, acessórios e documentos de compra. O volume precisa ser consolidado em caixa ou saco inviolável, sem alças para fora. Roupas devem ser protegidas contra umidade e sujeira; em noite de chuva, use saco plástico por fora da caixa.',
        'Não aceitamos sacolas de feira abertas, fardos que impeçam a tampa de fechar ou volumes amarrados na garupa. O baú comporta 40 × 40 × 35 cm e até 20 kg. Dinheiro, joias, cartões e cheques não são transportados. O motoboy não acompanha o cliente durante as compras nem carrega sacolas soltas; ele leva um volume fechado de um ponto a outro. Se as compras vierem de lojistas diferentes, una tudo em uma caixa só e mantenha os comprovantes de cada loja separados dentro do volume.',
        [
          'Consolide as compras em uma caixa ou saco inviolável.',
          'Identifique o destinatário e o ponto de encontro.',
          'Proteja roupas e tecidos contra chuva e poeira.',
          'Não inclua dinheiro, joias ou documentos de alto valor.',
        ],
      ],
      [
        'Hotéis, estacionamentos e pontos de encontro',
        'Hotéis da região recebem muitos compradores. A entrega pode ser deixada na recepção, desde que o hóspede tenha autorizado. Informe o nome completo e o número do quarto, se houver. Em estacionamentos de ônibus, combine a plataforma ou a entrada de passageiros. O motoboy não entra em área restrita sem autorização.',
        'Na feira, o ponto de encontro deve ser acessível e fora do fluxo de pedestres. Uma esquina, a entrada de uma loja ou a portaria de um estacionamento funcionam melhor do que uma barraca no meio da rua. O cliente deve estar no local no horário combinado. Se não estiver, a central orienta sobre a segunda tentativa e confirma as condições antes de sair.',
      ],
      [
        'Limites e segurança',
        'A madrugada não muda o limite físico do baú nem as regras de segurança. Não transportamos animais, inflamáveis, armas, produtos ilícitos, dinheiro ou joias. O volume precisa estar fechado e identificado; bebidas, alimentos preparados abertos e materiais que exijam refrigeração também ficam fora. Se o volume tiver odor forte, estiver molhado ou puder vazar, deve ser embalado ou recusado.',
        'O entregador não circula a pé por dentro da feira nem espera em local inseguro. O ponto de encontro precisa ser combinado com antecedência. A central orienta o cliente a manter o telefone disponível e a avisar se houver mudança de endereço. O volume muda de mão no ponto combinado, e o motoboy segue com o baú fechado.',
      ],
      [
        'Cotação e agendamento',
        'A cotação é feita pela central com as medidas da caixa fechada, o peso e os endereços de coleta e entrega. A central confere o acesso ao ponto de encontro, a disponibilidade para a madrugada e responde com o valor. Retorno ou segunda tentativa entram na cotação como etapa separada.',
        'O pedido entra por mensagem, e a central responde com a janela que consegue cobrir naquela madrugada. A agenda varia; nem toda data tem motoboy disponível. Para uma viagem ou um lote com prazo, fale com a central com antecedência e confirme o ponto de encontro. O aviso chega quando o motoboy sai e quando o volume é entregue.',
      ],
    ],
    checklist: {
      intro:
        'Na madrugada, o ponto de encontro e o horário importam tanto quanto a embalagem. Confira antes de pedir.',
      items: [
        'Endereço acessível e ponto de encontro fora do fluxo da feira.',
        'Volume consolidado em caixa ou saco inviolável.',
        'Caixa consolidada dentro de 40 × 40 × 35 cm e 20 kg, com a tampa livre.',
        'Nome do destinatário, hotel ou estacionamento.',
        'Confirmação de que o volume estará pronto no horário.',
        'Confirmação de que dinheiro e itens ilícitos ficam fora do volume.',
      ],
    },
    faq: [
      [
        'Vocês atendem de madrugada todos os dias?',
        'A disponibilidade varia. A central confirma no momento do contato se há motoboy para a janela solicitada. A cobertura existe apenas na janela confirmada.',
      ],
      [
        'Posso mandar várias sacolas de compras?',
        'Somente se forem consolidadas em uma embalagem fechada que caiba inteira no baú, com até 20 kg. Sacolas abertas ou volumes para fora não são aceitos.',
      ],
      [
        'A entrega pode ser deixada no hotel?',
        'Sim, com autorização do hóspede e confirmação da recepção. Informe o nome completo e o quarto. A central registra quem recebeu o volume.',
      ],
    ],
  },

  'motoboy-escritorios-contabilidade-advocacia': {
    lead:
      'Malotes confidenciais, contratos, balancetes e livros fiscais circulam entre escritórios, clientes e cartórios. O transporte precisa de envelope rígido, identificação correta e discrição.',
    sections: [
      [
        'Confidencialidade desde a coleta',
        'Escritórios de contabilidade e advocacia lidam com informação que não pode circular de qualquer maneira. Um envelope aberto, uma etiqueta com nome de cliente exposto ou uma entrega feita à pessoa errada podem gerar problema de sigilo. O motoboy não lê o conteúdo, mas precisa saber qual é o destino e quem está autorizado a receber.',
        'A ZaptLog orienta o uso de envelope rígido e lacrado, com identificação externa mínima. A central confirma o nome do destinatário e o setor. O entregador não abre o envelope, não tira cópia e não comenta o conteúdo. O transporte termina quando o volume é recebido e o nome é registrado para o remetente.',
      ],
      [
        'Contratos, balancetes e livros fiscais',
        'Contratos e procurações devem ir em envelope que não dobre. Balancetes e livros fiscais podem ser volumosos; confira o peso e as medidas antes da cotação. Se o conjunto não couber no baú, a central informa e o escritório precisa dividir o envio ou buscar outro transporte. Não compacte documentos para forçar o encaixe.',
        'Separe os materiais por cliente ou por pasta. Se houver mais de um destino, serão necessárias corridas separadas. Não misture documentos com objetos que possam amassar ou vazar. Dinheiro, joias, cartões e cheques não são transportados. Se o conjunto tiver mais de um volume, as medidas de cada caixa entram na cotação antes do despacho.',
        [
          'Envelope rígido e lacrado para contratos e procurações.',
          'Pastas separadas por cliente e por destino.',
          'Identificação externa discreta, sem dados sensíveis.',
          'Confirmação do nome e do setor de quem recebe.',
        ],
      ],
      [
        'Recepção, protocolo e assinatura',
        'Escritórios costumam ter recepção, portaria e sala de reunião. O motoboy deve ser direcionado ao ponto correto, sem circular por áreas restritas. Se o destinatário não estiver disponível, a central orienta sobre a possibilidade de deixar o envelope com uma pessoa autorizada. Para documentos sensíveis, a entrega em mãos pode ser exigida.',
        'Quando há protocolo, o destinatário assina ou confirma o recebimento. A via pode voltar para o remetente em uma segunda etapa, combinada antes. O entregador não espera por uma reunião longa nem resolve pendências de assinatura. Se o documento precisar de reconhecimento em cartório, isso é uma corrida separada ou uma etapa adicional confirmada pela central.',
        'Para prazos apertados, monte uma agenda simples: qual documento sai primeiro, quem assina, em que horário a pessoa está disponível e o que precisa voltar. A central não conhece o fluxo interno do escritório e não pode decidir prioridades jurídicas. Quanto mais clara for a instrução, menor a chance de o motoboy chegar durante uma audiência ou uma reunião de fechamento.',
      ],
      [
        'O que não cabe no serviço',
        'O baú só fecha com volumes de até 40 × 40 × 35 cm e 20 kg. Caixas de arquivo grandes, móveis, equipamentos volumosos e materiais que precisam de refrigeração não são compatíveis. Também não transportamos animais, inflamáveis, armas, produtos ilícitos, dinheiro ou joias. Se o volume não entra fechado, não é uma corrida de moto.',
        'A urgência de um prazo jurídico ou fiscal não altera o limite físico nem justifica deixar o volume na garupa. A central informa a limitação e orienta outro transporte quando necessário. Forçar o volume na garupa coloca o documento e a responsabilidade de quem despachou em risco.',
      ],
      [
        'Fechamento mensal e guias',
        'No fechamento do mês, guias, balancetes e comprovantes circulam ao mesmo tempo, e cada cliente tem um endereço. Organize um envelope por cliente, com competência e tipo de documento na etiqueta interna. Não misture guias de empresas diferentes.',
        'Na advocacia, confirme a pessoa e o horário quando a via exige assinatura em mãos. Se o destino é fórum ou repartição, verifique o setor e o acesso antes de despachar. O motoboy não protocola petição nem espera atendimento longo.',
      ],
      [
        'Cotação e envio recorrente',
        'A cotação é feita pela central com as medidas do malote fechado, o peso e os endereços de coleta e entrega. A central confere o acesso ao escritório e a disponibilidade para a janela, e responde com o valor. O retorno de protocolo assinado ganha cotação própria.',
        'A central confirma a agenda antes do despacho e avisa o escritório quando o malote é coletado e entregue. Para escritórios com envios recorrentes, contatos e endereços podem ser organizados com antecedência. O malote chega ao destino com nome e horário registrados; o conteúdo continua fora da conversa.',
      ],
    ],
    checklist: {
      intro:
        'Documentos confidenciais pedem envelope lacrado e destinatário identificado. Confira antes da cotação.',
      items: [
        'Envelope rígido, lacrado e com identificação discreta.',
        'Uma pasta por cliente, sem misturar destinos.',
        'Nome e setor de quem pode receber.',
        'Confirmação de protocolo ou assinatura.',
        'Malote ou caixa que caiba no baú, com limite de 40 × 40 × 35 cm e 20 kg.',
        'Confirmação de que dinheiro, joias e itens proibidos não entram no malote.',
      ],
    },
    faq: [
      [
        'Vocês transportam malotes confidenciais?',
        'Sim. O envelope deve estar lacrado e identificado, e a central confirma quem pode receber. O entregador não abre o conteúdo nem comenta a entrega.',
      ],
      [
        'Posso enviar livros fiscais e balancetes?',
        'Sim, desde que o volume caiba fechado no baú e não ultrapasse 20 kg. Se o conjunto for maior, será necessário dividir o envio ou buscar outro transporte.',
      ],
      [
        'Como funciona o retorno de documento assinado?',
        'O retorno é uma etapa adicional, com cotação e disponibilidade confirmadas pela central. Informe na cotação se a via precisa voltar e quem deve recebê-la.',
      ],
    ],
  },

  'motoboy-maquininhas-cartao-ti': {
    lead:
      'Maquininhas POS, roteadores, cabos e pequenos equipamentos de TI precisam chegar ao ponto comercial com número de série e acessórios conferidos. A troca rápida evita fila no caixa e interrupção no atendimento.',
    sections: [
      [
        'Equipamento pequeno, impacto grande',
        'Uma maquininha parada pode impedir uma loja de receber pagamento. Um roteador que não liga pode derrubar o sistema de um escritório. A corrida de moto é útil para levar o equipamento de reposição, devolver o antigo ou transportar acessórios entre o suporte e o cliente. O volume é pequeno, mas a conferência precisa ser cuidadosa.',
        'A ZaptLog transporta equipamentos já embalados, com número de série, acessórios e ordem de serviço quando houver. A central não configura o aparelho nem presta suporte técnico. O motoboy entrega o volume e confirma quem recebeu. A instalação e o teste são responsabilidade do cliente ou do técnico.',
      ],
      [
        'Embalagem e conferência de acessórios',
        'Use a embalagem original ou uma caixa rígida com proteção. Separe fonte, cabo, base e manuais em um saco interno. O número de série deve estar visível na etiqueta externa, sem expor dados desnecessários. Se o equipamento for frágil, avise a central para que o posicionamento no baú seja planejado.',
        'Não coloque ferramentas soltas junto do aparelho. Líquidos e baterias soltas não são transportados. Se a maquininha tiver bateria interna, ela deve estar desligada e embalada conforme a orientação do fabricante. Cabem no baú volumes de até 40 × 40 × 35 cm e 20 kg. Um terminal de ponto de venda cabe facilmente; um servidor ou um monitor grande, não.',
        [
          'Caixa rígida com proteção e acessórios separados.',
          'Número de série visível e conferido na coleta.',
          'Equipamento desligado e sem partes soltas.',
          'Ordem de serviço ou etiqueta de devolução anexada.',
        ],
      ],
      [
        'Coleta no suporte e entrega no balcão',
        'A coleta pode ser em um centro de suporte, uma loja ou um escritório. Informe o nome do responsável e o horário em que o equipamento estará pronto. Se houver uma maquininha antiga para devolver, ela deve ser embalada separadamente e identificada. O motoboy não faz backup, não apaga dados e não testa o aparelho.',
        'No destino, o equipamento pode ser entregue no balcão, na recepção ou a um técnico. Confirme o nome e o setor. Se a loja estiver em shopping, o acesso de entregadores tem regras próprias. O comprovante de recebimento é registrado com quem aceitou o volume. Para troca, o retorno do equipamento antigo é uma etapa separada ou uma condição confirmada pela central.',
      ],
      [
        'O que não faz parte do escopo',
        'Não transportamos dinheiro, cartões soltos, joias ou documentos de alto valor. O equipamento não deve ser enviado ligado ou com dados acessíveis. Não fazemos instalação, configuração, suporte remoto ou descarte de dados. A lista de recusas inclui animais, inflamáveis, armas e produtos ilícitos.',
        'Se o volume não couber no baú, a central informa e o cliente busca outro transporte. Não amarramos equipamentos na garupa. O aparelho viaja fechado e o entregador não circula com peso fora do baú. Para lotes de equipamentos, a central avalia a quantidade e informa se serão necessárias corridas adicionais.',
      ],
      [
        'Várias lojas e devolução de equipamentos',
        'Quando a empresa precisa trocar maquininhas em mais de uma loja, separe os equipamentos por CNPJ e por número de série. Cada ponto de entrega é uma corrida com coleta e entrega próprias; a central pode organizar a sequência, mas não transforma uma moto em estoque itinerante. Identifique a loja e o responsável na caixa, sem escrever senhas ou códigos de acesso.',
        'Na devolução, o aparelho antigo deve ir em embalagem separada, desligado e com a etiqueta de retorno. Se o cliente usa a mesma caixa para enviar o novo e receber o antigo, confirme com a central se isso é possível na mesma corrida; a operação padrão faz uma coleta e uma entrega por trecho. O comprovante de recebimento registra quem aceitou o equipamento, não o estado interno do aparelho.',
      ],
      [
        'Cotação e devolução do antigo',
        'A cotação é feita pela central com as medidas da caixa fechada, o peso e os endereços de coleta e entrega. A central confere o acesso e a disponibilidade para a troca, e responde com o valor. A devolução do equipamento antigo ganha cotação própria.',
        'O tempo depende do trânsito e da agenda; a central informa a janela possível antes do despacho. Para empresas com várias lojas, uma sequência de corridas pode ser organizada, com cada destino confirmado antes do despacho. O número de série identifica o aparelho na saída e na volta; o estado interno é conferido pelo cliente ou pelo técnico.',
      ],
    ],
    checklist: {
      intro:
        'Equipamento de TI exige série, acessórios e devolução bem definidos. Revise antes de pedir a corrida.',
      items: [
        'Caixa firme, com fonte e cabos em saco interno.',
        'Série anotada e visível na etiqueta externa.',
        'Aparelho desligado, sem bateria solta.',
        'Nome do responsável no ponto de entrega.',
        'Caixa do equipamento dentro de 40 × 40 × 35 cm, com até 20 kg.',
        'Confirmação de devolução do equipamento antigo, se houver.',
      ],
    },
    faq: [
      [
        'Vocês configuram a maquininha?',
        'Não. O serviço é de transporte. A configuração, o teste e o suporte são responsabilidade do cliente ou do fornecedor. O motoboy entrega o equipamento embalado e registra o recebimento.',
      ],
      [
        'Posso enviar a maquininha antiga de volta?',
        'Sim, embalada separadamente e identificada. A devolução pode ser uma segunda corrida ou uma condição combinada com a central. A cotação é confirmada antes.',
      ],
      [
        'Vocês transportam servidores e monitores?',
        'Somente se o volume couber fechado no baú, com até 40 × 40 × 35 cm e 20 kg. Equipamentos maiores precisam de outro transporte.',
      ],
    ],
  },
};
