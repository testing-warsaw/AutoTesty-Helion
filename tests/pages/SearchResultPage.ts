
class SearchResultPage {
    get pageTitle() {
        return $("div#page-title")
    }
    get getAllBook () {
        return $$("ul.list > li")
    }
async getNumberAllBbooks ():Promise<number> {
const booksList:WebdriverIO.ElementArray = await this.getAllBook
return await booksList.length
    }
    get firstBookItem () {
        return $("ul.list > li:nth-child(1) > a")
    }
async clickOnFirstBookItem (){
    const item:WebdriverIO.Element = await this.firstBookItem
    await item.waitForDisplayed()
    await item.click()

}





async getPageTitle ():Promise<string> {
        const h1:WebdriverIO.Element = await this.pageTitle
        await h1.waitForDisplayed()
        return await h1.getText()

    }
    }
export default new SearchResultPage