import moment from 'moment'

let output = document.getElementById('output');
output.innerHTML = moment(Date.now()).calendar();