
class SearchBarPage {

    get searchIcon() {
        return $("//button[contains(text(), 'Szukaj')]")
    }
    get searchInput() {
        return $("#inputSearch")
    }
    get suggestPopup() {
        return $ ("#inputSearch2")
    }
    get seeAllButton() {
        return $ ("li.wszystkie > p > a")
    }
    get cancelRodo() {
        return $ ("a#rodo-close")
    }
    get notFoundAlert() {
        return $ ("div.not-found")
    }
    async incorrectNameAlert ():Promise<string>{
        const alertName:WebdriverIO.Element = await this.notFoundAlert
        await alertName.waitForDisplayed()
        return await alertName.getText()
        
    }
    async cancelRodoButton (){
        const rodoButton:WebdriverIO.Element = await this.cancelRodo
        await rodoButton.waitForDisplayed()
        await rodoButton.click()
    }

    async clickSeeAllButton () {
        const button:WebdriverIO.Element = await this.seeAllButton
        // await button.scrollIntoView({block: "end"})
        await button.scrollIntoView()
        await button.waitForDisplayed()
        await button.click()
    }

    async suggestPopupVisible () {
        const popup:WebdriverIO.Element = await this.suggestPopup
        await popup.waitForDisplayed()
    }

    async searchText (value:string) {
        const input:WebdriverIO.Element = await this.searchInput
        await input.waitForDisplayed()
        await input.setValue(value)
    }

async clickOnSearchIcon() {
    const icon:WebdriverIO.Element = await this.searchIcon
    await icon.waitForDisplayed()
    await icon.click()
   
}
    
async searchBarisVisible() {
    const input:WebdriverIO.Element = await this.searchInput
    await input.waitForDisplayed()
    
}

async getInputValue ():Promise<string> {
    const input:WebdriverIO.Element = await this.searchInput
    await input.waitForDisplayed()
    return await input.getValue()
}

async clearSearchBar(){
    const input:WebdriverIO.Element = await this.searchInput
    await input.waitForDisplayed()
    await input.clearValue()
}


}
export default new SearchBarPage()