# Parkside_Test
Automation of Metis wiki page using CodeceptJS

# To run test
npx codeceptjs run --steps

#Test file
metis_test.js

# Output
Metis --
  headings listed in the Contents box are used as headings on the page
    I am on page "https://en.wikipedia.org/wiki/Metis_(mythology)"
    I see element "#toc h2"
    I grab text from "#toc li"
    I click "#toc a[href*='Family']"
    I see text equals "Family", "#mw-content-text span[id*='Family']"
    I click "#toc a[href*='Mythology']"
    I see text equals "Mythology", "#mw-content-text span[id*='Mythology']"
    I click "#toc a[href*='References']"
    I see text equals "References", "#mw-content-text span[id*='References']"
    I click "#toc a[href*='See_also']"
    I see text equals "See also", "#mw-content-text span[id*='See_also']"
    I click "#toc a[href*='Further_reading']"
    I see text equals "Further reading", "#mw-content-text span[id*='Further_reading']"
  ✔ OK in 2537ms

  headings listed in the Contents box have functioning hyperlinks
    I wait for element "#toc li"
    I click "#toc a[href*='Family']"
    I wait in url "#Family"
    I click "#toc a[href*='Mythology']"
    I wait in url "#Mythology"
    I click "#toc a[href*='References']"
    I wait in url "#References"
    I click "#toc a[href*='Further_reading']"
    I wait in url "#Further_reading"
    I click "#toc a[href*='Further_reading']"
    I wait in url "#Further_reading"
  ✔ OK in 689ms

  To check for Nike pop over content in personified concepts
    I scroll to "#mw-content-text a[href*="Nike"]"
    I wait for element "#mw-content-text a[href*="Nike"]"
    I move cursor to "#mw-content-text a[href*="Nike"]"
    I wait for element ".mwe-popups-container a[href*="Nike"]"
    I see "In ancient Greek religion, Nike was a goddess who personified victory. Her Roman equivalent was Victoria."
  ✔ OK in 1380ms

  Clicking on Nike link redirects to a page that has family tree
    I wait for element "#mw-content-text a[href*="Nike"]"
    I click "#mw-content-text a[href*="Nike"]"
    I wait in url "Nike_(mythology)"
    I see "Family tree"
  ✔ OK in 1716ms


  OK  | 4 passed   // 12s
