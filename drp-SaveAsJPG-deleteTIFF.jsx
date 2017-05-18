/*
This script will scan folders and subfolders for tiffs, open and compress them with LZW compression.  
It can be modified to open and recompress jpegs or to open tiffs and save jpegs.  

*/











var Q = 11; //the jpeg quality used if saving as jpeg
var openType = "*.TIF";//change this to open pdf or jpg if you choose
var saveType = "jpg";  //will also save pdf or jpg format


function main(openType,Q,saveType){
	
			var docRef = activeDocument;
			var docPath = docRef.fullName.parent.fsName;
			var docName = removeExt(docRef.name);
			var tifFile = new File(docPath + "/" + docName + ".tif");
			if(tifFile.readonly == true) tifFile.readonly = false;
	

			docRef.flatten();
			resolveColorModes(docRef);	

			saveType = saveType.toLowerCase();
			if(saveType == "jpg" || saveType == "jpeg") saveAsJPG(docRef,docPath,Q);
			if(saveType == "tif" || saveType == "tiff") saveAsTIFF(docRef,docPath);
			if(saveType == "pdf") saveAsPDF(docRef,docPath,Q);
			
			
			
			//fixPixelAspect(docRef);
			try{tifFile.remove();}catch(e){}
		    	docRef.close(SaveOptions.DONOTSAVECHANGES); 	


					

	

		  
			  


			  
	

	


	
}
function saveAsTIFF(dRef,dPath){
	tifFile = new File(dPath + "/" + dRef.name);   //theDocumentName
		
	TifSaveOptions = new TiffSaveOptions();
	TifSaveOptions.imageCompression = TIFFEncoding.TIFFLZW;
	TifSaveOptions.embededColorProfile = true;
	TifSaveOptions.layers = false;
		
	dRef.saveAs(tifFile, TifSaveOptions, false, Extension.LOWERCASE); //(name,options,as copy?,ext);

}
function saveAsJPG(dRef,dPath,Q){
	      jpgFile = new File(dPath + "/" + dRef.name);              

              jpgSaveOptions = new JPEGSaveOptions();
              jpgSaveOptions.embedColorProfile = true;
              jpgSaveOptions.formatOptions = FormatOptions.STANDARDBASELINE;
              jpgSaveOptions.matte = MatteType.NONE;
              jpgSaveOptions.quality = Q;
	      dRef.saveAs(jpgFile, jpgSaveOptions, false, Extension.LOWERCASE); //(name,options,as copy?,ext);
              

}
function saveAsPDF(dRef,dPath,Q){

	      pdfFile = new File(dPath + "/" + dRef.name);
	   var pdfSaveOptions = new PDFSaveOptions();
		   pdfSaveOptions.alphaChannels = false;
		   pdfSaveOptions.annotations = false;
		   pdfSaveOptions.downgradeColorProfile = true;
		   pdfSaveOptions.embedColorProfile = true;
	   
		   pdfSaveOptions.encoding = PDFEncoding.JPEG;
		   pdfSaveOptions.interpolation = false;
		   pdfSaveOptions.jpegQuality = Q;
		   pdfSaveOptions.layers = false;
		   pdfSaveOptions.spotColors = false;
		   pdfSaveOptions.transparency = false;
		   pdfSaveOptions.useOutlines = false;
		   pdfSaveOptions.vectorData = false;
           	dRef.saveAs(pdfFile, pdfSaveOptions, false, Extension.LOWERCASE); //(name,options,as copy?,ext);


}
function removeExt(myDoc){
  var str = myDoc.split(".");
  var ext = str[0]
    return ext;
}

function scanSubFolders(tFolder) 
{ 
   var sFolders = new Array(); 
   var allFiles = new Array(); 
   sFolders[0] = tFolder; 
   
   for (var j = 0; j < sFolders.length; j++) // loop through folders 
   {            
        var procFiles = sFolders[j].getFiles(); 
		
        for (var i=0;i<procFiles.length;i++) // loop through this folder contents 
        { 
         if (procFiles[i] instanceof Folder){sFolders.push(procFiles[i]); 
	} 
      } 
   } 
   return sFolders; 
} 
function resolveColorModes(img){
  if(img.mode == DocumentMode.BITMAP) {

    img.changeMode(ChangeMode.GRAYSCALE); 

  } else if (img.mode == DocumentMode.CMYK){
    img.changeMode(ChangeMode.RGB);
  } else if (img.mode == DocumentMode.INDEXEDCOLOR){
    img.changeMode(ChangeMode.RGB);
  }

}
function fixPixelAspect(img){
  if(img.pixelAspectRatio < 1){img.pixelAspectRatio = 1}
}

main(openType,Q,saveType);