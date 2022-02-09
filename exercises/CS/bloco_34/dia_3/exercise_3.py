# Exercício 3 Às vezes, você precisa fazer com que o seu raspador da Web pareça estar fazendo solicitações HTTP como o navegador, para que o servidor retorne os mesmos dados que você vê no seu navegador. Faça uma requisição a https://scrapethissite.com/pages/advanced/?gotcha=headers e verifique se foi bem sucedido.
# Para verificar se foi bem sucedido, faça assert "bot detected" not in response.text , se nada acontecer, seu código está funcionando.

import requests

def fetch_content(url, timeout=1):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:20.0) Gecko/20100101 Firefox/20.0',
            'Accept-Language': 'en,en-US;q=0,5',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8'
        }
        response = requests.get(url, headers=headers, timeout=timeout)
        response.raise_for_status()
        assert "bot detected" in response.text
        if "bot detected" in response.text:
            return "Bot detected"
    except (requests.HTTPError, requests.ReadTimeout):
        print("")
    else:
        return response.text


print(fetch_content('https://scrapethissite.com/pages/advanced/?gotcha=headers'))

