            $("#spanGetCredentials").click(function() { // Success
                $.getJSON("getCredentials.php", function(data) {
                	// data.prop1
                	// ..
                }).fail(function(_, responseText) { // Status Codes 4XX, 5XX
                    // Handle Error
                }).always(function() {
    				// ...
  				});
            });