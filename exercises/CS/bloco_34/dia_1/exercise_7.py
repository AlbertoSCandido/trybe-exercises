# Exercício 7 : Agora iremos explorar o outro protocolo de transporte que aprendemos. Crie um servidor UDP usando o mesmo módulo socketserver . Nosso servidor UDP deverá:
# Imprimir no console toda mensagem recebida (não esqueça de converter também para string).
# Responder com os dados recebidos (como um eco).
# Utilize a porta 8084.

from socketserver import DatagramRequestHandler, UDPServer

class MyUDPHandler(DatagramRequestHandler):
    """
    This class works similar to the TCP handler class, except that
    self.request consists of a pair of data and client socket, and since
    there is no connection the client address must be given explicitly
    when sending data back via sendto().
    """

    def handle(self):
        self.wfile.write(b"Hello, World!\n")
        # self.wfile e self.rfile são canais de entrada e saída
        # programados para ter a mesma interface de arquivos!
        for line in self.rfile:
            # esta linha responde o cliente
            self.wfile.write(line)
            # esta linha imprime no console
            print(line.decode('utf-8').strip())

if __name__ == "__main__":
    HOST, PORT = "localhost", 8084
    with UDPServer((HOST, PORT), MyUDPHandler) as server:
        print("Servidor rodando em http://localhost:8084")
        server.serve_forever()