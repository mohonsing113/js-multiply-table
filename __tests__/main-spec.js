const mutiplyTable = require('../main');

/*
given I inputs 2 and 4
when createMutiplyTbale
then I should get 2x2=4 2x3=6 3x3=9 2x4=8 3x4=12 4x4=16
*/
it ('should print mutiply table', () => {
    expect(mutiplyTable(2, 4)).toBe(
        "2*2=4  \n"+
        "2*3=6  3*3=9  \n"+
        "2*4=8  3*4=12  4*4=16  \n");
});

/*
given I inputs 3 and 1
when createMutiplyTbale
then I should get null
*/
it ('should be null', () => {
    expect(mutiplyTable(3, 1)).toBe(null);
});

/*
given I inputs 997 and 1000
when createMutiplyTbale
then I should get printed mutiply table
*/
it ('should print mutiply table', () => {
    expect(mutiplyTable(997, 1000)).toBe("997*997=994009  \n"+
    "997*998=995006  998*998=996004  \n"+
    "997*999=996003  998*999=997002  999*999=998001  \n"+
    "997*1000=997000  998*1000=998000  999*1000=999000  1000*1000=1000000  \n"
);
});