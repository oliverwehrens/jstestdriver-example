TestCase("Echo Test", {
  testHello:function () {
    var actual = helloWorld("World")
    assertSame(actual, "Hello World")
  },
  testHello2:function () {
    var actual = helloWorld("World")
    assertSame(actual, "Hello World2")
  }

});