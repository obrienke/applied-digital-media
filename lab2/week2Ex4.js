var el1 = document.getElementById("element1");
var tableHtml = "<table>";
tableHtml += "<tr><th>Company</th><th>Contact</th><th>Country</th></tr>";
tableHtml += "<tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr>";
tableHtml += "<tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr>";
tableHtml += "<tr><td>Ernst Handel</td><td>Roland Mendel</td><td>Austria</td></tr>";
tableHtml += "<tr><td>Island Trading</td><td>Helen Bennett</td><td>UK</td></tr>";
tableHtml += "<tr><td>Laughing Bacchus Winecellars</td><td>Yoshi Tannamuri</td><td>Canada</td></tr>";
tableHtml += "<tr><td>Magazzini Alimentari Riuniti</td><td>Giovanni Rovelli</td><td>Italy</td></tr>";
tableHtml += "</table>";

el1.innerHTML = tableHtml;

console.log("Table constructed using javascript");