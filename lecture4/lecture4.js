let number = 3;

number = "3";

if(number === 3){
    console.log("number is 3");
}

let i = 0;
let x = 0;
while(i < 154){
    x = x + 2;
    i++;
}

console.log(x);

console.log(++x + 2);

console.log(x)

for(let i = 13; i > 0; i = i - 3){
    console.log("for: "+i);
}

document.write("<ol>")
for(let i = 1; i <= 3; i++){
    document.write("<li>Set "+i+"</li>");
    document.write("<ul>")
    for(let j = 1; j <= 4; j++){
        document.write("<li>Exercise "+j+"</li>");
    }
    document.write("</ul>")
}
document.write("</ol>")
