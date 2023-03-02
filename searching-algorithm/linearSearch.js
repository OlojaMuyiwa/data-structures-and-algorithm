// find position of an element in an array

function findIndex(arr, target)
{
  for (var i = 0; i < arr.length; i++)
  {
    if (arr[i] === target)
    {
      return i;
    }
  }
  return -1;
}

console.log(findIndex([12,4,34,46,32,435,23,654,24], 46));
console.log(findIndex(['lisa', 'kate', 'jonny', 'jake', 'paul'], 'kate'));
console.log(findIndex([32,23,2.23,435], 2.23));
