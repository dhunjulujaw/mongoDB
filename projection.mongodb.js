use ("ecommerce");

/*
This is called projection.
It tells MongoDB which fields to show and which to hide.

name: 1 → show the name field

price: 1 → show the price field 
*/

db.products.find({},{
    name:1,
    price:1
})
//but here since you did not write _id=0 it will also show ids of each product
//so if you do not want the id then 

db.products.find({},{
    _id:0,
    name:1,
    price:1
}
)