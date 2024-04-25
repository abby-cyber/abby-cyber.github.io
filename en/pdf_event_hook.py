

import logging
from bs4 import BeautifulSoup
from mkdocs.structure.pages import Page

def pre_pdf_render(soup: BeautifulSoup, logger: logging) -> BeautifulSoup:
  '''
  delete the railroad-diagram-output divs from the soup when rendering to pdf
  '''
  logger.info(f'(pre_pdf_render) soup')
  for diag in soup.select('.railroad-diagram-output'):
    diag.decompose()
  return soup
