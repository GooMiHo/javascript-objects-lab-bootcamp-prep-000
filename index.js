var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value} );
  return recipes;
  return updateObjectWithKeyAndValue(recipes, key, value);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return destructivelyUpdateObjectWithKeyAndValue(recipes, key, value);
}
