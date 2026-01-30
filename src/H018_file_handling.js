import {fileURLToPath } from 'node:url';
import {join,dirname } from 'node:path';

//To get current file location
const meta_url = import.meta.url
console.log(`meta_url: ${meta_url}`);

//To reprase current file location
const currentlocation = fileURLToPath(meta_url)
console.log(`currentlocation: ${currentlocation}`);

//To get directory name
const current_directory = dirname(currentlocation)
console.log(`current_directory: ${current_directory}`);


//To get new file location
const fileToUpload = join(current_directory, 'file_to_upload.txt');
console.log(`fileToUpload: ${fileToUpload}`);
