# O que falta trocar antes de publicar

Procure por `SUBSTITUIR` e `data-placeholder` no `index.html`.

| O quê | Onde | Como |
|---|---|---|
| Foto do hero | `.hero__frame img` (seção `#topo`) | Hoje é uma foto de banco (Unsplash). Troque o `src` e o `srcset` por uma foto real de atendimento, de preferência vertical. Atualize também o `<link rel="preload">` no `<head>`. |
| Foto da Dayanne | seção `#sobre`, `div.portrait` | Troque o conteúdo da `div.portrait` por `<img src="img/dayanne.jpg" alt="Dayanne Moura">` (retrato vertical 4:5). |
| Antes e depois (3 cards) | `#resultados` | Em cada card, o `<img>` é o **depois** e a `div.ba-before.ba-ph` é o espaço do **antes**. Troque a `div` por `<img class="ba-before" src="..." alt="Antes">`, coloque a foto real do depois e apague o `<span class="ba__demo">`. **Use só com autorização por escrito da paciente** e confira as regras do conselho profissional dela sobre a divulgação de antes e depois. |
| Depoimentos (3) | seção de depoimentos (`.voices`) | Texto do print, o nome (ou só a inicial) e o tratamento. |
| Endereço | dúvida "Onde fica o atendimento?" e seção `#contato` | Texto completo. Depois, se quiser, adicione `streetAddress` no JSON-LD do `<head>`. |
| Horários | seção `#contato` | Por exemplo: "Seg a sex, 9h às 19h · Sáb, 9h às 13h". |
| Logo DM | `<symbol id="monogram">` no `index.html` e `favicon.svg` | É uma recriação provisória do monograma DM com folhinha. Peça o arquivo original (SVG ou PNG transparente) e troque o conteúdo do símbolo. |
| Fotos dos tratamentos | `.row__img img` em `#tratamentos` | São do Unsplash (uso livre). Troque pelas fotos reais dos atendimentos quando tiver. |

## Textos para a Dayanne conferir

- Os valores e pacotes vieram dos Stories (Tabela de Valores e Pacotes). Se algum preço mudar, edite o `index.html`: eles aparecem nos tratamentos, nos pacotes, no selo do hero e nas dúvidas.
- O valor da parcela nos pacotes (5x de R$ 112, R$ 120 e R$ 117) é o preço dividido por 5.
- Os nomes das três fases do passo a passo ("Preparar a pele", "Limpar a fundo", "Acalmar e proteger") e a frase curta de cada etapa foram escritos por mim.
- "Com hora marcada", no hero, é uma suposição a partir do "Agende sua avaliação" do Instagram.

## Rodar localmente
```
npx http-server -p 5173
```
Também dá para hospedar em qualquer lugar estático (Hostinger, Netlify, Vercel): basta subir `index.html`, `styles.css`, `main.js`, `favicon.svg`, `site.webmanifest` e a pasta `icons/`.
