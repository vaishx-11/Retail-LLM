const { exec } = require('child_process');
const Auser = require('../model/Auser');
const fs = require('fs');
const path = require('path');

exports.getCSVDocument = async (req, res) => {
  try {
    const user = await Auser.findById(req.params.userId);
    if (!user || !user.csvDocument || !user.csvDocument.data) {
      return res.status(404).json({ message: "No CSV found for this user." });
    }

    const csvPath = path.join(__dirname, '../uploads/supermarket_sales.csv');
    const outputDir = path.join(__dirname, '../uploads');
    const processScriptPath = path.join(__dirname, '../scripts/process_data.py');

    // Log CSV data information
    console.log(`CSV data type: ${typeof user.csvDocument.data}`);
    console.log(`CSV data size: ${user.csvDocument.data.byteLength}`);

    // Save the CSV document to the filesystem
    const buffer = Buffer.from(user.csvDocument.data);
    fs.writeFile(csvPath, buffer, (err) => {
      if (err) {
        console.error(`Error writing CSV file: ${err}`);
        return res.status(500).send("Error saving CSV file");
      }

      // Execute the Python script to process the CSV and generate images
      exec(`python ${processScriptPath} ${csvPath} ${outputDir}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          console.error(`stderr: ${stderr}`);
          console.error(`stdout: ${stdout}`);
          return res.status(500).send(`Error processing CSV: ${stderr}`);
        }
        console.log(`stdout: ${stdout}`);
        res.send("Processing complete, images generated.");
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
