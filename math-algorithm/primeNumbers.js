// prime numbers
// prime number is a number 

function primeNumbers(n)
{
  if(n < 2)
  {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if(n % i === 0)
    {
      return false;
    }
  }
  return true
}

console.log(primeNumbers(5));
console.log(primeNumbers(2));
console.log(primeNumbers(6));
