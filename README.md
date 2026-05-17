# MOBO Mobile

Aplicativo mobile do projeto **MOBO**, desenvolvido com **React Native**, **Expo**, **Expo Router** e **TypeScript**.

O app usa navegação por tabs, com a Splash Screen fora das abas. As telas principais ficam dentro de `app/(tabs)`, enquanto `app/index.tsx` é responsável pela abertura do aplicativo.

## Projeto atual

O MOBO Mobile possui:

- Splash screen animada.
- Login atualizado.
- Cadastro e completar cadastro.
- Home atualizada.
- Tela de controle em modo horizontal.
- Calendário, registros e perfil.
- Navegação por abas com Expo Router.
- Fonte personalizada Livvic.
- Upload de imagem pela galeria.
- Simulação de foco/detecção por IA.
- Joysticks visuais e funcionais para controle da garra e da esteira.
- Comandos internos preparados para futura integração com robô via WebSocket.

## Tecnologias usadas

- React Native
- Expo
- Expo Router
- TypeScript
- Expo Go
- Expo Font
- Expo Screen Orientation
- Expo Image Picker
- Expo Haptics
- React Native Reanimated
- React Native Gesture Handler
- Expo Vector Icons

## Pré-requisitos

Antes de rodar o projeto, instale:

### Node.js

Baixe e instale o Node.js:
[https://nodejs.org](https://nodejs.org)

Recomendado usar a versão LTS.

Para verificar:

```bash
node -v
npm -v
```

### Git

Baixe e instale o Git:
[https://git-scm.com/downloads](https://git-scm.com/downloads)

Para verificar:

```bash
git --version
```

### Expo Go

Instale o aplicativo Expo Go no celular:

- Android: Google Play
- iOS: App Store

## Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone LINK_DO_REPOSITORIO
```

Depois entre na pasta:

```bash
cd mobo-mobile
```

### 2. Instalar dependências

```bash
npm install
```

Esse comando instala todas as dependências listadas no `package.json`.

### 3. Rodar o projeto

```bash
npx expo start
```

Se precisar limpar cache:

```bash
npx expo start -c
```

### 4. Abrir no celular

Depois de rodar o projeto, o terminal mostrará um QR Code. Abra o app Expo Go no celular e escaneie o QR Code.

O celular e o computador precisam estar na mesma rede Wi-Fi.

## Dependências importantes instaladas no projeto

Dependências importantes usadas pelo app:

- `expo-router`
- `expo-screen-orientation`
- `expo-image-picker`
- `expo-haptics`
- `react-native-reanimated`
- `react-native-gesture-handler`
- `@expo/vector-icons`
- `expo-font`

Caso seja necessário reinstalar manualmente alguma dependência, use:

```bash
npx expo install expo-font
npx expo install @expo/vector-icons
npx expo install expo-screen-orientation
npx expo install expo-image-picker
npx expo install expo-haptics
npx expo install react-native-gesture-handler react-native-reanimated
```

O WebSocket é nativo do React Native. Para a integração planejada com ESP32/robô, não é necessário instalar uma biblioteca extra apenas para usar `WebSocket`.

## Fonte utilizada

A fonte usada no projeto é: **Livvic**.

Os arquivos devem estar em `assets/fonts/`.

Arquivos necessários:

- `Livvic-Regular.ttf`
- `Livvic-SemiBold.ttf`
- `Livvic-Bold.ttf`
- `Livvic-Black.ttf`

As fontes são carregadas no arquivo `app/_layout.tsx`.

## Imagens necessárias

As imagens do app ficam em `assets/images/`.

Imagens importantes usadas no projeto:

- `splash.png`
- `controle-bg.png`
- `foco.png`
- `camera.png`
- `calend.png`
- `uploads.png`
- `joystick-esquerdo.png`
- `joystick-direito.png`
- `BtnabreFecha.png`
- `painel-controle.png`
- `rotacao-camera.png`
- `robo-home.png`
- `logo-branca.png`
- `logo-verde.png`

Outras imagens que podem existir no projeto e também devem ser preservadas:

- `robofrosa.png`
- `colheita.png`
- `controle.png`

**Importante:** os nomes dos arquivos precisam ser exatamente iguais aos usados nos `require()` do código.

## Estrutura principal do projeto

```text
mobo-mobile/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   └── (tabs)/
│       ├── _layout.tsx
│       ├── login.tsx
│       ├── cadastro.tsx
│       ├── completar-cadastro.tsx
│       ├── home.tsx
│       ├── controle.tsx
│       ├── calendario.tsx
│       ├── registros.tsx
│       └── perfil.tsx
│
├── components/
│   └── mobo-ui.tsx
│
├── assets/
│   ├── images/
│   └── fonts/
│
├── package.json
└── README.md
```

## Componentes

O arquivo `components/mobo-ui.tsx` centraliza componentes e elementos visuais reutilizáveis do app. Sempre que possível, novos elementos de interface compartilhados devem seguir esse padrão para evitar duplicação e manter a identidade visual do MOBO consistente.

## Telas existentes

### Splash Screen

**Arquivo:** `app/index.tsx`

Primeira tela do aplicativo. Exibe a imagem inicial, executa animação de abertura e redireciona automaticamente para o login. Ela fica fora das tabs para não mostrar o menu inferior.

### Login

**Arquivo:** `app/(tabs)/login.tsx`

Possui:

- Campos de email e senha.
- Validação simples.
- Botão Entrar.
- Redirecionamento para Home.
- Ajuste para teclado não cobrir os campos.

### Cadastro

**Arquivo:** `app/(tabs)/cadastro.tsx`

Tela de criação de conta do usuário.

### Completar Cadastro

**Arquivo:** `app/(tabs)/completar-cadastro.tsx`

Tela para complementar informações do cadastro do usuário.

### Home

**Arquivo:** `app/(tabs)/home.tsx`

Possui:

- Topo com logo.
- Saudação ao usuário.
- Campo de busca.
- Banner principal.
- Cards de ferramentas.
- Imagem do robô na experiência inicial.

### Controle

**Arquivo:** `app/(tabs)/controle.tsx`

Tela avançada de controle visual do robô. Ela funciona em modo horizontal e, ao sair dela, o app volta para o modo vertical.

Funcionalidades atuais:

- Usa imagem de fundo `controle-bg.png`.
- Possui joysticks esquerdo e direito.
- Joystick esquerdo controla a articulação da garra.
- Joystick direito controla a esteira.
- Joysticks usam imagens originais como base fixa.
- Apenas o ícone de digital se move.
- Possui vibração/haptic feedback.
- Possui efeito de pressão nos controles.
- Possui glow/trilha neon nos joysticks.
- Possui slider vertical para abrir/fechar a garra.
- O slider usa a imagem `BtnabreFecha.png`.
- Possui painel inferior baseado na imagem `painel-controle.png`.
- Possui botão de câmera/simulação de detecção.
- Possui botão de calendário.
- Possui botão de upload pela galeria.
- Possui imagem de rotação da câmera `rotacao-camera.png`.
- Possui detector/foco de IA com imagem `foco.png`.
- Detector ajustado para `120x120`.
- Possui animação viva da câmera/fundo.
- Possui foco IA dinâmico com glow e pulso.
- Simula detecção de lichia madura.
- Exibe card de resultado da IA.
- Gera comandos internos para futura integração com robô.
- Mantém mock/console se o WebSocket estiver offline, sem quebrar o app.

A rotação horizontal é feita com `expo-screen-orientation`.

A integração real com robô está preparada para WebSocket com ESP32/robô. A URL padrão planejada é:

```text
ws://192.168.4.1:81
```

### Calendário

**Arquivo:** `app/(tabs)/calendario.tsx`

Tela adicionada para visualização e organização de informações de calendário do app.

### Registros

**Arquivo:** `app/(tabs)/registros.tsx`

Tela adicionada para histórico, registros ou informações relacionadas às atividades do app.

### Perfil

**Arquivo:** `app/(tabs)/perfil.tsx`

Tela atualizada com informações e ações relacionadas ao perfil do usuário.

## Navegação

O projeto usa **Expo Router**. As rotas são baseadas nos arquivos dentro da pasta `app/`.

A navegação principal por abas fica em `app/(tabs)/_layout.tsx`.

A Splash Screen fica em `app/index.tsx`, fora das tabs, para não mostrar o menu inferior durante a abertura do aplicativo.

## Comandos úteis

- Rodar projeto: `npx expo start`
- Rodar limpando cache: `npx expo start -c`
- Verificar status do Git: `git status`
- Salvar alterações no Git:

```bash
git add .
git commit -m "Descrição da alteração"
git push
```

## Cuidados importantes

- Não alterar nomes dos assets sem atualizar os `require()` correspondentes.
- Não apagar `app/index.tsx`, pois ele é a Splash Screen.
- Não apagar `app/(tabs)/controle.tsx`.
- Não alterar tamanhos dos joysticks sem validar no celular.
- Não apagar a pasta `assets/fonts/`.
- Não rodar `npm audit fix --force`, pois esse comando pode quebrar dependências do Expo.
- Para problemas de cache, usar `npx expo start -c`.
- A tela Controle é horizontal; as demais telas são verticais.
- A integração real com robô ainda depende de ESP32/WebSocket configurado.

## Trabalho em equipe com Git

Fluxo recomendado para Lucas, Bárbara ou qualquer pessoa da equipe:

- Criar uma branch para cada tela ou feature.
- Não trabalhar todos diretamente na `main`.
- Fazer `pull` antes de começar uma alteração.
- Fazer commits com mensagens claras.
- Abrir Pull Request para revisar e juntar alterações.
- Evitar que duas pessoas editem o mesmo arquivo ao mesmo tempo.

Exemplo:

```bash
git checkout -b feature/nome-da-feature
git pull
git add .
git commit -m "Atualiza tela de controle"
git push
```

## Status atual do projeto

O projeto está em desenvolvimento.

Funcionalidades já implementadas ou adicionadas:

- Splash animada pronta.
- Login atualizado.
- Cadastro e completar cadastro adicionados.
- Home atualizada.
- Perfil atualizado.
- Registros e calendário adicionados.
- Controle avançado implementado visualmente.
- Comandos do robô preparados em mock/WebSocket.
- Upload de imagens pela galeria.
- Simulação de detecção de lichia madura.
- Joysticks funcionais para garra e esteira.
- Navegação por tabs com Expo Router.

Próximos passos:

- Integrar mobile antigo.
- Conectar autenticação real.
- Conectar WebSocket real no ESP32.
- Integrar streaming da câmera.
- Integrar IA real de maturação.
