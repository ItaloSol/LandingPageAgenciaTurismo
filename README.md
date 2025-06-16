# Viaje Mais Turismo - Landing Page para Agência de Viagens

Uma landing page moderna e responsiva para agência de viagens rodoviárias, desenvolvida com React, TypeScript e Tailwind CSS.

## ✨ Features

- **Design Responsivo**: Funciona perfeitamente em dispositivos móveis, tablets e desktop
- **Componentes Modulares**: Arquitetura baseada em componentes reutilizáveis
- **Animações Suaves**: Micro-interações e transições elegantes
- **SEO Otimizado**: Estrutura semântica e meta tags apropriadas
- **Performance**: Otimizada para carregamento rápido e experiência fluida
- **Integração WhatsApp**: Formulário de contato integrado com WhatsApp API

## 🛠 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Vite** - Build tool moderna e rápida
- **Lucide React** - Biblioteca de ícones

## 📦 Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd viajemaisturismo-landing
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

## 🚀 Deploy

### Netlify (Recomendado)

1. Construa o projeto:
```bash
npm run build
```

2. Faça o upload da pasta `dist` para o Netlify ou conecte seu repositório Git.

3. Configure as seguintes variáveis de build no Netlify:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Outras Plataformas

O projeto pode ser facilmente deployado em:
- Vercel
- GitHub Pages
- Heroku
- Firebase Hosting

## 📱 Componentes Principais

### Header
- Navegação sticky com transições suaves
- Menu responsivo para mobile
- Links de navegação com scroll suave

### Hero
- Banner principal com call-to-action
- Estatísticas em destaque
- Animação de scroll indicator

### PackagesGrid
- Grid responsivo de pacotes de viagem
- Sistema de filtros por região
- Cards com hover effects

### ContactForm
- Formulário com validação
- Integração com WhatsApp
- Máscara para telefone
- Estados de loading e sucesso

### Testimonials
- Carrossel de depoimentos
- Auto-play com controles manuais
- Indicadores de progresso

## 🎨 Customização

### Cores
As cores principais podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1E40AF', // Azul principal
      secondary: '#EA580C', // Laranja secundário
      // Adicione suas cores personalizadas
    }
  }
}
```

### Conteúdo
Para alterar textos e imagens:

1. **Textos**: Edite diretamente nos componentes em `src/components/`
2. **Imagens**: Substitua as URLs do Unsplash por suas próprias imagens
3. **Pacotes**: Modifique o array `packages` em `PackagesGrid.tsx`

## 📞 Integração WhatsApp

O formulário de contato está configurado para enviar mensagens via WhatsApp. Para personalizar:

1. Altere o número no arquivo `ContactForm.tsx`:
```javascript
const whatsappURL = `https://wa.me/5511999998888?text=${encodeURIComponent(whatsappMessage)}`;
```

2. Personalize a mensagem padrão modificando a variável `whatsappMessage`.

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Constrói a aplicação para produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar código

## 📂 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── AboutSection.tsx
│   ├── PackagesGrid.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── PhotoGallery.tsx
│   ├── DepartureCities.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── App.tsx             # Componente principal
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## 🎯 Otimizações de Performance

- Lazy loading para imagens da galeria
- Otimização de imagens via Unsplash
- Componentes otimizados para re-renders
- Bundle splitting automático via Vite

## 📱 Responsividade

Breakpoints configurados:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:

- Email: contato@viajemaisturismo.com.br
- WhatsApp: (11) 9999-8888
- Website: [www.viajemaisturismo.com.br](https://www.viajemaisturismo.com.br)

---

Desenvolvido com ❤️ para proporcionar as melhores experiências de viagem pelo Brasil.