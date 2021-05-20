dishes = [
    {
        id: 1,
        name: 'Chicken Wings',
        description: 'Chicken Wings',
        category: 'Starters',
        vegetarian: false,
        price: 12
    },
    {
        id: 2,
        name: 'Broccoli',
        description: 'Boiled Broccoli',
        category: 'Starters',
        vegetarian: true,
        price: 5
    },
    {
        id: 3,
        name: 'Lollipops',
        description: 'Lollipops',
        category: 'Starters',
        vegetarian: true,
        price: 2
    },
    {
        id: 4,
        name: 'Bread',
        description: 'Bread',
        category: 'Starters',
        vegetarian: false,
        price: 6
    },
    {
        id: 5,
        name: 'Grill Burger',
        description: 'Double Stake Grill Burger',
        category: 'Main',
        vegetarian: false,
        price: 25
    },
    {
        id: 6,
        name: 'Beef stake',
        description: 'Beef stake',
        category: 'Main',
        vegetarian: false,
        price: 30
    },
    {
        id: 7,
        name: 'Egg Fried Rice',
        description: 'Egg Fried Rice',
        category: 'Main',
        vegetarian: false,
        price: 15
    },
    {
        id: 8,
        name: 'Orecchiette Pasta with Broccoli Sauce',
        description: 'a simple vegetarian pasta recipe with a flavorful Tuscan-style Broccoli Sauce! An easy and delicious vegetarian dinner recipe that highlights beautiful broccoli!',
        category: 'Main',
        vegetarian: true,
        price: 20
    },
    {
        id: 9,
        name: 'Ice Cream',
        description: 'Vanila Ice Cream',
        vegetarian: false,
        category: 'Deserts',
        price: 10
    },
    {
        id: 10,
        name: 'russian salad',
        description: 'russian salad',
        vegetarian: true,
        category: 'Deserts',
        price: 15
    },
    {
        id: 11,
        name: 'Molten Lava',
        description: 'Molten Lava Served With Hot Chocolate',
        vegetarian: false,
        category: 'Deserts',
        price: 30
    },
    {
        id: 12,
        name: 'Coca Cola',
        description: 'Vanila Ice Cream',
        category: 'Drinks',
        vegetarian: false,
        price: 5
    },
    {
        id: 13,
        name: 'Sprite',
        description: 'russian salad',
        category: 'Drinks',
        vegetarian: false,
        price: 5
    },
    {
        id: 14,
        name: 'Mint Margarita',
        description: 'Mint Margarita',
        category: 'Drinks',
        vegetarian: true,
        price: 10
    }
];
$(document).ready(function () {
    populdateData();
    $('#dish-table').DataTable();

});

function populdateData() {
    var html = '';
    for (var i = 0; i < dishes.length; i++) {
        html += getDishRow(dishes[i]);
    }
    $('#dish-table-data').html(html);
}

function getDishRow(dish) {
    var html = '';
    html += '<tr>';
    html += '<td>' + dish.id + '</td>';
    html += '<td>' + dish.name + '</td>';
    html += '<td>' + dish.category + '</td>';
    html += '<td>' + (dish.vegetarian ? 'YES' : 'NO') + '</td>';
    html += '<td>€' + dish.price + '</td>';
    html += '</tr>';
    return html;
}

$('#new-dish-form').submit(function (e) {
    e.preventDefault();

    var table = $('#dish-table').DataTable();
    table.destroy();
    var id = dishes.length + 1,
        name = $('#dish-name').val(),
        description = $('#dish-description').val(),
        category = $('#dish-category').val(),
        price = $('#dish-price').val(),
        vegetarian = $('#dish-vegetarian').prop('checked');
    var newDish = {
        id: id,
        name: name,
        description: description,
        category: category,
        price: price,
        vegetarian: vegetarian
    };
    dishes.push(newDish);

    var html = getDishRow(newDish);
    $('#dish-table-data').append(html);
    swal({
        icon: "success",
        title: "Dish Added Successfully!",
    });
    $('#dish-table').DataTable();

});
