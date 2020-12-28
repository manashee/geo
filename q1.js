const inq = require('inquirer')

const q = [
    {
        'type': 'input',
        'name': 'is_triangle',
        'message': 'Is it a triangle problem?'
    },
    {
        'type': 'input',
        'name': 'is_rectangle',
        'message': 'Is it a quadrilateral problem?'
    }
]


inq.prompt ( q ).then ( ans => { 
    if  ( ans ['is_triangle'] === 'y' )
        q_tri ()
    else if  ( ans ['is_rectangle'] === 'y' )   
        q_rect()
    else 
        q_none()
})

function q_tri(){
    console.log('I will ask you something about triangles')
}
function q_tri(){
    console.log('I will ask you something about rectangles')
}
function q_none(){
    console.log('I dont know how to solve this problem')
}
