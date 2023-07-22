endpoint = `https://api.vandien.dev`
message_list = [
{
    icon: 'fa-solid fa-star-exclamation',
    title: 'Chào mừng bạn đến với website',
    timing: '1676050831506'
}];
item_list = [{
        name: 'AI',
        icon: 'fa-solid fa-microchip-ai',
        item: [{
            "event": "NEW",
            "url": '/ai/chatgpt?message=Bạn là ai?',
            "name": "ChatGPT",
            "method": "GET",
            "id": "_34",
            "note": "Phản hồi có thể rất lâu do máy chủ quá nhiều người dùng, bạn nên chat bằng tiếng anh để có phản hồi nhanh hơn"
        }]
    },
    {
        name: 'Canvas',
        icon: 'fa-duotone fa-images',
        item: [{
            "url": '/canvas/anime-list',
            "name": "Anime List",
            "method": "GET",
            "id": "_36",
            "note": "Danh sách anime"
        },
        {
            "url": '/canvas/avatar-anime?id=800&chu_nen=Phạm Văn Diện&chu_ky=d-jukie',
            "name": "Anime Avatar",
            "method": "GET",
            "id": "_37",
            "note": "Thay thế ID anime, tên người dùng và chữ ký vào. Xem danh sách ID ở mục Anime List"
        },
        {
            "url": '/canvas/blink?id=4,100004253741257',
            "name": "Blink",
            "method": "GET",
            "id": "_38",
            "note": "Nhập list ID dưới dạng id1,id2,id3,..."
        },
        {
            "url": '/canvas/cover-anime?id=744&name=Phạm Văn Diện&subname=D-Jukie',
            "name": "Cover Anime",
            "method": "GET",
            "id": "_39",
            "note": "Thay thế ID anime, tên người dùng và tên phụ vào. Xem danh sách ID ở mục Anime List"
        },
        {
            "url": '/canvas/cover-fb?uid=4&sdt=03333333&subname=D-Jukie&email=@phamvandienofficial&address=VN&name=Văn Diện',
            "name": "Cover Facebook V1",
            "method": "GET",
            "id": "_41",
            "note": "Thay thế ID Facebook, số điện thoại, tên phụ, email, địa chỉ, tên vào"
        },
        {
            "url": '/canvas/cover-fb-v2?uid=4&birthday=1/1/2004&love=Hi&location=HCM&hometown=HCM&name=Văn Diện&follow=300000&gender=Nam',
            "name": "Cover Facebook V2",
            "method": "GET",
            "id": "_40",
            "note": "Thay thế ID Facebook, ngày sinh, hẹn hò, địa chỉ, quê quán, số người theo dõi, giới tính vào"
        },
        {
            "url": '/canvas/christmas?text=Phạm Văn Diện',
            "name": "Giáng sinh",
            "method": "GET",
            "id": "_42",
            "note": null
        },
        {
            "url": '/canvas/thuphap?id=3&line=1&line_1=Phạm Văn Diện',
            "name": "Thư pháp",
            "method": "GET",
            "id": "_43",
            "note": "ID từ 0 đến 3 và line từ 1 đến 3 đi kèm theo đó là line_1, line_2, line_3"
        },
        {
            "url": '/canvas/tiki?text=Phạm Văn Diện',
            "name": "Đi cùng Tiki",
            "method": "GET",
            "id": "_44",
            "note": null
        },
        ]
    }, {
        name: 'Facebook',
        icon: 'fa-brands fa-facebook',
        item: [{
                "url": '/fb/finduid?url=https://www.facebook.com/PhamVanDien.User/',
                "name": "Find UID",
                "method": "GET",
                "id": "_10",
                "note": null
            },
            {
                "url": '/fb/getinfo?id=100004253741257',
                "name": "Get Info",
                "method": "GET",
                "id": "_11",
                "note": "Nếu có lỗi vui lòng báo cáo "
            },
            {
                "url": '/fb/fbvideo?url=https://www.facebook.com/watch?v=587760489446657',
                "name": "Get Link Download",
                "method": "GET",
                "id": "_12",
                "note": null
            },
            {
                "event": "NEW",
                "url": '/fb/cmt',
                "name": "Comment(token)",
                "body": {
                    "id": "xxx",
                    "message": "text",
                    "token": "EAAA..."
                },
                "method": "POST",
                "id": "_24",
                "note": "Thay thế ID bài viết, Nội dung và Token vào"
            },
            {
                "event": "NEW",
                "url": '/fb/getcookie?token=EAAA',
                "name": "Get Cookie(token)",
                "method": "GET",
                "id": "_25",
                "note": "Thay thế Token vào, nếu muốn lấy cookie từ username, password thì vào mục Get Token EAAD6V7"
            },
            {
                "event": "NEW",
                "url": '/fb/like?id=4&token=EAAA',
                "name": "Like(token)",
                "method": "GET",
                "id": "_26",
                "note": "Thay thế Token và ID vào, có thể là ID bình luận hoặc bài viết"
            },
            {
                "event": "NEW",
                "url": '/fb/share?id=4&token=EAAA&message=text&published=0&privacy=SELF',
                "name": "Share(token)",
                "method": "GET",
                "id": "_27",
                "note": "Thay thế ID bài viết, Token, Nội dung, Hiển thị trên trang cá nhân (published=1) và quyền riêng tư (SELF: Chỉ mình tôi, EVERYONE: Công khai)"
            },
            {
                "event": "NEW",
                "url": '/fb/subcribe?id=4&token=EAAA',
                "name": "Follow FB(token)",
                "method": "GET",
                "id": "_28",
                "note": "Thay thế ID người dùng cần Follow và Token vào"
            },
            {
                "event": "NEW",
                "url": '/fb/gettoken?username=100084178093220&password=123456a@&twofactor=SN62 5D3H PFUW FYIA EXEQ CN3J L65A 577P&_2fa=0',
                "name": "Get Token EAAD6V7",
                "method": "GET",
                "id": "_29",
                "note": "Thay thế username, password và twofactor(Code OTP lúc bật 2FA) hoặc _2fa(mã đã được lấy sẵn). twofactor và _2fa chỉ điền 1 cái và cái còn lại là 0 hoặc không điền gì cả"
            }
        ]
    },
    {
        name: 'TikTok',
        icon: 'fa-brands fa-tiktok',
        item: [{
            "url": "/tiktok/video?url=https://www.tiktok.com/@_nastlee_/video/7189368687277657345",
            "name": "TikTok Download",
            "method": "GET",
            "id": "_13",
            "note": "Có thể điền link TikTok hoặc Douyin"
        },
        {
            "url": "/tiktok/info?username=meme.meme.198",
            "name": "TikTok Info",
            "method": "GET",
            "id": "_45",
            "note": null
        }]
    },
    {
        name: 'League of Legends',
        icon: 'fa fa-gamepad',
        item: [{
            "event": "NEW",
            "url": "/lol/info?name=ngay mai se khat&history=false",
            "name": "Get Info",
            "method": "GET",
            "id": "_46",
            "note": "Nếu muốn lấy lịch sử trận đấu thì đổi giá trị history=true"
        },
        {
            "event": "NEW",
            "url": "/lol/champion?name=ahri",
            "name": "Get Champion",
            "method": "GET",
            "id": "_47",
            "note": null
        },
        {
            "event": "NEW",
            "url": "/lol/top-player-vn",
            "name": "Top Player VN",
            "method": "GET",
            "id": "_48",
            "note": 'Lấy top 100 người chơi có điểm cao nhất VN'
        },
        {
            "event": "NEW",
            "url": "/lol/check-player-playing?name=ngay mai se khat",
            "name": "Check Player Playing",
            "method": "GET",
            "id": "_49",
            "note": 'Kiểm tra người chơi đang có trong trận đấu hay không'
        }]
    },
    {
        name: 'Service',
        icon: 'fa fa-magic',
        item: [{
                "url": '/shorten?url=https://www.youtube.com/watch?v=Jk38OqdAQxc',
                "name": "Short Url",
                "method": "GET",
                "id": "_14",
                "note": "Short nhưng có thể khiến url dài hơn =)))"
            },
            {
                "event": "NEW",
                "url": '/text-to-speech?text=xin chào&lang=vi-vn',
                "name": "Text to Speech",
                "method": "GET",
                "id": "_30",
                "note": "Văn bản thành giọng nói",
                "redirect": true
            },
            {
                "event": "NEW",
                "url": '/speech-to-text?url=' + endpoint + '/text-to-speech?text=xin chào&lang=vi-vn',
                "name": "Speech to Text",
                "method": "GET",
                "id": "_31",
                "note": "Giọng nói thành văn bản, File giọng nói cần ngắn gọn"
            },
            {
                "event": "NEW",
                "url": '/media/convert?url=https://api.vandien.dev/text-to-speech?text=xin%20chào&lang=vi-vn',
                "name": "Hide Url File",
                "method": "GET",
                "id": "_32",
                "note": "Ẩn liên kết gốc của bạn bằng Base64 và không ai rảnh ngồi decode nó cả"
            },
            {
                "event": "NEW",
                "url": '/upcode',
                "name": "Upcode",
                "body": {
                    "code": "console.log('Hello World!'}"
                },
                "method": "POST",
                "id": "_33",
                "note": "Tải lên code của bạn"
            },
            {
                "url": '/useragent',
                "name": "Random User-Agent",
                "method": "GET",
                "id": "_23",
                "note": null
            },
            {
                "url": '/twofactor?auth=KDGY JJAO HSUU BDFR',
                "name": "Get Code 2FA",
                "method": "GET",
                "id": "_35",
                "note": null
            }
        ]
    },
    {
        name: 'Pinterest',
        icon: 'fa-brands fa-pinterest',
        item: [{
            "url": '/image/pinterest?query=mirai',
            "name": "Search",
            "method": "GET",
            "id": "_15",
            "note": "Tìm kiếm theo keyword"
        }]
    },
    {
        name: 'Random Images',
        icon: 'fa-solid fa-images',
        item: [{
                "event": 'NSFW',
                "url": '/images/girl',
                "name": "Girl",
                "method": "GET",
                "id": "_16",
                "note": "Random URL IMAGE"
            },
            {
                "event": 'NSFW',
                "url": '/images/anime',
                "name": "Anime",
                "method": "GET",
                "id": "_17",
                "note": "Random URL IMAGE"
            }
        ]
    },
    {
        name: 'Simsimi',
        icon: 'fa-solid fa-message-bot',
        item: [{
                "url": '/simsimi?type=ask&ask=sim ơi',
                "name": "Ask",
                "method": "GET",
                "id": "_18",
                "note": "Thay thế từ cần hỏi vào ask, nó có thể trả lời rất ngu"
            },
            {
                "url": '/simsimi?type=teach&ask=sim ơi&ans=ơii',
                "name": "Teach",
                "method": "GET",
                "id": "_19",
                "note": "Dạy nó đi, thay câu hỏi và câu trả lời vào lần lượt ask và ans"
            }
        ]
    },
    {
        name: 'Games',
        icon: 'fa-solid fa-gamepad',
        item: [{
                "url": '/game/dhbc?version=1',
                "name": "Đuổi hình bắt chữ",
                "method": "GET",
                "id": "_20",
                "note": "Thay thế Version, có version 1 và 2"
            },
            {
                "url": '/game/words?word=Xin chào',
                "name": "Nối từ",
                "method": "GET",
                "id": "_21",
                "note": "Nối từ, nếu muốn lấy 2 từ ngẫu nhiên thì điền số 0 vào word"
            },
            {
                "url": '/game/taixiu',
                "name": "Tài xỉu",
                "method": "GET",
                "id": "_22",
                "note": null
            }
        ]
    },
    {
        name: 'Liên hệ Admin',
        icon: 'fas fa-user-headset',
        item: [{
            admin: true,
            event: 'DO NOT SPAM',
            url: 'https://www.facebook.com/PhamVanDien.User/',
            method: "GET",
            name: 'Facebook',
            id: "_99"
        }]
    }
];