import $ from "jquery";
import React from 'react';
//import dispatcher from "../dispatchers/dispatcher";
export default React.fragment = {
  _callAPI: function(url, method, data, target) {
    $.ajax({
      url: url,
      method: method,
      data: data,
      processData: true,
      dataType: "json",
      contentType: "application/json",

      success: (data, textStatus, jqXHR) => {
        target("success", data);
      },
      error: (jqXhr, textStatus, error) => {
        target("error", jqXhr, textStatus, error);
      }
    });
  }
};
