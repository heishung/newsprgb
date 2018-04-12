$(function(){
    // Initialize the tree inside the <div>element.
    // The tree structure is read from the contained <ul> tag.
    $("#tree").fancytree({
        checkbox: true,
        activate: function(event, data) {
            $("#echoActive").text(data.node.title);
//              alert(node.getKeyPath());
            if( data.node.url )
                window.open(data.node.url, data.node.target);
        },
        deactivate: function(event, data) {
            $("#echoSelected").text("-");
        },
        focus: function(event, data) {
            $("#echoFocused").text(data.node.title);
        },
        blur: function(event, data) {
            $("#echoFocused").text("-");
        },
        lazyLoad: function(event, data){
            // Simulate a slow Ajax request
            var dfd = new $.Deferred();
            data.result = dfd.promise();
            window.setTimeout(function(){
                dfd.resolve([
                    { title: "Lazy node 1", lazy: true },
                    { title: "Simple node 2", select: true }
                ]);
            }, 1500);
        }
    });
});