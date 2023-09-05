import {  alertMessage, pustyKoszyk, searchText } from "../../config/dataText"
import { helionHomeUrl, helionIconSearch, urlHelionZakupy, } from "../../config/pagesUrl"
import CardPage from "../../pages/components/CardPage"
import ProductPage from "../../pages/components/ProductPage"
import SearchbarPage from "../../pages/components/SearchbarPage"
import SearchResultPage from "../../pages/SearchResultPage"

describe("E2E - Products", async () => {
    let productTitle:string = ""
    let price:string = ""
    before(() => {
        browser.url(helionHomeUrl)
    })

    it("Step 1 - Search text and click icon search.", async () => {
        await SearchbarPage.searchText(searchText)
        await SearchbarPage.clickOnSearchIcon()
        await expect(browser).toHaveUrl(helionIconSearch)
    })

    it("Step 2 - Click on first book.", async () => {
            await SearchResultPage.clickOnFirstBookItem()
            await ProductPage.firstBookName()
            await ProductPage.addToCardButtonVisible()
            productTitle = await ProductPage.getBookTitle()
            price = await ProductPage.getProductPrice()
            console.log("Cena książki w sklepie Helion: ", price)
    })



    it("Step 3 - Click to add to card button.", async () => {
        await ProductPage.clickAddToCardButton()
        await expect(browser).toHaveUrlContaining(urlHelionZakupy)
        await expect(await CardPage.getAlertNameBook()).toContain(productTitle)
        await expect(await CardPage.getTotalPriceValue()).toEqual(price)
    })
    it("Step 4 - Delete product from card.", async () => {
        await CardPage.clickOnCheckBox()
        await CardPage.cancelOffer()
        await expect(await browser.getAlertText()).toContain(alertMessage)
        await CardPage.acceptDeleteAlert()
        await expect(await CardPage.getDeletedAlertMessage()).toContain(pustyKoszyk)

})














})