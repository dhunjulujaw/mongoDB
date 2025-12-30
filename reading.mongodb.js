use("ecommerce");

db.products.find();
//this simply means from the current database , go to the products collections and find out all the documents 

//but if you want to find out a specific product then 

db.products.find({"name":"Wireless Mouse"});

//we can also filter out based on categories

//like for eg you want to know about only Electronics ITEMS then :
db.products.find({category:"Electronics"})


db.products.find({price:799})