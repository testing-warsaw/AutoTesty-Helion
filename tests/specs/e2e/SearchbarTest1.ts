import GlobalPage from "../../pages/GlobalPage"
import {helionBlaBlaUrl, helionHomeUrl, helionSearchUrl} from "../../config/pagesUrl"
import SearchResultPage from "../../pages/SearchResultPage"
import SearchbarPage from "../../pages/components/SearchbarPage"
import { searchReasult, searchText, incorectSearch, norFoundAlert } from "../../config/dataText"



describe("SearchBar e2e Test nr.1 - ", async () => {

    it("Step 1 - open homePage and verify url.", async () => {
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl)
        await SearchbarPage.searchBarisVisible()
    })
    it("Step 2 - click on search Icon.", async () => {
        await SearchbarPage.clickOnSearchIcon()
        await expect(browser).toHaveUrl( helionHomeUrl +"search/?qa=&szukaj=")
    })
    it("Step 2.1 - cancel rodo privacy.", async () => {
        await SearchbarPage.cancelRodoButton()
    })
    it("Step 3 - search text and verify visible popup.", async () => {
        await SearchbarPage.searchText(searchText)
        await SearchbarPage.suggestPopupVisible()
    })
    it("Step 4.1 - click button.", async () => {
        await SearchbarPage.clickSeeAllButton()
    })
    it("Step 4.2 -  verify url.", async () => {
            // await expect(browser).toHaveUrl(helionSearchUrl)
    })
    it("Step 5 - verify search title and nr. of books.", async () => {
                // const title:string = await SearchResultPage.getPageTitle()
                const numberOfBooks:number = await SearchResultPage.getNumberAllBbooks()
                // await expect(title).toContain(searchReasult)
                await expect(numberOfBooks).toEqual(120)
    })
    it("Step 6 - clear input text.", async () => {
                await SearchbarPage.clearSearchBar()
                await expect(await SearchbarPage.getInputValue()).toContain("")
    })
    it("Step 7 - verify incorrect name of book and allert message.", async () => {
        await SearchbarPage.searchText(incorectSearch)
        await SearchbarPage.clickOnSearchIcon()
        await expect(await SearchbarPage.incorrectNameAlert()).toContain(norFoundAlert)
})
it("Step 8 - clear value and click search.", async () => {
    await SearchbarPage.clearSearchBar()
    await SearchbarPage.clickOnSearchIcon()
    await expect(browser).toHaveUrl(helionBlaBlaUrl)
    await expect(await SearchbarPage.getInputValue()).toContain("")
    
})




})