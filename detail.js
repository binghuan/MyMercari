let getParameterByName =
    function(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let getItemDetailInfo =
    function() {
  // fetch('http://127.0.0.1:5000/items')
  fetch(getHost() + '/1.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        if (DBG) console.log('getItems:', myJson);
        setupItemInfo(myJson)
      });
}

let setupItemInfo =
    function(data) {
  let pageTitle = document.getElementById('page_title');
  pageTitle.innerText = data.name;

  let itemName = document.getElementById('item_name');
  itemName.innerText = data.name;

  let itemDescription = document.getElementById('item_description');
  itemDescription.innerText = data.description;

  let likeCount = document.getElementById('like_count');
  likeCount.innerText = data.like_count;

  let commentCount = document.getElementById('comment_count');
  commentCount.innerText = data.comment_count;

  let itemPrice = document.getElementById('item_price');
  itemPrice.innerHTML = '&#165;' + data.price;

  let itemShippingFee = document.getElementById('item_shipping_fee');
  itemShippingFee.innerText = data.shippingFee;
}

    window.addEventListener('load', function(event) {
      if (DBG) console.log('All resources finished loading!');

      document.getElementById('button_back').onclick =
          function() {
        window.location.href = 'index.html';
      }

      getItemDetailInfo();
    });