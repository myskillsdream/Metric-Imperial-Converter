'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/converter')
  .get(function(req, res){
    let request.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getNum(input);

    if(!initNum && !initUnit){
      res.send("invalid number and unit")

    }else if(!initUnit){
      res.send("invalid unit")
    }

    let returnNum = convertHandler.convert(initNum, initUnit);
    let returnUnit = convertHandler.getReturnUnit(initUnit);
    let returnString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);


  })

};
