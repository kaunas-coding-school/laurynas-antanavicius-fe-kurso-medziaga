describe('App', function () {
    describe('fizzbuzz()', function() {
        it('should return 1 if I enter 1', function() {
            expect(fizzbuzz(1)).to.be(1);
        });

        it('should return 2 if I enter 2', function() {
            expect(fizzbuzz(2)).to.be(2);
        });
    });
});
