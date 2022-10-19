$("#form").submit(function (e) {
    e.preventDefault()

    var query = $("#search").val()
    apikey = "0a274bd198bde10f3218287147180390"
    var url = 'https://api.serpstack.com/search?access_key=' + apikey + '&type=web&query=' + query

    let results = ''

    $.get(url, function (data) {
        console.log(data)

        data.organic_results.forEach(res => {
            results = `
            <h1>${res.title}</h1><br><a href="${res.url}">${res.url}</a>
            <p>${res.snippet}</p>

            `
            $("#results").append(results)
        });
    })
})

