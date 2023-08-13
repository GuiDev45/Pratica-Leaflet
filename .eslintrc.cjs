module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

/*
module.exports = { ... }: Isso exporta um objeto de configuração do ESLint.

root: true: Indica que este é o arquivo de configuração raiz do ESLint.

env: { browser: true, es2020: true }: Define o ambiente onde o código será executado. Aqui, está configurado para um ambiente de navegador usando JavaScript ES2020.

extends: [...]: Especifica os conjuntos de regras estendidas que você deseja usar. Neste caso, as regras recomendadas do ESLint, as regras recomendadas do plugin @typescript-eslint (para TypeScript) e as regras recomendadas do plugin react-hooks (para o uso correto dos Hooks do React).

ignorePatterns: ['dist', '.eslintrc.cjs']: Define padrões de arquivos a serem ignorados pelo ESLint. Neste caso, os diretórios "dist" e o próprio arquivo .eslintrc.cjs estão sendo ignorados.

parser: '@typescript-eslint/parser': Indica que o analisador a ser usado para analisar o código é o do TypeScript.

plugins: ['react-refresh']: Lista de plugins a serem usados. Aqui, o plugin react-refresh é adicionado. O plugin react-refresh é usado em conjunto com o HMR (Hot Module Replacement) para atualizar automaticamente componentes do React sem recarregar a página inteira.

rules: { ... }: Aqui, você pode definir regras personalizadas para o ESLint. No exemplo, a regra 'react-refresh/only-export-components' é definida com um nível de aviso ("warn"). Essa regra verifica se os componentes exportados só são componentes do React (ou seja, não são constantes ou outras coisas). O objeto { allowConstantExport: true } permite exportações constantes, o que é útil ao usar ferramentas como o React Refresh.

Em resumo, o arquivo .eslintrc.cjs configura as regras do ESLint para o seu projeto, incluindo a detecção de problemas no código JavaScript/TypeScript e no uso de React Hooks. Ele também lida com a integração do TypeScript, o uso do parser adequado e o plugin react-refresh para melhorar o desenvolvimento com React.
*/