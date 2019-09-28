// POST               
fetch('/app02/addPost.php', {
    method: 'POST',
    body: data,
}).then(data => {
    if (data.status == 200) {
        console.log("Everything went well");
    } else { // 4XX, 5XX
        console.log(data.status + " -> " + data.statusText);
    }

    data.json().then(json => {
        // Response Body.
    })
});

// GET

fetch('/app02/addPost.php')
    .then(data => {
        if (data.status == 200) {
            console.log("Everything went well");
        } else { // 4XX, 5XX
            console.log(data.status + " -> " + data.statusText);
        }

        data.json().then(json => {
            // Response Body.
        })
    });