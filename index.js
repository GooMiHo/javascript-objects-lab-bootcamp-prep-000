var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, { [key]: value} );
  return recipes;
  return updateObjectWithKeyAndValue(recipes, key, value);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key value) {
  
}