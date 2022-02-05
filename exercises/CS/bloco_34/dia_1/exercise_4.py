# Exercício 4 : Agora iremos para a camada de transporte. Crie um servidor TCP usando o módulo socketserver que já vem embutido com o Python. Nosso servidor TCP deverá:
# Responder com um "Olá, client", logo quando estabelecer uma conexão.
# Imprimir no console todo dado recebido.
# Responder com os dados recebidos (como um eco).
# Utilize a porta 8085.

from socketserver import TCPServer, StreamRequestHandler

class MyTCPHandler(StreamRequestHandler):
    """
    The request handler class for our server.

    It is instantiated once per connection to the server, and must
    override the handle() method to implement communication to the
    client.
    """

    def handle(self):
        self.wfile.write(b"Hello, World!\n")
        # self.wfile e self.rfile são canais de entrada e saída
        # programados para ter a mesma interface de arquivos!
        for line in self.rfile:
            # esta linha responde o cliente
            self.wfile.write(line)
            # esta linha imprime no console
            print(line.decode('ascii').strip())



if __name__ == "__main__":
    HOST, PORT = "localhost", 8085

    # Create the server, binding to localhost on port 9999
    with TCPServer((HOST, PORT), MyTCPHandler) as server:
        # Activate the server; this will keep running until you
        # interrupt the program with Ctrl-C
        print("Servidor rodando em http://localhost:8085")
        server.serve_forever()