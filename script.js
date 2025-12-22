function getPoints(value) {
    switch (value) {
        case 'nice':
            return 1;
        case 'naughty':
                return -1;
        default: 
            return -1;
    }
}5
function checkNaughtyOrNice () {
    const questions = ('q1','q2','q3','q4','q5');
    for (let id of questions) {
        score +=getPoints(document.getElementById(id).value);
    }
    if(score >=  4) {
        alert("ho ho ho! On the nice list you got!")
        console.log(score);
    }
    else {
        alert ("oh no no no. slow your role.")
        console.log(score);
    }
}   
