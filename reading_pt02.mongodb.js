//using Comparision operators 
use("ecommerce");
db.products.find({price:{$gt:699}})

//similarly i can also use others like greater than ... and less than ...

db.products.find({price: {$gte:100,$lte:90000}})