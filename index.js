import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {
    message:"Type the url : ",
    name:"url"
    }
  ])
  .then((answers) => {
     const url = answers.url;
     
     var qr_svg = qr.image("url");
     qr_svg.pipe(fs.createWriteStream('Qr-code.png'));

     fs.writeFile("url.txt",url,(err) =>{
         if(err) throw err;
         console.log("file saved");
     }
     );

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });