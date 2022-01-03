// separate query from modifier

function robberyAlert(people) {
    for(const p of people) {
        if(p === 'Don') {
            setOffAlarm();
            return 'Don';
        }
        if(p == 'John') {
            setOffAlarm();
            return 'John';
        }
    }
    return ''
}


// refactor

// separate query from modifier (remove side effects)
function ref_findPerson(people) {
    for(const p of people) {
        if(p === 'Don') {
            return 'Don';
        }
        if(p == 'John') {
            return 'John';
        }
    }
    return ''
}

// Remove return values from modifier
// Next use Substitute Algorithm so the modifier uses the query;
function ref_robberyAlert(people) {
    if(ref_findPerson(people)) {
        setOffAlarm();
    }
}


function setOffAlarm() {
    console.log('Robbery in progress');
}

module.exports = { robberyAlert, ref_findPerson, ref_robberyAlert }












