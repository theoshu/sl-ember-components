import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        logRed() {
            window.console.log( 'Red!' );
        },

        logGreen() {
            window.console.log( 'Green!' );
        },

        logBlue() {
            window.console.log( 'Blue!' );
        },

        logWhite() {
            window.console.log( 'White!' );
        }
    }
});
