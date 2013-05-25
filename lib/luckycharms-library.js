var request = require('request');

module.exports = LuckyCharmsLibrary

function LuckyCharmsLibrary(options){
  //Initialize the object
  var _self = {};
  options = options || {};
  var _url = options.url || process.env.LUCKYCHARMS_URL;
  var _api_key = options.api_key || process.env.LUCKYCHARMS_API_KEY;
  _api_key = encodeURIComponent(_api_key); // Fix problems with url unencoded strings

  // Public variables
  _self.version = "0.0.1";


  // Public Functions
  _self.ListUnits = function(callback){
    _adminApiCall('units', 'GET', {}, function(data, status_code) {
      callback(_parseResponse(data), _hasError(status_code));
    });
  }

  _self.ListBookmarks = function(callback){
    _adminApiCall('bookmarks', 'GET', {}, function(data, status_code) {
      callback(_parseResponse(data), _hasError(status_code));
    });
  }

  _self.UpdateUnitUrl = function(unit_name, new_url, callback){
    var request_path = 'units/' + unit_name + '/current_url';

    _adminApiCall(request_path, 'POST', {url: new_url}, function(data, status_code) {
      callback(_parseResponse(data), _hasError(status_code));
    });
  }

  _self.CreateBookmark = function(bookmark_name, url, callback){
    _adminApiCall('bookmarks', 'POST', {name: bookmark_name, url: url}, function(data, status_code) {
      callback(_parseResponse(data), _hasError(status_code));
    });
  }


  // Private Functions
  var _adminApiCall = function(path, method, params, callback){
    var request_path = _url + 'admin/' + path + '.json?api_key=' + _api_key;

    request({uri: request_path, method: method, form: params}, function(error, response, body) {
      var status_code = _getStatusCode(response);
      var return_value = body;
      if(error)
        return_value = error.message;

      callback(return_value, status_code);
    });
  }

  var _getStatusCode = function(response){
    if(response)
      return response.statusCode;
    else
      return 500;
  }

  var _hasError = function(status_code) {
    return status_code != 200;
  }

  var _parseResponse = function(response) {
    return JSON.parse(response);
  }


  return _self;
}

