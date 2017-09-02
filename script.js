

let timestables = prompt("what number do you want to times by 12", "00")

for (let i = 0; i < 12; i++) {

    timestables = parseInt(timestables)

    let a = i + 1
    console.log(a + " X "+ timestables + "= "+ (a*timestables))
    
}

