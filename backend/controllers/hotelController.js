const Hotel = require('./../models/hotelModel');
const handleFactory = require('./handleFactory');

exports.getAllHotel = handleFactory.getAll(Hotel);

exports.getHotel = handleFactory.getOne(Hotel);

exports.createHotel = handleFactory.createOne(Hotel);

exports.deleteHotel = handleFactory.deleteOne(Hotel);

exports.updateHotel = handleFactory.updateOne(Hotel);
