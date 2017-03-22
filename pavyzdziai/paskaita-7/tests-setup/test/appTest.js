// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//         expect([1,2,3].indexOf(4)).to.be(-1);
//     });
//   });
// });

describe('App', function () {
    describe('sum()', function() {
        it('should return 4 if I add 2+2', function() {
            expect(sum(2, 2)).to.be(4);
        });

        it('should return 8 if I add -2 and 10', function() {
            expect(sum(-2, 10)).to.be(8);
        });
    });
});
