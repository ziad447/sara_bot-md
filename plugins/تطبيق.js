function _0x439f(_0x2d89c8, _0x285b52) {
    const _0x439f37 = _0x285b();
    _0x439f = function (_0x30f567, _0x4c5aa3) {
        _0x30f567 = _0x30f567 - 0x0;
        let _0x2a1dfd = _0x439f37[_0x30f567];
        return _0x2a1dfd;
    };
    return _0x439f(_0x2d89c8, _0x285b52);
}(function (_0x26f28a, _0x49603c) {
    const _0x4dde00 = _0x26f28a();
    while (!![]) {
        try {
            const _0x205c6e = -parseInt(_0x439f(0x2)) / 0x1 + -parseInt(_0x439f(0x0)) / 0x2 + -parseInt(_0x439f(0x8)) / 0x3 + -parseInt(_0x439f(0x5)) / 0x4 + -parseInt(_0x439f(0x6)) / 0x5 + parseInt(_0x439f(0x3)) / 0x6 * (-parseInt(_0x439f(0x9)) / 0x7) + -parseInt(_0x439f(0xb)) / 0x8 * (-parseInt(_0x439f(0x4)) / 0x9);
            if (_0x205c6e === _0x49603c) {
                break;
            } else {
                _0x4dde00['push'](_0x4dde00['shift']());
            }
        } catch (_0x1772d4) {
            _0x4dde00['push'](_0x4dde00['shift']());
        }
    }
}(_0x285b, 0x848b6));
import {
    search,
    download
} from 'aptoide-scraper';
const handler = async (_0x3c6cd0, {
    conn: _0x1bb9dd,
    usedPrefix: _0x240798,
    command: _0x31d79f,
    text: _0x44a5e5
}) => {
    if (!_0x44a5e5) throw '*[👾]حط اسم اللتطبيق اللي عايز تنزلوا*\x0a\x0a*مثل:*\x0a*.تطبيق google play*\x0a' + global[_0x439f(0x7)];
    await _0x1bb9dd['sendMessage'](_0x3c6cd0['chat'], {
        'react': {
            'text': '👾',
            'key': _0x3c6cd0['key']
        }
    });
    try {
        const _0x3d7373 = await search(_0x44a5e5);
        const _0x233d4a = await download(_0x3d7373[0x0]['id']);
        let _0x4629c6 = '📲 _*انتظر قليلاً*_ 📲\x0a\x0a📌 _*الاسـم:*_ ' + _0x233d4a['name'] + '\x0a📦 _*الـطَـرد:*_ ' + _0x233d4a['package'] + '\x0a🕒 _*الانـتـاج:*_ ' + _0x233d4a['lastup'] + '\x0a📥 _*الحجم:*_ ' + _0x233d4a['size'] + '\x0a' + global['anabro'];
        await _0x1bb9dd['sendMessage'](_0x3c6cd0['chat'], {
            'image': {
                'url': _0x233d4a['icon']
            },
            'caption': _0x4629c6
        }, {
            'quoted': _0x3c6cd0
        });
        if (_0x233d4a['size']['includes']('GB') || _0x233d4a['size'][_0x439f(0xa)](' MB', '') > 0x3e7) {
            return await _0x1bb9dd['sendMessage'](_0x3c6cd0['chat'], {
                'text': '*[ ⛔ ] حجم الملف كبير جداً لا يمكنني إرساله.*'
            }, {
                'quoted': _0x3c6cd0
            });
        }
        await _0x1bb9dd['sendMessage'](_0x3c6cd0['chat'], {
            'document': {
                'url': _0x233d4a['dllink']
            },
            'mimetype': _0x439f(0x1),
            'fileName': _0x233d4a['name'] + '.apk',
            'caption': null
        }, {
            'quoted': _0x3c6cd0
        });
    } catch {
        throw '*[❗] اسف لاكن التطبيق الذي طلبته ليس موجود في القائمه.*';
    }
};
handler['command'] = /^(apkmod|modapk|dapk2|تطبيق|aptoidedl)$/i;
export default handler;

function _0x285b() {
    const _0x2163e4 = ['3053697QkybRA', '201397qIZEYg', 'replace', '1328zpphVQ', '1564846vNEFwo', 'application/vnd.android.package-archive', '675896dbuuvX', '174vaHYeR', '255699RqtpLR', '119568YGvxZj', '4164275Refwwn', 'veeeee'];
    _0x285b = function () {
        return _0x2163e4;
    };
    return _0x285b();
}
