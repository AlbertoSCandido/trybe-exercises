n = 23;
let divisors = 0;

for (let index = 1; index <= n; index += 1) {
    if (n % index === 0) {
        divisors += 1;
    }
}

if (divisors === 2) {
    console.log(n , 'é primo');
} else {
    console.log(n , 'não é primo');
}