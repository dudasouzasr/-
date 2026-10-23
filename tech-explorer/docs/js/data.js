// Dados didáticos (sem valores salariais). id, nome, categoria, programação, perfil, descrição, ferramentas, cargos, primeiro passo
const AREAS=[
["fe","Desenvolvimento Front-end","Desenvolvimento","Alto","Criativo","Constrói a parte visual e interativa de sites e apps.","HTML, CSS, JavaScript, React, Git","Desenvolvedor Front-end, Web Developer","Faça uma página pessoal com HTML e CSS."],
["be","Desenvolvimento Back-end","Desenvolvimento","Alto","Lógico","Cria a lógica, as regras e as APIs que rodam no servidor.","Python, Java, C#, Node.js, SQL, APIs","Desenvolvedor Back-end","Crie uma API simples que guarda e lista tarefas."],
["fs","Desenvolvimento Full Stack","Desenvolvimento","Alto","Lógico","Atua no front-end e no back-end de um mesmo produto.","JavaScript, Node.js, SQL, Git","Desenvolvedor Full Stack","Domine o básico de web antes de ligar front e back."],
["mob","Desenvolvimento Mobile","Desenvolvimento","Alto","Criativo","Desenvolve aplicativos para Android e iOS.","Kotlin, Swift, Flutter, React Native","Desenvolvedor Mobile, Android Developer","Monte um app de lista de tarefas."],
["cd","Ciência de Dados","Dados e IA","Médio","Analítico","Analisa dados para achar padrões e apoiar decisões.","Planilhas, SQL, Python, estatística","Analista de Dados, Cientista de Dados","Analise um conjunto de dados público em planilha."],
["ed","Engenharia de Dados","Dados e IA","Alto","Lógico","Constrói os fluxos que coletam e organizam dados.","SQL, Python, pipelines, nuvem","Engenheiro de Dados","Aprenda SQL e modelagem de tabelas."],
["ia","IA e Machine Learning","Dados e IA","Alto","Analítico","Cria modelos que aprendem a partir de dados.","Python, matemática, bibliotecas de ML","Engenheiro de ML, Analista de IA","Estude Python e estatística básica."],
["sec","Cibersegurança","Infra e Segurança","Médio","Investigativo","Protege sistemas e investiga falhas e ameaças.","Redes, Linux, ferramentas de monitoramento","Analista de Segurança","Aprenda redes e Linux."],
["inf","Infraestrutura e Redes","Infra e Segurança","Baixo","Operacional","Mantém servidores, redes e ambientes funcionando.","Linux, Windows Server, redes, scripts","Analista de Infraestrutura, Administrador de Redes","Monte uma rede virtual de teste."],
["cloud","Nuvem e DevOps","Infra e Segurança","Médio","Operacional","Automatiza entregas e opera sistemas em nuvem.","Git, Linux, Docker, CI/CD, nuvem","Engenheiro DevOps, Cloud Engineer","Aprenda Linux, Git e Docker."],
["bd","Banco de Dados","Dados e IA","Médio","Analítico","Projeta e cuida do armazenamento dos dados.","SQL, modelagem, PostgreSQL, MySQL","Administrador de Banco de Dados","Pratique consultas SQL."],
["qa","QA e Testes","Qualidade","Baixo","Investigativo","Garante que o software funcione antes de chegar ao usuário.","Casos de teste, automação, Jira","Analista de QA, Tester","Escreva casos de teste para um app que você usa."],
["ux","UX/UI Design","Design e Gestão","Nenhum","Criativo","Projeta experiências e interfaces centradas nas pessoas.","Figma, pesquisa com usuários, protótipos","UX Designer, UI Designer","Redesenhe uma tela de app no Figma."],
["as","Análise de Sistemas e Negócios","Design e Gestão","Baixo","Comunicativo","Traduz necessidades do negócio em requisitos.","Levantamento de requisitos, UML, SQL","Analista de Sistemas, Analista de Negócios","Descreva o fluxo de um processo do dia a dia."],
["sup","Suporte Técnico","Infra e Segurança","Nenhum","Comunicativo","Resolve problemas de usuários e equipamentos.","Sistemas operacionais, chamados, redes básicas","Analista de Suporte, Help Desk","Aprenda a diagnosticar problemas comuns de PC e rede."],
["gp","Gestão de Projetos e Produtos","Design e Gestão","Nenhum","Comunicativo","Organiza equipes, prazos e prioridades do produto.","Métodos ágeis, Scrum, Kanban","Product Owner, Gerente de Projetos","Organize um projeto pessoal em um quadro Kanban."]
].map(a=>({id:a[0],nome:a[1],cat:a[2],prog:a[3],perfil:a[4],desc:a[5],tools:a[6],cargos:a[7],passo:a[8]}));

// Quiz: cada opção soma pontos às áreas listadas
const QUIZ=[
["Você prefere criar interfaces visuais ou resolver problemas lógicos?",[["Interfaces visuais",["fe","ux","mob"]],["Problemas lógicos",["be","fs","ed"]],["Os dois",["fs","mob"]],["Nenhum dos dois",["sup","gp","as"]]]],
["Você gosta de analisar informações e encontrar padrões?",[["Muito",["cd","ia","bd"]],["Um pouco",["as","qa"]],["Prefiro ação prática",["inf","sup"]],["Prefiro criar do zero",["fe","be"]]]],
["Você se interessa por investigar falhas e proteger sistemas?",[["Sim",["sec","qa"]],["Só falhas de qualidade",["qa"]],["Prefiro construir",["be","fe"]],["Não",["ux","gp"]]]],
["Você prefere configurar ambientes e infraestrutura?",[["Sim",["inf","cloud"]],["Automatizar tudo",["cloud","ed"]],["Prefiro código",["be","fs"]],["Prefiro pessoas",["sup","as"]]]],
["Você gosta de entender as necessidades das pessoas?",[["Muito",["ux","as","gp"]],["Ajudar quem tem problema",["sup"]],["Prefiro dados",["cd","bd"]],["Prefiro código",["be","mob"]]]],
["O que você gostaria de criar?",[["Sites",["fe","fs"]],["Apps ou jogos",["mob","fs"]],["Sistemas empresariais",["be","as","bd"]],["Modelos inteligentes",["ia","cd"]]]]
];

const GLOSS=[
["API","Interface para um programa conversar com outro. Ex.: app de clima consultando um serviço de previsão."],
["Algoritmo","Passo a passo para resolver um problema. Ex.: uma receita."],
["Banco de dados","Local organizado para guardar informações. Ex.: cadastro de clientes."],
["Cloud Computing","Uso de servidores pela internet em vez de máquinas próprias."],
["Framework","Conjunto de ferramentas prontas para acelerar o desenvolvimento."],
["Git","Sistema que registra o histórico de mudanças no código."],
["GitHub","Plataforma online para hospedar projetos Git e colaborar."],
["Hardware","Parte física do computador."],
["Inteligência Artificial","Sistemas que realizam tarefas que normalmente exigem inteligência humana."],
["Linguagem de programação","Forma de escrever instruções para o computador. Ex.: Python."],
["Machine Learning","Técnica em que sistemas aprendem padrões a partir de dados."],
["Open Source","Software com código aberto para consulta e contribuição."],
["Servidor","Computador que fornece serviços ou dados a outros."],
["Software","Programas e sistemas que rodam no hardware."],
["UX","Experiência de uso: quão fácil e agradável é usar um produto."],
["UI","Interface: botões, cores, textos e telas com que o usuário interage."],
["Deploy","Publicar uma versão do sistema para os usuários."],
["DevOps","Cultura e práticas que unem desenvolvimento e operação."]
];
