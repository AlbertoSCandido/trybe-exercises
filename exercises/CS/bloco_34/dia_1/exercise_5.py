# Exercício 5 : Utilizando o comando telnet ou o Netcat (nc):
# Conecte no server do exercício anterior e envie informações, o server deverá imprimir as mensagens enviadas no console.
# Pare o servidor e verifique o que aconteceu com a conexão que estava aberta com o comando telnet ou nc.
# Copiar
# $ nc -t 127.0.0.1 8085
# ou
# Copiar
# $ telnet 127.0.0.1 8085
# Após estabelecer a conexão, digite a mensagem e tecle enter para enviá-las.

# Ao conectar no servidor, ele reenvia as mensagens para o cliente.
# Ao encerrar, o cliente recebe a mensagem Connection closed by foreign host.