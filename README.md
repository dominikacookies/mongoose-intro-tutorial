# Mongoose Intro Tutorial

## Task

A pizza shop owner wants to create a database where he can save and retrieve customer and order information. Here are his exact requirements:

The db must have two models: user and order.

- the user model should store the user's email address
  - [ ] the email address should be converted to lowercase before being saved to the db
  - [ ] an email address should only be saved if it follows the typical email format
- the order model should have the following fields:
  - [ ] a reference to the user id of the user who has made the order
  - [ ] the date the order was made
    - [ ] this should have a default value of the date when the order is saved to the db
  - an array of the pizzas being ordered. Each pizza should have the following keys:
    - [ ] base (either thick or thin)
    - [ ] toppings (either pepperoni, cheese, peppers or ham)
    - [ ] quantity (min limit is 1, max limit is 100)
      - [ ] if the minimum limit is not met, the following error message should be returned: "You must order atleast one pizza"
  - [ ] notes (max length 200)

All fields are required.

Apart from creating the models, the owner would also like you to write logic for saving an order to the db as well as retrieving orders from the db.

## Useful Links

[Mongoose docs](https://mongoosejs.com/)

[Great overview article of Mongoose](https://blog.cloudboost.io/everything-you-need-to-know-about-mongoose-63fcf8564d52)

[Mongo GUI](https://robomongo.org/download)
