# Decode — Homepage em Bootstrap

Landing page responsiva para uma agência digital, construída com HTML, CSS, JavaScript, Bootstrap 4 e jQuery.

O projeto apresenta serviços, clientes, portfólio, depoimentos e uma área de newsletter em uma página única com navegação por âncoras.

## Demonstração

O projeto é totalmente estático e pode ser aberto diretamente no navegador. Para evitar restrições do navegador ao carregar arquivos locais, recomenda-se executar um servidor HTTP local.

## Funcionalidades

- Layout responsivo para desktop, tablet e celular.
- Cabeçalho fixo após a rolagem da página.
- Navegação suave entre as seções.
- Fechamento automático do menu em dispositivos móveis.
- Filtro de projetos por categoria.
- Galeria de imagens com navegação em lightbox.
- Carrossel responsivo de depoimentos.
- Formulário demonstrativo de newsletter.
- Estilos de foco para navegação por teclado.
- Respeito à preferência de movimento reduzido do sistema.

## Tecnologias

- HTML5
- CSS3
- Bootstrap 4
- JavaScript
- jQuery 3.5
- Isotope
- Magnific Popup
- Owl Carousel

## Estrutura do projeto

```text
.
├── assets/
│   ├── clientes/          # Logotipos dos clientes
│   ├── servicos/          # Imagens do portfólio
│   ├── logo.svg
│   └── ...                # Ilustrações e ícones
├── css/
│   ├── owl/               # Estilos e recursos do Owl Carousel
│   ├── bootstrap.min.css
│   ├── config.css         # Variáveis de cores
│   ├── custom.css         # Estilos dos componentes
│   ├── global.css         # Estilos globais reutilizáveis
│   ├── main.css           # Ponto de entrada dos estilos
│   └── responsive.css     # Ajustes responsivos
├── js/
│   ├── bootstrap.min.js
│   ├── isotope.pkgd.min.js
│   ├── jquery.magnific-popup.min.js
│   ├── owl.carousel.min.js
│   └── main.js            # Inicialização e interações da página
├── index.html
└── README.md
```

## Como executar

### Opção 1: abrir diretamente

Abra o arquivo `index.html` em um navegador moderno.

### Opção 2: servidor local com Python

Na raiz do projeto, execute:

```bash
python3 -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000
```

Também é possível usar extensões como Live Server ou qualquer servidor de arquivos estáticos.

## Seções da página

| Seção | Identificador | Finalidade |
| --- | --- | --- |
| Início | `#inicio` | Apresentação e chamadas principais |
| Sobre | `#sobre` | Posicionamento e processo da empresa |
| Serviços | `#servicos` | Resumo dos serviços oferecidos |
| Clientes | `#clientes` | Logotipos, experiência e atendimento |
| Portfólio | `#portfolio` | Projetos filtráveis por categoria |
| Depoimentos | `#depoimentos` | Carrossel de avaliações |
| Contato | `#contato` | Newsletter e redes sociais |

## Personalização

### Cores

As cores principais estão centralizadas em `css/config.css`:

```css
:root {
  --primary: #fc5185;
  --primary-dark: #f83771;
  --secondary: #364f6b;
  --light: #f0f0f0;
  --medium: #cacaca;
  --dark: #a2a2a2;
}
```

### Conteúdo

Textos, links e informações de contato ficam em `index.html`. Antes de publicar, revise especialmente:

- Telefone e horário de atendimento.
- Links das redes sociais.
- Nomes e textos dos projetos.
- Depoimentos.
- Títulos e descrições dos serviços.

### Portfólio

Cada projeto deve possuir a classe `element-item` e uma ou mais classes de categoria:

```html
<div class="col-lg-4 col-6 mb-4 element-item website apps">
  ...
</div>
```

O valor de `data-filter` nos botões deve corresponder à classe da categoria:

```html
<button type="button" data-filter=".website">Website</button>
```

### Imagens

- Ilustrações gerais ficam em `assets/`.
- Logotipos ficam em `assets/clientes/`.
- Imagens de projetos ficam em `assets/servicos/`.
- Novas imagens informativas devem receber um texto `alt` descritivo.

## JavaScript

O arquivo `js/main.js` concentra as interações:

- Adiciona a classe `active` ao cabeçalho após a rolagem.
