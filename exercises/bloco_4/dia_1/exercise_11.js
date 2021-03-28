let salarioBruto = 3000;
let salarioAbatidoInss;
let salarioLiquido;
let inss;
let irVariavel;
let irFixo;

if (salarioBruto <= 1556.94) {
    inss = 8 / 100;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    inss = 9 / 100;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    inss = 11 / 100;
} else if (salarioBruto >= 5189.82) {
    inss = 570.88
}

salarioAbatidoInss = salarioBruto - (salarioBruto * inss);

if (salarioAbatidoInss <= 1903.98) {
    irVariavel = 0;
    irFixo = 0;
} else if (salarioAbatidoInss >= 1903.99  && salarioAbatidoInss <= 2826.65){
    irVariavel = 7.5 / 100;
    irFixo = 142,80;
} else if (salarioAbatidoInss >= 2826.66 && salarioAbatidoInss <= 3751.05){
    irVariavel = 15 / 100;
    irFixo = 354.80;
} else if (salarioAbatidoInss >= 3751.06 && salarioAbatidoInss <= 4664.68) {
    irVariavel = 22.5 / 100;
    irFixo = 869.36;
} else if (salarioAbatidoInss >= 4664,68) {
    inss = 570,88
}

salarioLiquido = salarioAbatidoInss - ((salarioAbatidoInss * irVariavel) - irFixo);

console.log(salarioLiquido);
