

let getCategories =
  function () {
    if (DBG) console.log('>> getCategories');
    // fetch('http://127.0.0.1:5000/categories')
    fetch(getHost() + 'categories.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        if (DBG) console.log('getCategories:', myJson);
        setupCategory(myJson.data);
      });
  }

let getItems =
  function () {
    //fetch('http://127.0.0.1:5000/items')
    fetch(getHost() + 'items.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        if (DBG) console.log('getItems:', myJson);
        setupItemList(myJson.data)
      });
  }

let setupItemList = function (data) {
  if (DBG) console.log('>> setupItemList: ', data);
  

  for (let i = 0; i < data.length; i++) {
    let itemInfo = data[i];
    let item = document.getElementById('item_template').cloneNode(true);
    item.style.display = "inline-block";
    let colums = item.getElementsByTagName("span");
    colums[0].innerText = itemInfo.name;
    colums[1].innerText = itemInfo.shippingFee;
    colums[2].innerText = "N/A";
    colums[3].innerText = itemInfo.price;
    colums[4].innerText = itemInfo.like_count;

    item.setAttribute('id', itemInfo.id);
    item.onclick = function () { showItemDetail(itemInfo.id); };

    itemList.appendChild(item);
  }

}

let setupCategory =
  function (data) {
    if (DBG) console.log('>> setupCategory: ', data);
    categorySelector = document.getElementById('category_selector');
    for (let i = 0; i < data.length; i++) {
      let tile = document.getElementById('category_template').cloneNode(true);
      tile.getElementsByTagName('span')[0].innerText = data[i].name;
      tile.style =
        'display: inline; text-align: center;margin-left: 15px; margin-right: 15px;';
      categorySelector.appendChild(tile);
    }
  }

let showItemDetail = function (id) {
  if (DBG) console.log(">> showItemDetail:", id);
  window.location.href = "detail.html?id=" + id;
}

let categorySelector = null;
let itemList = null;
let buttonScrollToTopView = null;
let button2Top = null;

window.addEventListener('load', function (event) {
  if (DBG) console.log('All resources finished loading!');

  
  itemList = document.getElementById('item_list');
  buttonScrollToTopView = document.getElementById('button_to_top_area');
  button2Top = document.getElementById("button_to_top");
  button2Top.onclick = function() {
    window.scrollTo(0,0);
  }
  buttonScrollToTopView.style.display = "none";

  getCategories();
  getItems();
});

window.onscroll = function (e) {
  if(document.documentElement.scrollTop > 0 ) {
    buttonScrollToTopView.style.display = "inline-block";
  } else {
    buttonScrollToTopView.style.display = "none";
  }
} 
