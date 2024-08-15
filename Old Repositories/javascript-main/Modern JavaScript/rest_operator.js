function fun() {
    console.log(arguments);
}

function fun1(...params) {
    console.log(params);
}

fun(1, 2, 3, 4, 5);
fun1(1, 2, 3, 4, 5);
