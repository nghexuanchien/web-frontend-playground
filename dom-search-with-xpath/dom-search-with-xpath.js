function getElementsByXPath(xpath, parent)
{
    let results = [];
    let query = document.evaluate(xpath, parent || document,
        null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i) {
        results.push(query.snapshotItem(i));
    }
    return results;
}

function doMeEverySeconds ()
{
	var nodes = getElementsByXPath("//*[contains(@class,'text')]", document);
	for(var i =0; i< nodes.length; i++){
		var xpathResult = document.evaluate("(text()[contains(., 'helloworld')]) [1]", nodes[i], null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
		var node=xpathResult.singleNodeValue;
		if (node==null)
			console.log('Not found')
		else
			console.log('found');
	}
	
}

var timerVar = setInterval (function() {doMeEverySeconds (); }, 2000);