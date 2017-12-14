// Illustrator CS3 - CC. 2017.  This script assigns predefined styles to each paragraph of selected text frames

// Multiple paragraph styles must be defined in the document
// Select only text frames and execute the script. The script skips the empty frames and does not stumble if the paragraphs are smaller than the styles.

/* 

If you like this script, you can buy me a BEER via paypal.me/vliff (just dollar or two)

*/

var doc = app.activeDocument;
var sel = doc.selection;
stylesNumber = prompt("Apply Paragraph Styles.\rMake sure you have predefined Paragraph Styles. Script assigns styles to each paragraph of selected in the style palette order (Normal Style is not taken into account). Enter the number of styles / paragraphs:", 2);
for (i = 0; i < sel.length; i++) {
	if (sel[i].characters.length > 0) {
		for (j = 0; j < stylesNumber; j++) {
			if (j < sel[i].paragraphs.length){
				pp = sel[i].paragraphs[j];
				doc.paragraphStyles[(j+1)].applyTo(pp, true);
				}//end if j
		}//for j
	}//end if sel[i]
}//for i
redraw();