# Exercício 2 Faça uma requisição ao recurso usuários da API do Github ( https://api.github.com/users ), exibindo o username e url de todos os usuários retornados.
import requests


def fetch_content(url, timeout=1):
    try:
        response = requests.get(url, timeout=timeout)
        response.raise_for_status()
    except (requests.HTTPError, requests.ReadTimeout):
        print("")
    else:
        return response.json()


def get_users(json):     
    return [user["login"] for user in json]

print(get_users(fetch_content("https://api.github.com/users")))