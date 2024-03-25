# Playlist Downloader

Este repositório abriga um script desenvolvido em Node.js, utilizando WebdriverIO, com o propósito de automatizar o processo de download de vídeos de playlists do YouTube.

## Descrição

O script usa o framework WebdriverIO para interagir com um navegador Chrome e realizar as seguintes etapas:

1. Acessa a URL da playlist do YouTube.
2. Extrai os links dos vídeos da playlist.
3. Utiliza um serviço online para converter os vídeos em arquivos de áudio e faz o download dos mesmos.

## Como Usar

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2. Clone este repositório em sua máquina local:
   
   ```bash
   git clone https://github.com/gaabdevelop/Census-Scraper
   ```

3.  Inicialize um projeto Node.js:

    ```bash
    npm init -y
    ```

    4. Instale as dependências do projeto usando npm:

    - Para instalar o Axios, execute o seguinte comando:

        ```bash
        npm install webdriverio
        ```

    5.  Abra o arquivo Robo.js e localize a variável LinkDaPlaylist. Substitua o valor dessa variável pela URL da playlist do YouTube que deseja baixar.

6. Após a instalação das dependências e seleção da playlist desejada, você pode executar o script principal:

    ```bash
    node index.js
    ```
## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções neste projeto. Abra uma issue para discutir mudanças propostas ou envie uma pull request.

## Agradecimento

Se chegou até aqui, agradeço pelo apoio à minha evolução.
