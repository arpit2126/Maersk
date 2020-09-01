let cardNo = [1,2,3,4,5,6,7,8,9];

// crating div, button, main container dynamicaly
const mainContainer=document.createElement('div');
const shuffleButton=document.createElement('button');
const sortButton=document.createElement('button');

mainContainer.classList.add('main-container');
shuffleButton.innerHTML = "Shuffle";
sortButton.innerHTML = "Sort";
shuffleButton.classList.add('btn');
sortButton.classList.add('btn');

shuffleButton.addEventListener ("click", function() {
    shuffleList();
});

sortButton.addEventListener ("click", function() {
    sortList();
});

const numberList=document.createElement('ul');
numberList.classList.add('number-container','wrap');


generateList(cardNo);
mainContainer.append(numberList);
mainContainer.append(shuffleButton);
mainContainer.append(sortButton);
document.body.appendChild(mainContainer);


// generating list
function generateList(cardNo=[1,2,3,4,5,6,7,8,9]){
    console.log("i am called",cardNo);
    for (let value of cardNo) {
        listItem = document.createElement("li");
        listItem.textContent = value;
        listItem.classList.add("number-item");
        numberList.appendChild(listItem);
    }
}

// getting random index from 0-9
function randomNum(minNo, maxNo) {
    return Math.round(minNo + Math.random()*(maxNo-minNo));
}


//logic for shuffling index using Fisher-Yates algo
function shuffle (numList=[1,2,3,4,5,6,7,8,9])  {
    let numLength = numList.length;
    let tempList=[];
    for (let i = numLength-1; i >= 0; i--) {
        let index =  randomNum(0,i);
        tempList.push(numList[index]);
        numList.splice(index, 1);
    }
    return tempList;
}

function shuffleList(){
    cardNo = shuffle([1,2,3,4,5,6,7,8,9]);
    const dummyList = document.querySelector(".number-container");

    while (dummyList.hasChildNodes()) {
        dummyList.removeChild(dummyList.firstChild);
    }

    generateList(cardNo);
    mainContainer.append(numberList);
    mainContainer.append(shuffleButton);
    mainContainer.append(sortButton);
}

function sortList(){
    const dummyList = document.querySelector(".number-container");
    while (dummyList.hasChildNodes()) {
        dummyList.removeChild(dummyList.firstChild);
    }
    cardNo.sort((a,b)=> a-b);
    generateList(cardNo);
    mainContainer.append(numberList);
    mainContainer.append(shuffleButton);
    mainContainer.append(sortButton);
}