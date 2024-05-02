# API de Veículos

Esta é uma API para gerenciar veículos.

## Pré-requisitos

Antes de rodar a aplicação, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js
- npm (geralmente vem junto com o Node.js)
- MongoDB (você pode usar uma instância local ou remota)

## Instalação

1. Clone este repositório:

```bash
   git clone https://github.com/seu-usuario/api-veiculos.git
```

2. Navegue até o diretório do projeto:

```bash
   cd api-veiculos
```

3. Instale as dependências do projeto:

```bash
   npm install
```

4. Renomeie o arquivo `.env.example` para `.env` e ajuste as variáveis de ambiente conforme necessário.

## Rodando a aplicação

Para rodar a aplicação localmente, execute o seguinte comando:

```bash
   npm run start
```


Isso iniciará o servidor Express na porta especificada no arquivo `.env`.

## Documentação da API

A documentação da API está disponível na rota `/api-docs`. Você pode acessá-la em seu navegador após iniciar a aplicação. Por exemplo: `http://localhost:3000/api-docs`.

## Testes

Para rodar os testes automatizados, execute o seguinte comando:

```bash
   npm run test
```
