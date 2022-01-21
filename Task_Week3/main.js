const d3 = require('d3')

let XRange = [0,1,2,3,4,5,6,7,8,9,10]

let XRangeN = XRange.map(function normal(number) {
    return number / 10 * 3.14 * 2
})

let Yarray = XRangeN.map(function calcul(number){
    return Math.cos(number)
})

let plotMatrix = Array()

for(let i=0; i < Yarray.length; i++) {
    plotMatrix.push(
        [XRangeN[i], Yarray[i]]
    )
}

d3.line()(plotMatrix)
