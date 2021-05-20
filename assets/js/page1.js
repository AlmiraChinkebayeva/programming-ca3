var billIds = {
        starterBillId: 'starters-bill',
        mainBillId: 'main-bill',
        drinksBillId: 'drinks-bill',
        desertsBillId: 'desert-bill',
        vegetarianBillId: 'vegetarian-bill',
        nonVegetarianBillId: 'non-vegetarian-bill',
        totalBillId: 'total-bill',
    },
    foods = [
        {
            category: 'Starters',
            dishes: [
                {
                    id: 1,
                    name: 'Chicken Wings',
                    description: 'Chicken Wings',
                    vegetarian: false,
                    price: 12
                },
                {
                    id: 2,
                    name: 'Broccoli',
                    description: 'Boiled Broccoli',
                    vegetarian: true,
                    price: 5
                },
                {
                    id: 3,
                    name: 'Lollipops',
                    description: 'Lollipops',
                    vegetarian: true,
                    price: 2
                },
                {
                    id: 4,
                    name: 'Bread',
                    description: 'Bread',
                    vegetarian: false,
                    price: 6
                }
            ]
        },
        {
            category: 'Main',
            dishes: [
                {
                    id: 5,
                    name: 'Grill Burger',
                    description: 'Double Stake Grill Burger',
                    vegetarian: false,
                    price: 25
                },
                {
                    id: 6,
                    name: 'Beef stake',
                    description: 'Beef stake',
                    vegetarian: false,
                    price: 30
                },
                {
                    id: 7,
                    name: 'Egg Fried Rice',
                    description: 'Egg Fried Rice',
                    vegetarian: false,
                    price: 15
                },
                {
                    id: 8,
                    name: 'Orecchiette Pasta with Broccoli Sauce',
                    description: 'a simple vegetarian pasta recipe with a flavorful Tuscan-style Broccoli Sauce! An easy and delicious vegetarian dinner recipe that highlights beautiful broccoli!',
                    vegetarian: true,
                    price: 20
                },
            ]
        },
        {
            category: 'Deserts',
            dishes: [
                {
                    id: 9,
                    name: 'Ice Cream',
                    description: 'Vanila Ice Cream',
                    vegetarian: false,
                    price: 10
                },
                {
                    id: 10,
                    name: 'russian salad',
                    description: 'russian salad',
                    vegetarian: true,
                    price: 15
                },
                {
                    id: 11,
                    name: 'Molten Lava',
                    description: 'Molten Lava Served With Hot Chocolate',
                    vegetarian: false,
                    price: 30
                }
            ]
        },
        {
            category: 'Drinks',
            dishes: [
                {
                    id: 12,
                    name: 'Coca Cola',
                    description: 'Vanila Ice Cream',
                    vegetarian: false,
                    price: 5
                },
                {
                    id: 13,
                    name: 'Sprite',
                    description: 'russian salad',
                    vegetarian: false,
                    price: 5
                },
                {
                    id: 14,
                    name: 'Mint Margarita',
                    description: 'Mint Margarita',
                    vegetarian: true,
                    price: 10
                }
            ]
        }
    ],
    validatePassword = function () {
        var password = document.getElementById('validator-input').value;
        if (password.length > 8 && password.match(/[a-zA-Z0-9+]/g)) {
            document.getElementById('validator-success').innerHTML = 'Password is in Correct Format';
            document.getElementById('validator-errors').innerHTML = '';
        } else {
            document.getElementById('validator-success').innerHTML = '';
            document.getElementById('validator-errors').innerHTML = '*Invalid format, please reenter';
        }
        return false;
    },
    fetchCustomersData = function () {
        var apiUrl = 'https://randomuser.me/api?results=5';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", apiUrl, false); // false for synchronous request
        xmlHttp.send(null);
        response = JSON.parse(xmlHttp.responseText);
        var html = '';
        if (response && response.results && response.results.length) {
            for (var i = 0; i < response.results.length; i++) {
                html += '<div class="inner-container" >';

                html += '<h2 class="sub-heading">Name: ';
                var customerName = response.results[i].name.title + ' ' + response.results[i].name.first + ' ' + response.results[i].name.last;
                html += customerName;
                html += '</h2>';

                html += '<div class="customer-data">';
                html += '<img class="customer-image" src="' + response.results[i].picture.thumbnail + '" alt="' + customerName + '"/>';
                html += '</div>';

                html += '<div class="customer-data">';
                html += 'Phone Number: ';
                html += response.results[i].phone;
                html += '</div>';

                html += '<div class="customer-data">';
                html += 'DOB ';
                html += response.results[i].dob.date;
                html += '</div>';

                html += '<div class="customer-data">';
                html += 'Age ';
                html += response.results[i].dob.age;
                html += '</div>';

                html += '<div class="customer-data">';
                html += 'Email ID: ';
                html += response.results[i].email;
                html += '</div>';

                html += '<div class="customer-data">';
                html += 'Gender: ';
                html += response.results[i].gender;
                html += '</div>';

                html += '<div class="customer-data">';
                html += 'City: ';
                html += response.results[i].city;
                html += '</div>';

                html += '<div class="customer-data">';
                html += 'Country: ';
                html += response.results[i].country;
                html += '</div>';

                html += '<div class="customer-data">';
                html += 'PostCode: ';
                html += response.results[i].postcode;
                html += '</div>';

                html += '</div>';
            }
        }
        document.getElementById('customers-container').innerHTML = html;

    },
    populateRecipes = function () {
        var html = '';
        for (var i = 0; i < foods.length; i++) {

            html += '<thead>';
            html += '<tr>';
            html += '<th>';
            html += '<h2 class="sub-heading">';
            html += foods[i].category;
            html += '</h2>';
            html += '</th>';
            html += '<th><h2 class="sub-heading">Price</h2></th>';
            html += '<th><h2 class="sub-heading">Quantity</h2></th>';
            html += '</tr>';
            html += '</thead>';
            html += '<tbody>';
            for (var j = 0; j < foods[i].dishes.length; j++) {
                html += '<tr>';
                html += '<th class="food-name">';
                html += foods[i].dishes[j].name;
                if (foods[i].dishes[j].vegetarian) {
                    html += ' (vegetarian)';
                }
                html += '</th>';
                html += '<td class="food-price">';
                html += '€' + foods[i].dishes[j].price;
                html += '</td>';
                html += '<td class="food-quantity">';
                html += '<input class="food-quantity-input" data-id="' + foods[i].dishes[j].id + '" data-category="' + foods[i].category + '"';
                html += 'data-price="' + foods[i].dishes[j].price + '" data-vegetarian="' + foods[i].dishes[j].vegetarian + '" value="0" />';
                html += '</td>';
                html += '</tr>';
            }
            html += '</tbody>';
        }

        document.getElementById('menu-table').innerHTML = html;
    },
    calculateBill = function () {
        var dishes = document.getElementsByClassName("food-quantity-input"),
            price = 0,
            quantity = 0,
            category = 0,
            isVegetarian = false,
            totalBill = 0,
            startersBill = 0,
            mainBill = 0,
            desertsBill = 0,
            drinksBill = 0,
            vegetarianBill = 0,
            nonVegetarianBill = 0;

        for (var i = 0; i < dishes.length; i++) {
            quantity = dishes[i].value;
            if (quantity > 0) {
                price = dishes[i].getAttribute('data-price');
                isVegetarian = dishes[i].getAttribute('data-vegetarian');
                category = dishes[i].getAttribute('data-category');
                totalBill += price * quantity;
                switch (category) {
                    case 'Main':
                        mainBill += price * quantity;
                        break;
                    case 'Deserts':
                        mainBill += price * quantity;
                        break;
                    case 'Starters':
                        startersBill += price * quantity;
                        break;
                    case 'Drinks':
                        drinksBill += price * quantity;
                        break;
                }
                if (category === 'Main' || category === 'Starters') {
                    if (isVegetarian === 'true') {
                        vegetarianBill += price * quantity;
                    } else {
                        nonVegetarianBill += price * quantity;
                    }
                }


            }
        }
        document.getElementById(billIds.totalBillId).innerHTML = totalBill;
        document.getElementById(billIds.starterBillId).innerHTML = startersBill;
        document.getElementById(billIds.mainBillId).innerHTML = mainBill;
        document.getElementById(billIds.desertsBillId).innerHTML = desertsBill;
        document.getElementById(billIds.drinksBillId).innerHTML = drinksBill;
        document.getElementById(billIds.vegetarianBillId).innerHTML = vegetarianBill;
        document.getElementById(billIds.nonVegetarianBillId).innerHTML = nonVegetarianBill;
    };

fetchCustomersData();
populateRecipes();
