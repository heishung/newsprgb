

$(function(){
    // Initialize the tree inside the <div>element.
    // The tree structure is read from the contained <ul> tag.
    $("#tree").fancytree({
        checkbox: false,
        checkbox: function(event, data) {
            // Hide checkboxes for folders
            return data.node.isFolder() ? false : true;
        },
        source: [
            {title: "Accounts", checkbox: false,key: "1",folder: true,children: [
                    {title: "Node 2.1", key: "3",folder:true,children:[
                            {title: "FXPro.com", key: "4",folder:true,
                                children: [
                                    {title: "367417:Mai Van Dung", key: "3"},

                                ]
                            }

                        ]},

                ]},
            {title: "indicators",checkbox: false, key: "2", folder: true, children: [
                    {title: "Node 2.1", key: "3",folder:true,children:[
                        {title: "trend", key: "3"},
                        {title: "oscillators", key: "3"},
                        {title: "volumns", key: "3"},
                        {title: "Bill Williams", key: "3"},
                    {title: "Examples", key: "3"},
                        {title: "accelerator", key: "3"},
                        {title: "accumulation", key: "3"},
                        {title: "alligator", key: "3"},
                        {title: "ATR", key: "3"},
                        {title: "Awesome", key: "3"},
                        {title: "bands", key: "3"},
                        {title: "bears", key: "3"},
                        {title: "bulls", key: "3"},
                        {title: "cci", key: "3"},
                        ]},

                ]},
            {title: "Expert Advisors",checkbox: false, key: "3", folder: true, children: [
                    {title: "Node 2.1", key: "3"},
                    {title: "Node 2.2", key: "4"}
                ]}
        ],
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

