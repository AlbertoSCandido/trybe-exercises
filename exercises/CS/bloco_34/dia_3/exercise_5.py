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
    prefix = "star-rating "
    rating = selector.css('p.star-rating::attr(class)').get()[len(prefix):]
    if rating == 'Zero':
        rating = 0
    elif rating == 'One':
        rating = 1
    elif rating == 'Two':
        rating = 2
    elif rating == 'Three':
        rating = 3
    elif rating == 'Four':
        rating = 4
    elif rating == 'Five':
        rating = 5

    return {title, price, image, rating}


print(extract_fields(fetch_content('http://books.toscrape.com/catalogue/the-grand-design_405/index.html')))