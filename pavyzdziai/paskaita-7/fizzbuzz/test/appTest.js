//
//
describe('App', function () {
    describe('fizzbuzz()', function() {
        it('should return 1 if I enter 1', function() {
            expect(fizzbuzz(1)).to.be(1);
        });

        it('should return 2 if I enter 2', function() {
            expect(fizzbuzz(2)).to.be(2);
        });

        it('should return Fizz if I enter 3', function() {
            expect(fizzbuzz(3)).to.be("Fizz");
        });

        it('should return Buzz if I enter 5', function() {
            expect(fizzbuzz(5)).to.be("Buzz");
        });

        it('should return Fizz if I enter 6', function() {
            expect(fizzbuzz(6)).to.be("Fizz");
        });

        it('should return Buzz if I enter 10', function() {
            expect(fizzbuzz(10)).to.be("Buzz");
        });

        it('should return FizzBuzz if I enter 15', function() {
            expect(fizzbuzz(15)).to.be("FizzBuzz");
        });

        it('should return FizzBuzz if I enter 90', function() {
            expect(fizzbuzz(90)).to.be("FizzBuzz");
        });
    });

    describe('allNumbers()', function () {
        it('should return Array with 100 elements', function() {
            expect(allNumbers()).to.have.length(100);
        });

        it('should return 1 as the first Array element', function() {
            var result = allNumbers();
            expect(result[0]).to.be(1);
        });

        it('should return 98 as the 97 Array element', function() {
            var result = allNumbers();
            expect(result[97]).to.be(98);
        });

        it('should return FizzBuzz as the 89 Array element', function() {
            var result = allNumbers();
            expect(result[89]).to.be("FizzBuzz");
        });
    });
});
