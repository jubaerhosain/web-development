// listen from client
socket.on("send_message", function (data) {
    // send event to receiver
    var socketId = users[data.receiver];
 
    io.to(socketId).emit("new_message", data);
 
    // save in database
    connection.query("INSERT INTO messages (sender, receiver, message) VALUES ('" + data.sender + "', '" + data.receiver + "', '" + data.message + "')", function (error, result) {
        //
    });
});
