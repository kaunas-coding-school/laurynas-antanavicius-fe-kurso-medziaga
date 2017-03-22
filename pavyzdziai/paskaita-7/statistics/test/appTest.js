describe('App', function () {
    describe('minimum()', function() {
        it('should return 4 if I add 4', function() {
            expect(minimum(4)).to.be(4);
        });

        it('should return 3 if I input 3 and 5', function() {
            expect(minimum(3,5)).to.be(3);
        });

        it('should return 3 if I input 3 and 5 as an Array', function() {
            expect(minimum([3,5])).to.be(3);
        });

        it('should return 1 if I input [3,5,-1,10] as numbers', function() {
            expect(minimum([3,5,-1,10])).to.be(-1);
        });
    });

    describe('maximum()', function () {
        it('should return 10 if I input [3,5,-1,10] as numbers', function() {
            expect(maximum([3,5,-1,10])).to.be(10);
        });
    });

    describe('count()', function (){
        it ('should return 4 if I input [3,5,-1,10] as numbers', function() {
            expect(count([3,5,-1,10])).to.be(4);
        });
    });
});
