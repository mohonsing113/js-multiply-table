const mutiplyTable = require('../main');

/*
given I inputs 2 and 4
when mutiplyTbale
then I should get 2x2=4 2x3=6 3x3=9 2x4=8 3x4=12 4x4=16
*/
it ('should print mutiply table', () => {
    expect(mutiplyTable(2, 4)).toBe(
        "2*2=4  \n"+
        "2*3=6  3*3=9  \n"+
        "2*4=8  3*4=12 4*4=16 \n");
});

/*
given I inputs 95 and 105
when mutiplyTbale
then I should get printed aligned mutiply table
*/
it ('should print aligned mutiply table', () => {
    expect(mutiplyTable(95, 105)).toBe(
          "95*95=9025    \n"
        + "95*96=9120    96*96=9216    \n"
        + "95*97=9215    96*97=9312    97*97=9409    \n"
        + "95*98=9310    96*98=9408    97*98=9506    98*98=9604    \n"
        + "95*99=9405    96*99=9504    97*99=9603    98*99=9702    99*99=9801    \n"
        + "95*100=9500   96*100=9600   97*100=9700   98*100=9800   99*100=9900   100*100=10000 \n"
        + "95*101=9595   96*101=9696   97*101=9797   98*101=9898   99*101=9999   100*101=10100 101*101=10201 \n"
        + "95*102=9690   96*102=9792   97*102=9894   98*102=9996   99*102=10098  100*102=10200 101*102=10302 102*102=10404 \n"
        + "95*103=9785   96*103=9888   97*103=9991   98*103=10094  99*103=10197  100*103=10300 101*103=10403 102*103=10506 103*103=10609 \n"
        + "95*104=9880   96*104=9984   97*104=10088  98*104=10192  99*104=10296  100*104=10400 101*104=10504 102*104=10608 103*104=10712 104*104=10816 \n"
        + "95*105=9975   96*105=10080  97*105=10185  98*105=10290  99*105=10395  100*105=10500 101*105=10605 102*105=10710 103*105=10815 104*105=10920 105*105=11025 \n"
    
);
});

/*
given I inputs null and 1
when mutiplyTbale
then I should get null
*/
it ('should be null if one value is null', () => {
    expect(mutiplyTable(null, 1)).toBe(null);
});

/*
given I inputs 3 and 1
when mutiplyTbale
then I should get null
*/
it ('should be null if input1 > input2', () => {
    expect(mutiplyTable(3, 1)).toBe(null);
});

/*
given I inputs 999 and 1001
when mutiplyTbale
then I should get null
*/
it ('should be null if one value > 1000', () => {
    expect(mutiplyTable(999, 1001)).toBe(null);
});

/*
given I inputs 0 and 5
when mutiplyTbale
then I should get null
*/
it ('should be null if one value < 1', () => {
    expect(mutiplyTable(0, 5)).toBe(null);
});


