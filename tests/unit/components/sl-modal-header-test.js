import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('sl-modal-header', 'Unit | Component | sl modal header', {
    unit: true
});

test( 'Default property values are set correctly', function( assert ) {
    const component = this.subject();

    assert.strictEqual(
        component.get( 'tagName' ),
        'div',
        'Default tabName is "div"'
    );
});