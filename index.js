const ListeIdees =[
    {
        id: '0',
        Titre: "Cours",
        suggestion:" idee11",
        status:"true"
    }
    ,
    {
        id: '1',
        titre: "Brief",
        suggestion:" idee2",
        status:"false"
    }
    ,
    {
        id: '2',
        titre: "Planning",
        suggestion:" idee3",
        status:"false"
    }
]
const propositionElement = document.getElementById("propositions");
const ideeForm = document.querySelector("form");

ListeIdees.forEach((idee) =>{
    const divCard = document.createElement('div');
    divCard.classList.add('card')
    divCard.classList.add('m-2')
    divCard.style.width ="22rem"
    

    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body')

    const cardTitle= document.createElement('H5');
    cardTitle.classList.add('card-title')

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-Description')
    
    cardTitle.textContent =idee.titre
    cardDescription.textContent =idee.suggestion
    divCardBody.appendChild(cardTitle)
    divCardBody.appendChild(cardDescription)
    divCard.appendChild(divCardBody)
    propositionElement.appendChild(divCard)
 

})
//----------------------------------------------------------------

ideeForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    const inputTitre = document.getElementById("titre");
    const inputSuggestion = document.getElementById("suggestion");   

const titreSaisie = inputTitre.value
const suggestionSaisie = inputSuggestion.value
//----------------------------------------------------------------
const nouvelleIdee ={
    id:3,
    Titre:titreSaisie,
    suggestion:suggestionSaisie,
    status:false

}

ListeIdees.push(nouvelleIdee)

inputTitre.value = ""
inputSuggestion.value =""

const divCard = document.createElement('div');
divCard.classList.add('card')
divCard.classList.add('m-2')
divCard.style.width ="22rem"


const divCardBody = document.createElement('div');
divCardBody.classList.add('card-body')

const cardTitle= document.createElement('H5');
cardTitle.classList.add('card-title')

const cardDescription = document.createElement('p');
cardDescription.classList.add('card-Description')

cardTitle.textContent =nouvelleIdee.Titre
cardDescription.textContent =nouvelleIdee.suggestion

divCardBody.appendChild(cardTitle)
divCardBody.appendChild(cardDescription)
divCard.appendChild(divCardBody)
propositionElement.appendChild(divCard)
})