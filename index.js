$(document).ready(function () {
    $.ajax({
        dataType: "jsonp",
        jsonp: "jsonp",
        url: 'https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?',
        type: "GET",
        success: function (data) {
            if (data.stream === null) {
                $("#fccStatus").html("Free Code Camp is currently <a href='https://go.twitch.tv/freecodecamp'>offline</a>");
                console.log(data);
            }
            else {
                $("#fccStatus").html("Free Code Camp is <a href='https://go.twitch.tv/freecodecamp'>online!</a>");
            }
        },
        error: function () {
            console.error();
        }
    })
    var following = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    $.each(following, function(i, val) {
        $.ajax({
            context: following,
            dataType: "jsonp",
            jsonp: "jsonp",
            url: 'https://wind-bow.gomix.me/twitch-api/streams/' + following[i] + '?callback=?',
            type: "GET",
            success: function (data1) {
                if (data1.stream === null) {
                    $("#following").append("<li class='list-group-item list-result-style'>" + following[i] + " is currently <a href='https://go.twitch.tv/" + following[i] + "' target='_blank'>offline</a></li>");
                }
                else {
                    $("#following").append("<li class='list-group-item list-result-style'>" + following[i] + " is currently <a href='https://go.twitch.tv/" + following[i] + "' target='_blank'>online!</a> <br>"  + data1.stream.game+ "<br>"+data1.stream.viewers+" viewers</li>");
                }
            },
            error: function () {
                console.error();
            }
        })
    })
})