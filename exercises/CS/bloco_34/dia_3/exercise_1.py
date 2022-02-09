# Exercício 1 Faça uma requisição ao site https://httpbin.org/encoding/utf8 e exiba seu conteúdo de forma legível.
import requests


def fetch_content(url, timeout=1):
    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()
    except (requests.HTTPError, requests.ReadTimeout):
        print("")
    else:
        return response.text


print(fetch_content("https://httpbin.org/encoding/utf8"))