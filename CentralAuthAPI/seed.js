const { Prisma } = require('./generated/prisma-client');
xlsxj = require("xlsx-to-json");
const prisma = new Prisma({
    endpoint: process.env.PRISMA_ENDPOINT
    
})



//read excel sheet and convert it to json


  xlsxj({
    input: "./files/clientsheet.xlsx", 
    output: "./files/seed.json",
    sheet: "ClientInfo"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });

const jsonData = require('./files/seed.json')



const seedClients = () => {
    // adding clients information to the clienttable
    Promise.all(
      jsonData.map(async continentItem => {
        const { name, applicationUrl, clientId, clientName } = continentItem;
        const response = await prisma.createclient({
          
            name,
            applicationUrl,
            clientId,
            clientName
          }
        );
        return response;
      })
    );
  };
  
  seedClients();

