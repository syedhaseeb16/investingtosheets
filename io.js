const { GoogleSpreadsheet } = require('google-spreadsheet');

// (async function() {
  module.exports.ios = async function ios(name,time,dataJson,to,iteration) {
    let row=0;
    if(iteration==0){
      row=3;
    }else if(iteration==1){
      row=19;
    }else if(iteration==2){
      row=37;
    }else if(iteration==3){
      row=57;
    }else if(iteration==4){
      row=77;
    }else if(iteration==5){
      row=107;
    }else if(iteration==6){
      row=127;
    }else if(iteration==7){
      row=147;
    }else if(iteration==8){
      row=167;
    }else if(iteration==9){
      row=187;
    }else if(iteration==9){
      row=207;
    }
    const doc = new GoogleSpreadsheet('1ST9n7S4fDtrmenuhJHTMCcc4uOTmI-GTq-7mdZsRF10');
    const creds = require('./creds.json'); // the file saved above
    await doc.useServiceAccountAuth(creds);

    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);

    var sheet = doc.sheetsByTitle['paste1']; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
    console.log(sheet.title);
    if(iteration==0 && to=="t1"){
      await sheet.delete();
      sheet = await doc.addSheet({ title: 'paste1' });
      sheet = doc.sheetsByTitle['paste1']; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

    }

    await sheet.loadCells('A1:z1000');
    // console.log(dataJson[1]);
    // // console.log(dataJson[1]);
    // console.log(dataJson[1][0]);
    // console.log(dataJson[1][0].length);
    // console.log(dataJson.rows);
    
    
    

    if(to=="t1"){
      //writing header 
      sheet.getCell(row, (2)).value = name;
      sheet.getCell(row, (3)).value = time;
      sheet.getCell(row, (2)).textFormat = { bold: true }
      sheet.getCell(row, (3)).textFormat = { bold: true }

      for(let i=0;i<dataJson[0][1].length;i++)
        {
          sheet.getCell((row+1), (i+2)).value = dataJson[0][1][i];
        }
      //writing rows
      for(let i=1;i<dataJson.length;i++)
        for(let j=0;j<dataJson[1][0].length;j++)
        {
          // console.log(dataJson[i][0][j])
          sheet.getCell((row+1+i), (j+2)).value = dataJson[i][0][j];
        }
    }

    if(to=="t2"){
      //writing header 
      sheet.getCell(row, (11)).value = name;
      sheet.getCell(row, (12)).value = time;
      sheet.getCell(row, (11)).textFormat = { bold: true }
      sheet.getCell(row, (12)).textFormat = { bold: true }
      for(let i=0;i<dataJson[0][1].length;i++)
        {
          sheet.getCell((row+1), (i+11)).value = dataJson[0][1][i];
        }
      //writing rows
      for(let i=1;i<dataJson.length;i++)
        for(let j=0;j<dataJson[1][0].length;j++)
        {
          // console.log(dataJson[i][0][j])
          sheet.getCell(((row+1)+i), (j+11)).value = dataJson[i][0][j];
        }
    }

    if(to=="t3"){
      //writing header 
      sheet.getCell(row, (16)).value = name;
      sheet.getCell(row, (17)).value = time;
      sheet.getCell(row, (16)).textFormat = { bold: true }
      sheet.getCell(row, (17)).textFormat = { bold: true }
      for(let i=0;i<dataJson[0][1].length;i++)
        {
          sheet.getCell((row+1), (i+16)).value = dataJson[0][1][i];
        }
      //writing rows
      for(let i=1;i<dataJson.length;i++)
        for(let j=0;j<dataJson[1][0].length;j++)
        {
          // console.log(dataJson[i][0][j])
          sheet.getCell((row+1+i), (j+16)).value = dataJson[i][0][j];
        }
    }

    await sheet.saveUpdatedCells(); // save all updates in one call

  }
  // }());
