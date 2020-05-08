
//按字节数截取字符串
function rebyteStr(pLen) {

    let _ret = cutString(this, pLen)
    let _cutFlag = _ret.cutflag
    let _cutStringn = _ret.cutstring

    if ("1" === _cutFlag)
        return _cutStringn + "..."
    else
        return _cutStringn

}

function cutString(pStr, pLen) {

    // 原字符串长度
    var _strLen = pStr.length;

    var _tmpCode;

    var _cutString;

    // 默认情况下，返回的字符串是原字符串的一部分
    var _cutFlag = "1";

    var _lenCount = 0;

    var _ret = false;

    if (_strLen <= pLen/2) {
        _cutString = pStr;
        _ret = true;
    }

    if (!_ret) {
        for (var i = 0; i < _strLen ; i++ ) {
            if (isFull(pStr.charAt(i))) {
                _lenCount += 2;
            } else {
                _lenCount += 1;
            }

            if (_lenCount > pLen) {
                _cutString = pStr.substring(0, i);
                _ret = true;
                break;
            } else if (_lenCount == pLen) {
                _cutString = pStr.substring(0, i + 1);
                _ret = true;
                break;
            }
        }
    }

    if (!_ret) {
        _cutString = pStr;
        _ret = true;
    }

    if (_cutString.length == _strLen) {
        _cutFlag = "0";
    }

    return {"cutstring":_cutString, "cutflag":_cutFlag};
}

function isFull (pChar) {
    for (var i = 0; i < pChar.strLen ; i++ ) {
        if ((pChar.charCodeAt(i) > 128)) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = rebyteStr
