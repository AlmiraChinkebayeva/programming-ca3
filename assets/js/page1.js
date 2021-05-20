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

        var table = document.getElementById('menu-table');
        table.innerHTML = html;
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
                    if (isVegetarian == 'true') {
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


populateRecipes();
