const inq = require('inquirer')

const q = [
    {
        'type': 'input',
        'name': 'classify_shape',
        'message': 'Is it a triangle problem?'
    },
    {
        'type': 'input',
        'name': 'classify_shape',
        'message': 'Is it a quadrilateral problem?'
    },    
    {
        'type': 'input',
        'name': 'classify_shape',
        'message': 'Is it a problem?'
    },    
]
inq.prompt ( q ).then ( ans => console.log ( `${ans['classify_shape']}` ))
inq.prompt ( q ).then ( ans => console.log ( `${ans['classify_shape']}` ))