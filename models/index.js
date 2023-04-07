// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
// const { getEnabledCategories } = require('trace_events');

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product, {foreignKey:"category_id",onDelete: 'CASCADE',
onUpdate: 'CASCADE'}) 

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through:ProductTag, foreignKey:"product_id"})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through:ProductTag, foreignKey: "tag_id"})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
