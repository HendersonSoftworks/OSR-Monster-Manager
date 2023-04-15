// populate sample goblins
for (let i = 0; i < 2; i++) 
{
    let last_grid_el = $('.enemy-panel').clone();
    $(last_grid_el).appendTo(".grid-container");
}

// populate selection modoal
for (let i = 0; i < 4; i++) 
{
    let last_grid_el = $('.monster-select-panel').clone();
    $(last_grid_el).appendTo(".monster-modal");
}

$(".add-btn").click(function() {
    $(".monster-modal").toggle()
});

$(".monster-select-panel").click(function() {
    $(".monster-modal").toggle()
    console.log("adding monster to manager panel...")
});

