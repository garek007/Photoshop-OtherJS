

function resolveColorModes(img){
  if(img.mode == DocumentMode.BITMAP) {

    img.changeMode(ChangeMode.GRAYSCALE); 

  } else if (img.mode == DocumentMode.CMYK){
    img.changeMode(ChangeMode.RGB);
  } else if (img.mode == DocumentMode.INDEXEDCOLOR){
    img.changeMode(ChangeMode.RGB);
  }

}
function saveForWeb(toWhere,file,qual){
    var opts = new ExportOptionsSaveForWeb();
	opts.interlaced = false;
	opts.transparency = false;
	opts.quality = qual;
	opts.format = SaveDocumentType.JPEG;
	opts.optimized = true;
	opts.includeProfile = false;
	file.exportDocument(toWhere, ExportType.SAVEFORWEB, opts); 

}
function savePSD(dRef,dPath){

	      psdFile = new File(dPath + "/" + dRef.name);
	   var psdSaveOptions = new PhotoshopSaveOptions();
		   psdSaveOptions.alphaChannels = false;
		   psdSaveOptions.layers = false;	

           	dRef.saveAs(psdFile, psdSaveOptions, false, Extension.LOWERCASE); //(name,options,as copy?,ext);

}
function removeExt(myDoc){
  var str = myDoc.split(".");
  var ext = str[0]
    return ext;
}

	function makeLayerMask(maskType) {
if( maskType == undefined) maskType = 'RvlS' ; //from selection
//requires a selection 'RvlS'  complete mask 'RvlA' otherThanSelection 'HdSl'
    var desc140 = new ActionDescriptor();
    desc140.putClass( charIDToTypeID('Nw  '), charIDToTypeID('Chnl') );
        var ref51 = new ActionReference();
        ref51.putEnumerated( charIDToTypeID('Chnl'), charIDToTypeID('Chnl'), charIDToTypeID('Msk ') );
    desc140.putReference( charIDToTypeID('At  '), ref51 );
    desc140.putEnumerated( charIDToTypeID('Usng'), charIDToTypeID('UsrM'), charIDToTypeID(maskType) );
    executeAction( charIDToTypeID('Mk  '), desc140, DialogModes.NO );
}

function sizeForPowerPoint(whichImage,theWidth,theHeight){
  var curPrefs = preferences.rulerUnits;
  preferences.rulerUnits = Units.INCHES;
  if (whichImage.width > whichImage.height)   //if it is landscape (if width is greater than height) do the first routine
    { whichImage.resizeImage(theWidth, null, 72, ResampleMethod.BICUBICSMOOTHER)
 	} 
  else   //if not, do the routine below
    { whichImage.resizeImage(null, theHeight, 72, ResampleMethod.BICUBICSMOOTHER)
	}
  preferences.rulerUnits = curPrefs;

}
	var qual = 11;
	var docRef = activeDocument; //the open document, used later to save
	var docPath = docRef.fullName.parent.fsName;
	var docName = removeExt(docRef.name);

	var tifFile = new File(docPath + "/" + docName + ".tif");
	
	


try{var selAlpha = docRef.channels.getByName('Alpha 1');}catch(e){}
  if(selAlpha!=null) {
	docRef.selection.load(selAlpha);

  }

if(docRef.activeLayer.isBackgroundLayer = true) docRef.activeLayer.isBackgroundLayer = false ;

makeLayerMask('RvlS'); //This needs a selection and that selection will be shown
//makeLayerMask('HdSl'); //This needs a selection and that selection will be hidden
//makeLayerMask('RvlA'); //This is a complete mask no selection required

	docRef.trim(TrimType.TOPLEFT); 



	savePSD(docRef,docPath);

	try{tifFile.remove();}catch(e){}

	docRef.close(SaveOptions.DONOTSAVECHANGES); 


	//var channels = docRef.channels; //Removes all channels.  With channels, layers, or annotations in the document,
            //channels.removeAll(); 
	//docRef.flatten();
	



