Template.penguins.helpers({
    hungryPenguins: function() {
        return Penguins.find({hungry: true});
    },
    fullPenguins: function() {
        return Penguins.find({hungry: false});
    }
});

Template.penguins.events({
    "click #feed": function(e) {
        Meteor.call('feed');
    }
})