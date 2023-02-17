/*
Dette projektet er laget for å skjønne JS, HTML og CSS bedre.
Så er det litt kult også da :)

Oppgaven:

Lag et projekt hvor du har en handlekurv.
Du skal kunne legge til ting i handlekurven.

Når du har lagt til ting i kurven, skal du kunne trykke på en kjøp knapp.

Da vil summen du har av penger bli endret til den summen minus det du kjøpte sin kostnad.
*/


/*
Lag funksjoner for dette:

Trekk verdi fra wallet
*/




// Model

let shoppingCart = ['Sokker'];

let inputValue = '';

const customer = {
    firstName : 'Sebastian',
    surName : 'Møller',
    balance : 1000
};
    



// View

updateView()
function updateView() {
    let html = /*HTML*/ `
    <input oninput="inputValue = this.value" id="itemInput" type="text">
    <button onclick="addToShoppingCart()">Legg til ting i handekurven</button>
    <p id="output"></p>
    <div>
        <br>Handlevogn:<br/>
    </div>
    `;

    // For å se handlevogna i view:

    for(let i = 0; i <= shoppingCart.length - 1; i++){
        html += /*HTML*/ `
            <li>
                ${shoppingCart[i]}
            </li>
        `;
    }

    document.getElementById('app').innerHTML = html;
}



// Controller

// document.getElementById('output').innerHTML = output;
// input = document.getElementById('itemInput').value;


function addToShoppingCart() {
    inputValue = document.getElementById('itemInput').value;
    shoppingCart.push(inputValue);
    updateView();
}





