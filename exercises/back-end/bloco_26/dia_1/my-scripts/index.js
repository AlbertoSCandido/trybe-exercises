const fs = require("fs");
const { exec } = require("child_process");
const readline = require('readline-sync');


function getUserScript() {
  const script = readline.question("Qual script você quer executar?\n");

  exec(`npm run ${script}`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

function showScripts() {
  const scripts = JSON.parse(fs.readFileSync('./package.json', 'utf-8')).scripts
  const strScripts = Object.keys(scripts).join(', ')
  
  console.log(`Scripts disponíveis: ${strScripts}`);
  getUserScript();
}

showScripts();
