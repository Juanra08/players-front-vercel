function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}




async function fetchPlayers() {
    const response = await fetch(
        "https://players-back.herokuapp.com/players",
        {		
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"		  
            },
        }
        )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const ul = document.getElementById('Players');
            let Players = data;
            
            for(let player of Players){
                let li = createNode('li');
                let span = createNode('span');
            let a = createNode('a');
            a.setAttribute('href', "show.html?id=" + player._id);
            a.innerText = player._id;	
                span.innerHTML = `${player.name} ${player.surname} ${player.age} ${player.position} ${player.team}`;            
                append(li, span);
            append(li, a);
                append(ul, li);
            }
        
        })
        .catch((error) => console.log(error));
}

fetchPlayers();