const ulFrontendList = document.querySelector(".frontendList")
const ulBackendList = document.querySelector(".backendList")

function renderJobsFront(array){
    ulFrontendList.innerHTML = ""
    
    array.forEach((element) => {

        const tagLi = document.createElement("li")
        const tagDivCardWrapper = document.createElement("div")
        tagDivCardWrapper.classList.add("cardWrapper")
        const tagDivHeaderCard = document.createElement("div")
        tagDivHeaderCard.classList.add("headerCard")
        const tagSpan = document.createElement("span")
        const tagH3 = document.createElement("h3")
        const tagP = document.createElement("p")
        const tagDivFooterCard = document.createElement("div")
        tagDivFooterCard.classList.add("footerCard")
        const tagButton1 = document.createElement("button")
        tagButton1.classList.add("cardsButtons")
        const tagButton2 = document.createElement("button")
        tagButton2.classList.add("cardsButtons")

        tagSpan.innerText = "G"
        tagH3.innerText = element.title
        tagP.innerText = element.descrription
        tagButton1.innerText = element.modality[0]
        tagButton2.innerText = element.modality[1]

        tagLi.append(tagDivCardWrapper)
        tagDivCardWrapper.append(tagDivHeaderCard, tagP, tagDivFooterCard)
        tagDivHeaderCard.append(tagSpan, tagH3)
        tagDivFooterCard.append(tagButton1, tagButton2)
        ulFrontendList.append(tagLi)
    });
}

renderJobsFront(frontEndJobs)

function renderJobsBack(array){
    ulBackendList.innerHTML = ""
    
    array.forEach((element) => {
        
        const tagLi = document.createElement("li")
        const tagDivCardWrapper = document.createElement("div")
        tagDivCardWrapper.classList.add("cardWrapper")
        const tagDivHeaderCard = document.createElement("div")
        tagDivHeaderCard.classList.add("headerCard")
        const tagSpan = document.createElement("span")
        const tagH3 = document.createElement("h3")
        const tagP = document.createElement("p")
        const tagDivFooterCard = document.createElement("div")
        tagDivFooterCard.classList.add("footerCard")
        const tagButton1 = document.createElement("button")
        tagButton1.classList.add("cardsButtons")
        const tagButton2 = document.createElement("button")
        tagButton2.classList.add("cardsButtons")

        tagSpan.innerText = "G"
        tagH3.innerText = element.title
        tagP.innerText = element.descrription
        tagButton1.innerText = element.modality[0]
        tagButton2.innerText = element.modality[1]

        tagLi.append(tagDivCardWrapper)
        tagDivCardWrapper.append(tagDivHeaderCard, tagP, tagDivFooterCard)
        tagDivHeaderCard.append(tagSpan, tagH3)
        tagDivFooterCard.append(tagButton1, tagButton2)
        ulBackendList.append(tagLi)
    });
}

renderJobsBack(backEndJobs)



