/*
*      Copyright (c) 2015 Chi Hoang 
*      All rights reserved
*/

cd = new Board(5,5,new List());
QUnit.test( cd, function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


cd = new Board(2,5,new List());
QUnit.test( cd, function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});


cd = new Board(6,3,new List());
QUnit.test( cd, function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

//omega=cd.observers.get(3).update();
//QUnit.test( cd, function( assert ) {
//  assert.equal ( omega, true, "Passed!" );
//});

omega=cd.observers.get(3).uncheck();
QUnit.test( cd, function( assert ) {
  assert.equal ( omega, false, "Passed!" );
});
