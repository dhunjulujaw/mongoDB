use("ecommerce");
db.products.find({
    $or:[
        {category:"Electronics"},
        {stock:{$lt:50}}
    ]
})
/*
For each product, MongoDB asks:

Is category Electronics?
OR

Is stock less than 50?

If YES to at least one → show it
If NO to both → ignore it
*/