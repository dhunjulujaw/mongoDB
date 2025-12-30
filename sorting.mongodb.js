use ("ecommerce");

db.products.find().sort({price:-1})
/*
here it sorts out all the producs based on price
and here price:-1 means it sorts based on decending order

if price:1 then sorting in ascending order
*/