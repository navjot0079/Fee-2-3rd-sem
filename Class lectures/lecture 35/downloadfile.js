function downloadFile(url, downloadCallback) {
    console.log("Started Downloading");
    setTimeout(() => {
        const fileName = url.split("/").pop();
        downloadCallback(fileName);
    }, 2000);
}


function compressFile(path, compressCallback) {
    console.log("File compressing began");
    setTimeout(() => {
        const compressedFile = path.split(".")[0] + ".zip";
        compressCallback(compressedFile);
    }, 2000); 
}


function uploadFile(compressedFile, uploadCallback) {
    console.log("Uploading file...");
    setTimeout(() => {
        console.log("Uploaded successfully");
        uploadCallback(compressedFile);
    }, 2000); 
}


function main() {
    const url = "https://www.anyz.com/abc.mp3";

    downloadFile(url, (downloadedFile) => {
        console.log(`Downloaded: ${downloadedFile}`);
        
        
        compressFile(downloadedFile, (compressedFile) => {
            console.log(`Compressed to: ${compressedFile}`);
            
        
            uploadFile(compressedFile, (uploadedFile) => {
                console.log(`Uploaded: ${uploadedFile}`);
            });
        });
    });
}


main();