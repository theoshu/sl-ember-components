import Ember from 'ember';
import sinon from 'sinon';

export default function( component, options ) {
    const jqueryAliasSpy = sinon.spy( window, '$' );
    const jquerySpy = sinon.spy( window, 'jQuery' );
    const emberJquery = sinon.spy( Ember, '$' );

    if ( options ) {
        component( options );
    } else {
        component();
    }

    const called = jqueryAliasSpy.called || jquerySpy.called || emberJquery.called;

    window.$.restore();
    window.jQuery.restore();
    Ember.$.restore();

    return !called;
}
