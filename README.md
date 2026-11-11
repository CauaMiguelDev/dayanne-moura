# Dayanne Moura · Estética Facial e Corporal

Site de divulgação da **Dayanne Moura**, especialista em limpeza de pele e estética facial em **Brasília – DF**. O site apresenta os tratamentos e preços, os pacotes, o passo a passo da limpeza de pele e leva a cliente a agendar a avaliação pelo WhatsApp.

## 🌐 Site no ar

**https://cauamigueldev.github.io/dayanne-moura/**

Hospedado no GitHub Pages. Todo `push` na branch `main` republica o site automaticamente em 1–2 minutos.

## 📋 Sobre

- **Negócio:** estética facial — limpeza de pele, microagulhamento, dermaplaning e hidratação facial.
- **Local:** Brasília – DF (atendimento com hora marcada).
- **Agendamento:** WhatsApp (61) 8429-8360.
- **Instagram:** [@dradayannemoura](https://www.instagram.com/dradayannemoura)
- **Valores:** a partir de R$ 80; pacotes em até 5x sem juros.

## ✨ O que o site tem

- **Hero** com a proposta clara (o que é, onde é, a partir de quanto) e chamada para agendar.
- **Por que a limpeza vem primeiro** — os benefícios da limpeza de pele.
- **Tratamentos e preços** — valores abertos, com as etapas de cada protocolo.
- **Pacotes** — combinações de procedimentos com parcela calculada.
- **Como funciona** — linha do tempo das 10 etapas da limpeza completa, em 3 fases.
- **Antes e depois** — comparador de imagens com divisor arrastável.
- **Sobre a Dayanne**, depoimentos, dúvidas frequentes e contato.
- **WhatsApp** em todos os botões, com a mensagem já preenchida.

## 🛠️ Tecnologia

Site estático, **sem build e sem dependências**:

- HTML, CSS e JavaScript puro (um único arquivo de cada).
- Animações e efeitos de scroll feitos à mão (sem bibliotecas), respeitando a preferência de "reduzir movimento".
- Imagens responsivas (`srcset`) e fontes do Google Fonts (Instrument Serif, Jost, Corinthia).

### Estrutura

```
index.html          Página (todo o conteúdo)
styles.css          Estilos e animações
main.js             Interações e efeitos de scroll
favicon.svg         Ícone (monograma DM)
site.webmanifest    Manifesto do app
icons/              Ícones para celular (PWA)
DESIGN.md           Documentação do sistema visual
SUBSTITUIR.md       O que falta trocar antes de divulgar
```

## ▶️ Rodar localmente

Como é um site estático, basta servir a pasta:

```bash
npx http-server -p 5173
```

E abrir `http://localhost:5173`.

## 🚀 Publicar atualizações

```bash
git add -A
git commit -m "sua mensagem"
git push
```

O GitHub Pages republica sozinho. Para apontar um domínio próprio (ex.: `dayannemoura.com.br`), é só configurar em **Settings → Pages → Custom domain**.

## ⚠️ Antes de divulgar

As fotos reais da Dayanne e das pacientes, o endereço, os horários e os depoimentos ainda são **espaços reservados**. O que trocar e onde está no arquivo [SUBSTITUIR.md](SUBSTITUIR.md). O antes e depois só deve usar fotos reais com autorização por escrito da paciente.
