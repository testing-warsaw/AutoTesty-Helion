class ProductPage {

    get productTitle() {
        return $("div.title-group > h1 >span[itemprop='name']")
    }
    get addToCardButton() {
        return $("#addToBasket_tefust")
    }
    get priceProduct() {
        return $("#cena_d")
    }
    
    async getProductPrice():Promise<string> {
        const price:WebdriverIO.Element = await this.priceProduct
        await price.waitForDisplayed()
        return await price.getText()

    }


    async getBookTitle():Promise<string> {
        const book:WebdriverIO.Element = await this.productTitle
        await book.waitForDisplayed()
        return await book.getText()
        
    }

    async firstBookName() {
        const book:WebdriverIO.Element = await this.productTitle
        await book.waitForDisplayed()
        
        
    }
    async clickAddToCardButton() {
        const button:WebdriverIO.Element = await this.addToCardButton
        await button.waitForDisplayed()
        await button.click()
        
    }

    async addToCardButtonVisible() {
        const button:WebdriverIO.Element = await this.addToCardButton
        await button.waitForDisplayed()
        
    }







}
export default new ProductPage()