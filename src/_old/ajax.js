
  ajax: {
    _cache: {},
    /**
     * send ajax request using $.ajax
     * @param {Object} args
     * @param {Object} args.options $.ajax options -> @see http://api.jquery.com/jquery.ajax/
     *   default: { type: 'POST', dataType: 'json', cache: false, xhrFields: { withCredentials: true } }}
     * @param {Object} args.data
     * @param {string} args.url
     * @param {boolean} args.cache
     * @param {boolean} args.upload
     * @param {boolean} args.xhr return the xhr object, for call "abort" (especially for upload)
     * .. timeout
     * @param {function()} args.callback
     */
    request: function (args) {
      if (args.cache && tools.ajax._cache[args.url]) {
        args.callback && args.callback(tools.ajax._cache[args.url])
        return
      }

      if (!args.options) {
        args.options = {}
      }
      if (!args.data) {
        args.data = {}
      } else {
        for (var i in args.data) {
          if (args.data[i] instanceof Date) {
            args.data[i] = args.data[i].toISOString()
          } else if (!tools.core.isSet(args.data[i])) {
            delete args.data[i]
          }
        }
      }

      var defaults = {
        type: 'POST',
        dataType: 'json',
        cache: false,
        xhrFields: { withCredentials: true },
        success: function (response, textStatus, XMLHttpRequest) {
          if (tools.ajax.error(response)) {
            args.callback && args.callback(response, textStatus)
          } else {
            args.callback && args.callback(response, textStatus, XMLHttpRequest)

            if (args.cache && !tools.ajax._cache[args.url]) {
              tools.ajax._cache[args.url] = response
            }
          }
        },
        error: function (xhr, textStatus, errorThrown) {
          if (xhr.status !== 0 || (!args.upload && (textStatus === 'abort' || textStatus === 'timeout'))) {
            args.callback(xhr, textStatus, errorThrown)
          }
        }
      }

      var _options = tools.object.clone(args.options)
      if (args.upload) {
        _options = tools.ajax._upload(_options)
      }

      $.ajax($.extend(defaults, _options))

      if (args.xhr) {
        return args.xhr
      }
    },

    _upload: function (options) {
      var _formData = new FormData()
      for (var _var in options.data) {
        var _val = options.data[_var]
        if (_val instanceof Blob || _val instanceof File) {
          _formData.append(_var, _val, _val._filename || _var)
        } else if (_val instanceof Array) {
          for (var i in _val) {
            _formData.append(_var + '[' + i + ']', _val[i])
          }
        } else if (_val instanceof Object) {
          _formData.append(_var, JSON.stringify(_val))
        } else {
          _formData.append(_var, _val)
        }
      }

      options.data = _formData
      options.contentType = false
      options.processData = false

      options.xhr = function () {
        var _xhr = $.ajaxSettings.xhr()
        _xhr.upload && _xhr.upload.addEventListener('progress', options.progress, false)
        return _xhr
      }
      return options
    },

    error: function (response) {
      if (!response) return true

      if (response.error) {
        return true
      }
      return false
    }
  }

}
