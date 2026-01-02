use('ecommerce');

db.products.updateOne(

    {name:"Wireless Mouse"},
    {$set:{price:22299}}

)


//but if you want to update many at once then 

db.products.updateMany(
    {category:"Electronics"},
    {$inc:{stock:100}}
)//it simply increases the stock of Electornics by 10 


//now if you want to add something in an array then you simply have to 

db.products.updateOne(
    {name:"Wireless Mouse"},
    {$push:{tags:"Mouse"}}
)