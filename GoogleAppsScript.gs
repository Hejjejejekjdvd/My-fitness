/** MY FITNESS private Google Sheets backup endpoint.
 * Run setup() once, then deploy as a Web App: Execute as Me; access Anyone.
 * The sheet itself remains private in your Google Drive. The app uses a random key.
 */
function setup() {
  const props = PropertiesService.getScriptProperties();
  let token = props.getProperty('BACKUP_TOKEN');
  if (!token) {
    token = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
    props.setProperty('BACKUP_TOKEN', token);
  }
  let id = props.getProperty('SHEET_ID');
  let ss;
  if (id) {
    try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; }
  }
  if (!ss) {
    ss = SpreadsheetApp.create('MY FITNESS — Private Backup');
    props.setProperty('SHEET_ID', ss.getId());
    const sh = ss.getSheets()[0];
    sh.setName('Backup');
    sh.getRange('A1:B2').setValues([['Last updated (UTC)', 'Backup JSON'], ['', '']]);
    sh.setFrozenRows(1);
    sh.setColumnWidth(1, 190);
    sh.setColumnWidth(2, 500);
  }
  Logger.log('BACKUP KEY (copy this into MY FITNESS; do not share): ' + token);
  Logger.log('PRIVATE GOOGLE SHEET: ' + ss.getUrl());
  return ss.getUrl();
}
function doPost(e) {
  try {
    const body = JSON.parse((e.postData && e.postData.contents) || '{}');
    if (!authorized_(body.token)) return json_({ ok: false, error: 'Unauthorized' });
    if (!body.data || !Array.isArray(body.data.weights) || !Array.isArray(body.data.foods) || !Array.isArray(body.data.gyms) || !Array.isArray(body.data.sleeps) || !body.data.goals) return json_({ ok: false, error: 'Invalid backup data' });
    const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SHEET_ID'));
    const sh = ss.getSheetByName('Backup') || ss.insertSheet('Backup');
    const serialized = JSON.stringify(body.data);
    if (serialized.length > 45000) return json_({ ok: false, error: 'Backup too large' });
    sh.getRange('A1:B2').setValues([['Last updated (UTC)', 'Backup JSON'], [new Date(), serialized]]);
    return json_({ ok: true, savedAt: new Date().toISOString() });
  } catch (err) { return json_({ ok: false, error: String(err) }); }
}
function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.action !== 'load' || !authorized_(p.token)) return jsonp_(p.callback, { ok: false, error: 'Unauthorized or invalid request' });
  try {
    const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('SHEET_ID'));
    const sh = ss.getSheetByName('Backup');
    const raw = sh ? sh.getRange('B2').getValue() : '';
    if (!raw) return jsonp_(p.callback, { ok: false, error: 'No backup has been saved yet' });
    return jsonp_(p.callback, { ok: true, data: JSON.parse(raw), savedAt: sh.getRange('A2').getDisplayValue() });
  } catch (err) { return jsonp_(p.callback, { ok: false, error: String(err) }); }
}
function authorized_(token) {
  const saved = PropertiesService.getScriptProperties().getProperty('BACKUP_TOKEN');
  return !!saved && !!token && token === saved;
}
function json_(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
function jsonp_(callback, obj) {
  if (!callback || !/^[A-Za-z0-9_.$]+$/.test(callback)) callback = 'callback';
  return ContentService.createTextOutput(callback + '(' + JSON.stringify(obj).replace(/</g, '\\u003c') + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
}
