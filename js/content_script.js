
//$('#news').prepend('<div id="logo"><h1>YAHOO!</h1></div>');

var tool_text = '<div id="tools"><a class="btn btn-lg btn-default" href="http://tw.news.yahoo.com">新聞</a> <a class="btn btn-lg btn-default" href="http://tw.dictionary.yahoo.com">字典</a></div>';

$('#news').append( tool_text );

// cut menu 

var dropdown_text =' <div class="btn-group">'+
  '<button type="button" class="btn btn-lg btn-default dropdown-toggle" data-toggle="dropdown">'+
  '  其他 <span class="caret"></span>'+
  '</button>'+
  '<ul id="dropdown-menu" class="dropdown-menu" role="menu">'+
  '</ul> '+
  '</div>';

var menu_text = ' <div id="menu-group"><ul class="list-inline" id="menu"></ul></div>'; 

$("#tools").append( menu_text);

$('#trough li').each( function( ){ 
	$("#menu").append('<li><a href="'+$(this).find("a").attr("href")+'">'+$(this).text()+'</a></li>');
	//menu_data.push( {"text":$(this).text(), "url":$(this).find("a").attr("href") } );  
} );


console.log( menu_data);