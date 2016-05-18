function collect_same_elements(collection_a, collection_b) {

  var result = buildResult(collection_a, collection_b);

  return result;
}

function isExist(a, collection_b) {
  for (var i = 0; i < collection_b.length; i++) {

    if (a === collection_b[i]) {
      return true;
    }
  }

  return false;
}

function buildResult(collection_a, collection_b) {
  var result = [];

  for (var i = 0; i < collection_a.length; i++) {
    
    if (isExist(collection_a[i], collection_b)) {
      result.push(collection_a[i]);
    }
  }

  return result;
}

module.exports = collect_same_elements;
