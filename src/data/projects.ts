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
            "SASS",
        ],
        liveUrl:
            "https://edsoncarvalhointuria.github.io/react-fullstack-fake-reserva/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/react-fullstack-fake-reserva.git",
    },
    {
        id: 1,
        title: "Memoteca",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755921307/memoteca_x4tw4k.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755921411/angular-memoteca_Feito_com_o_Clipchamp_dpuweb.mp4",
        description:
            "Este projeto é uma aplicação de mural de pensamentos ('Memoteca'), desenvolvido como um estudo aprofundado do framework Angular. O objetivo foi construir uma aplicação CRUD (Create, Read, Update, Delete) completa, focando na arquitetura de serviços, componentização e manipulação de dados assíncronos com RxJS.",
        tags: ["Angular", "TypeScript", "RxJS"],
        liveUrl: "https://edson-memoteca.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Cursos-Alura/tree/main/Angular/angular-memoteca",
    },
    {
        id: 1,
        title: "Portfólio",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755665411/portfolio_e9z5tt.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755665347/V%C3%ADdeo_sem_t%C3%ADtulo_Feito_com_o_Clipchamp_2_qylmev.mp4",
        description:
            "Sim, você está no lugar certo. Este é o portfólio, dentro do portfólio. Se o seu cérebro ainda não deu RangeError: Maximum call stack size exceeded, sinta-se à vontade para explorar como esta experiência interativa foi construída.",
        tags: ["React", "TypeScript", "Framer Motion", "Canvas", "SASS"],
        liveUrl: "https://edsoncarvalhointuria.github.io/portfolio/",
        githubUrl: "https://github.com/edsoncarvalhointuria/portfolio",
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
    {
        id: 1,
        title: "Portfólio (Antigo)",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755703352/portfolio-antigo_rgdrr6.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755708063/portfolio-antigo_Feito_com_o_Clipchamp_unfwgu.mp4",
        description:
            "Este foi o meu portfólio inicial, onde subi os primeiros níveis em design de UI e animação com React e JS Vanilla. Quer ver a versão 'level up' da jornada? Você já está nela!.",
        tags: ["React", "SASS"],
        liveUrl: "https://edsoncarvalhointuria.github.io/portfolio-antigo/",
        githubUrl: "https://github.com/edsoncarvalhointuria/portfolio-antigo",
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
        title: "Memorando",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755922112/memorando_qnt28q.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755922156/angular-memorando_Feito_com_o_Clipchamp_bwneq3.mp4",
        description: `Este projeto é uma aplicação de lista de tarefas ("Memorando"), desenvolvido como um estudo aprofundado do framework Angular. Partindo da base de um projeto de curso, eu o refatorei significativamente para criar uma aplicação mais robusta e resiliente.

O foco principal foi ir além do escopo original, implementando uma arquitetura de dados híbrida que garante o funcionamento da aplicação tanto online quanto offline, e aprimorando a experiência do usuário com a API de Animações do Angular e a gestão de estado reativo com RxJS.`,
        tags: ["Angular", "TypeScript", "RxJS"],
        liveUrl: "https://edson-memorando.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Cursos-Alura/tree/main/Angular/angular-memorando",
    },
    {
        id: 1,
        title: "Lista de Compras",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755922366/lista-de-compras_tdk370.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755922423/angular-life-cycle_Feito_com_o_Clipchamp_xinsji.mp4",
        description: `Este projeto é uma aplicação de lista de compras, desenvolvido como um estudo aprofundado para demonstrar o funcionamento do ciclo de vida dos componentes em Angular. O foco principal está na arquitetura do código-fonte e na observação de como o Angular gerencia a criação, atualização e destruição de componentes.`,
        tags: ["Angular", "TypeScript", "RxJS"],
        liveUrl: "https://edson-life-cycle.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Cursos-Alura/tree/main/Angular/angular-life-cycle",
    },
    {
        id: 1,
        title: "Indexa",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755922785/indexa_zfw7kx.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755922819/angular-indexa_Feito_com_o_Clipchamp_hluwc3.mp4",
        description: `Este projeto é uma aplicação de agenda de contatos ("Indexa"), desenvolvido como um estudo aprofundado para demonstrar a construção de uma aplicação Angular completa, do zero.

O foco principal está na arquitetura do código-fonte e na implementação de funcionalidades complexas de frontend sem depender de um backend. A aplicação foi construída para explorar o ciclo de vida do Angular, a componentização e técnicas avançadas de armazenamento de dados no navegador.`,
        tags: ["Angular", "TypeScript", "RxJS"],
        liveUrl: "https://edson-indexa.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Cursos-Alura/tree/main/Angular/angular-indexa",
    },
    {
        id: 1,
        title: "First App: Homes",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755923094/first-app_qrw2qg.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755923136/angular-first-app_Feito_com_o_Clipchamp_wgzngb.mp4",
        description: `Este projeto é a implementação do tutorial oficial "First App" da documentação do Angular, uma aplicação para listagem e visualização de imóveis para aluguel.`,
        tags: ["Angular", "TypeScript"],
        liveUrl: "https://edson-first-app.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Cursos-Alura/tree/main/Angular/angular-first-app",
    },
    {
        id: 1,
        title: "Buscante",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755923419/buscante_upx7u8.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755923450/angular-buscante_spwuxl.mp4",
        description: `Este projeto é uma aplicação de busca de livros que consome a Google Books API, desenvolvido como um estudo aprofundado para demonstrar conceitos avançados de Angular. O projeto original, focado em programação reativa, foi refatorado para incluir uma camada completa de animações com a API de Animações do Angular.`,
        tags: ["Angular", "TypeScript", "RxJS"],
        liveUrl: "https://edson-buscante.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Cursos-Alura/tree/main/Angular/angular-buscante",
    },
    {
        id: 1,
        title: "AluraBook",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755923672/alura-book_fuqedk.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755923709/angular-alura-book-form_apxko6.mp4",
        description: `Este projeto é uma aplicação de formulário de cadastro, desenvolvido como um estudo aprofundado para demonstrar conceitos avançados de Formulários baseados em Templates (Template-Driven Forms) e validação de dados com Angular e TypeScript.`,
        tags: ["Angular", "TypeScript", "RxJS"],
        liveUrl: "https://edson-alura-book-form.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Cursos-Alura/tree/main/Angular/angular-alura-book-form",
    },
    {
        id: 1,
        title: "ByteBank",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755923959/bytebank_nfrvka.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755923995/typescript-byte-bank_Feito_com_o_Clipchamp_bkrckl.mp4",
        description: `Este projeto é uma simulação de uma aplicação de internet banking, desenvolvido como um estudo aprofundado para demonstrar conceitos avançados de TypeScript e arquitetura de software orientada a objetos.

Embora a interface do usuário seja simples, o foco principal está na qualidade e na estrutura do código-fonte. A aplicação foi construída do zero, sem frameworks, para explorar e implementar padrões de design, decorators, tipagem forte e a organização do código em um cenário prático e funcional.`,
        tags: ["TypeScript"],
        liveUrl: "https://edson-byte-bank.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Cursos-Alura/tree/main/TypeScript/typescript-byte-bank",
    },
    {
        id: 1,
        title: "Registrador de Negociações",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755924269/typescript-curso_nsoitm.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755924300/typescript-curso_Feito_com_o_Clipchamp_sq1sk2.mp4",
        description: `Este projeto é uma aplicação para registrar negociações financeiras, desenvolvido como um estudo aprofundado para demonstrar conceitos avançados de TypeScript e arquitetura de software.

Embora a interface do usuário seja simples, o foco principal está na qualidade e na estrutura do código-fonte. A aplicação foi construída do zero, sem frameworks, para explorar e implementar padrões de design como Model-View-Controller (MVC), decorators e tipagem forte em um cenário prático.`,
        tags: ["TypeScript"],
        liveUrl: "https://edson-typescript.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Cursos-Alura/tree/main/TypeScript/typescript-curso",
    },
    {
        id: 1,
        title: "Fokus",
        category: "javascript",
        image: "https://res.cloudinary.com/dbjobat5r/image/upload/v1755924535/fokus_rylymu.png",
        video: "https://res.cloudinary.com/dbjobat5r/video/upload/f_auto,q_auto/v1755924562/typescript-fokus_Feito_com_o_Clipchamp_qc5wby.mp4",
        description: `Este projeto é uma aplicação de timer no estilo Pomodoro e gestão de tarefas, desenvolvido como um estudo aprofundado para demonstrar a migração de uma base de código de JavaScript vanilla para TypeScript.`,
        tags: ["TypeScript"],
        liveUrl: "https://edson-fokus.netlify.app/",
        githubUrl:
            "https://github.com/edsoncarvalhointuria/Projetos-Cursos-Alura/tree/main/TypeScript/typescript-fokus",
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
            "Este projeto é uma simulação de um blog , onde os usuários podem fazer postagens, editar seus próprios conteúdos e visualizar publicações de outros membros. Como um dos meus primeiros projetos full-stack, o foco principal aqui foi a arquitetura do backend em Python. A interface foi construída para desktop, servindo como uma vitrine para a lógica de servidor e a manipulação de dados que acontecem nos bastidores.",
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

export const categorias: ProjectCategory[] = [
    "javascript",
    "python",
    "html-css",
];
