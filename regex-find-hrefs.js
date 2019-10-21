    var html = $("#html-paste").val();

    var hrefs = /<a[^>]* href="([^"]*)"/g;

    console.log( html.match(hrefs) );
