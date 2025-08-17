# Dashboard de Tarefas

Este é um projeto desenvolvido em **React** que demonstra a aplicação de princípios modernos de arquitetura de software, como **Clean Architecture, SOLID e Clean Code**.  
A aplicação permite aos usuários criar, visualizar e gerenciar tarefas de forma intuitiva, oferecendo uma experiência de usuário fluida e interativa.

---

## 🚀 Funcionalidades

- **Visualização Kanban:** As tarefas são organizadas em colunas que representam seu estado atual, facilitando a visualização do fluxo de trabalho.
- **Gerenciamento de Tarefas:**
  - Adicione novas tarefas, que entram automaticamente na coluna "Pendente".
  - Mova tarefas entre as colunas ("Avançar" / "Voltar") para atualizar seu status.
- **Gerenciamento de Estado Centralizado:** Utiliza **Redux Toolkit** para um gerenciamento de estado previsível e escalável.
- **Visualização de Dados:** Apresenta um gráfico de pizza que mostra a distribuição percentual das tarefas em cada estado, oferecendo um resumo visual do progresso.

---

## 🏗️ Padrões de Projeto e Arquitetura

Este projeto foi estruturado para ser **escalável, manutenível e fácil de testar**, seguindo os seguintes princípios:

### 🔹 Clean Architecture

A aplicação é dividida em camadas de responsabilidade, com uma regra de dependência clara: as camadas externas dependem das internas, mas nunca o contrário.

- **`src/pages` (Camada de Apresentação):** Representa a tela principal da aplicação (`DashboardPage`).
- **`src/components` (Camada de Apresentação):** Contém componentes de UI reutilizáveis, como `TaskCard`, `TaskColumn`, `TaskForm` e `TaskChart`.
- **`src/features` (Camada de Estado/Domínio):** Contém os "slices" do Redux. O `tasksSlice.js` encapsula toda a lógica de negócio e as regras de manipulação do estado das tarefas.
- **`src/app` (Camada de Infraestrutura):** Configura e inicializa serviços centrais da aplicação, como a `store` do Redux.

### 🔹 SOLID

- **S (Responsabilidade Única):** Cada componente e módulo tem apenas uma razão para mudar.

  - Exemplo: O componente `<TaskCard />` é responsável apenas por exibir uma tarefa. Toda a lógica de movimentação está centralizada no `tasksSlice`.

- **O (Aberto/Fechado):** O código está aberto para extensão, mas fechado para modificação.

  - Exemplo: Para adicionar uma nova coluna (ex: "Em Revisão"), basta incluir o status no `tasksSlice` e criar uma nova instância de `<TaskColumn />`.

- **L (Substituição de Liskov):** Os componentes funcionam de forma consistente com diferentes dados.

  - Exemplo: `<TaskColumn />` pode receber qualquer lista de tarefas e funcionará corretamente.

- **I (Segregação de Interfaces):** Os componentes recebem apenas as props de que precisam.

  - Exemplo: `<TaskCard />` recebe um único objeto `task`, e não a lista inteira de tarefas.

- **D (Inversão de Dependência):** Componentes de alto nível não dependem de implementações de baixo nível.
  - Exemplo: A UI não manipula o estado diretamente; ela despacha ações (`dispatch(moveTask(...))`) e seleciona dados (`useSelector`) da store do Redux.

### 🔹 Clean Code

- **Nomes Claros:** Variáveis e funções descrevem seu propósito (`pendingTasks`, `moveTask`).
- **CSS Modules:** Estilização encapsulada em `*.module.css`, evitando conflitos globais.
- **Estrutura de Pastas:** Organização por funcionalidade e camada para facilitar manutenção.

---

## ⚙️ Como Executar o Projeto

### ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) (14+)
- `npm` ou `yarn`

### 🔹 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/dashboard-de-tarefas.git
cd dashboard-de-tarefas
```

### 🔹 2. Instalar Dependências

```bash
npm install
```

### 🔹 3. Executar a Aplicação

```bash
npm start
```

A aplicação será aberta em:  
👉 <http://localhost:3000>
