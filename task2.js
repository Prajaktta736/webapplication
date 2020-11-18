// create a web service for image processing
var webService = new Vintasoft.Shared.WebServiceControllerJS("/api/Processing");

// Image is inverted successfully.
function invertCommand_success(answer) {
    // get information about processed image
    var fileUrl = answer.imageInfo.imageId;
    var pageIndex = answer.imageInfo.pageIndex;
    // create new image source and image
    var source = new Vintasoft.Shared.WebImageSourceJS(fileUrl);
    var image = new Vintasoft.Shared.WebImageJS(source, pageIndex);
    // set processed image as the first image in image viewer
    imageViewer1.get_Images().set(0, image);
}

// Image processing command is failed.
function invertCommand_error(answer) {
    if (answer.errorMessage)
        alert(answer.errorMessage);
}

// create an image processing command
var invertCommand = new Vintasoft.Imaging.ImageProcessing.WebInvertCommandJS();
// get reference to the first image in image viewer
var image = imageViewer1.get_Images().get_Image(0);
// execute the command on image using the web service
invertCommand.execute(image, invertCommand_success, invertCommand_error, webService);
               