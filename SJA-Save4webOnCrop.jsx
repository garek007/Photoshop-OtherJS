/*
This script is awesome.  Set it up in Photoshop CS+ as an event script for Crop.

That means you go to File, Scripts, Scripts Event Manager
Add a new event, type "Crop" (no quotations) in both boxes.  Then choose this script
Viola!  Activate the Scripts Events Manager by checking box in upper right, and whenever
you crop the script will automagically save out your image to My Documents, _PowerPointHolding.

This saves a ton of time when cropping many monotonous images for a website or PowerPoint presentation.
Since it uses Photoshop's built in Save for the Web function, it's best to set your crop tool sizing. 
Save for Web doesn't like large images...



*/
function saveForWebJPG(toWhere,file,qual,name){
toWhere = new File(toWhere+name+".jpg");

    var opts = new ExportOptionsSaveForWeb();
	opts.interlaced = false;
	opts.transparency = false;
	opts.quality = qual;
	opts.format = SaveDocumentType.JPEG;
	opts.optimized = true;
	opts.includeProfile = false;
	file.exportDocument(toWhere, ExportType.SAVEFORWEB, opts); 

}
function saveForWebPNG(toWhere,file,qual,name){
toWhere = new File(toWhere+name+".png");

    var opts = new ExportOptionsSaveForWeb();
	opts.interlaced = false;
	opts.png8 = false;
	opts.transparency = true;
	
	opts.format = SaveDocumentType.PNG;
	opts.optimized = true;
	opts.includeProfile = false;
	file.exportDocument(toWhere, ExportType.SAVEFORWEB, opts); 

}
function sharpenMe(amount,radius,thresh){
	var id1065 = charIDToTypeID( "UnsM" );
		var desc258 = new ActionDescriptor();
		var id1066 = charIDToTypeID( "Amnt" );
		var id1067 = charIDToTypeID( "#Prc" );
		desc258.putUnitDouble( id1066, id1067, amount );
		var id1068 = charIDToTypeID( "Rds " );
		var id1069 = charIDToTypeID( "#Pxl" );
		desc258.putUnitDouble( id1068, id1069, radius );
		var id1070 = charIDToTypeID( "Thsh" );
		desc258.putInteger( id1070, thresh );
	executeAction( id1065, desc258, DialogModes.NO );
}

function removeExt(myDoc){
  var str = myDoc.split(".");
  var ext = str[0]
    return ext;
}

function cleanText(name) { 
   if (name.indexOf('.') == -1) {  // no '.' 
     return name; 
   } 
   var m = name.match(/(.*)(\.[^\.]+)/); // split extension off from base 
   if (m == null) { 
     return name; 
   } 
   return m[1].replace(/\./g, '') + m[2]; 
}
function clearSlices(){
// =======================================================
var id72 = charIDToTypeID( "Dlt " );
    var desc12 = new ActionDescriptor();
    var id73 = charIDToTypeID( "null" );
        var ref4 = new ActionReference();
        var id74 = stringIDToTypeID( "slice" );
        var id75 = charIDToTypeID( "Ordn" );
        var id76 = charIDToTypeID( "Al  " );
        ref4.putEnumerated( id74, id75, id76 );
    desc12.putReference( id73, ref4 );
executeAction( id72, desc12, DialogModes.NO );


}
function sizeIt(whichImage,theWidth,theHeight){
  var curPrefs = preferences.rulerUnits;
  preferences.rulerUnits = Units.PIXELS;
  if (whichImage.width > whichImage.height)   //if it is landscape (if width is greater than height) do the first routine
    { whichImage.resizeImage(theWidth, null, 72, ResampleMethod.BICUBICSMOOTHER)
 	} 
  else   //if not, do the routine below
    { whichImage.resizeImage(null, theHeight, 72, ResampleMethod.BICUBICSMOOTHER)
	}
  preferences.rulerUnits = curPrefs;

}
function getExt(filename){//doesn't recognize if image name has multiple dots, fix this later
  var str = filename.split(".");
  
	if(str[1]){
	var ext = str[1].toLowerCase();
	}else{ext = null;}
	return ext;
}
function findFolder(fName){
	
return path;
}





var docRef = activeDocument;

//var docPath = docRef.fullName.parent.fsName;  //won't work when document is a pdf

var totalPixels = 786432;
var newName = removeExt(docRef.name);


//get width and height to add to file name
var width = docRef.width.toString();
var height = docRef.height.toString();

//then strip off the trailing "px"
var w = width.split(" ");
var h = height.split(" ");

//UNCOMMENT NEXT LINE TO ADD SIZE TO END OF FILNAME
newName = cleanText(newName+"-"+w[0]+"x"+h[0]);


var ext = getExt(docRef.name);





//sharpenMe(50,1,10);


//if there are slices, clear slices
//clearSlices();




var quality = 70;
var y = activeDocument.artLayers.length;

var x = activeDocument.artLayers[y-1];

var cPath = docRef.path+"/";


var cPathFold = new Folder("~/My Documents/_PowerPointHolding/");
if (cPathFold.exists == false) cPathFold.create();



if(x.visible && x.isBackgroundLayer){
saveForWebJPG(cPath,docRef,quality,newName);
}else{saveForWebPNG(cPath,docRef,70,newName);}

docRef.close(SaveOptions.DONOTSAVECHANGES);
