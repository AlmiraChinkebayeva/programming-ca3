var foods = [
        {
            category: 'Starter',
            dishes: [
                {
                    id: 1,
                    name: 'Chicken Wings',
                    description: 'Chicken Wings',
                    vegetarian: false,
                    cost: 12
                },
                {
                    id: 2,
                    name: 'Broccoli',
                    description: 'Boiled Broccoli',
                    vegetarian: true,
                    cost: 5
                },
                {
                    id: 3,
                    name: 'Lollipops',
                    description: 'Lollipops',
                    vegetarian: true,
                    cost: 2
                },
                {
                    id: 4,
                    name: 'Bread',
                    description: 'Bread',
                    vegetarian: false,
                    cost: 6
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
                    cost: 25
                },
                {
                    id: 6,
                    name: 'Beef stake',
                    description: 'Beef stake',
                    vegetarian: false,
                    cost: 30
                },
                {
                    id: 7,
                    name: 'Egg Fried Rice',
                    description: 'Egg Fried Rice',
                    vegetarian: false,
                    cost: 15
                },
                {
                    id: 8,
                    name: 'Orecchiette Pasta with Broccoli Sauce',
                    description: 'a simple vegetarian pasta recipe with a flavorful Tuscan-style Broccoli Sauce! An easy and delicious vegetarian dinner recipe that highlights beautiful broccoli!',
                    vegetarian: true,
                    cost: 20
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
                    cost: 10
                },
                {
                    id: 10,
                    name: 'russian salad',
                    description: 'russian salad',
                    vegetarian: true,
                    cost: 15
                },
                {
                    id: 11,
                    name: 'Molten Lava',
                    description: 'Molten Lava Served With Hot Chocolate',
                    vegetarian: false,
                    cost: 30
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
                    cost: 5
                },
                {
                    id: 13,
                    name: 'Sprite',
                    description: 'russian salad',
                    vegetarian: false,
                    cost: 5
                },
                {
                    id: 14,
                    name: 'Mint Margarita',
                    description: 'Mint Margarita',
                    vegetarian: true,
                    cost: 10
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
                html += '€' + foods[i].dishes[j].cost;
                html += '</td>';
                html += '<td class="food-quantity">';
                html += '<input class="food-quantity-input" data-id="' + foods[i].dishes[j].id + '" data-cetegory="' + foods[i].category + '"';
                html += 'data-cost="' + foods[i].dishes[j].cost + '" data-vegetarian="' + foods[i].dishes[j].vegetarian + '" value="0" />';
                html += '</td>';
                html += '</tr>';
            }
            html += '</tbody>';
        }

        var table = document.getElementById('menu-table');
        table.innerHTML = html;
    },
    calculateBill = function () {

    };


populateRecipes();
