let monsters_apis = [];
let monsters_objs = [];
let last_grid_el;

async function Getmonsters_apis()
{
    let response = await fetch('https://www.dnd5eapi.co/api/monsters/');
    let data = await response.json();

    return data;
}

async function PopulateMonsterAPIs(json)
{
    monsters_apis = monsters_apis.results
    console.log(monsters_apis);

    console.log("Configuring monster objects...")
    for (let i = 0; i < monsters_apis.length; i++) {
        let response = await fetch('https://www.dnd5eapi.co' + monsters_apis[i].url);
        let data = await response.json();
        monsters_objs[i] = data;
    }
    console.log("Monster objects configured");
}

// populate sample goblins
// for (let i = 0; i < 2; i++) 
// {
//     let last_grid_el = $('.enemy-panel').clone();
//     $(last_grid_el).appendTo(".grid-container");
// }

// Add event listeners
$(".add-btn").click(function() {
    $(".monster-modal").toggle()
});

$(".monster-select-panel").click(function() {
    $(".monster-modal").toggle()
    console.log("adding monster to manager panel...")
});

// Call APIs on startup
Getmonsters_apis().then(data => (monsters_apis = data))
    .then(monsters_apis => (PopulateMonsterAPIs(monsters_apis)));

// Populate Modal
for (let i = 0; i < 2; i++) {
    let last_grid_el = $('.monster-select-panel').clone();
    $(last_grid_el).appendTo(".monster-modal");
    
    let name = $(last_grid_el)[0].getElementsByTagName('span')[0].innerHTML + i;
    $(last_grid_el)[0].getElementsByTagName('span')[0].innerHTML = name;

    console.log(name);
}