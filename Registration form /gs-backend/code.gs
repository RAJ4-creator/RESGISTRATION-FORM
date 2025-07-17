function doPost(e) {
  try {
    var params = e.parameter;

    var name = params.name || "";
    var phone = params.phone || "";
    var email = params.email || "";
    var college = params.college || "";
    var screenshot = params.screenshot || "No screenshot uploaded";  // just filename

    var sheet = SpreadsheetApp
      .openById("1e3Wu4AtFCxMWEeGlQUT2nYe-lYkfDD_HqzDT_OwJ-eg")
      .getSheetByName("Sheet1");

    sheet.appendRow([
      new Date(),
      name,
      phone,
      email,
      college,
      screenshot  // Will likely show only filename, not actual file
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
