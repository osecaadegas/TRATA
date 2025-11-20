const { useState } = React;

// Navbar Component
function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-lg font-black tracking-tight text-slate-950 shadow-lg shadow-emerald-500/40">
            T
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400">
              TRATA
            </div>
            <p className="text-[11px] text-slate-400">
              Trata, tratamos de tudo.
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          <button
            onClick={() => scrollToSection(sections.comoFunciona)}
            className="hover:text-emerald-400"
          >
            Como funciona
          </button>
          <button
            onClick={() => scrollToSection(sections.galeria)}
            className="hover:text-emerald-400"
          >
            Antes / Depois
          </button>
          <button
            onClick={() => scrollToSection(sections.oferta)}
            className="hover:text-emerald-400"
          >
            Mini carro oferta
          </button>
          <button
            onClick={() => scrollToSection(sections.contacto)}
            className="rounded-full border border-emerald-400/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400 transition hover:border-emerald-300 hover:bg-emerald-400 hover:text-slate-950"
          >
            Falar com a TRATA
          </button>
        </div>

        <button
          onClick={() => scrollToSection(sections.contacto)}
          className="inline-flex items-center gap-1 rounded-full border border-emerald-400/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-400 transition hover:border-emerald-300 hover:bg-emerald-400 hover:text-slate-950 md:hidden"
        >
          Contacto
        </button>
      </nav>
    </header>
  );
}

// Hero Component
function Hero() {
  return (
    <section
      id={sections.hero}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 pt-20"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <div className="mx-auto flex h-full max-w-5xl items-center justify-center">
          <div className="h-72 w-72 rounded-full bg-emerald-500/40 blur-3xl" />
          <div className="h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-6 lg:flex-row lg:gap-16 lg:px-0">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Renovação inteligente · Paga só quando vender
          </span>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              TRATA
              <span className="block text-2xl font-normal text-slate-300 sm:text-3xl lg:text-4xl">
                "Trata, tratamos de tudo."
              </span>
            </h1>
            <p className="max-w-xl text-balance text-sm text-slate-300 sm:text-base">
              Tem uma casa antiga? A TRATA renova, valoriza, acompanha a venda e só depois
              você paga a renovação e a nossa taxa sobre o negócio fechado. Simples,
              transparente e sem dores de cabeça.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button
              onClick={() => scrollToSection(sections.comoFunciona)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-7 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
            >
              Ver como funciona
              <span className="text-base">→</span>
            </button>
            <button
              onClick={() => scrollToSection(sections.galeria)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-7 py-2.5 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Ver antes / depois
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                ✓
              </span>
              Sem entrada para a obra
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                ✓
              </span>
              Pagamento só após a venda
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                ✓
              </span>
              Mini carro oferta em vendas selecionadas
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="video-shadow relative mx-auto aspect-video max-w-xl overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            <video
              className="h-full w-full object-cover"
              src="https://videos.pexels.com/video-files/5583115/5583115-uhd_2560_1440_25fps.mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>

            <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4 sm:p-5">
              <div className="flex items-center justify-between text-[11px] text-slate-300">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                  Apresentação TRATA
                </span>
                <span className="rounded-full bg-slate-950/70 px-2 py-1 text-[10px] text-slate-300">
                  Renovação · Venda · Resultado
                </span>
              </div>

              <div className="space-y-1">
                <p className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2 py-1 text-[10px] font-medium text-slate-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Seu imóvel, versão premium.
                </p>
                <p className="max-w-xs rounded-xl bg-slate-950/80 px-3 py-2 text-[11px] text-slate-100">
                  Veja como transformamos casas antigas em oportunidades de venda
                  com mais valor, sem custo inicial para você.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-3 text-center text-[11px] text-slate-500">
            Vídeo ilustrativo. A sua experiência com a TRATA é feita à medida do seu
            imóvel e dos seus objetivos.
          </p>
        </div>
      </div>
    </section>
  );
}

// Step Component
function Step({ number, title, description }) {
  return (
    <div className="relative flex gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4 sm:p-5">
      <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-slate-950 shadow-md shadow-emerald-500/40">
        {number}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
          {title}
        </h3>
        <p className="mt-1 text-xs text-slate-300 sm:text-sm">{description}</p>
      </div>
    </div>
  );
}

// ComoFunciona Component
function ComoFunciona() {
  return (
    <section
      id={sections.comoFunciona}
      className="border-y border-slate-800/80 bg-slate-950/60"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 lg:flex-row lg:items-center lg:gap-16 lg:px-0">
        <div className="flex-1 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Como funciona
          </h2>
          <p className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Você traz a casa antiga. A TRATA traz o projeto, a obra e o resultado.
          </p>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            O nosso modelo é pensado para quem quer vender melhor sem avançar com o valor
            total da obra. Alinhamos o nosso sucesso com o seu: só recebemos quando o seu
            imóvel é vendido.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-xs text-slate-200 sm:text-sm">
              <p className="font-semibold text-emerald-300">
                Pagamento flexível
              </p>
              <p className="mt-1">
                A renovação é adiantada pela TRATA. Você paga no fecho da venda, já com o
                imóvel valorizado.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900 p-4 text-xs text-slate-200 sm:text-sm">
              <p className="font-semibold text-emerald-300">Transparência total</p>
              <p className="mt-1">
                Orçamento claro, cronograma definido e taxa % acordada desde o primeiro dia.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          <Step
            number="1"
            title="Analisamos o seu imóvel e o seu objetivo de venda"
            description="Fazemos uma visita técnica, avaliamos o potencial de valorização e definimos consigo o preço-alvo de venda."
          />
          <Step
            number="2"
            title="A TRATA renova e prepara tudo para o mercado"
            description="Projeto de arquitetura e interiores, obra completa, acompanhamento técnico e home staging para fotos e visitas."
          />
          <Step
            number="3"
            title="Vendemos em parceria e só então você paga"
            description="Quando a casa é vendida, descontamos o investimento da obra e a % de honorários TRATA previamente acordada."
          />

          <div className="mt-4 rounded-2xl border border-dashed border-emerald-500/50 bg-slate-900/70 p-4 text-xs text-slate-300 sm:text-sm">
            <p className="font-semibold text-emerald-300">
              E se o imóvel não for vendido?
            </p>
            <p className="mt-1">
              O modelo é desenhado para minimizar esse risco com um estudo de mercado
              profundo antes de aprovarmos qualquer projeto. Cada caso é analisado de forma
              individual e o contrato reflete as condições específicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// BeforeAfterCard Component
function BeforeAfterCard({ item }) {
  const [view, setView] = useState("after");

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
        <img
          src={view === "before" ? item.beforeImg : item.afterImg}
          alt={`${view === "before" ? "Antes" : "Depois"} - ${item.title}`}
          className="h-full w-full object-cover transition duration-500"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
        <div className="absolute left-3 top-3 flex gap-2 text-[11px] text-slate-100">
          <span className="rounded-full bg-slate-950/80 px-2 py-1 text-[10px] uppercase tracking-[0.16em]">
            {item.location}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 text-[11px] text-slate-100">
          <div className="flex items-center gap-2 rounded-full bg-slate-950/80 px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="uppercase tracking-[0.16em]">
              {view === "before" ? "ANTES" : "DEPOIS"}
            </span>
          </div>
          <div className="flex gap-1 rounded-full bg-slate-950/80 p-1">
            <button
              onClick={() => setView("before")}
              className={`rounded-full px-2 py-1 text-[10px] font-medium transition ${
                view === "before"
                  ? "bg-slate-100 text-slate-950"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              Antes
            </button>
            <button
              onClick={() => setView("after")}
              className={`rounded-full px-2 py-1 text-[10px] font-medium transition ${
                view === "after"
                  ? "bg-emerald-400 text-slate-950"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              Depois
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
          {item.title}
        </h3>
        <p className="text-xs text-emerald-300 sm:text-[13px]">{item.tag}</p>
        <p className="mt-1 text-xs text-slate-300 sm:text-sm">
          Renovação completa com foco em maximizar o valor de venda. Planeamento técnico,
          materiais escolhidos para o seu perfil de comprador e acompanhamento TRATA do
          início ao fim.
        </p>
      </div>
    </article>
  );
}

// Galeria Component
function Galeria() {
  return (
    <section
      id={sections.galeria}
      className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
        <div className="mb-8 flex flex-col gap-4 sm:items-end sm:justify-between sm:gap-0 sm:text-right md:flex-row md:items-center md:text-left">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Antes & Depois
            </h2>
            <p className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Transformamos imóveis cansados em oportunidades desejadas.
            </p>
          </div>
          <p className="max-w-md text-xs text-slate-300 sm:text-sm">
            Aqui estão alguns exemplos visuais do tipo de transformação que criamos. As
            imagens são ilustrativas, mas o impacto é real: mais propostas, melhor preço,
            venda mais rápida.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {beforeAfterData.map((item) => (
            <BeforeAfterCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// OfertaMiniCarro Component
function OfertaMiniCarro() {
  return (
    <section
      id={sections.oferta}
      className="border-y border-slate-800/80 bg-slate-950/80"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 lg:flex-row lg:items-center lg:gap-16 lg:px-0">
        <div className="flex-1 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Oferta exclusiva
          </h2>
          <p className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Venda a sua casa com a TRATA e ganhe um mini carro.
          </p>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Em campanhas selecionadas, os clientes que vendem o seu imóvel através da TRATA
            podem receber um mini carro como oferta. Um incentivo real para transformar a
            sua casa antiga no próximo grande negócio da sua vida.
          </p>

          <ul className="mt-3 space-y-2 text-xs text-slate-300 sm:text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>
                Aplicável a vendas que atinjam o valor mínimo definido em contrato e com
                renovação feita pela TRATA.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>
                Modelo, cor e condições específicas do mini carro são apresentados antes da
                assinatura do contrato.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>
                Oferta limitada no tempo e sujeita a stock e aprovação interna da TRATA.
              </span>
            </li>
          </ul>

          <button
            onClick={() => scrollToSection(sections.contacto)}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
          >
            Quero saber se o meu imóvel é elegível
            <span className="text-base">→</span>
          </button>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-slate-950 via-emerald-950/40 to-slate-900 p-5">
            <div className="pointer-events-none absolute -left-6 -top-6 h-20 w-20 rounded-full bg-emerald-400/40 blur-3xl" />
            <div className="pointer-events-none absolute -right-3 -bottom-8 h-24 w-24 rounded-full bg-cyan-400/30 blur-3xl" />

            <div className="relative flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Bónus TRATA
              </div>

              <p className="text-sm font-semibold text-slate-50 sm:text-base">
                Mais do que vender uma casa, queremos marcar um novo começo.
              </p>
              <p className="text-xs text-slate-300 sm:text-sm">
                O mini carro é o símbolo dessa mudança: mobilidade para a sua nova fase, sem
                custo adicional. Falamos consigo sobre elegibilidade logo na primeira
                reunião.
              </p>

              <div className="relative mt-3 overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/90 p-4">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-cyan-500/10" />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="space-y-1 text-xs text-slate-200 sm:text-sm">
                    <p className="font-semibold text-emerald-300">
                      Exemplo de campanha
                    </p>
                    <p>
                      Imóveis com valor de venda superior a 350.000€ e renovação integral com a
                      TRATA podem ser elegíveis para a oferta do mini carro.
                    </p>
                  </div>
                  <div className="hidden w-24 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-400 text-center text-[11px] font-semibold text-slate-950 shadow-lg shadow-emerald-500/50 sm:flex">
                    MINI
                    <br />
                    CARRO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contacto Component
function Contacto() {
  return (
    <section
      id={sections.contacto}
      className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-0">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800/80 bg-slate-950/80 p-5 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                Fale com a TRATA
              </h2>
              <p className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Envie os dados do seu imóvel e receba um estudo de valorização.
              </p>
              <p className="max-w-xl text-sm text-slate-300">
                Conte-nos em que cidade está o imóvel, o estado atual e o seu objetivo de
                venda. Respondemos com uma proposta preliminar e, se fizer sentido para si,
                avançamos para visita técnica.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-slate-200 sm:text-sm">
              <p className="font-semibold text-emerald-300">Sem compromisso</p>
              <p className="mt-1">
                O primeiro estudo é gratuito e não implica qualquer obrigação de avançar com a
                obra.
              </p>
            </div>
          </div>

          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1 sm:col-span-1">
              <label className="block text-xs font-medium text-slate-200">
                Nome
              </label>
              <input
                type="text"
                placeholder="Como prefere ser tratado(a)?"
                className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/50 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2"
              />
            </div>

            <div className="space-y-1 sm:col-span-1">
              <label className="block text-xs font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                placeholder="seunome@exemplo.pt"
                className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/50 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2"
              />
            </div>

            <div className="space-y-1 sm:col-span-1">
              <label className="block text-xs font-medium text-slate-200">
                Localização do imóvel
              </label>
              <input
                type="text"
                placeholder="Cidade / zona (ex.: Porto, Boavista)"
                className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/50 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2"
              />
            </div>

            <div className="space-y-1 sm:col-span-1">
              <label className="block text-xs font-medium text-slate-200">
                Tipo de imóvel
              </label>
              <select className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/50 focus:border-emerald-400 focus:ring-2">
                <option>Apartamento</option>
                <option>Moradia</option>
                <option>Prédio completo</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="block text-xs font-medium text-slate-200">
                Conte-nos um pouco sobre o estado atual do imóvel
              </label>
              <textarea
                rows="4"
                placeholder="Ano aproximado de construção, principais problemas, se já está habitado ou vazio, etc."
                className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-500/50 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2"
              ></textarea>
            </div>

            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <input type="checkbox" className="h-3.5 w-3.5 rounded border-slate-700 bg-slate-900" />
                <span>
                  Aceito ser contactado(a) pela TRATA para falar sobre o meu imóvel.
                </span>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
              >
                Enviar pedido de contacto
                <span className="text-base">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-0">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500 text-xs font-bold text-slate-950">
            T
          </span>
          <div>
            <p className="font-semibold tracking-[0.22em] text-emerald-300">
              TRATA
            </p>
            <p className="text-[10px] text-slate-500">Trata, tratamos de tudo.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-500">
          <span>© {new Date().getFullYear()} TRATA · Todos os direitos reservados.</span>
          <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline-block" />
          <span>Website demonstrativo. Conteúdos e imagens meramente ilustrativos.</span>
        </div>
      </div>
    </footer>
  );
}
