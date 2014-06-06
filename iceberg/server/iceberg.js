Meteor.publish('all-penguins', function () {
    return Penguins.find();
});

Meteor.methods({
    "zookeeper-login": function(secret) {
        if(secret == "i-am-a-zoo-keeper")
            this.setUserId("zookeeper");
    },
    "feed":function() {
        Penguins.update({}, {$set:{hungry: false}}, {multi: true});
    }
});

Penguins.allow({
    insert: function (userId, doc) {
        return true;
    },
    update: function (userId, doc, fields, modifier) {
        return userId;
    },
    remove: function (userId, doc) {
        return userId;
    }
});