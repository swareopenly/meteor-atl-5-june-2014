Iceberg = DDP.connect('http://localhost:3000');

Penguins = new Meteor.Collection("penguins", Iceberg);

Iceberg.subscribe('all-penguins', function() {
    var penguins = Penguins.find();
    console.log("We have these many penguins: ", penguins.count());

    penguins.observe({
        changed: function(penguin) {
            if(!penguin.hungry)
                console.log("Penguins ate", penguin.name);
        }
    })
});

Iceberg.call('zookeeper-login','i-am-a-zoo-keeper');
Iceberg.call('feed');

main = function() {
    initKeepalive();

    return "DAEMON";
};

var initKeepalive = function() {
    process.stdin.on('data', function(data) {});
    process.stdin.resume();
};