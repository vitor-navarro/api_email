*Configurando uma conta do Gmail para enviar emails pelo Node.js

Antes de começar a enviar emails através do Node.js, é importante lembrar que é recomendável utilizar uma conta específica para esse fim, e não a sua conta pessoal.

Para configurar uma conta do Gmail para enviar emails pelo Node.js, siga os seguintes passos:

1-Ative a autenticação de dois fatores:
  -Faça login na sua conta do Gmail

  -Clique no ícone da sua conta no canto superior direito da tela e selecione "Gerenciar sua Conta Google"

  -Selecione a opção "Segurança" no menu do lado esquerdo da tela

  -Role a página para baixo até a seção "Fazer login no Google" ou "Como você faz login no Google" 
  e clique em "Autenticação de dois fatores" ou "verificação em duas etapas"

  -Siga as instruções na tela para ativar a autenticação de dois fatores para a sua conta

2-Crie uma senha de aplicativo:
  -Faça login na sua conta do Gmail

  -Clique no ícone da sua conta no canto superior direito da tela e selecione "Gerenciar sua Conta Google"

  -Selecione a opção "Segurança" no menu do lado esquerdo da tela

  -Role a página para baixo até a seção "Fazer login no Google" e clique em "Senhas de app"

  --OU pesquise por senhas de app na aba de pesquisa

  -Selecione o aplicativo "Outro (personalizado)" e dê um nome para a senha de aplicativo (por exemplo, "Node.js")

  -Clique em "Gerar" para criar a senha de aplicativo

  -Anote a senha gerada em algum lugar seguro, pois ela será necessária para fazer login no Gmail pelo Node.js

3-Substitua os valores criados:
Irá ser necessário ter o dotenv instalado, caso ainda não tenha instalado basta dar um npm install no terminal para executar a instalação padrão do node
  
  -Crie um arquivo do .env e coloque os dados que estão no .env.example.

  -Coloque em frente ao = de GMAIL_USER pela sua conta do gmail que será usada no envio de emails.

  -Coloque em frente ao = de GMAIL_PASS a senha gerada na etapa anterior.

  LEMBRE-SE: Nunca de essas insformações a ninguém, o .env não deve ir para o seu repositório do github