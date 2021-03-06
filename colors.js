/*
  colors specificied by the TIA Color Chart in the Stella programming Guide

  http://www.qotile.net/minidig/docs/tia_color.html
  var table = {};
  document.querySelectorAll('td[title^="VALUE"]').forEach(function(el){ 
    var title = el.title.split("\n");
    var keys = title[0].replace("VALUE: ", "").split(" / ");
    var hex = title[1].replace("RGB: ","");
    table[keys[0]] = hex;
    table[keys[1]] = hex;
  });
  var code = document.createElement('code');
  var pre = document.createElement('pre');
  code.textContent = JSON.stringify(table, null, 2); 
  pre.appendChild(code);
  document.body.appendChild(pre);
 */

var NTSC_COLORS = {
  "10": "#444400",
  "11": "#444400",
  "12": "#646410",
  "13": "#646410",
  "14": "#848424",
  "15": "#848424",
  "16": "#A0A034",
  "17": "#A0A034",
  "18": "#B8B840",
  "19": "#B8B840",
  "20": "#702800",
  "21": "#702800",
  "22": "#844414",
  "23": "#844414",
  "24": "#985C28",
  "25": "#985C28",
  "26": "#AC783C",
  "27": "#AC783C",
  "28": "#BC8C4C",
  "29": "#BC8C4C",
  "30": "#841800",
  "31": "#841800",
  "32": "#983418",
  "33": "#983418",
  "34": "#AC5030",
  "35": "#AC5030",
  "36": "#C06848",
  "37": "#C06848",
  "38": "#D0805C",
  "39": "#D0805C",
  "40": "#880000",
  "41": "#880000",
  "42": "#9C2020",
  "43": "#9C2020",
  "44": "#B03C3C",
  "45": "#B03C3C",
  "46": "#C05858",
  "47": "#C05858",
  "48": "#D07070",
  "49": "#D07070",
  "50": "#78005C",
  "51": "#78005C",
  "52": "#8C2074",
  "53": "#8C2074",
  "54": "#A03C88",
  "55": "#A03C88",
  "56": "#B0589C",
  "57": "#B0589C",
  "58": "#C070B0",
  "59": "#C070B0",
  "60": "#480078",
  "61": "#480078",
  "62": "#602090",
  "63": "#602090",
  "64": "#783CA4",
  "65": "#783CA4",
  "66": "#8C58B8",
  "67": "#8C58B8",
  "68": "#A070CC",
  "69": "#A070CC",
  "70": "#140084",
  "71": "#140084",
  "72": "#302098",
  "73": "#302098",
  "74": "#4C3CAC",
  "75": "#4C3CAC",
  "76": "#6858C0",
  "77": "#6858C0",
  "78": "#7C70D0",
  "79": "#7C70D0",
  "80": "#000088",
  "81": "#000088",
  "82": "#1C209C",
  "83": "#1C209C",
  "84": "#3840B0",
  "85": "#3840B0",
  "86": "#505CC0",
  "87": "#505CC0",
  "88": "#6874D0",
  "89": "#6874D0",
  "90": "#00187C",
  "91": "#00187C",
  "92": "#1C3890",
  "93": "#1C3890",
  "94": "#3854A8",
  "95": "#3854A8",
  "96": "#5070BC",
  "97": "#5070BC",
  "98": "#6888CC",
  "99": "#6888CC",
  "00": "#000000",
  "01": "#000000",
  "A0": "#002C5C",
  "A1": "#002C5C",
  "B0": "#003C2C",
  "B1": "#003C2C",
  "C0": "#003C00",
  "C1": "#003C00",
  "D0": "#143800",
  "D1": "#143800",
  "E0": "#2C3000",
  "E1": "#2C3000",
  "F0": "#442800",
  "F1": "#442800",
  "02": "#404040",
  "03": "#404040",
  "A2": "#1C4C78",
  "A3": "#1C4C78",
  "B2": "#1C5C48",
  "B3": "#1C5C48",
  "C2": "#205C20",
  "C3": "#205C20",
  "D2": "#345C1C",
  "D3": "#345C1C",
  "E2": "#4C501C",
  "E3": "#4C501C",
  "F2": "#644818",
  "F3": "#644818",
  "04": "#6C6C6C",
  "05": "#6C6C6C",
  "A4": "#386890",
  "A5": "#386890",
  "B4": "#387C64",
  "B5": "#387C64",
  "C4": "#407C40",
  "C5": "#407C40",
  "D4": "#507C38",
  "D5": "#507C38",
  "E4": "#687034",
  "E5": "#687034",
  "F4": "#846830",
  "F5": "#846830",
  "06": "#909090",
  "07": "#909090",
  "A6": "#5084AC",
  "A7": "#5084AC",
  "B6": "#509C80",
  "B7": "#509C80",
  "C6": "#5C9C5C",
  "C7": "#5C9C5C",
  "D6": "#6C9850",
  "D7": "#6C9850",
  "E6": "#848C4C",
  "E7": "#848C4C",
  "F6": "#A08444",
  "F7": "#A08444",
  "08": "#B0B0B0",
  "09": "#B0B0B0",
  "A8": "#689CC0",
  "A9": "#689CC0",
  "B8": "#68B494",
  "B9": "#68B494",
  "C8": "#74B474",
  "C9": "#74B474",
  "D8": "#84B468",
  "D9": "#84B468",
  "E8": "#9CA864",
  "E9": "#9CA864",
  "F8": "#B89C58",
  "F9": "#B89C58",
  "0A": "#C8C8C8",
  "0B": "#C8C8C8",
  "1A": "#D0D050",
  "1B": "#D0D050",
  "2A": "#CCA05C",
  "2B": "#CCA05C",
  "3A": "#E09470",
  "3B": "#E09470",
  "4A": "#E08888",
  "4B": "#E08888",
  "5A": "#D084C0",
  "5B": "#D084C0",
  "6A": "#B484DC",
  "6B": "#B484DC",
  "7A": "#9488E0",
  "7B": "#9488E0",
  "8A": "#7C8CE0",
  "8B": "#7C8CE0",
  "9A": "#7C9CDC",
  "9B": "#7C9CDC",
  "AA": "#7CB4D4",
  "AB": "#7CB4D4",
  "BA": "#7CD0AC",
  "BB": "#7CD0AC",
  "CA": "#8CD08C",
  "CB": "#8CD08C",
  "DA": "#9CCC7C",
  "DB": "#9CCC7C",
  "EA": "#B4C078",
  "EB": "#B4C078",
  "FA": "#D0B46C",
  "FB": "#D0B46C",
  "0C": "#DCDCDC",
  "0D": "#DCDCDC",
  "1C": "#E8E85C",
  "1D": "#E8E85C",
  "2C": "#DCB468",
  "2D": "#DCB468",
  "3C": "#ECA880",
  "3D": "#ECA880",
  "4C": "#ECA0A0",
  "4D": "#ECA0A0",
  "5C": "#DC9CD0",
  "5D": "#DC9CD0",
  "6C": "#C49CEC",
  "6D": "#C49CEC",
  "7C": "#A8A0EC",
  "7D": "#A8A0EC",
  "8C": "#90A4EC",
  "8D": "#90A4EC",
  "9C": "#90B4EC",
  "9D": "#90B4EC",
  "AC": "#90CCE8",
  "AD": "#90CCE8",
  "BC": "#90E4C0",
  "BD": "#90E4C0",
  "CC": "#A4E4A4",
  "CD": "#A4E4A4",
  "DC": "#B4E490",
  "DD": "#B4E490",
  "EC": "#CCD488",
  "ED": "#CCD488",
  "FC": "#E8CC7C",
  "FD": "#E8CC7C",
  "0E": "#ECECEC",
  "0F": "#ECECEC",
  "1E": "#FCFC68",
  "1F": "#FCFC68",
  "2E": "#ECC878",
  "2F": "#ECC878",
  "3E": "#FCBC94",
  "3F": "#FCBC94",
  "4E": "#FCB4B4",
  "4F": "#FCB4B4",
  "5E": "#ECB0E0",
  "5F": "#ECB0E0",
  "6E": "#D4B0FC",
  "6F": "#D4B0FC",
  "7E": "#BCB4FC",
  "7F": "#BCB4FC",
  "8E": "#A4B8FC",
  "8F": "#A4B8FC",
  "9E": "#A4C8FC",
  "9F": "#A4C8FC",
  "AE": "#A4E0FC",
  "AF": "#A4E0FC",
  "BE": "#A4FCD4",
  "BF": "#A4FCD4",
  "CE": "#B8FCB8",
  "CF": "#B8FCB8",
  "DE": "#C8FCA4",
  "DF": "#C8FCA4",
  "EE": "#E0EC9C",
  "EF": "#E0EC9C",
  "FE": "#FCE08C",
  "FF": "#FCE08C"
};

// caching RGB values on load
for (let colorKey in NTSC_COLORS) {
  let _hex = NTSC_COLORS[colorKey];
  let rgb = hex2rgb(_hex);
  NTSC_COLORS[colorKey] = {
    hex: _hex,
    r : rgb.r,
    g : rgb.g,
    b : rgb.b
  };
}
