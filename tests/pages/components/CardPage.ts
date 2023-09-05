class CardPage {
    get successAlert() {
        return $("div.successbox >p")
    }
    get totalPrice() {
        return $("h3#cart-edit-summary ")
    }
    get checkBox() {
        return $("#formularz tr th.checkbox")
    }

    get deleteSelected() {
        return $ ("div#usun a")
    }

    get deletedAlertMessage() {
        return $("div.infobox >p")
    }

    async getDeletedAlertMessage ():Promise<string>   {
        const delMessage:WebdriverIO.Element = await this.deletedAlertMessage
        await delMessage.waitForDisplayed()
        return await delMessage.getText()


    }

    async cancelOffer()  {
        const cancelBox:WebdriverIO.Element = await this.deleteSelected
        await cancelBox.waitForDisplayed()
        await cancelBox.scrollIntoView()
        await cancelBox.click()

    }
    async clickOnCheckBox()  {
        const box:WebdriverIO.Element = await this.checkBox
        await box.waitForDisplayed()
        await box.scrollIntoView()
        await box.click()

    }

    async getTotalPriceValue():Promise<string>  {
        const price:WebdriverIO.Element = await this.totalPrice
        await price.waitForDisplayed()
        return await price.getText()

    }

    async getAlertNameBook():Promise<string> {
        const alert:WebdriverIO.Element = await this.successAlert
        await alert.waitForDisplayed()
        return await alert.getText()
    }

    async acceptDeleteAlert() {
        await browser.acceptAlert()
    }










}
export default new CardPage()