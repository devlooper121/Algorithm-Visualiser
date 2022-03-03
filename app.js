
// console.log(range);
let arrayContainer = document.getElementById("randomArray");
const btnAdder = document.querySelector("#newArrayButton");
const slideChanger = document.getElementById("myRange");
slideChanger.addEventListener("input", generayeArray);
btnAdder.addEventListener("click", generayeArray);
let arr = [];
let allArr;
let switches = [1,1,1,1];

function generayeArray(){
    const range = document.getElementById("myRange").value;
    for(var i = 0; i < switches.length; i++){
        switches[i] = 1;
    }
    // deleting last all arrays
    var previous = document.getElementById("randomArray");
        var previousArr = previous.lastElementChild;
        while(previousArr){
            previous.removeChild(previousArr);
            previousArr = previous.lastElementChild;
            arr.pop();
        }
    // generating new arrays
    for (var i = 0; i < range; i++){ 
        var randomNum = Math.floor(Math.random()*500 + 50);
        var arrayDiv = document.createElement("div");
        arrayDiv.classList.add("array");
        arrayDiv.style.height = randomNum + "px";
        arr.push(randomNum);
        arrayContainer.appendChild(arrayDiv);
    } 
    allArr = document.getElementsByClassName("array"); 
}



const bubbleSortBtn = document.getElementById("bubbleSort");
bubbleSortBtn.addEventListener("click", bubbleSort);

const selectionSortBtn = document.getElementById("selectionSort");
selectionSortBtn.addEventListener("click", selectionSort);

const mergeSortBtn = document.getElementById("mergeSort");
mergeSortBtn.addEventListener("click", mergeSort);

const stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", stopSorting);

function stopSorting(){
    for(var i = 0; i < switches.length; i++){
        switches[i] = 0;
        console.log("inside is fine");
    }
    console.log("outside is fine");
}

const timer = ms => new Promise(res => setTimeout(res,ms))
var speed = document.getElementById("mySpeed").value;
async function bubbleSort(){
    allArr = document.getElementsByClassName("array"); 
    const myIndex = 0;
    bubbleSortBtn.style.backgroundColor = "gray";
    bubbleSortBtn.style.color = "white";
    
    let len = allArr.length;
    for (var i = 0; i < len-1; i++){
        for(var j = 0; j < len-1-i; j++){
            if(switches[0] == 0){
                return;
            }
            speed = document.getElementById("mySpeed").value;
            var firstArrDiv = allArr[j];
            var secondArrDiv = allArr[j+1];
            // change color after selecting
            firstArrDiv.style.backgroundColor = "red";
            secondArrDiv.style.backgroundColor = "red";
            firstArrDiv.style.transform = "translateY(-25px)";
            secondArrDiv.style.transform = "translateY(-25px)";
            await timer(speed);
            var firstArrDivH = parseInt(firstArrDiv.style.height);
            var secondArrDivH = parseInt(secondArrDiv.style.height);
            if(firstArrDivH > secondArrDivH){
                
                // await timer(1);
                firstArrDiv.style.height = secondArrDivH + "px";
                secondArrDiv.style.height = firstArrDivH + "px";
                
            }
            // await timer(20);
            firstArrDiv.style.backgroundColor = "black";
            secondArrDiv.style.backgroundColor = "black";
            firstArrDiv.style.transform = "translateY(0px)";
            secondArrDiv.style.transform = "translateY(0px)";
            if(j == len-2-i){
                secondArrDiv.style.backgroundColor = "green";
                // firstArrDiv.style.backgroundColor = "green";
            }
        }
        // await timer(speed);
        allArr[0].style.backgroundColor = "green";
        
    }
}

async function selectionSort(){
    allArr = document.getElementsByClassName("array"); 
    const myIndex = 3;
    selectionSortBtn.style.backgroundColor = "gray";
    selectionSortBtn.style.color = "white";
    let len = allArr.length;
    for (var i = 0; i < len; i++){
        var firstArrDiv = allArr[i];
        var firstArrDivH = parseInt(firstArrDiv.style.height);
        // var secondArrDiv = allArr[j+1];
        firstArrDiv.style.backgroundColor = "purple";
        var minimum = firstArrDivH;
        var index = i;
        for (var j = i+1; j < len; j++){
            if(switches[3] == 0){
                return;
            }
            var secondArrDiv = allArr[j];
            secondArrDiv.style.backgroundColor = "red";
            secondArrDiv.style.transform = "translateY(-25px)";
            // firstArrDiv = allArr[minimum];
            await timer(speed);
            var secondArrDivH = parseInt(secondArrDiv.style.height);
            speed = document.getElementById("mySpeed").value;
            
            if(secondArrDivH < minimum){
                minimum = secondArrDivH;
                index = j;
            }
            secondArrDiv.style.backgroundColor = "black";
            secondArrDiv.style.transform = "translateY(0px)";
            
        }
        
        if(index != i){
            firstArrDiv.style.height = minimum + "px";
            var tempArrDiv = allArr[index];
            tempArrDiv.style.height = firstArrDivH + "px";
            // secondArrDiv.style.transform = "translateY(0px)";
        }
        firstArrDiv.style.backgroundColor = "green";
    }
}

function mergeSort() { 
    allArr = document.getElementsByClassName("array");
    const myIndex = 2;
    selectionSortBtn.style.backgroundColor = "gray";
    selectionSortBtn.style.color = "white";
    var r = allArr.length-1;
    mainMergeSort(allArr, 0, r);
    
}
function mainMergeSort(arr, l, r){
    
    if(l<r){
        
        var mid = Math.floor((l+r)/2);
        
        mainMergeSort(arr, l, mid);
        mainMergeSort(arr, mid+1, r);
        merge(arr, l, mid, r);
        if(h == 2) return;
    }
}
var h = 0;
function merge(arr, l, mid, r){

    var tempArr = [];
    var i = l;
    var j = mid+1;
    var k = 0;
    // await timer(500);
    while(i <= mid && j <= r){
        
        var firstArrDiv = arr[i];
        var secondArrDiv = arr[j];
        // change color after selecting
        
        firstArrDiv.style.backgroundColor = "red";
        secondArrDiv.style.backgroundColor = "red";
        // firstArrDiv.style.transform = "translateY(-25px)";
        // secondArrDiv.style.transform = "translateY(-25px)";

        var firstArrDivH = parseInt(firstArrDiv.style.height);
        var secondArrDivH = parseInt(secondArrDiv.style.height);

        if(firstArrDivH < secondArrDivH){
            tempArr[k] = firstArrDivH;
            i++;

        }else{
            tempArr[k] = secondArrDivH;
            j++;
        }
        k++;
        setTimeout(() =>{}, k*speed*10);
    }
    
    
    if(i > mid){
        while(j <= r){
            tempArr[k] = parseInt(arr[j].style.height);
            j++;
            k++;
        }
    }else{
        while(i <= mid){
            tempArr[k] = parseInt(arr[i].style.height);
            i++;
            k++;
        }
    }
    // console.log(tempArr);
    doitslowly(arr, tempArr, l, r);
}

const doitslowly = (arr, tempArr, l, r) =>{
    for(var i = l; i <= r; i++){
        // speed = document.getElementById("mySpeed").value;
        let tempdiv = arr[i];
        let size = tempArr[i - l];
        setTimeout( () => {
            speed = document.getElementById("mySpeed").value;
            console.log("delay "+ i);
            tempdiv.style.height = `${size}px`;
            tempdiv.style.backgroundColor = "green";
            tempdiv.style.transform = "translateY(0px)";
        },1000*(i-l))
    }
}