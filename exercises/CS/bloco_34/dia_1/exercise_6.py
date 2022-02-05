# Exercício 6 : Reinicie o servidor TCP e agora faça uma requisição utilizando o cURL (HTTP), perceba o que é exibido no console do server já que não estamos utilizando o HTTP nele, perceba também que o comando cURL não recebe uma resposta HTTP com sentido (um status code 200, por exemplo), de modo que ele não sabe que aquela requisição chegou ao fim.
# Copiar
# $ curl localhost:8085
# Uma request mais legal:
# Copiar
# $ curl --request POST \
#     --data "{ \"foo\": \"bar\" }" \
#     --header 'Content-Type: application/json' \
#     --header 'Foo-Bar-Header: foo-bar' \
#     localhost:8085/foo-bar


# Recebemos como resposta -> Received HTTP/0.9 when not allowed