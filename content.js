// FIXME: login form; registration form;
// https://www.101weiqi.com/chessbook/playerlist/
//
const textReplacements = {
    // problems
    '围棋闯关': 'Exam',
    '棋力测试': 'Strength Test',
    '关卡': 'Checkpoint',
    '提供': 'supplier',   // of a problem
    '我的解答': 'My answer',
    '错误': 'Mistake',
    '编号': 'Serial number',
    '旋转棋盘': 'Rotate board',
    '棋盘居中': 'Center board',
    '落子确认关闭中，开启': 'Toggle move confirmation',
    '剩余': 'Remaining',
    '显示答案': 'Show answers',
    '从错题本中删除': 'Remove from mistakes book',
    '请直接用鼠标在棋盘上落子': 'Use the mouse to play stones',
    '注意': 'Notice',
    '只有一次提交解答的机会': 'Only one opportunity to submit answer',
    '只有2次提交解答的机会': 'Only two opportunities to submit answers',
    '只有': 'Only',
    '次提交解答的机会': 'opportunities to submit answers',
    '今日排行榜': "Today's Leaderboard",
    '本题已经通过': 'Problem passed',
    '本题超时未通过': 'Problem failed by timeout',
    '本题未通过': 'Problem failed',
    '創作': 'creation',  // problem author
    '本题收录于': 'Problem is included in',
    '我的评论': 'My comment',
    '添加评论': 'Add comment',
    '隐藏题目审核': 'Hidden review',
    '题目质量': 'Problem quality',
    '我的评分': 'My rating',
    '标注难度': 'Set difficulty',

    // edit problem
    '条修改记录': 'Modification record',
    '所有编辑记录': 'All edit records',
    '编辑记录': 'Edit record',
    '修改类型': 'Modification type',
    '修改前': 'Before modification',
    '修改后': 'After modification',
    '题目知识点': 'Topic category',
    '修改于': 'modified on',   // date

    '死活题': 'life-and-death problem',
    '手筋题': 'Tesuji problem',
    '吃子题': 'Capture problem',
    '定式题': 'Joseki problem',
    '对杀题': 'Capturing race problem',
    '官子题': 'Endgame problem',

    '七路全局': '7x7 whole board',
    '九路全局': '9x9 whole board',

    '闯关结果': 'Results',
    '棋力检测': 'Strength detection',
    '再次闯关': 'Break through again',
    '闯下一关': 'Break the next level',
    '闯关成功': 'Successfully passed the barrier',
    '闯关失败': 'Failed to break through',

    // problem buttons
    '对战': 'Play',
    '试下': 'Try',
    '研究': 'Research',
    '提交答案': 'Submit answer',
    '上一题': 'Previous problem',
    '上 一 题': 'Previous problem',
    '下一题': 'Next problem',
    '下 一 题': 'Next problem',
    '上一步': 'Undo move',
    '上 一 定 式': 'Previous joseki',
    '下 一 定 式': 'Next joseki',

    // /task/
    '尚未完成的作业': 'Unfinished tasks',
    '我的作业列表': 'My task list',
    '作业日期': 'Task date',
    '作业状态': 'State',
    '作业难度': 'Difficulty',
    '题目数量': 'Count',  // number of problems
    '用时': 'Time spent',
    '完成时间': 'Completion date',
    '我的作业模板列表': 'My tasks template list',
    '创建新的作业模板': 'Create a new tasks template',
    '我的作业本': 'My tasks book',
    '作业本名称': 'Workbook name',
    '刚创建': 'Created',
    '已完成': 'Completed',
    '正在做': 'Doing',
    '我的作业': 'My tasks',
    '作业': 'Tasks',
    '得分': 'Score',
    '排行榜': 'Leaderboard',

    // /task/do
    '做一题设置': 'Problem setup',
    '做一题': 'Do problem',
    '今日完成': 'Completed today',
    '做对': 'Correct',
    '正确率': 'Correct rate',
    '平均难度': 'Average difficulty',

    // star
    '我收藏的题目': 'Bookmarked problems',
    '取消收藏': 'Remove bookmark',
    '我的收藏本': 'My collection',
    '我的标签': 'My tags',
    '添加': 'Add',
    '收藏此题': 'Bookmark problem',
    '已经取消': 'Already cancelled',

    // /questionlib
    '级位题目分类': 'Kyu-level classification',
    '段位题目分类': 'Dan-level classification',
    '棋盘大小分类': 'Board size classification',
    '其他分类题目': 'Other classification',
    '官子题目列表': 'Endgame album',
    // topic names have 题目 (topic) at the end, but let's leave that out
    '官子题目': 'Endgame',
    '吃子题目': 'Capture',
    '骗招题目': 'Trick plays',

    // nav and headers
    '我的首页': 'My Home',
    '棋 力 测 试': 'Go Strength Test',
    '围棋闯关-棋力测试': 'Go Strength Test',  // guan
    '每日八题': 'Daily 8 problems',
    '我的错题本': 'My mistakes book',
    '最近棋谱': 'Recent games',
    '贡献较多的棋友名单': 'Top contributors',
    '题库状态': 'Problem library state',
    '题库': 'Library',
    '训练营': 'Training camp',
    '讨论区': 'Forum',
    '对弈': 'Game',
    '棋谱': 'Records',
    '棋书': 'Books',
    '围棋知识点专辑': 'Categories album',
    '围棋考试/挑战赛': 'Go exam/challenge',
    '帮助中心': 'Help center',
    '个人信息设置': 'Personal information settings',

    '错题统计': 'Mistake statistics',
    '错题详细统计': 'Detailed mistake statistics',
    '错题重做': 'Rework mistakes',

    // book and player names
    '玄玄棋经': 'Gengen Gokyo',
    '棋经众妙': 'Gokyo Shumyo',
    '官子谱': 'Kanzufu',
    '围棋死活辞典-濑越宪作': 'Life-and-Death Dictionary (Segoe Kensaku)',
    '李昌镐精讲围棋死活': 'Lee Chang-ho Selected Life-and-Death Problems',
    '李昌镐精讲围棋手筋': 'Lee Chang-ho Selected Tesuji Problems',
    '李昌镐官子技巧': "Lee Chang-ho's Endgame Skills",
    '围棋手筋辞典': 'Tesuji Dictionary',
    '天龙图': 'Heavenly Dragons',
    '围棋死活1000题': 'Weiqi Life-and-Death 1000 Problems',

    '日本古典': 'Japanese classic',

    // Japanese players
    '秀和': 'Honinbo Shuwa',
    '丈和': 'Honinbo Jowa',
    '道策': 'Honinbo Dosaku',
    '秀甫': 'Honinbo Shuho',
    '秀榮': 'Honinbo Shuei',
    '秀策': 'Honinbo Shusaku',
    '安井算知': 'Yasui Sanchi',
    '秀哉': 'Honinbo Shusai',
    '濑越宪作': 'Segoe Kensaku',
    '木谷实': 'Kitani Minoru',
    '吴清源': 'Go Seigen',
    '桥本宇太郎': 'Hashimoto Utaro',
    '高川格': 'Takagawa Kaku',
    '小林光一': 'Kobayashi Koichi',
    '武宫正树': 'Takemiya Masaki',
    '山城宏': 'Yamashiro Hiroshi',
    '小林觉': 'Kobayashi Satoru',
    '柳时熏': 'Shikun Ryu',
    '片冈聪': 'Kataoka Satoshi',
    '结城聪': 'Yuki Satoshi',
    '王铭琬': 'O Meien',
    '大竹英雄': 'Otake Hideo',
    '赵治勋': 'Cho Chikun',
    '井山裕太': 'Iyama Yuta',
    '前田陈尔': 'Maeda Nobuaki',
    '坂田荣男': 'Sakata Eio',
    '张栩': 'Cho U',
    '藤泽库之助': 'Fujisawa Hosai',
    '藤泽秀行': 'Fujisawa Shuko',
    '加藤正夫': 'Kato Masao',
    '林海峰': 'Rin Kaiho',
    '王立诚': 'O Rissei',
    '依田纪基': 'Yoda Norimoto',
    '淡路修三': 'Awaji Shuzo',
    '山下敬吾': 'Yamashita Keigo',
    '山田规三生': 'Yamada Kimio',
    '羽根泰正': 'Hane Yasumasa',
    '羽根直树': 'Hane Naoki',
    '石田芳夫': 'Ishida Yoshio',
    '小松英树': 'Komatsu Hideki',
    '高尾绅路': 'Takao Shinji',
    '今村俊也': 'Imamura Toshiya',
    '彦坂直人': 'Hikosaka Naoto',
    '酒井猛': 'Sakai Takeshi',
    '谢依旻': 'Xie Yimin',
    '向井千瑛': 'Mukai Chiaki',

    // Chinese players
    '范西屏': 'Fan Xiping',
    '施襄夏': "Shi Ding'an",
    '聂卫平': 'Nie Weiping',
    '马晓春': 'Ma Xiaochun',
    '陈祖德': 'Chen Zude',
    '曹大元': 'Cao Dayuan',
    '芮乃伟': 'Rui Naiwei',
    '周鹤洋': 'Zhou Heyang',
    '罗洗河': 'Luo Xihe',
    '钱宇平': 'Qian Yuping',
    '常昊': 'Chang Hao',
    '古力': 'Gu Li',
    '柯洁': 'Ke Jie',
    '孟泰龄': 'Meng Tailing',
    '崔精': 'Choi Jeong',
    '李钦诚': 'Li Qincheng',
    '王楚轩': 'Wang Chuxuan',
    '芈昱廷': 'Mi Yuting',
    '廖元赫': 'Liao Yuanhe',
    '丁浩': 'Ding Hao',
    '时越': 'Shi Yue',
    '周睿羊': 'Zhou Ruiyang',
    '童梦成': 'Tong Mengcheng',
    '伊凌涛': 'Yi Lingtao',
    '李轩豪': 'Li Xuanhao',
    '陈贤': 'Chen Xian',
    '连笑': 'Lian Xiao',
    '檀啸': 'Tan Xiao',
    '唐韦星': 'Tang Weixing',
    '陳禧': 'Chen Xi',
    '彭立尧': 'Peng Liyao',
    '王檄': 'Wang Xi',
    '孔杰': 'Kong Jie',
    '江维杰': 'Jiang Weijie',
    '谢赫': 'Xie He',
    '范蕴若': 'Fan Yunruo',
    '古灵益': 'Gu Lingyi',
    '李喆': 'Li Zhe',
    '张立': 'Zhang Li',
    '柁嘉熹': 'Tuo Jiaxi',
    '朴文垚': 'Piao Wenyao',

    // Korean players
    '曹薰铉': 'Cho Hun-hyeon',
    '李昌镐': 'Lee Chang-ho',
    '李世石': 'Lee Se-dol',
    '金志锡': 'Kim Ji-seok',
    '朴廷桓': 'Park Jung-hwan',
    '申真谞': 'Shin Jin-seo',
    '白洪淅': 'Paek Hong-suk',
    '徐奉洙': 'Seo Bong-soo',
    '刘昌赫': "Yu Ch'ang-hyeok",
    '元晟溱': 'Weon Seong-jin',
    '睦镇硕': 'Mok Jin-seok',
    '崔哲瀚': "Choi Ch'eol-han",
    '姜东润': 'Kang Dong-yun',
    '朴永训': 'Park Yeong-hun',
    '赵汉乘': 'Cho Han-seung',
    '崔明勋': 'Choi Myeong-hun',

    '中国棋手': 'Chinese players',
    '日本棋手': 'Japanese players',
    '韩国棋手': 'Korean players',
    '其他地区棋手': 'Other players',

    // Joseki
    '定式大全': 'Joseki encyclopedia',
    '星定式': 'Star-point joseki',
    '三三定式': '3-3 point joseki',
    '小目定式': '3-4 point joseki',
    '目外定式': '3-5 point joseki',
    '高目定式': '4-5 point joseki',
    '五五定式': '5-5 point joseki',
    '三六定式': '3-6 point joseki',
    '四六定式': '4-6 point joseki',
    '小类': 'subcategories',

    // topic search
    '棋形题目搜索': 'Shape search',
    '题目搜索': 'Shape search',
    '黑子': 'Black stone',
    '白子': 'White stone',
    '无棋子': 'No stone',
    '清除全部': 'Clear all',
    '棋形搜索': 'Shape search',
    '题目搜索': 'Topic search',
    '题目名称搜索': 'Title search',

    // categories
    '围棋基本技能': 'Basic Go skills',
    '围棋死活形状': 'Life-and-death shapes',
    '围棋基本手筋': 'Basic tesuji',
    '围棋经典手筋': 'Classic tesuji',
    '围棋综合手筋': 'Comprehensive tesuji',

    '吃子': 'Capture',
    '对杀': 'Capturing race',
    '有眼杀无眼': 'Eye/no eye',
    '连接': 'Connect',
    '切断': 'Cut',
    '大头鬼': 'Tombstone',
    '金鸡独立': 'Golden rooster',
    '倒脱靴': 'Under the stones',
    '接不归': 'Connect and die',
    '胀牯牛': 'Squash',
    '金柜角': "Carpenter's square",
    '黄莺扑蝶': 'Raccoon belly',
    '滚打包收': 'Squeeze',
    '盘角曲四': 'Bent 4 in the corner',
    '腾挪': 'Sabaki',
    '左右同型': 'Symmetrical shape',
    '打劫': 'Ko',
    '七死八活': 'Seven die, eight live',
    '大猪嘴': 'Big pig snout',
    '小猪嘴': 'Small pig snout',
    '一一妙手': '1-1 point',
    '一二妙手': '1-2 point',
    '中盘作战题': 'Middle game problems',
    '左右同形': 'Symmetrical shape',

    '立': 'Descent, stand',
    '弃子': 'Sacrifice',

    '生之部': 'Life section',
    '死之部': 'Death section',
    '劫之部': 'Ko section',
    '攻之部': 'Attack section',
    '角之部': 'Corner section',
    '边之部': 'Side section',

    // login, logout, register
    '退出': 'Exit',
    '记住我': 'Remember me',
    '忘记密码': 'Forgot password',
    '重设密码': 'Reset password',
    '微信登录': 'WeChat login',
    '还没有101帐号': "Don't have a 101 account yet",
    '注册新用户': 'Register a new user',
    '用户名': 'Username',
    '此邮箱将接受激活邮件完成账号激活流程': 'This email address will receive an activation email to complete the account activation process',
    '邮箱': 'Email',
    '密码': 'Password',
    '级别': 'Level',
    '验证码': 'Verification code',

    // levels
    '启蒙': 'Enlightenment',
    '入门': 'Getting started',
    '初级': 'Elementary',
    '中级': 'Intermediate',
    '高级': 'Advanced',

    '立即注册': 'Sign up now',
    '登录': 'Sign in',
    '注册': 'Sign up',

    // others
    '更多': 'More',
    '白先': 'White to play',
    '黑先': 'Black to play',
    '死活': 'life-and-death',
    '部分': 'Part',
    '分': 'min',
    '秒': 'sec',
    '难度': 'Difficulty',
    '職業四段': '4p',
    '级': 'kyu',
    '段': 'dan',
    '普通会员': 'Ordinary member',
    '升级': 'Upgrade',
    '充值': 'Recharge',
    '开始做题': 'Start problems',
    '最快': 'Fastest',
    '确定': 'OK',
    '取消': 'Cancel',
    '正确': 'Correct',
    '超时': 'Timeout',
    '恭喜': 'Congratulations',
    '上一页': 'Previous page',
    '下一页': 'Next page',
    '列表': 'list',
    '题目': 'Topic',
    '名家': 'Famous',
    '全集': 'Complete Works',
    '解说': 'Commentary',
    '上卷': 'First volume',
    '中卷': 'Middle volume',
    '下卷': 'Last volume',
    '官子': 'Endgame',
    '练习': 'practice',
}

// I translated 知识点 as 'category' (lit. 'knowledge point')

const imageReplacements = {
    // I used Preview.app to write the text (color: Red 81, Green 109, Blue 149; font: Arial Narrow 32pt)
    'https://static2.101weiqi.com/static/images/home/home1.png': 'http://gogamespace.com/custom/101weiqi/home1.png',
    'https://static2.101weiqi.com/static/images/home/home2.png': 'http://gogamespace.com/custom/101weiqi/home2.png',
}

recursiveReplace(document.body)
replaceImageSources(document.body)

let observer = new MutationObserver(mutationRecords => {
    let nodes = []
    mutationRecords.forEach(m => {
        if (m.type == 'characterData') {
            nodes.push(m.target)
        }
        observer.disconnect()    // avoid infinite loops
        console.log(nodes)
        nodes.forEach(node => replaceInTextNode(node))
        observe()
    })
})

const observe = () => {
    observer.observe(document, {
        characterData: true,
        subtree: true,
    });
}

observe()

/*
    Recurse through DOM elements.  If element is a text element process it, otherwise recurse.
*/
function recursiveReplace(node) {
    if (node.nodeType == 3 && node.nodeName != 'SCRIPT') {
        replaceInTextNode(node)
    } else if (node.nodeType == 1 && node.nodeName != 'SCRIPT' && node.nodeName != 'STYLE') {
        var child = node.firstChild;
        while (child) {
        	recursiveReplace(child);
        	child = child.nextSibling;
        }
    }
}

function replaceInTextNode(node) {
    s = node.nodeValue

    // non-fixed strings
    s = s.replace(/(20\d\d)年(\d\d?)月(\d\d?)日/,
        (match, year, month, day) => [ year, month, day ].join('.')
    )
    s = s.replace(/第\s*(\d+)\s*题/,
        (match, number) => `Problem ${number}`
    )
    s = s.replace(/第\s*(\d+)\s*部分/,
        (match, number) => `Part ${number}`
    )

    for (const [key, value] of Object.entries(textReplacements)) {
        // add a space because Chinese doesn't have spaces
        s = s.replace(key, value + ' ')
    }
    node.nodeValue = s.trimEnd()
}


function replaceImageSources(node) {
    node.querySelectorAll('img').forEach(img => {
        for (const [key, value] of Object.entries(imageReplacements)) {
            img.src = img.src.replace(key, value)
        }
    })
}
