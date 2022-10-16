/* 
    OBJETIVO - quando clicarmos na tab temos que mostrar o conteúdo da tab que foi clicada pelo usuário e esconder o conteúdo da tab anterior
    - passo 1 - dar um jeito de pegar os elementos que representam as tabs no HTML
    - passo 2 - dar um jeito de identificar o clique no elemento da tab
    - passo 3 - quando o usuário clicar, desmarcar a tab selecionada
	- passo 4 - marcar a tab clicada como selected
	- passo 5 - esconder o conteúdo anterior
	- passo 6 - mostrar o conteúdo da tab selecionada
*/

// passo 1 - dar um jeito de pegar os elementos que representam as tabs no HTML
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    // passo 2 - dar um jeito de identificar o clique no elemento da tab
    tab.addEventListener("click", function() {

        if(tab.classList.contains("selected")){
            return;
        }

        selectTab(tab)
        showInformationTab(tab)
    });
});

function selectTab(tab) {
    // passo 3 - quando o usuário clicar, desmarcar a tab selecionada
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");

    // passo 4 - marcar a tab clicada como selected
    tab.classList.add("selected");
}

function showInformationTab(tab){
    // passo 5 - esconder o conteúdo anterior
    const informationSelected = document.querySelector(".information.selected");
    informationSelected.classList.remove("selected");

    // passo 6 - mostrar o conteúdo da tab selecionada
    const idElementInformationTab = `information-${tab.id}`

    const informationToBeShowed = document.getElementById(idElementInformationTab)
    informationToBeShowed.classList.add("selected")
}