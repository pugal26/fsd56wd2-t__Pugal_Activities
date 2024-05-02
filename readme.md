# Delete Products with Specific Price Value - MongoDB Task

## Description
This task involves deleting products from a MongoDB collection based on a specific product price value.

## Requirements
- MongoDB installed on your system
- Basic knowledge of MongoDB commands

## Steps to Execute
1. Open your terminal or command prompt.
2. Start MongoDB by running the MongoDB server.
3. Connect to your MongoDB database.
4. Use the `deleteMany()` method to delete the products with the specified price value.

## Instructions
1. Open your terminal.
2. Start MongoDB by running the `mongod` command.
3. Connect to your MongoDB database by running the `mongo` command.
4. Use the following MongoDB query to delete the products with the price value of 28.00:

```mongodb
db.products.deleteMany({
    "product_price": 28.00
})
