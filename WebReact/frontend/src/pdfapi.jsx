import $ from "jquery";
module.exports = {
  _callAPI: function(url, method, data, target) {
    $.ajax({
      url: url,
      method: method,
      data: data,
      processData: true,
      dataType: "json",
      contentType: "application/octet-stream",
      success: (data, textStatus, jqXHR) => {
        target("success", data);
      },
      error: (jqXhr, textStatus, error) => {
        target("error", jqXhr, textStatus, error);
      }
    });
  }
};
