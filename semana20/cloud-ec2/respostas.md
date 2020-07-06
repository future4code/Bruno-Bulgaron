### Respostas Bruno Bulgaron - Hamilton

### Exercício 1

Não tive quase nenhuma dificuldade em instalar o MySQL no EC2 que criamos hoje em aula. Apenas me embolei na parte do usuário root no tutorial, mas consegui resolver, e parece que tá tudo certo por lá.

Sobre a ativação da porta 3306, também foi bem tranquilo de fazer.

### Exercício 2

1- Eu preciso:
```
- fazer um clone do repositório do projeto lá no EC2 que criei;
- rodar o comando npm i pra instalar as dependências;
- rodar o npm run build pra criar a build do projeto;
- rodar o comando do Python -mSimpleHTTPServer 80;
```

3-
```
ssh -i meu_arquivo_de_chaves.pem ubuntu@IP_DA_MAQUINA
```

4-
```
git clone https://github.com/future4code/4eddit-hamilton-2.git
cd 4eddit-hamilton-2
npm run start
```

6-
```
npm run build
cd build
sudo python -mSimpleHTTPServer 80
```

7- Não percebi muitas diferenças, exceto na parte de ter que clonar um repositório. O restante foi bastante parecido, senão igual...