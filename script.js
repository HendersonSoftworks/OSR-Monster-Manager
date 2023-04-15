let monsters = [];
let last_grid_el;

async function GetMonsters()
{
    let response = await fetch('monsters.json');
    let data = await response.json();
    return data;
}

function PopulateSelectPanel(json)
{
    for (let i = 0; i < json.length; i++) {
        monsters[i] = json[i];
    }

    // this isn't working
    for (let i = 0; i < monsters.length; i++) {
        last_grid_el = $('.monster-select-panel').clone();
        last_grid_el.find("span")[0].innerHTML = monsters[i].name;
    
        $(last_grid_el).appendTo(".monster-modal");        
    }

   
}

// populate sample goblins
for (let i = 0; i < 2; i++) 
{
    let last_grid_el = $('.enemy-panel').clone();
    $(last_grid_el).appendTo(".grid-container");
}

// populate selection modoal
// for (let i = 0; i < 4; i++) 
// {
//     let last_grid_el = $('.monster-select-panel').clone();
//     $(last_grid_el).appendTo(".monster-modal");
// }

$(".add-btn").click(function() {
    $(".monster-modal").toggle()
});

$(".monster-select-panel").click(function() {
    $(".monster-modal").toggle()
    console.log("adding monster to manager panel...")
});

GetMonsters()
    .then(data => (monsters = data))
    //.then(monsters => (PopulateSelectPanel(monsters)));
    .then(monsters => (PopulateSelectPanel(monsters)));