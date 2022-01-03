function bandCharge(usage) {
    if(usage < 0) return 0;
    const amount = 
        bottomBand(usage) * 0.03 + 
        middleBand(usage) * 0.05 +
        topBand(usage) * 0.07;
    return amount;
}

function bottomBand(usage) {
    return Math.min(usage, 100);
}

function middleBand(usage) {
    return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function topBand(usage) {
    return usage > 200 ? usage - 200 : 0;
}

// refactor

// parameterize function
function band(usage, minimumUsage, maximumUsage) {
    return usage > minimumUsage ? Math.min(usage, maximumUsage) - minimumUsage : 0;
}

function ref_bandCharge(usage) {
    if(usage < 0) return 0;
    const amount = 
        /* bottom band */ band(usage, 0, 100) * 0.03 + 
        /* middle band */ band(usage, 100, 200) * 0.05 +
        /* top band */ band(usage, 200, usage) * 0.07;
    return amount;
}


module.exports = {
    bandCharge, ref_bandCharge
}