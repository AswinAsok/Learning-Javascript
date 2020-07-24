// D = (L - S)/L * 100

var selling_price = 199
var listing_price = 799

var discount_percent = (listing_price-selling_price)/listing_price * 100

console.log("Dicount = "+ discount_percent + " %")

display_Discount_percentage = Math.round(discount_percent)

console.log("Dicount = "+ display_Discount_percentage + " %")


var result = listing_price>selling_price
console.log(typeof listing_price)