$('#myElement').draggable();
$("#draggableElement1").draggable({
    'cursor': 'move',
    'snap': '#droppableElement'
});
$("#draggableElement2").draggable({
    'cursor': 'move',
    'snap': '#droppableElement'
});
$(".droppableElement").droppable({
    accept: '#draggableElement1',
    drop: drop,
    hoverClass: 'hovered'
});

function drop(event, ui) {
    alert(ui.draggable.attr('id') + ' dropped on me');
}