describe("DigitConverter", function() {
  it("converts a digit to a word", function() {
    DigitConverter(3).should.equal("three");
  });
    it("converts non-outlier two digit numbers to correct word", function() {
    DigitConverter(14).should.equal('fourteen');
  });
    it("when first digit is '1', returns correct outlier", function() {
    DigitConverter(12).should.equal('twelve');
  });
});

