# Exercício 4 Baseados em uma página contendo detalhes sobre um livro http://books.toscrape.com/catalogue/the-grand-design_405/index.html , faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.
# O preço deve vir somente valores numéricos e ponto. Ex: Â£13.76 -> 13.76 .
# A descrição de ter o sufixo "more..." removido quando existir.
# Os campos extraídos devem ser apresentados separados por vírgula. Ex: título,preço,descrição,capa.
# Exemplo:

# The Grand Design,13.76,THE FIRST MAJOR WORK IN NEARLY A DECADE BY ONE OF THE WORLDâS GREAT THINKERSâA MARVELOUSLY CONCISE BOOK WITH NEW ANSWERS TO THE U

from parsel import Selector
import requests


def fetch_content(url, timeout=1):
    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()
    except (requests.HTTPError, requests.ReadTimeout):
        print("")
    else:
        return response.text


def extract_fields(text):
    selector = Selector(text)

    title = selector.css('div.product_main h1::text').get()
    price = selector.css('p.price_color::text').get()[2:]
    suffix = "...more"
    description = selector.css('div#product_description ~ p::text').get()[:-len(suffix)]
    image = selector.css('div.carousel img::attr(src)').get()

    return {title, price, description, image}


print(extract_fields(fetch_content('http://books.toscrape.com/catalogue/the-grand-design_405/index.html')))