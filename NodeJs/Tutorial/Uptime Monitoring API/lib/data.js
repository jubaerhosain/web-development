/**
 * Title: data handling
 * Description: "database using file system"
 * Author: ABC
 * Date: 28/9/22
 */

// Dependencies
const fs = require("fs");
const path = require("path");

// Object -> Module Scaffolding
const database = {};

database.base_dir = path.join(__dirname, "../.data/");

// create a file and write data 
// callBack(error)
database.create = (directory, fileName, data, callBack) => {
    const filePath = path.join(database.base_dir, `${directory}/${fileName}.json`);
    console.log(filePath);

    // "wx" create file if dosen't exists, error if exists
    fs.open(filePath, "wx", (error1, fileDescriptor1) => {
        if (!error1 && fileDescriptor1) {
            const stringData = JSON.stringify(data);
            // write data to file
            fs.writeFile(fileDescriptor1, stringData, (error2) => {
                if (!error2) {
                    fs.close(fileDescriptor1, (error3) => {
                        if (!error3) {
                            // no error
                            callBack(false);
                        } else {
                            callBack(error3);
                        }
                    });
                } else {
                    callBack(error2);
                }
            });
        } else {
            callBack(error1);
        }
    });
};

// read from existing file
database.read = (directory, fileName, callBack) => {
    const filePath = path.join(database.base_dir, `${directory}/${fileName}.json`);
    console.log(filePath);

    fs.readFile(filePath, "utf-8", (error, data) => {
        callBack(error, data);
    });
};

// update existing file
database.update = (directory, fileName, data, callBack) => {
    const filePath = path.join(database.base_dir, `${directory}/${fileName}.json`);
    console.log(filePath);

    fs.open(filePath, "r+", (error1, fileDescriptor) => {
        if (!error1 && fileDescriptor) {
            const stringData = JSON.stringify(data);
            // file khali kora
            fs.ftruncate(fileDescriptor, (error2) => {
                if (!error2) {
                    // write to file
                    fs.writeFile(fileDescriptor, stringData, (error3) => {
                        if (!error3) {
                            fs.close(fileDescriptor, (error4) => {
                                if (!error4) {
                                    // no error occured
                                    callBack(false);
                                } else {
                                    callBack(error4);
                                }
                            });
                        } else {
                            callBack(error3);
                        }
                    });
                } else {
                    callBack(error2);
                }
            });
        } else {
            callBack(error1);
        }
    });
};

// delete existing file
database.delete = (directory, fileName, callBack) => {
    const filePath = path.join(database.base_dir, `${directory}/${fileName}.json`);
    console.log(filePath);

    fs.unlink(filePath, (error) => {
        if(!error) {
            // no error occured
            callBack(false);
        } else {
            console.log(error);
            callBack(error);
        }
    });
};


/**
 * @param {string} directory The directory name
 * @param {fucntion} fucntion(Error, fileNames[] String)  The callback function
 */
database.getFileNames = (directory, callBack) => {
    const filePath = path.join(database.base_dir, `${directory}/`);
    console.log(filePath);

    fs.readdir(filePath, (error, fileNames) => {
        if(!error && fileNames && fileNames.length > 0) {
            trimmedFileNames = [];
            fileNames.forEach(fileName => {
                trimmedFileNames.push(fileName.replace(".json", ""));
            })

            callBack(false, trimmedFileNames);
        } else {
            callBack("Error reading directory");
        }
    });
}

// export module
module.exports = database;
