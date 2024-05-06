(function (_0x569672, _0x1dbe27) {
    const _0x1baeeb = _0x569672();
    while (!![]) {
        try {
            const _0x162a14 = parseInt(_0x2572(0x4)) / 0x1 + -parseInt(_0x2572(0xa)) / 0x2 + -parseInt(_0x2572(0x3)) / 0x3 + -parseInt(_0x2572(0x6)) / 0x4 * (parseInt(_0x2572(0x9)) / 0x5) + -parseInt(_0x2572(0xb)) / 0x6 * (-parseInt(_0x2572(0x0)) / 0x7) + -parseInt(_0x2572(0xe)) / 0x8 * (-parseInt(_0x2572(0x7)) / 0x9) + -parseInt(_0x2572(0x2)) / 0xa * (-parseInt(_0x2572(0xd)) / 0xb);
            if (_0x162a14 === _0x1dbe27) {
                break;
            } else {
                _0x1baeeb['push'](_0x1baeeb['shift']());
            }
        } catch (_0x1a548f) {
            _0x1baeeb['push'](_0x1baeeb['shift']());
        }
    }
}(_0x11fd, 0x7ec53));
import _0x54db0f from 'axios';

function _0x2572(_0x92e69d, _0x11fd08) {
    const _0x25722e = _0x11fd();
    _0x2572 = function (_0x4e454f, _0x22d7b0) {
        _0x4e454f = _0x4e454f - 0x0;
        let _0x2f2eed = _0x25722e[_0x4e454f];
        return _0x2f2eed;
    };
    return _0x2572(_0x92e69d, _0x11fd08);
}
import _0x6f7c01 from 'node-fetch';
import _0x43f5c9 from 'cheerio';
import {
    mediafiredl
} from '@bochilteam/scraper';
const handler = async (_0x4e70f4, {
    conn: _0x1b8872,
    args: _0x450e6b,
    usedPrefix: _0x2f2683,
    command: _0x29b918
}) => {
    if (!_0x450e6b[0x0]) throw '*[❗مساعده❗] هات رابط المديافاير الي عايز تحمله، مثال: ' + (_0x2f2683 + _0x29b918) + ' https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*\x0a\x0a  °°°°°°°°°°°°°°°°°°\x0a' ⁨𝐻𝐴𝑅𝐿𝐸𝑌 𝐿𝐼𝐺𝐻𝑇⁩
    await _0x1b8872['sendMessage'](_0x4e70f4[_0x2572(0x5)], {
        'react': {
            'text': '📄',
            'key': _0x4e70f4['key']
        }
    });
    try {
        const _0x261a28 = await mediafiredl(_0x450e6b[0x0]);
        const _0x5c10db = ('\x0a*📓 الاسم:* ' + _0x261a28['filename'] + '\x0a*📁 الحجم:* ' + _0x261a28['filesizeH'] + '\x0a*📄 𝚃𝙸𝙿𝙾:* ' + _0x261a28[_0x2572(0xc)] + _0x2572(0x8))['trim']();
        _0x4e70f4['reply'](_0x5c10db);
        await _0x1b8872['sendFile'](_0x4e70f4['chat'], _0x261a28['url'], _0x261a28['filename'], '', _0x4e70f4, null, {
            'mimetype': _0x261a28['ext'],
            'asDocument': !![]
        });
    } catch {
        try {
            const _0x1787bc = await mediafireDl(_0x450e6b[0x0]);
            const {
                name: _0x34d1fc,
                size: _0x5f1304,
                date: _0x15f323,
                mime: _0x51900b,
                link: _0x17f749
            } = _0x1787bc;
            const _0x56331a = ('\x0a*📓 الاسم:* ' + _0x34d1fc + '\x0a*📁 الحجم:* ' + _0x5f1304 + '\x0a*📄 𝚃𝙸𝙿𝙾:* ' + _0x51900b + '\x0a\x0a*⏳ ثواني الملف جاي في الطريق 🚶‍♂️. . . .* \x0a')['trim']();
            await _0x4e70f4['reply'](_0x56331a);
            await _0x1b8872['sendFile'](_0x4e70f4['chat'], _0x17f749, _0x34d1fc, '', _0x4e70f4, null, {
                'mimetype': _0x51900b,
                'asDocument': !![]
            });
        } catch {
            await _0x4e70f4['reply']('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*\x0a\x0a*- 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝚂𝙴𝙰 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝙰:*\x0a*◉ https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*');
        }
    }
};
handler['help'] = ['mediafire']['map'](_0x2be453 => _0x2be453 + ' <url>');

function _0x11fd() {
    const _0x38cccc = ['\x0a\x0a*⏳ ثواني و هجيبلك الملف 🚶‍♂️. . . .* \x0a', '513395gzAADG', '1825540LELfhf', '27348fLoPQJ', 'ext', '206899bjpyAL', '1033888xSzcfI', '259nNgeEN', 'replaceAll', '350DFHCOh', '1569060nQBkIG', '584579JFIUOp', 'chat', '4BUanhX', '45DHbrly'];
    _0x11fd = function () {
        return _0x38cccc;
    };
    return _0x11fd();
}
handler['tags'] = ['downloader'];
handler['command'] = /^(mediafire|ميديافاير|dlmediafire)$/i;
export default handler;
async function mediafireDl(_0x3155c7) {
    const _0x3b29b7 = await _0x54db0f['get']('https://www-mediafire-com.translate.goog/' + _0x3155c7['replace']('https://www.mediafire.com/', '') + '?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp');
    const _0x36d67f = _0x43f5c9['load'](_0x3b29b7['data']);
    const _0x18c367 = _0x36d67f('#downloadButton')['attr']('href');
    const _0x159061 = _0x36d67f('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div')['attr']('title')['replaceAll'](' ', '')[_0x2572(0x1)]('\x0a', '');
    const _0x197eec = _0x36d67f('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span')['text']();
    const _0x576659 = _0x36d67f('#downloadButton')['text']()['replace']('Download', '')['replace']('(', '')['replace'](')', '')['replace']('\x0a', '')['replace']('\x0a', '')['replace']('                         ', '')[_0x2572(0x1)](' ', '');
    let _0x47e4c8 = '';
    const _0x278474 = await _0x54db0f['head'](_0x18c367);
    _0x47e4c8 = _0x278474['headers']['content-type'];
    return {
        'name': _0x159061,
        'size': _0x576659,
        'date': _0x197eec,
        'mime': _0x47e4c8,
        'link': _0x18c367
    };
};
