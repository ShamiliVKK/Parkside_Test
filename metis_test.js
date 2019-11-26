
let extractWords, replacedWord

Feature('Metis');

Scenario('headings listed in the Contents box are used as headings on the page', async(I) => {
I.amOnPage('https://en.wikipedia.org/wiki/Metis_(mythology)')
I.seeElement('#toc h2')
const getContents = await I.grabTextFrom('#toc li')
extractWords = getContents.map((content) => content.replace(/\d/g,"").trim())
for (let word of extractWords) {
	if(word.indexOf(' ') == -1 ){
		I.click(`#toc a[href*='${word}']`)
		I.seeTextEquals(word, `#mw-content-text span[id*='${word}']`)
	} else {
		replacedWord = word.replace(" ", "_")
		I.click(`#toc a[href*='${replacedWord}']`)
		I.seeTextEquals(word, `#mw-content-text span[id*='${replacedWord}']`)
	}
}
});

Scenario('headings listed in the Contents box have functioning hyperlinks', async(I) => {
	I.waitForElement('#toc li')
	for (let word of extractWords) {
	if(word.indexOf(' ') == -1 ){
		I.click(`#toc a[href*='${word}']`)
		I.waitInUrl(`#${word}`)
	} else {
		I.click(`#toc a[href*='${replacedWord}']`)
		I.waitInUrl(`#${replacedWord}`)
	}
}
});

Scenario('To check for Nike pop over content in personified concepts', (I) => {
I.scrollTo('#mw-content-text a[href*="Nike"]')
I.waitForElement('#mw-content-text a[href*="Nike"]')
I.moveCursorTo('#mw-content-text a[href*="Nike"]')
I.waitForElement('.mwe-popups-container a[href*="Nike"]')
I.see('In ancient Greek religion, Nike was a goddess who personified victory. Her Roman equivalent was Victoria.')
});

Scenario('Clicking on Nike link redirects to a page that has family tree', (I) => {
I.waitForElement('#mw-content-text a[href*="Nike"]')
I.click('#mw-content-text a[href*="Nike"]')
I.waitInUrl('Nike_(mythology)')
I.see('Family tree')
});

