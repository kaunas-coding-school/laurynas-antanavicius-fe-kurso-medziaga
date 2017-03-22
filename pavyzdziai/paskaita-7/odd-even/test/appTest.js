// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//         expect([1,2,3].indexOf(4)).to.be(-1);
//     });
//   });
// });

describe('App', function () {
    describe('oddEven()', function() {
        it('should return 1 if I enter 1', function() {
            expect(oddEven(1)).to.be(1);
        });

        it('should return Even if I enter 2', function() {
            expect(oddEven(2)).to.be("Even");
        });

        it('should return Odd if I enter 9', function() {
            expect(oddEven(9)).to.be("Odd");
        });


        it('should return Odd if I enter 25', function() {
            expect(oddEven(25)).to.be("Odd");
        });

        it('should return Odd if I enter 49', function() {
            expect(oddEven(49)).to.be("Odd");
        });
    });

    describe('allNumbers()', function () {
        it('should return empty Array if no parameters given', function() {
            expect(allNumbers()).to.have.length(0);
        });

        it('should return false if given -3', function() {
            expect(allNumbers(-3)).to.not.be.ok();
        });

        it('should return 10 elements if given 1 and 10', function() {
            expect(allNumbers(1, 10)).to.have.length(10);
        });

        it('should return false if given 5 and 2', function() {
            expect(allNumbers(5, 2)).to.not.be.ok();
        });

        it('should return 1 as the first element if given 1 and 1', function() {
            var results = allNumbers(1, 1);
            expect(results[0]).to.be(1);
        });

        it('should return Even as the second element if given 1 and 2', function() {
            var results = allNumbers(1, 2);
            expect(results[1]).to.be("Even");
        });

        it('should return Odd as the 4 element if given 11 and 20', function() {
            var results = allNumbers(11, 20);
            expect(results[4]).to.be("Odd");
        });
    });
});
