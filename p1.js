$(function () {
    $('#container').highcharts({
        title: {
            text: 'Test 1'
        },
        series: [{
            name: "sdbjkdsfb",
            type: "pie",
            data: [
                ["a", 1],
                ["b", 2],
                ["c", 3]
            ]
        },{
            //type: "line"
            data: [
                ["1", 10],
                ["2", 20]
            ]
        }]
    })
});
