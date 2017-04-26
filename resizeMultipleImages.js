// JavaScript Document

function makeDialog()
{
	var galleryResource =
		"dialog { text: 'Multiple Image Resizer', bounds:[140,50,840,700], \
			execPnl: Panel { text: 'Process', bounds:[615,0,690,280], \
				runBtn: Button { text:'Run', bounds:[7, 20, 67, 40]}, \
				cancelBtn: Button { text:'Cancel', bounds:[7, 60, 67, 80],properties:{name: 'cancel'}}, \
				resetBtn: Button { text:'ReSet', bounds:[7, 180, 67, 200]}, \
				helpBtn: Button { text:'Help', bounds:[7, 215, 67, 235]}, \
				webBtn: Button { text:'Support', bounds:[7, 250, 67, 270]} \
			}, \
			fileSourcePnl: Panel { text: 'File Source', bounds:[10,0,325,55], \
				fsFolEt: EditText { text:'<source folder>', bounds:[10,20,235,40]}, \
				fsFolBtn: Button { text:'Browse', bounds:[245, 20, 305, 40]} \
			}, \
			fdPnl: Panel { text: 'File Destination', bounds:[10,65,325,120], \
			  fsDesCb: Checkbox { text:'Same Folder', value:true, bounds:[15,15,100,35]}, \
				fsDesEt: EditText { text:'<destination folder>', bounds:[110,15,240,35]}, \
				fsDesBtn: Button { text:'Browse', bounds:[245, 15, 300, 35]} \
			}, \
			sizePnl: Panel { text: 'Image Sizes (use pixels)', bounds:[10,130,605,600], \
				instruct1: StaticText { text:'Max Image Width/Height', bounds:[10,10,140,30]}, \
				instruct2: StaticText { text:'Folder name', bounds:[150, 10, 230, 30]}, \
				instruct3: StaticText { text:'Quality(0-100)', bounds:[240, 10, 320, 30]}, \
				instruct4: StaticText { text:'Sharpen (Amount,Radius,Threshold)', bounds:[330, 10, 550, 30]}, \
				size2: EditText { text:'', bounds:[10,40,140,60]}, \
				folder2: EditText { text:'', bounds:[150, 40, 230, 60]}, \
				quality2: EditText { text:'70', bounds:[240, 40, 300, 60]}, \
				sharpenCB2: Checkbox { text:'Sharpen', value:false, bounds:[310, 40, 370, 60]}, \
				sharpenET2: EditText { text:'75,1,20', value:true, bounds:[380, 40, 440, 60]}, \
				size3: EditText { text:'', bounds:[10,70,140,90]}, \
				folder3: EditText { text:'', bounds:[150, 70, 230, 90]}, \
				quality3: EditText { text:'70', bounds:[240, 70, 300, 90]}, \
				sharpenCB3: Checkbox { text:'Sharpen', value:false, bounds:[310, 70, 370, 90]}, \
				sharpenET3: EditText { text:'75,1,20', value:true, bounds:[380, 70, 440, 90]}, \
				size4: EditText { text:'', bounds:[10,100,140,120]}, \
				folder4: EditText { text:'', bounds:[150, 100, 230, 120]}, \
				quality4: EditText { text:'70', bounds:[240, 100, 300, 120]}, \
				sharpenCB4: Checkbox { text:'Sharpen', value:false, bounds:[310, 100, 370, 120]}, \
				sharpenET4: EditText { text:'75,1,20', value:true, bounds:[380, 100, 440, 120]}, \
				size5: EditText { text:'', bounds:[10,130,140,150]}, \
				folder5: EditText { text:'', bounds:[150, 130, 230, 150]}, \
				quality5: EditText { text:'70', bounds:[240, 130, 300, 150]}, \
				sharpenCB5: Checkbox { text:'Sharpen', value:false, bounds:[310, 130, 370, 150]}, \
				sharpenET5: EditText { text:'75,1,20', value:true, bounds:[380, 130, 440, 150]}, \
				size1: EditText { text:'', bounds:[10,160,140,180]}, \
				folder1: EditText { text:'', bounds:[150, 160, 230, 180]}, \
				quality1: EditText { text:'70', bounds:[240, 160, 300, 180]}, \
				sharpenCB1: Checkbox { text:'Sharpen', value:false, bounds:[310, 160, 370, 180]}, \
				sharpenET1: EditText { text:'75,1,20', value:true, bounds:[380, 160, 440, 180]} \
			}, \
			formatsPnl: Panel{ text: 'Image Types to Include', bounds:[340,65,605,120], \
				tif: Checkbox { text:'Tiff',value:true, bounds:[5, 10, 70, 25]}, \
				jpg: Checkbox { text:'Jpeg',value:true, bounds:[5, 30, 70, 45]}, \
				pdf: Checkbox { text:'Pdf',value:true, bounds:[75, 10, 140, 25]}, \
				psd: Checkbox { text:'Psd',value:true, bounds:[75, 30, 140, 45]}, \
				gif: Checkbox { text:'Gif',value:true, bounds:[145, 30, 210, 45]}, \
				bmp: Checkbox { text:'Bmp',value:true, bounds:[145, 10, 210, 25]} \
			} \
	}";
	return new Window(galleryResource);
}


function initialiseRNDlg (galleryDlg) 
{
	with (galleryDlg) 
	{		
			fileSourcePnl.fsFolEt.enabled = true;
			/*
			fsPnl.fsSelCb.onClick = function ()
				{
					fsPnl.fsFolEt.enabled = fsPnl.fsFolBtn.enabled = fsPnl.fsSubfolderCb.enabled 
						= fsPnl.fsCritCb.enabled =  !this.value;
					if (fsPnl.fsCritCb.value) 
					{
							fsPnl.fsCritCb.value = fsPnl.fsExtEt.enabled = fsPnl.fsSfxEt.enabled = fsPnl.fsExcEt.enabled = 
							fsPnl.fsExtSt.enabled = fsPnl.fsSfxSt.enabled = fsPnl.fsExcSt.enabled = false;
					}
				}*/									
	}	
	with (galleryDlg.execPnl) 
	{
			runBtn.onClick = function () 
				{
				this.parent.parent.close(1);
				}
			cancelBtn.onClick = function () { this.parent.parent.close(0);};
			//saveBtn.onClick = function () {saveCustomSettings(myData, galleryDlg);};
			//loadBtn.onClick = function () {loadCustomSettings(myData, galleryDlg);};
			//resetBtn.onClick = function ()  { loadSettings(myData.defaultFile, myData, galleryDlg); };

			webBtn.onClick = function () {
				File(app.path + '/Presets/ScriptsData/AndrewHallScriptData/ps-scripts-link.html').execute();
				galleryDlg.close();
			}	
	}	
	with (galleryDlg.fileSourcePnl) 
	{
			fsFolEt.enabled = fsFolBtn.enabled = true;
			fsFolBtn.onClick = function () {	
				browseToFolder('<source folder>', 'Select a Source Folder', galleryDlg.fileSourcePnl.fsFolEt);
				galleryDlg.fdPnl.fsDesEt = galleryDlg.fileSourcePnl.fsFolEt;
					}
	}
	with (galleryDlg.fdPnl) 
	{
			fsDesEt.enabled = fsDesBtn.enabled = !fsDesCb.value;
			fsDesCb.onClick = function ()
				{
				fsDesEt.enabled = fsDesBtn.enabled = !this.value;
				}			
			fsDesBtn.onClick = function () {	
				browseToFolder('<destination folder>', 'Select a Destination Folder', galleryDlg.fdPnl.fsDesEt);	}
	}	
	with (galleryDlg.sizePnl)
	{
			sharpenET1.enabled = sharpenCB1.value;
			sharpenCB1.onClick = function(){ sharpenET1.enabled = this.value;size1.text = ""; }
			sharpenET2.enabled = sharpenCB1.value;
			sharpenCB2.onClick = function(){ sharpenET2.enabled = this.value; }
			sharpenET3.enabled = sharpenCB1.value;
			sharpenCB3.onClick = function(){ sharpenET3.enabled = this.value; }
			sharpenET4.enabled = sharpenCB1.value;
			sharpenCB4.onClick = function(){ sharpenET4.enabled = this.value; }
			sharpenET5.enabled = sharpenCB1.value;
			sharpenCB5.onClick = function(){ sharpenET5.enabled = this.value; }	
			

			
											
	}
	

}

function browseToFolder(originalText, browseText, nTarget)
{
	var target,selFolder;	 
	if (nTarget.text != null && nTarget.text != originalText) 
		target = nTarget.text;
	else target = null;
	selFolder = Folder.selectDialog( browseText, Folder(target));
	if ( selFolder != null ) nTarget.text = selFolder.fsName.toString();
}
function browseToFile(originalText, browseText, nTarget)
{
	var target,selFolder;	 
	if (nTarget.text != null && nTarget.text != originalText) 
		target = nTarget.text;
	else target = null;
	selFolder = File.openDialog( browseText, Folder(target));
	if ( selFolder != null ) nTarget.text = selFolder.fsName.toString();
}
function getFormats(galleryDlg){
	var tif,jpg,pdf,psd,gif,bmp,filterString;
	
	filterString = "";
	tif = galleryDlg.formatsPnl.tif.value;
	jpg = galleryDlg.formatsPnl.jpg.value;
	pdf = galleryDlg.formatsPnl.pdf.value;
	psd = galleryDlg.formatsPnl.psd.value;
	gif = galleryDlg.formatsPnl.gif.value;
	bmp = galleryDlg.formatsPnl.bmp.value;
	
	if(jpg == true){filterString +="jpe?g|"}
	if(tif == true){filterString +="tiff?|"}
	if(bmp == true){filterString +="bmp|"}
	if(psd == true){filterString +="psd|"}
	if(gif == true){filterString +="gif|"}
	if(pdf == true){filterString +="pdf"}
	if(filterString.charAt(filterString.length-1)=="|"){
		filterString = filterString.substring(0,filterString.length - 1);
	}
	

return filterString;
}
function GetFiles(f, ftn) {

	var pt = new Folder(f + "/Jpeg300_HiRes/");
	
  if (typeof ftn != "function") throw "usage: GetFiles(folder, filterFunction";
  var list = f.getFiles();
  var res = [];
  for (var i = 0; i < list.length; i++) {
    if (ftn.call(this, list[i])) {
      res.push(list[i]);
    } else {
      delete list[i];
    }
  }
  return res;
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
function sizeForPowerPoint(whichImage,w,h){
  var curPrefs = preferences.rulerUnits;
  preferences.rulerUnits = Units.PIXELS;
  if (whichImage.width > whichImage.height)   //if it is landscape (if width is greater than height) do the first routine
    { whichImage.resizeImage(w, null, 72, ResampleMethod.BICUBICSHARPER)
 	} 
  else   //if not, do the routine below
    { whichImage.resizeImage(null, h, 72, ResampleMethod.BICUBICSHARPER)
	}
  preferences.rulerUnits = curPrefs;

}
function sizeThumb(whichImage, theSize){
  if (whichImage.width > whichImage.height)//if it is landscape (if width is greater than height) do the first routine
    { 
      preferences.rulerUnits = Units.PIXELS;
      whichImage.resizeImage(theSize, null, 72, ResampleMethod.BICUBICSHARPER)
   	} 
  else   //if not, do the routine below
    {
      preferences.rulerUnits = Units.PIXELS;
      whichImage.resizeImage(null, theSize, 72, ResampleMethod.BICUBICSHARPER)
	}
}



function unsharpMe(amount,radius,thresh){
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
function removeSpaces(filelist){
 //if (typeof filelist != "Array") throw "usage: removeSpaces takes an array only";
   for(i=0;i<filelist.length;i++){
			var file = new File(filelist[i]);
			file.rename(file.name.replace(/%20/g,"-"));
			filelist[i] = file;
    }
return filelist;
}
// Define a class to handle this functionality
OpenOptions = function(){};

// performs the "lookup"
OpenOptions.getOptions = function(fileName) {

    var ext = fileName.match(/[^\.]+$/).toString();

    if (OpenOptions[ext]) {
       return OpenOptions[ext]();
    } else {
	return undefined;
    }
}

// Define a function to create each type of OpenOptions object

// pdf version
OpenOptions.pdf = function() {
    var opts = new PDFOpenOptions();
    // set some generic options
    opts.antiAlias = true;
    opts.constrainProportions = true;
    opts.resolution = 150;

    return opts;
}

// raw version
OpenOptions.raw = function() {
    var opts = new RawFormatOpenOptions();
    // use the defaults
    return opts;
}
function getExt(filename){//doesn't recognize if image name has multiple dots, fix this later
  var str = filename.split(".");
  var ext = str[1].toLowerCase();
    return ext;
}
function myFilter(f) {
   cFormats = getFormats(galleryDlg);
	 return f instanceof File &&
	    eval("f.name.match(/\.(" + cFormats + ")$/i) != null");
     // original was:  f.name.match(/\.(jpe?g|tiff?|bmp|psd|gif|pdf)$/i) != null;
}
preferences.rulerUnits = Units.PIXELS;


galleryDlg = makeDialog(); // make window
initialiseRNDlg(galleryDlg);
makeGallery = galleryDlg.show(); // show window

var mainFolder = new Folder(galleryDlg.fileSourcePnl.fsFolEt.text);
var mainFolderName = mainFolder.name;

if(galleryDlg.fdPnl.fsDesEt.text == "<destination folder>"){
	destPath = mainFolder;
	destDiff = false;  //Destination is same as source
	srcDocPath = null;
} else {
	destPath = galleryDlg.fdPnl.fsDesEt.text;
	destDiff = true;  //Destination is NOT same as source
	srcDocPath = mainFolder;
}

var size1 = Number(galleryDlg.sizePnl.size2.text);
var folder1 = galleryDlg.sizePnl.folder2.text;
var quality1 = galleryDlg.sizePnl.quality2.text;

var fileList = GetFiles(mainFolder, myFilter);
fileList = removeSpaces(fileList);

var myInputs = new Array();


alert(galleryDlg.sizePnl['size'+5].text);

for(i=0;i<galleryDlg.sizePnl.length;i++){
		myInputs.push([
		galleryDlg.sizePnl['size'+i].text,
		galleryDlg.sizePnl['folder'+i].text,
		galleryDlg.sizePnl['quality'+i].text		
		]);
	
}




	folder   = new Folder(destPath + "/" + folder1);
	folder.create();



for(var i = 0; i < fileList.length; i++) 
  { 
    try 
      { 
	  	var file = fileList[i]; 
			//--Now open the file  
   	  try{ var docRef = open(file,OpenOptions.getOptions(file.name));} catch(e){}
		    docName = docRef.name;
				exten = getExt(file.name);			 
        docRef.flatten(); //If a copy is saved, the html files will reference the wrong image.

				sizeForPowerPoint(docRef,size1,size1);// resizes jpeg uses function
				//if(sharpenSM == true) try{unsharpMe(smSharp.amount,smSharp.ratio,smSharp.threshold);} catch (e){}
				jpgFile = new File(destPath + "/" + folder1+"/");   //the folder for the small jpegs
				saveForWeb(jpgFile,docRef,quality1);





docRef.close(SaveOptions.DONOTSAVECHANGES);

 

      

      }//END OF TRY STATEMENT
    catch(xxx) 
      {
        alert(xxx);
      } 
	}