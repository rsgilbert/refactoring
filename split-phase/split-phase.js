const orderString = ''
const priceList = []
const orderData = orderString.split(/\s+/)
const productPrice = priceList[orderData[0].split('-')[1]]
const orderPrice = parseInt(orderData[1]) * productPrice;

// Refactor. Apply split phase
const orderRecord = parseOrder(order)
const orderPrice = price(orderRecord, priceList)

function parseOrder(str) {
    const values = str.split(/\s+/)
    return {
        productID: values[0].split('-')[1],
        quantity: parseInt(values[1])
    }
}

function price(order, priceList) {
    return order.quantity * priceList[order.productID]
}





