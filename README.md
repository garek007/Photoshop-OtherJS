# Photoshop
A place for all of my photoshop workflow and efficiency scripts


# PS-Save4Web-onCrop
This is a handy event script I use to speed up cropping and sizing of photos.

I wrote this because I often have to crop several images at a time, and it can be time consuming and tedious to constantly go to File -> Save for Web after every crop. This script will save the image automatically after you crop it. It makes cropping images to a certain dimension really easy. It saves the cropped file right in the same directory as your original image, and appends the file dimensions to the filename.

First you need to set the script up to run on crop. Download and save the script as a .jsx file. It doesn't matter where you save it.
Open Photoshop and go to File -> Scripts -> Scripts Event Manager
![Script Events Manager](https://cloud.githubusercontent.com/assets/15202953/10676271/f4ae868a-78b9-11e5-8ba7-ad32882ffb85.png)

You will need to add the Crop event first. To do this, just go to the Photoshop Event drop down and select "Add an Event". Then in the box type Crop in bot the Event Name and Descriptive Label
![Add Event Box](https://cloud.githubusercontent.com/assets/15202953/10676359/831be2d2-78ba-11e5-88df-61ba8475e160.png)

Finally, select the script you want to run on crop. Go to Browse and select the script you just saved. 
![Browse for script](https://cloud.githubusercontent.com/assets/15202953/10676386/9ee761a8-78ba-11e5-933e-1b11b1ed2f3f.png)

That's it!
