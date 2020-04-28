const { add } = require('./calculator.js');

// test away! 
describe('arithmetic functions', () => {
    describe('add()', () => { 
     it('Should return the sum of two numbers', () => {
         expect(add(2, 2)).toBe(4)
     })

     it('should throw an exception if the params are not numbers', () => {
        expect(() => { add("blue", 3)}).toThrow()
     })
    // it.todo('should throw an exception if the params are not numbers');

    //  it('should return 0 when called with no params', () => {
    //      const expectedResult = 0;
    //      const actualResult = add();
    //      expect(expectedResult).toBe(actualResult);
    //  })
    // //  it('returns the param if only one is passed in', () => {
    //     const expectedResult = 5;
    //     const actualResult = add(5)
    //     expect(actualResult).toBe(expectedResult)
    //     // the function needs to have default values for the params(a=0, b=0)
    // })

    it('should handle more than one argument', () => {
       expect(add(2, 3, 4 )).toBe(9);
    })

    });
});

//----------------------------------------------------------------------------//
// Jest is the unit testing framework maintained by Facebook.
//
// Unit testing is a type of testing that ensures that small units of
// functionality in a project are maintained. Unit tests are written in code
// (usually the same language as the system being tested.) 
//
// It is not uncommon for a decent-sized system to have many thousands of unit
// tests.
//
// With Jest, unit tests are written as JavaScript or TypeScript files that call
// "global" methods in the Jest library. However, rather than running Jest tests
// through Node.js, you execute the Jest framework. Because of this, you don't
// need to import the Jest module. 
//
// When Jest is executed, it searches the project directory structure for files
// that contain test functions, loads them, and executes the test functions.
// Because Jest is executing the test code, the Jest library is already
// available. The test code is brought into the Jest environment (not the other
// way around.) 
//
// Jest can be started in "watch" mode with the "--watch" or "--watchAll"
// command line parameter. See the "test" script definition in ./package.json,
// and the following URL, for more informatino:
// 
//      https://jestjs.io/docs/en/cli#--watch 
// 
// (Note that the "--watch" parameter will detect which specific files have
// changed, using git, and will only re-run tests related to the files that have
// changed, while "--watchAll" will re-run ALL tests when ANY file is changed.
// Because of this, --watch can only be used with projects that are hosted in a
// git repo. Note also that there is a third option: --watchman. This allows
// Jest to work with the "watchman" file watcher service, which is maintained by
// Facebook. See https://facebook.github.io/watchman/).
// 
// Each file that contains one or more defined Jest test is called a "suite". 
// 
// This suite is testing functionality found in ./calculator.js. Because of
// this, we need to import ./calculator.js, so we can call the functions we are
// testing. 
//----------------------------------------------------------------------------//
// const { add } = require('./calculator.js');

//----------------------------------------------------------------------------//
// Jest provides a number of "global" functions. 
// 
// One of the global functions is "describe". The describe function allows you
// to create "blocks" of tests that are related, and provide a descriptive name
// or phrase to them. This is helpful, because if/when a test fails, the
// name of the descriptive block it is in is displayed along with the failure
// message. This makes it easy to track down failed tests (very handy when you
// have many thousands of them, possibly within a single suite.) In addition, it
// provides a simple way to organize your tests. 
// 
// Describe blocks can be nested, as you can see below. See here for info on
// describe: 
//      
//              https://jestjs.io/docs/en/api#describename-fn 
// 
//----------------------------------------------------------------------------//
describe('arithmetic functions', () => {
    describe('add()', () => {
        // it() is a Jest global function that is an alias for the test() global
        // function (see https://jestjs.io/docs/en/api#testname-fn-timeout). You
        // can use either it() or test() to define a unit test. 
        //
        // The unit test consists of a descriptive name or phrase, a function
        // that contains the expectations to test, and an optional third
        // argument that specifies a timeout (we will learn about that in the
        // next lecture... fun fact, the default timeout is 5 secnods, and if
        // the test is not completed in that time frame, it is aborted, and
        // considered to have failed.) 
        //
        // Each test should only test one thing (but possibly different aspects
        // of that one thing.)
        //
        // This test checks that the add() function can add 2 numbers. You
        // should consider edge cases. 
        //
        // The it() and test() alias' allows you to write tests that read a
        // little more naturally (such as it('should return the sum of 2
        // numbers'), or test('that it returns the sum of 2 numbers'), etc.)
        it('should return the sum of 2 numbers', () => {
            // inside the test, the expect() global is used to "assert"
            // something about a value. Values can represent the return value of
            // a function, or a system "state" value that changes as the system
            // operates. Almost always, a call to expect() is chained with a
            // call to a "matcher". The parameter to expect() generates or
            // contains the value to be tested, and the matcher tests it. 
            // 
            // Here, the "toBe()" matcher is used to assert "quality" between
            // the parameter of toBe() and the parameter of expect(). 
            // 
            // There are many matchers. See https://jestjs.io/docs/en/expect. 
            // 
            // Some of the member methods of expect are used as parameters to
            // matchers, for convenience. For example,
            // expect.stringContaining(stringParam) can be used to match any string
            // that contains stringParam: 
            // 
            //      expect(myFn()).toBe(expect.stringContaining('hello'))
            // 
            // ... would match 'hello world', 'hello kitty', 'i said hello',
            // etc. If the return value from myFn() contains 'hello', it would
            // match. 
            // 
            // There are many matchers.
            expect(add(2, 2)).toBe(4);
            expect(add(2, 3)).toBe(5);
        });

        // This test checks whether the function being tested throws an
        // exception. Note that the function call must be wrapped in another
        // function before being passed to expect() in order for the exception
        // to be caught and examined by Jest. 
        // 
        // This test confirms that add() will throw an exception if any of the
        // parameters are not a number. 
        it('should throw an exception if the parms are not numbers', () => {
            expect(() => { add('red', 2) }).toThrow(); // a string
            expect(() => { add(NaN, 2) }).toThrow(); // NaN
            expect(() => { add([1, 2, 'red']) }).toThrow(); // a string in an array
            expect(() => { add([1, 2, NaN]) }).toThrow(); // NaN in an array
            expect(() => { add({ prop: 'prop' }, 2) }).toThrow(); // an object
            // ... should there be others?
        });

        // The AAA pattern can help to set up tests. 
        //
        // A = Arrange : set up any variables or environment needed to run the
        // test. This includes setting up mocks (see
        // https://jestjs.io/docs/en/mock-function-api).
        // 
        // A = Act : run the function/method/process that is being tested. It
        // should either return a value, or produce a change in a state variable
        // that is set up as part of "arrange". 
        // 
        // A = Assert : use expect() to confirm the value returned by or
        // impacted by the method or process being tested. 
        it('should return 0 when called with no args', () => {
            // AAA - arrange, act, assess

            // arrange
            const expectedResult = 0;

            // act
            const actualResult = add();

            // assert
            expect(actualResult).toBe(expectedResult);
        })


        it('returns the param if only one is passed in', () => {
            const expectedResult = 5;
            const actualResult = add(5)
            expect(actualResult).toBe(expectedResult)
        })

        // RED-GREEN-REFACTOR - this is the pattern for Test Driven Development
        // (aka TDD). In TDD, the tests for a section of functionality to be
        // tested are written *first*. When they are written, they are run, to
        // confirm that they fail. The tests are now RED. 
        // 
        // Then, just enough code is written to make the tests pass. When the
        // tests are passing, they are now GREEN. 
        // 
        // Once tests are passing, THEN the code can be modified to make it more
        // efficient, effective, performant, etc. This is known as REFACTORing
        // the code. 
        // 
        // See https://martinfowler.com/bliki/TestDrivenDevelopment.html 
        //
        it('should handle more than two arguments', () => {
            expect(add(1, 2, 3)).toBe(6);
            expect(add(1, 2, 3, 5)).toBe(11);
        })


        it('should accept an array of numbers', () => {
            expect(add([1, 2, 3])).toBe(6);
            expect(add([1, 2, 3, 5])).toBe(11);
        })


        // you can use the .todo() to define a test without implementing it.
        // This modifies the test result report by indicating that there are
        // tests that are not yet implemented (giving a fuller picture of how
        // much coverage the code has.)
        it.todo('should handle two or more arrays.');

        // You can also use it.skip() to keep a test defined, but prevent it
        // from running. This is useful if conditions needed for running the
        // test are not in place yet, or temporarily disabled, etc. 

        // You can also use it.only() to cause Jest to run only tests that have
        // the .only() method chained to them. If any one test has .only() on
        // it, then no tests are executed that do NOT have .only() on them (you
        // can have multiple .only() tests). This is useful if you have a test
        // suite that takes a long time to run, but you are trying to refine or
        // troubleshoot a specific test or block of tests, and want to limit
        // test execution to them. 


    })
})