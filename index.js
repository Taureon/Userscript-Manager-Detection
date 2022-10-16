// Detect GreaseMonkey API objects
//data type: boolean
//true = It is being ran in an Userscript Manager
//false = It is being ran as a bookmarklet or it is being ran in an Userscript Manager that does not have GreaseMonkey API objects
var isInUserscriptContext = typeof GM === 'object' || typeof GM_info === 'object';
 
// Show result
//NOTE: This is not required, as it only serves for demonstration purposes.
alert(isInUserscriptContext ? 'I am being ran in an Userscript' : 'I am not being ran in an Userscript');
