// Extract function

function printOwing(invoice){
    let outstanding = 53;
    // print details
    console.log('Outstanding', outstanding);
    console.log('name', invoice.customer);
}


// Exercise extract function
function refPrintOwing(invoice) {
    let outstanding = 53;
    printDetails(outstanding);

    function printDetails(outstanding) {
        console.log('Outstanding', outstanding);
        console.log('name', invoice.customer);
    }
}

module.exports = {
    printOwing,
    refPrintOwing
}

Clock.today