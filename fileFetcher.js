const fileFetcher = {
    url: function(urlToGet) {
        var request = new XMLHttpRequest();
        request.open('GET', urlToGet, false);
        request.send();
        if (request.status != 200) {
            console.error(request.status.toString() + " error from XMLHttpRequest of file at location " + urlToGet);
        } else {
            return request;
        }
    },
    readTextValue: function(XMLHttpRequestObj) {
        return XMLHttpRequestObj.responseText;
    },
    readXMLValue: function(XMLHttpRequestObj) {
        return XMLHttpRequestObj.responseXML;
    },
    readJSON: function(XMLHttpRequestObj) {
        return JSON.parse(XMLHttpRequestObj.responseText);
    },
    readBinary: function(XMLHttpRequestObj) {
        uInt8Array = new Uint8Array(XMLHttpRequestObj.response);
        for (i = 0; i < uInt8Array.length; i++) {
            uInt8Array[i] = XMLHttpRequestObj.response[i];
        }
        return uInt8Array;
    }
};