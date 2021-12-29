// move function
const test = require('../test-utils')

/**
 * calculates total distance for a GPS track record.
 */
function trackSummary(points) {
    const totalTime = calculateTime();
    const totalDistance = calculateDistance();
    const pace = totalTime / 60 / totalDistance;

    return {
        time: totalTime,
        distance: totalDistance,
        pace 
    }

    function calculateDistance(){
        let result = 0;
        for(let i = 1; i < points.length; i++) {
            result += distance(points[i-1], points[i])
        }
        return result;
    }

    function distance(p1, p2) {
        return Math.hypot(p1.x - p2.x, p1.y - p2.y);
    }

    function calculateTime() {
        return 10;
    }

}

const points = () => [{ x: 10, y: 20 }, { x: 5, y: -20 }, { x: 7, y: -15 }, { x: 1, y: 0 }]
    
test.skip(function trackSummaryTest() {
    const summary = trackSummary(points());
    console.log(summary)
    test.testEqual(summary.distance, 61.851947970030764);
    test.testEqual(summary.time, 10);
});

// refactor


/**
 * calculates total distance for a GPS track record.
 */
function ref_trackSummary(points) {
    const totalTime = calculateTime();
    const pace = totalTime / 60 / totalDistanceFor(points);

    return {
        time: totalTime,
        distance: totalDistanceFor(points),
        pace 
    }

    function calculateTime() {
        return 10;
    }

}

// move calculateDistance to top level.
function totalDistanceFor(points){
    let result = 0;
    for(let i = 1; i < points.length; i++) {
        result += distance(points[i-1], points[i])
    }
    return result;
}

function distance(p1, p2) {
    return Math.hypot(p1.x - p2.x, p1.y - p2.y);
}

// tests

test.test(function ref_trackSummaryTest() {
    const summary = ref_trackSummary(points());
    console.log(summary)
    test.testEqual(summary.distance, 61.851947970030764);
    test.testEqual(summary.time, 10);
});

test.test(function totalDistanceForTest() {
    const totalDistance = totalDistanceFor(points());
    test.testEqual(totalDistance, 61.851947970030764);
})