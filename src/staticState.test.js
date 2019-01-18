import staticState from './staticState'

test('getPlaceByID missing', () => {
    expect(staticState.getPlaceById('portharbor').name).toBe('Port Harbor');
});

test('showWelcomePage off and on', () => {
    expect(staticState.getPlaceById('bogobogonotthere')).toBe(null);
});

