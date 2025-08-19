export type ProjectCategory = "javascript" | "python" | "html-css";

export interface Project {
    id: number;
    title: string;
    category: ProjectCategory | ProjectCategory[];
    image: string;
    video: string;
    description: string;
    tags: string[];
    liveUrl: string | null;
    githubUrl: string;
}

const p = [
    {
        id: 1,
        title: "Arcade Hub",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755370386/arcade-hub_uozhcn.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755370636/arcade-hub_ndgzat.mp4",
        description:
            "Um hub de jogos arcade com três clássicos recriados do zero. Inclui ranking online com Firebase, áudio procedural com Tone.js e controles de toque para mobile.",
        tags: ["React", "TypeScript", "Canvas", "Firebase", "SASS", "Tone.js"],
        liveUrl: "https://edsoncarvalhointuria.github.io/react-arcade-hub/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/react-arcade-hub.git",
    },
    {
        id: 1,
        title: "FakeReserva",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755371886/fake-reserva-js-img_tui73w.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755372057/fake-reserva-js_hofrmm.mp4",
        description:
            "Uma simulação de e-commerce completa com frontend em React e backend em Node.js. Inclui autenticação JWT, banco de dados PostgreSQL e armazenamento de arquivos na nuvem.",
        tags: [
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Supabase",
            "Render",
            "SASS",
        ],
        liveUrl:
            "https://edsoncarvalhointuria.github.io/react-fullstack-fake-reserva/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/react-fullstack-fake-reserva.git",
    },
    {
        id: 1,
        title: "Pong (TypeScript Puro)",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755372669/pong-ts_y17thp.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755372753/pong-ts_da4qb9.mp4",
        description:
            "Uma recriação do clássico Pong, desenvolvida inteiramente com TypeScript puro e a API do HTML5 Canvas.",
        tags: ["TypeScript", "Canvas", "Tone.js"],
        liveUrl: "https://edsoncarvalhointuria.github.io/typescript-pong/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/typescript-pong.git",
    },
    {
        id: 1,
        title: "Calculadora de Investimentos",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755375774/calculadora-de-investimentos_gxwwdq.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755375701/calculadora-de-investimentos-js_s2wdib.mp4",
        description:
            "Projeto desenvolvido no curso de JavaScript, uma ferramenta interativa que simula a progressão de investimentos com diferentes parâmetros.",
        tags: ["Chart.js", "SASS", "Canvas"],
        liveUrl: "https://fancy-kitsune-8c51a5.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-HTML-CSS-JS/tree/main/calculadora-investimentos",
    },
    {
        id: 1,
        title: "Simulação de Ecommerce",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755376281/ecommerce-react_nqt5bs.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755376118/ecommerce-react_chmk48.mp4",
        description:
            "Este projeto é uma simulação de um ecommerce, desenvolvido com React. Ele permite que os usuários naveguem pelos produtos, adicionem itens ao carrinho e concluam compras de forma dinâmica. Todos os dados são armazenados no localStorage para simular uma experiência de compra contínua.",
        tags: ["React", "SASS"],
        liveUrl: "https://edsoncarvalhointuria.github.io/react-ecommerce/",
        githubUrl: "https://github.com/edsoncarvalhointuria/react-ecommerce",
    },
    {
        id: 1,
        title: "HashForms",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755566004/hashforms_s24f5p.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755567295/hash_forms_qixkxa.mp4",
        description:
            "Projeto com o objetivo de praticar a validação de dados em formulários.",
        tags: ["SASS"],
        liveUrl: "https://cerulean-puffpuff-3157f8.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-HTML-CSS-JS/tree/main/hash-forms",
    },

    // === Python ===
    {
        id: 1,
        title: "FakePinterest",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755377931/fake-pinterest-py_g38so5.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755379139/fake-pinterest-py_vnmkai.mp4",
        description:
            "Este projeto é uma simulação simplificada do Pinterest, onde os usuários podem criar uma conta, postar fotos e acompanhar outros perfis. O principal objetivo é explorar o desenvolvimento backend utilizando Flask e SQLite como banco de dados.",
        tags: ["Flask", "SQLite"],
        liveUrl: "https://edsoncarvalhointuria.pythonanywhere.com/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/main/Projeto%20Copia%20do%20Pinterest",
    },
    {
        id: 1,
        title: "Dashboard Ações",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755536155/streamlit_acoes_dgsn9t.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755536234/streamlit_acoes_x0xgzx.mp4",
        description:
            "Projeto que simula um site interno para monitoramento de preços de ações.",
        tags: ["Streamlit", "Pandas"],
        liveUrl: "https://projeto-acoes.streamlit.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/main/Projeto-Streamlit-Acoes",
    },
    {
        id: 1,
        title: "FakeReserva",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755540240/fake-reserva-django-img_yocujn.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755540241/fakereserva_django_is2so8.mp4",
        description:
            "Este projeto é uma simulação de e-commerce full-stack, inspirado no design e na experiência do usuário da Reserva. Desenvolvido em Django com SQLite, o sistema gerencia todos os produtos diretamente pelo backend e oferece recursos completos de autenticação, como cadastro, login e senha.\nA aplicação permite compras reais integradas à API do Mercado Pago, com carrinho vinculado ao e-mail do usuário. As compras podem ser realizadas com ou sem login. Em ambos os casos, um resumo da compra é enviado automaticamente para o e-mail informado",
        tags: ["Django", "SQLite"],
        liveUrl: "https://fakereserva.onrender.com/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/main/Projeto%20Django%20Ecommerce",
    },
    {
        id: 1,
        title: "Dashboard Empresarial",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755542241/streamlit_dashboard_empresarial_p9dboz.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755542270/streamlit_dashboard_empresarial_gnft6f.mp4",
        description:
            "Projeto de site interno para uma empresa fictícia, com sistema de login e gráficos interativos.",
        tags: ["Streamlit", "Pandas", "Plotly"],
        liveUrl: "https://dashboard-st.streamlit.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/main/Projeto-Streamlit-Site",
    },
    {
        id: 1,
        title: "FakeFlix",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755576748/fakeflix_txoyxq.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755550520/fakeflix_django_e4ujmg.mp4",
        description:
            "Este projeto é uma simulação simplificada do Netflix, onde os usuários podem criar contas, explorar filmes e séries fictícios. O foco está no desenvolvimento do backend utilizando Django e SQLite como banco de dados para armazenamento.",
        tags: ["Django", "SQLite", "Tailwind"],
        liveUrl: "https://fakeflix-8j7x.onrender.com",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/main/Projeto%20Django%20Netflix",
    },
    {
        id: 1,
        title: "Comunidade Flask",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755551526/site_comunidade_njclmh.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755552124/site_comunidade_zvetnv.mp4",
        description:
            "Este projeto é uma simulação de um blog , onde os usuários podem fazer postagens, editar seus próprios conteúdos e visualizar publicações de outros membros. O foco principal está no desenvolvimento backend utilizando Flask e o banco de dados SQLite.",
        tags: ["Flask", "SQLite", "Bootstrap"],
        liveUrl: "https://sitecomunidade-556i.onrender.com/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/main/Projeto%20Site%20Comunidade",
    },
    {
        id: 1,
        title: "Ciência de Dados",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755552949/ciencia_de_dados_efn2vs.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755553605/ciencia_de_dados_fc3zsl.mp4",
        description:
            "Modelo de previsão de preço para ajudar proprietários e clientes a encontrar o valor ideal para a diária de imóveis no RJ. O modelo utiliza dados históricos e diversas variáveis relevantes para sugerir o melhor preço.",
        tags: ["Pandas", "Sklearn", "Matplotlib", "Plotly"],
        liveUrl: null,
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/main/Projeto%20Ciencia%20de%20Dados",
    },
    {
        id: 1,
        title: "APP Kivy",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755554792/app_kivy_b3nfib.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755554180/app_kivy_jqzfsr.mp4",
        description:
            "Este projeto tem como objetivo criar um aplicativo mobile utilizando Kivy. O app simula um gerenciador de vendas para fornecedores de uma empresa fictícia, permitindo que os usuários adicionem vendas e acompanhem outros membros da equipe.",
        tags: ["Kivy", "Firebase"],
        liveUrl: null,
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/main/Projeto%20Aplicativo%20Kivy",
    },
    {
        id: 1,
        title: "Tkinter Interfaces",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755555374/tkinter_wbbtsp.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755559232/tkinter_eoe1wq.mp4",
        description: `Este projeto tem como objetivo criar interfaces de sistemas usando Tkinter , com dois exemplos práticos:

- Cotação de moedas por meio de uma API.
- Controle de Estoque utilizando operações CRUD em um banco de dados.`,
        tags: ["Tkinter", "Pandas"],
        liveUrl: null,
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/main/Projeto%20Tkinter",
    },
    {
        id: 1,
        title: "Web Scraping Selenium",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755559714/selenium_web_scraping_vojjn6.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755560384/selenium_jctvhe.mp4",
        description:
            "Este projeto simula a necessidade de comparação entre fornecedores para insumos/produtos. O código faz a pesquisa no GoogleShop e Buscapé de produtos adicionados em uma planilha, realizando a pesquisa dos produtos pelo seu valor minímo e valor maximo, depois adicionando eles em uma planilha com um link para cada produto encontrado, por fim encaminha um email informando que o produto foi encontrado dentro do preço desejado, com a planilha de links em anexo.",
        tags: ["Selenium", "Pandas"],
        liveUrl: null,
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/main/Projeto%20automacao%20web",
    },
    {
        id: 1,
        title: "Automação Pandas",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755562151/automacao_r4hlpd.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755561838/automacao_thdntd.mp4",
        description:
            "Este projeto simula o processo de análise e envio automatizado de indicadores de uma grande rede fictícia com 25 lojas espalhadas pelo Brasil . A automação realiza a análise dos dados de vendas e envia OnePages personalizadas para cada gerente de loja, além de um resumo consolidado para a gerência geral.",
        tags: ["Pandas"],
        liveUrl: null,
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-Python/tree/main/Projeto%20de%20automacao",
    },
    {
        id: 1,
        title: "Furia Esports",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755562951/furia_wr0ddl.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755563489/furia_esports_msrji0.mp4",
        description:
            "Este é um site interativo desenvolvido com Streamlit como parte do desafio do processo seletivo para o estágio de verão na Furia Esports, em parceria com a Universidade Cruzeiro do Sul.",
        tags: ["Streamlit", "Pandas", "Plotly", "Matplotlib"],
        liveUrl: "https://projeto-furia.streamlit.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Pessoais/tree/main/Projeto_Furia",
    },
    {
        id: 1,
        title: "Conquista Construções",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755564105/conquista_construcoes_tlhk0z.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755564355/consquista_construcoes_lf0vpn.mp4",
        description:
            "Este projeto é um site comercial para a empresa Conquista Construções. Ele foi desenvolvido de forma gratuita para um micro empreendedor, como parte das atividades da minha faculdade de Análise e Desenvolvimento de Sistemas.",
        tags: ["Flask", "Bootstrap"],
        liveUrl: "https://conquistaconstrucoes.onrender.com/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Pessoais/tree/main/Flask%20Project_Conquista%20Construcoes",
    },
    {
        id: 1,
        title: "Projeto Chatbot",
        category: "python",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755565237/chatbot_dialoflow_x76qvx.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755565268/chatbot_dialogflow_ph46ie.mp4",
        description:
            "Esse projeto foi criado para explorar o uso do Dialogflow na criação de um chatbot simples para uma lanchonete fictícia. O chatbot é capaz de responder perguntas comuns sobre o cardápio, tempo de entrega, formas de pagamento, entre outros tópicos básicos, simulando um atendimento amigável e eficiente em uma lanchonete.",
        tags: ["Streamlit", "Dialogflow"],
        liveUrl: "https://dialog-flow-bot.streamlit.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Pessoais/tree/main/Chatbot-DialogFlow",
    },

    // === HTML & CSS ===
    {
        id: 1,
        title: "Playlist de Filmes",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755575213/playlist_de_filmes_izgx2e.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755575788/playlist_de_filmes_jgbda8.mp4",
        description:
            "Projeto explorando a API OMDb para salvar uma lista de filmes personalizada.",
        tags: ["SASS"],
        liveUrl: "https://playlistfilmes.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-HTML-CSS-JS/tree/main/playlist-filmes",
    },
    {
        id: 1,
        title: "Ecommerce",
        category: "html-css",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755621104/ecommerce_neou5w.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755621063/ecommerce_tojota.mp4",
        description:
            "Este projeto é uma reprodução estática inspirada no site da Reserva, desenvolvida como parte do curso de HTML e CSS. O foco foi trabalhar o frontend, utilizando Sass para organizar e otimizar os estilos.",
        tags: ["SASS"],
        liveUrl: "https://ecommerce-fakereserva.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-HTML-CSS-JS/tree/main/ecommerce",
    },
    {
        id: 1,
        title: "Home Hashtag",
        category: "html-css",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755626532/home-hashtag_egflkh.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755626580/home-hashtag_mefato.mp4",
        description:
            "Este projeto é uma recriação da homepage da empresa Hashtag Treinamentos, desenvolvido como parte do curso de HTML e CSS. O site foi criado com foco em aprendizado, sendo totalmente otimizado e responsivo.",
        tags: [],
        liveUrl: "https://monumental-blancmange-f41380.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-HTML-CSS-JS/tree/main/home-hashtag",
    },
    {
        id: 1,
        title: "Página de Captura",
        category: "html-css",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755384032/pagina-de-captura-html-css_mqlrul.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755384621/pagina-de-captura_tbdjzg.mp4",
        description:
            "Página de captura para as inscrições do evento Python Impressionador.",
        tags: ["SASS"],
        liveUrl: "https://gentle-capybara-19d854.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-HTML-CSS-JS/tree/main/pagina-de-captura",
    },
    {
        id: 1,
        title: "PizzaHash",
        category: "html-css",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755568044/pizzahash_jhcxk2.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755568071/pizzahash_og7u3n.mp4",
        description:
            "Este projeto simula uma homepage fictícia para uma pizzaria chamada PizzaHash.",
        tags: ["SASS"],
        liveUrl: "https://bright-bombolone-024860.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-HTML-CSS-JS/tree/main/pizza-hash",
    },
    {
        id: 1,
        title: "Lista de Espera",
        category: "html-css",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755568857/lista_de_espera_htr6xg.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755568885/lista_de_espera_i1uf7q.mp4",
        description:
            "Este projeto é uma página de captura desenvolvida com Bootstrap.",
        tags: ["Bootstrap"],
        liveUrl: "https://extraordinary-naiad-204a32.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Curso-HTML-CSS-JS/tree/main/lista-de-espera",
    },
];

export const projects: Project[] = p.map((v, i) => ({
    ...v,
    id: i + 1,
})) as Project[];

console.log(projects);

export const categorias: ProjectCategory[] = [
    "javascript",
    "python",
    "html-css",
];
