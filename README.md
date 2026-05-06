# MOBO Mobile

Aplicativo mobile desenvolvido em **React Native com Expo** para o projeto MOBO.

O app possui:

- Splash screen animada
- Tela de login
- Tela Home
- Tela de controle em modo horizontal
- Navegação por abas com Expo Router
- Fonte personalizada Livvic
- Upload de imagem pela galeria
- Simulação de foco/detecção
- Joysticks funcionais para controle da garra e esteira

---

## Tecnologias usadas

- React Native
- Expo
- Expo Router
- TypeScript
- Expo Go
- Expo Font
- Expo Screen Orientation
- Expo Image Picker
- React Native Reanimated
- React Native Gesture Handler
- Expo Vector Icons

---

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

---

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

Depois de rodar o projeto, o terminal mostrará um QR Code.
Abra o app Expo Go no celular e escaneie o QR Code.
O celular e o computador precisam estar na mesma rede Wi-Fi.

---

## Dependências importantes instaladas no projeto

Caso seja necessário reinstalar manualmente alguma dependência, use:

```bash
npx expo install expo-font
npx expo install @Raciocínio @expo/vector-icons
npx expo install expo-screen-orientation
npx expo install expo-image-picker
npx expo install react-native-gesture-handler react-native-reanimated expo-haptics
```

---

## Fonte utilizada

A fonte usada no projeto é: **Livvic**

Os arquivos devem estar em: `assets/fonts/`

Arquivos necessários:
- `Livvic-Regular.ttf`
- `Livvic-SemiBold.ttf`
- `Livvic-Bold.ttf`
- `Livvic-Black.ttf`

As fontes são carregadas no arquivo: `app/_layout.tsx`

---

## Imagens necessárias

As imagens do app ficam em: `assets/images/`

Algumas imagens usadas no projeto:
- `splash.png`
- `logo-branca.png`
- `logo-verde.png`
- `robofrosa.png`
- `robo-home.png`
- `controle-bg.png`
- `foco.png`
- `camera.png`
- `calend.png`
- `uploads.png`
- `joystick-esquerdo.png`
- `joystick-direito.png`
- `colheita.png`
- `controle.png`

**Importante:** os nomes dos arquivos precisam ser exatamente iguais aos usados no código.

---

## Estrutura principal do projeto

```text
mobo-mobile/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   └── (tabs)/
│       ├── _layout.tsx
│       ├── login.tsx
│       ├── home.tsx
│       ├── controle.tsx
│       ├── perfil.tsx
│       ├── registros.tsx
│       └── calendario.tsx
│
├── assets/
│   ├── images/
│   └── fonts/
│
├── package.json
└── README.md
```

---

## Telas existentes

### Splash Screen
**Arquivo:** `app/index.tsx`

Essa é a primeira tela do aplicativo. Ela exibe a imagem inicial por alguns segundos, faz uma animação de fade-out e redireciona automaticamente para o login.

### Login
**Arquivo:** `app/(tabs)/login.tsx`

Possui:
- Campos de email e senha
- Validação simples
- Botão Entrar
- Redirecionamento para Home
- Ajuste para teclado não cobrir os campos

### Home
**Arquivo:** `app/(tabs)/home.tsx`

Possui:
- Topo com logo
- Saudação ao usuário
- Campo de busca
- Banner principal
- Cards de ferramentas

### Controle
**Arquivo:** `app/(tabs)/controle.tsx`

Essa tela funciona em modo horizontal. Possui:
- Imagem de fundo
- Foco de detecção
- Joystick esquerdo para articulação da garra
- Joystick direito para esteira
- Botão de câmera do robô
- Botão calendário
- Botão upload
- Simulação de detecção de lichia

A rotação horizontal é feita com: `expo-screen-orientation`

### Calendário
**Arquivo:** `app/(tabs)/calendario.tsx`

Tela criada como base para futura implementação do calendário do app.

---

## Navegação

O projeto usa **Expo Router**. As rotas ficam baseadas nos arquivos dentro da pasta: `app/`

A navegação principal por abas fica em: `app/(tabs)/_layout.tsx`

A tela Splash fica fora das tabs para não mostrar o menu inferior.

---

## Comandos úteis

- **Rodar projeto:** `npx expo start`
- **Rodar limpando cache:** `npx expo start -c`
- **Verificar status do Git:** `git status`
- **Salvar alterações no Git:**
  ```bash
  git add .
  git commit -m "Descrição da alteração"
  git push
  ```

---

## Observações importantes para quem for continuar o projeto

- Não alterar nomes das imagens sem atualizar os `require()` no código.
- Não apagar a pasta: `assets/fonts/`
- Não apagar a tela: `app/index.tsx` (Ela é responsável pela splash screen inicial).
- A tela de controle é horizontal apenas enquanto o usuário está nela. As demais telas devem continuar em modo vertical.
- Caso o Expo Go pare de atualizar automaticamente, rode: `npx expo start -c`
- **Evite usar:** `npm audit fix --force`. Esse comando pode quebrar dependências do Expo.

---

## Status atual do projeto

O projeto está em desenvolvimento.

**Funcionalidades já iniciadas:**
- Interface baseada no Figma
- Splash screen
- Login
- Home
- Tela Controle
- Navegação
- Upload de imagens (simulação)
- Simulação de detecção
- Joysticks funcionais

**Próximas melhorias sugeridas:**
- Finalizar tela Calendário
- Melhorar joysticks estilo drone
- Conectar controle com backend/robô real
- Implementar autenticação real
- Criar tela de cadastro
- Criar tela de recuperação de senha
```

