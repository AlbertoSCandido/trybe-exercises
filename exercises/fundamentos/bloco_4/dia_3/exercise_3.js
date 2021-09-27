// 3- Agora inverta o lado do triângulo. Por exemplo:
// n = 5

//     *
//    **
//   ***
//  ****
// *****

n = 5;


for (let line = n; line >= 0; line -= 1) {
    let spc = ''
    for (let content = 0; content < n; content += 1) {
        if (content >= line) {
            spc += '*';
        } else {
            spc += ' ';
        }
        
    }
    console.log(spc);
}