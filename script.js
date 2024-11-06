let monsters_apis = [];
let monsters_objs = [];

async function Getmonsters_apis()
{
    let response = await fetch('https://www.dnd5eapi.co/api/monsters/');
    let data = await response.json();

    return data;
}

async function PopulateMonsterAPIs(json)
{
    monsters_apis = json.results
    console.log(monsters_apis);

    console.log("Configuring monster objects...")
    for (let i = 0; i < monsters_apis.length; i++) {
        let response = await fetch('https://www.dnd5eapi.co' + monsters_apis[i].url);
        let data = await response.json();
        monsters_objs[i] = data;
    }
    console.log("Monster objects configured");
}

function PrintMonstersToTemplate(_monster_objects) {
    let monster_template = $(".monster-template").html();
    
    console.log(_monster_objects);

    _monster_objects.forEach(element => {
        let name = element.name;
        let hp = element.hit_points;
        let ac = element.armor_class[0].value;
        let speed = element.speed.walk
        let abilities 

        let panel = $(monster_template);
        
        panel.find(".name-text").text(element.name);
        panel.find(".hp-text").text(element.hit_points);
        panel.find(".ac-text").text(element.armor_class[0].value);
        panel.find(".speed-text").text(element.speed.walk);
        panel.find(".abilities-text").text(element.abilities);
        panel.find(".attacks-text").text(element.attacks);

        $("body").append(panel);
    });
}

// testing
// fetch('https://www.dnd5eapi.co/api/monsters/')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// Populate monster objs by iterating APIs on startup
// Getmonsters_apis().then(data => (monsters_apis = data))
//     .then(monsters_apis => (PopulateMonsterAPIs(monsters_apis)))
//     //.then(console.log(monsters_objs))
//     .then(PrintMonstersToTemplate(monsters_objs));
    
Getmonsters_apis().then(data => (monsters_apis = data))
    .then(async monsters_apis => {
        await PopulateMonsterAPIs(monsters_apis);
        PrintMonstersToTemplate(monsters_objs);
    });