var arr = [1, 2, 3];

arr.length; // 3

Delete arr[1]; // removes "2" since it is a zero based array

Arr[1]; // is undefined

Arr.length; // is still 3 because there is a HOLE in the array (sparse array)
// to delete the hole, you need to use SPLICE and the array will adjust
// you can't delete a variable defined with VAR (exept in console)
