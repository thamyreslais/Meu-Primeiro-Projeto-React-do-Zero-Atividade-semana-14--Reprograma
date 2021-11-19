# Meu primeiro projeto React do zero

Iniciou-se o processo de criação de um projeto react entrando na pasta que eu desejava que a nova pasta fosse criada, cliquei com o mouse direito, selecionei a função 'Git bash Here'

Utilizei o comando 'yarn create react-app atividade-casa-thamyres', ao ficar pronto, rodei o comando 'code .'.

Após ser aberto no VS Code, fui ao app.js e exclui da linha 8 á 19 e o comando de import de imagem (que estava entre essas linhas), testei o código desenvolvendo um <h1>Hello World</h1>, fui ao git bash que estava aberto e utilizei o comando 'yarn start' abrindo no navegador o código.

Abri a pasta public, deletei os arquivos: Favicon.ico; logo192.png; logo512.png; manifest.json e robots.txt. Dentro de index.html  retiro os links de favicon, logo e manifest, além dos comentários.

Na pasta SRC, apaguei: setupTests.js; reportWebVitals.js; logo.svg e App.text.js.   Após apagar, deu uma quebra no código, fui até o arquivo index.js e apago a linha que contém 'reportWebVitals();' linha 14 á 17, necessitando retirar o import da linha 5 também. 

Desenvolvi um arquivo que simulava o JSON, com informações de alguns personagens dos X-men, criando no SRC uma nova parta com o nome Data, e desenvolvendo um arquivo dentro da mesma com o nome 'database.js', importando o simulador de JSON para a mesma e incluindo um 'export default' ao final.

Em uma nova pasta com o nome 'components' criei o arquivo 'Title.jsx' para criar um componente título, com a função sendo redenrizada pelo props, fui ao arquivo App.js, importei o arquivo Title.jsx e chamei a função texto para exibir na tela 'Meu Primeiro Projeto React do Zero'

Na parta 'components' criei um arquivo chamado 'Cards.jsx' importei o arquivo database, criei um componente para mapear os dados do arquivo para retornar em elementos que devem ser renderizados na tela, com três chaves e valores: Nome, Poder e Imagem.

Importei o arquivo 'Cards.jsx' no App.js e chamei. 

Por fim, criei um repositório no GitHub e subi o projeto.
