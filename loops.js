for (let i = 0; i < 10; i++) {
  console.log(i);
}

//count down from 10 to 1
for(let i=10; i>0; i--){
    console.log(i)
}

//output odd numbers from 1 to 10
for(let i=1; i<=10; i+=2){
    console.log(i)
}

//output even numbers from 1 to 10
for(let i=0; i<=10; i+=2){
    console.log(i)
}

//multiples of 3, starting at 6 and ending at 60
for(let i=6; i<= 60; i+=3){
    console.log(i)
}

const tree = document.querySelector(".tree")


//make a christmas tree
function christmasTree(){
    let space = ""
    for(let i=1; i<= 12; i++){
        tree.innerHTML += ("<br>")
        for(let j=i; j<12; j++){
            tree.innerHTML += ("# ")
            tree.style .textAlign = "center"
            tree.style.fontSize = "2rem"
            tree.style.fontWeight = "bolder"
            tree.style.position = "relative"
        }   
    }
}
christmasTree()

//make the christmas star
function christmasStar(){
    const div = document.createElement("div")
    const light = document.querySelector(".light")
    div.style.height = "80px"
    div.style.width = "80px";
    div.style.backgroundColor = "yellow"
    light.appendChild(div)
    light.style.position = "absolute"
    light.style.left = "700px"
    div.style.borderRadius = "50%"
}
christmasStar()