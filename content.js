// FIXME:
// https://www.101weiqi.com/chessbook/playerlist/

// Keep the entries sorted. Put the longest entries first because we iterate
// over them in this order. And we want, for example, '職業四段' to be
// translated as '4p', not as '職業四dan'.
//
// Put the cursor on the opening brace, then
//     :.+1,/}/-1!sort -r

const textReplacements = {
    '每道题目的做题次数，达到这个次数没有做对则判错': 'The number of attemps for each problem. If this number is reached, it will be judged wrong.',
    '此邮箱将接受激活邮件完成账号激活流程': 'This email address will receive an activation email to complete the account activation process',
    '不选择，则依靠棋友当前级别自动筛选': "If you don’t choose, it will be automatically selected based on the current player level",
    '你的用户名和密码不符，请再试一次': 'Your username and password do not match; please try again',
    '如果超过时间未做完，则本题判错': 'If the time is exceeded, the problem will be judged wrong.',
    '单位为天，每多少天一次作业': 'How often to run the job, in days',
    '请直接用鼠标在棋盘上落子': 'Use the mouse to play stones',
    '请找出此局面下的最佳一手': 'Please find the best move in this situation',
    '银冈棋院官子手筋习题集': 'Yingang Go Academy Endgame Tesuji Problems',
    '设置每道题目的做题时间': 'Set the time limit for each problem',
    '设置每道题目的做题次数': 'Set the number of opportunities for each problem',
    '请按照顺序在棋盘上落子': 'Please play the moves in order',
    '只有一次提交解答的机会': 'Only one opportunity to submit answer',
    '不选择，则混合各种题型': "If you don't choose, problem categories will be mixed",
    '落子确认关闭中，开启': 'Toggle move confirmation',
    '打印功能只对会员开放': 'The printing function is only available to members',
    '贡献较多的棋友名单': 'Top contributors',
    '一次生成的题目数量': 'Number of questions generated at a time',
    '李昌镐精讲围棋手筋': 'Lee Chang-ho Selected Tesuji Problems',
    '李昌镐精讲围棋死活': 'Lee Chang-ho Selected Life-and-Death Problems',
    '按棋书章节顺序做题': 'Book chapter order',
    '次提交解答的机会': 'opportunities to submit answers',
    '系统自动生成作业': 'The system automatically generates jobs',
    '我的作业模板列表': 'My tasks template list',
    '官子大全官子手筋': 'Endgame Encyclopedia - Tesuji',
    '创建新的作业模板': 'Create a new tasks template',
    '使用围豆进行提问': 'Ask using Weidou',
    '按难度顺序选题': 'in order of difficulty',
    '尚未完成的作业': 'Unfinished tasks',
    '从错题本中删除': 'Remove from mistakes book',
    '本题超时未通过': 'Problem failed by timeout',
    '创建新作业模板': 'Create a new job template',
    '围棋知识点专辑': 'Categories album',
    '李昌镐官子技巧': "Lee Chang-ho's Endgame Skills",
    '基礎から始める 河野臨の詰碁': "Kono Rin's tsumego starting from the basics",
    '围棋死活辞典-濑越宪作': 'Life-and-Death Dictionary (Segoe Kensaku)',
    '属于变化答案': 'is a variation answer',
    '属于失败答案': 'is a failure answer',
    '属于正解答案': 'is a correct answer',
    '系统随机选题': 'in random order',
    '条答案被淘汰': 'eliminated answers',
    '题目名称搜索': 'Title search',
    '围棋手筋辞典': 'Tesuji Dictionary',
    '棋形题目搜索': 'Shape search',
    '选择棋书章节': 'Select a book chapter',
    '播放演进过程': 'Replay moves',
    '做题时间设置': 'Question time setting',
    '做题形式设置': 'Problem settings form',
    '本题已经通过': 'Problem passed',
    '打印题目选择': 'Print problems selection',
    '个人信息设置': 'Personal information settings',
    '其他地区棋手': 'Other players',
    '其他分类题目': 'Other classification',
    '我的作业列表': 'My task list',
    '我的做题数据': 'My problem statistics',
    '围棋死活形状': 'Life-and-death shapes',
    '上次阅读位置': 'Last read position',
    '级位题目分类': 'Kyu-level classification',
    '作业模板名称': 'Job template name',
    '作业生成时间': 'Job generation time',
    '隐藏题目审核': 'Hidden review',
    '官子题目列表': 'Endgame album',
    '被淘汰的答案': 'Eliminated answer',
    '错题详细统计': 'Detailed mistake statistics',
    '段位题目分类': 'Dan-level classification',
    '围棋综合手筋': 'Comprehensive tesuji',
    '点击升级会员': 'Click to upgrade membership',
    '围棋经典手筋': 'Classic tesuji',
    '我收藏的题目': 'Bookmarked problems',
    '棋盘大小分类': 'Board size classification',
    '围棋基本手筋': 'Basic tesuji',
    '围棋基本技能': 'Basic Go skills',
    '平均做题时间': 'Average problem time',
    '所有编辑记录': 'All edit records',
    '大师的下一手': "Master's next move",
    '不限制时间': 'unlimited time',
    '山田规三生': 'Yamada Kimio',
    '作业本名称': 'Workbook name',
    '两扳长一气': 'Two hane for one liberty',
    '题目知识点': 'Topic category',
    '统计截止于': 'Statistics as of',
    '按顺序选择': 'Select in order',
    '注册新用户': 'Register a new user',
    '做一题设置': 'Problem setup',
    '本题收录于': 'Problem is included in',
    '本题未通过': 'Problem failed',
    '最多不超过': 'No more than',
    '我的作业本': 'My tasks book',
    '我的错题本': 'My mistakes book',
    '我的收藏本': 'My collection',
    '条修改记录': 'Modification records',
    '中盘作战题': 'Middle game problems',
    '桥本宇太郎': 'Hashimoto Utaro',
    '布局猜子题': 'Guess opening moves',
    '藤泽库之助': 'Fujisawa Hosai',
    '有眼杀无眼': 'Eye/no eye',
    '按难度选择': 'Choose by difficulty',
    '中国流布局': 'Chinese opening',
    '大眼杀小眼': 'Big eye kills small eye',
    '今日排行榜': "Today's Leaderboard",
    '围棋死活1000题': 'Weiqi Life-and-Death 1000 Problems',
    '围棋考试/挑战赛': 'Go exam/challenge',
    '围棋闯关-棋力测试': 'Go Strength Test',  // guan
    '两次机会': 'two chances',
    '一次机会': 'one chance',
    '答案有误': 'is a mistaken answer',
    '依田纪基': 'Yoda Norimoto',
    '安井算知': 'Yasui Sanchi',
    '山下敬吾': 'Yamashita Keigo',
    '微信扫码': 'WeChat scan code',
    '微信登录': 'WeChat login',
    '变化答案': 'Variation answers',
    '骗招题目': 'Trick plays',
    '题目搜索': 'Topic search',
    '时间限制': 'Time limit',
    '三目死活': 'Three-point life-and-death',
    '思考时间': 'Thinking time',
    '作业日期': 'Task date',
    '武宫正树': 'Takemiya Masaki',
    '高尾绅路': 'Takao Shinji',
    '左右同形': 'Symmetrical shape',
    '左右同型': 'Symmetrical shape',
    '闯关成功': 'Successfully passed the barrier',
    '提交答案': 'Submit answer',
    '棋力检测': 'Strength detection',
    '棋力测试': 'Strength Test',
    '作业状态': 'State',
    '开始解答': 'Start to answer',
    '开始做题': 'Start problems',
    '滚打包收': 'Squeeze',
    '六目死活': 'Six-point life-and-death',
    '立即注册': 'Sign up now',
    '显示答案': 'Show answers',
    '题目搜索': 'Shape search',
    '棋形搜索': 'Shape search',
    '七死八活': 'Seven die, eight live',
    '标注难度': 'Set difficulty',
    '濑越宪作': 'Segoe Kensaku',
    '坂田荣男': 'Sakata Eio',
    '旋转棋盘': 'Rotate board',
    '错题重做': 'Rework mistakes',
    '闯关结果': 'Results',
    '重设密码': 'Reset password',
    '取消收藏': 'Remove bookmark',
    '最近棋谱': 'Recent games',
    '黄莺扑蝶': 'Raccoon belly',
    '做题机会': 'Problem solving opportunities',
    '做题设置': 'Problem settings',
    '题目范围': 'Problem scope',
    '题目质量': 'Problem quality',
    '做题次序': 'Problem order',
    '题库状态': 'Problem library state',
    '打印题目': 'Print problems',
    '大竹英雄': 'Otake Hideo',
    '普通会员': 'Ordinary member',
    '我的作业': 'My tasks',
    '我的标签': 'My tags',
    '我的评分': 'My rating',
    '我的评论': 'My comment',
    '我的解答': 'My answer',
    '向井千瑛': 'Mukai Chiaki',
    '老鼠偷油': 'Mouse stealing oil',
    '修改类型': 'Modification type',
    '错题统计': 'Mistake statistics',
    '前田陈尔': 'Maeda Nobuaki',
    '最低难度': 'Lowest difficulty',
    '韩国棋手': 'Korean players',
    '小松英树': 'Komatsu Hideki',
    '小林光一': 'Kobayashi Koichi',
    '加藤正夫': 'Kato Masao',
    '定式大全': 'Joseki encyclopedia',
    '日本棋手': 'Japanese players',
    '日本古典': 'Japanese classic',
    '井山裕太': 'Iyama Yuta',
    '石田芳夫': 'Ishida Yoshio',
    '今村俊也': 'Imamura Toshiya',
    '我的首页': 'Home',  // 'My Home', but opt for short string
    '彦坂直人': 'Hikosaka Naoto',
    '最高难度': 'Highest difficulty',
    '隐藏评价': 'Hide review',
    '帮助中心': 'Help center',
    '羽根泰正': 'Hane Yasumasa',
    '羽根直树': 'Hane Naoki',
    '金鸡独立': 'Golden rooster',
    '棋经众妙': 'Gokyo Shumyo',
    '玄玄棋经': 'Gengen Gokyo',
    '藤泽秀行': 'Fujisawa Shuko',
    '四目死活': 'Four-point life-and-death',
    '忘记密码': 'Forgot password',
    '五目死活': 'Five-point life-and-death',
    '失败答案': 'Failure answers',
    '闯关失败': 'Failed to break through',
    '围棋闯关': 'Exam',
    '官子题目': 'Endgame',
    '编辑记录': 'Edit record',
    '作业难度': 'Difficulty',
    '难度范围': 'Difficulty range',
    '每日八题': 'Daily 8 problems',
    '题目数量': 'Count',  // number of problems
    '正解答案': 'Correct answers',
    '完成时间': 'Completion date',
    '今日完成': 'Completed today',
    '清除全部': 'Clear all',
    '中国棋手': 'Chinese players',
    '棋盘居中': 'Center board',
    '吃子题目': 'Capture',
    '打二还一': 'Capture two recapture one',
    '再次闯关': 'Break through again',
    '闯下一关': 'Break the next level',
    '收藏此题': 'Bookmark problem',
    '盘角曲四': 'Bent 4 in the corner',
    '北京时间': 'Beijing time',
    '基础死活': 'Basic life-and-death',
    '淡路修三': 'Awaji Shuzo',
    '平均难度': 'Average difficulty',
    '自动生成': 'Automatically generated',
    '已经取消': 'Already cancelled',
    '全部题型': 'All problem types',
    '添加评论': 'Add comment',
    '九路全局': '9x9 whole board',
    '七路全局': '7x7 whole board',
    '五五定式': '5-5 point joseki',
    '職業四段': '4p',
    '四六定式': '4-6 point joseki',
    '高目定式': '4-5 point joseki',
    '三六定式': '3-6 point joseki',
    '目外定式': '3-5 point joseki',
    '小目定式': '3-4 point joseki',
    '三三定式': '3-3 point joseki',
    '一二妙手': '1-2 point',
    '一一妙手': '1-1 point',
    '龟不出头': "Crane's nest",
    '还没有101帐号': "Don't have a 101 account yet",
    '修改于': 'modified on',   // date
    '周睿羊': 'Zhou Ruiyang',
    '周鹤洋': 'Zhou Heyang',
    '结城聪': 'Yuki Satoshi',
    '伊凌涛': 'Yi Lingtao',
    '山城宏': 'Yamashiro Hiroshi',
    '谢依旻': 'Xie Yimin',
    '元晟溱': 'Weon Seong-jin',
    '王楚轩': 'Wang Chuxuan',
    '第六卷': 'Volume 6',
    '第五卷': 'Volume 5',
    '第四卷': 'Volume 4',
    '第三卷': 'Volume 3',
    '第二卷': 'Volume 2',
    '第一卷': 'Volume 1',
    '验证码': 'Verification code',
    '用户名': 'Username',
    '上一步': 'Undo move',
    '倒脱靴': 'Under the stones',
    '盘龙眼': 'Two-headed dragon',
    '柁嘉熹': 'Tuo Jiaxi',
    '童梦成': 'Tong Mengcheng',
    '大头鬼': 'Tombstone',
    '手筋题': 'Tesuji problem',
    '唐韦星': 'Tang Weixing',
    '高川格': 'Takagawa Kaku',
    '星定式': 'Star-point joseki',
    '胀牯牛': 'Squash',
    '小猪嘴': 'Small pig snout',
    '边之部': 'Side section',
    '申真谞': 'Shin Jin-seo',
    '柳时熏': 'Shikun Ryu',
    '徐奉洙': 'Seo Bong-soo',
    '酒井猛': 'Sakai Takeshi',
    '芮乃伟': 'Rui Naiwei',
    '林海峰': 'Rin Kaiho',
    '记住我': 'Remember me',
    '钱宇平': 'Qian Yuping',
    '公众号': 'Public account',
    '习题集': 'Problem set',
    '上一题': 'Previous problem',
    '上一页': 'Previous page',
    '朴文垚': 'Piao Wenyao',
    '彭立尧': 'Peng Liyao',
    '朴永训': 'Park Yeong-hun',
    '朴廷桓': 'Park Jung-hwan',
    '白洪淅': 'Paek Hong-suk',
    '布局题': 'Opening problem',
    '王立诚': 'O Rissei',
    '王铭琬': 'O Meien',
    '无棋子': 'No stone',
    '聂卫平': 'Nie Weiping',
    '下一题': 'Next problem',
    '下一页': 'Next page',
    '睦镇硕': 'Mok Jin-seok',
    '芈昱廷': 'Mi Yuting',
    '孟泰龄': 'Meng Tailing',
    '马晓春': 'Ma Xiaochun',
    '罗洗河': 'Luo Xihe',
    '死活题': 'Life-and-death problem',
    '生之部': 'Life section',
    '廖元赫': 'Liao Yuanhe',
    '李轩豪': 'Li Xuanhao',
    '李钦诚': 'Li Qincheng',
    '李世石': 'Lee Se-dol',
    '李昌镐': 'Lee Chang-ho',
    '排行榜': 'Leaderboard',
    '小林觉': 'Kobayashi Satoru',
    '劫之部': 'Ko section',
    '木谷实': 'Kitani Minoru',
    '金志锡': 'Kim Ji-seok',
    '片冈聪': 'Kataoka Satoshi',
    '官子谱': 'Kanzufu',
    '姜东润': 'Kang Dong-yun',
    '定式题': 'Joseki problem',
    '江维杰': 'Jiang Weijie',
    '天龙图': 'Heavenly Dragons',
    '古灵益': 'Gu Lingyi',
    '吴清源': 'Go Seigen',
    '讨论区': 'Forum',
    '范蕴若': 'Fan Yunruo',
    '范西屏': 'Fan Xiping',
    '官子题': 'Endgame problem',
    '正在做': 'Doing',
    '做一题': 'Do problem',
    '死之部': 'Death section',
    '刚创建': 'Created',
    '正确率': 'Correct rate',
    '角之部': 'Corner section',
    '模仿题': 'Copying problem',
    '接不归': 'Connect and die',
    '已完成': 'Completed',
    '崔明勋': 'Choi Myeong-hun',
    '曹薰铉': 'Cho Hun-hyeon',
    '赵汉乘': 'Cho Han-seung',
    '赵治勋': 'Cho Chikun',
    '陈祖德': 'Chen Zude',
    '对杀题': 'Capturing race problem',
    '吃子题': 'Capture problem',
    '曹大元': 'Cao Dayuan',
    '训练营': 'Camp',  // 'Training camp', but it's too long
    '大猪嘴': 'Big pig snout',
    '大事典': 'Big Encyclopedia',
    '修改前': 'Before modification',
    '攻之部': 'Attack section',
    '解答中': 'Answering',
    '修改后': 'After modification',
    '刘昌赫': "Yu Ch'ang-hyeok",
    '施襄夏': "Shi Ding'an",
    '崔哲瀚': "Choi Ch'eol-han",
    '金柜角': "Carpenter's square",
    '最多75题': 'Up to 75 problems',
    '只有2次提交解答的机会': 'Only two opportunities to submit answers',
    '诘棋': 'tsumego',
    '提供': 'supplier',     // of a problem
    '提交': 'submit',
    '小类': 'subcategories',
    '显示': 'show',
    '问题': 'problem',
    '练习': 'practice',
    '维护': 'maintenance',  // of a problem category
    '列表': 'list',
    '死活': 'life-and-death',
    '小时': 'hour',
    '隐藏': 'hide',
    '創作': 'creation',  // problem author
    '章节': 'chapter',
    '基本': 'basic',
    '答案': 'answers',
    '张立': 'Zhang Li',
    '谢赫': 'Xie He',
    '白先': 'White to play',
    '白子': 'White stone',
    '王檄': 'Wang Xi',
    '变化': 'Variation',
    '升级': 'Upgrade',
    '试下': 'Try',
    '题目': 'Topic',
    '超时': 'Timeout',
    '用时': 'Time spent',
    '手筋': 'Tesuji',
    '作业': 'Tasks',
    '檀啸': 'Tan Xiao',
    '技巧': 'Skill',
    '注册': 'Sign up',
    '登录': 'Sign in',
    '时越': 'Shi Yue',
    '编号': 'Serial number',
    '双活': 'Seki',
    '得分': 'Score',
    '弃子': 'Sacrifice',
    '腾挪': 'Sabaki',
    '评价': 'Review',
    '剩余': 'Remaining',
    '棋谱': 'Records',
    '充值': 'Recharge',
    '数量': 'Quantity',
    '题型': 'Problem type',
    '对战': 'Play',
    '密码': 'Password',
    '部分': 'Part',
    '只有': 'Only',
    '确定': 'OK',
    '注意': 'Notice',
    '更多': 'More',
    '错误': 'Mistake',
    '中卷': 'Middle volume',
    '题库': 'Lib',
    '连笑': 'Lian Xiao',
    '李喆': 'Li Zhe',
    '级别': 'Level',
    '下卷': 'Last volume',
    '韩国': 'Korea',
    '孔杰': 'Kong Jie',
    '打劫': 'Ko',
    '柯洁': 'Ke Jie',
    '判断': 'Judgement',
    '中级': 'Intermediate',
    '秀和': 'Honinbo Shuwa',
    '秀策': 'Honinbo Shusaku',
    '秀哉': 'Honinbo Shusai',
    '秀甫': 'Honinbo Shuho',
    '秀榮': 'Honinbo Shuei',
    '丈和': 'Honinbo Jowa',
    '道策': 'Honinbo Dosaku',
    '古力': 'Gu Li',
    '入门': 'Getting started',
    '对弈': 'Game',
    '藤泽': 'Fujisawa',
    '频率': 'Frequency',
    '上卷': 'First volume',
    '最快': 'Fastest',
    '名家': 'Famous',
    '研究': 'Explore',
    '退出': 'Exit',
    '启蒙': 'Enlightenment',
    '官子': 'Endgame',
    '邮箱': 'Email',
    '初级': 'Elementary',
    '每次': 'Each',
    '丁浩': 'Ding Hao',
    '难度': 'Difficulty',
    '正确': 'Correct',
    '做对': 'Correct',
    '连接': 'Connect',
    '恭喜': 'Congratulations',
    '全集': 'Complete Works',
    '解说': 'Commentary',
    '关闭': 'Close',    // a form
    '崔精': 'Choi Jeong',
    '张栩': 'Cho U',
    '围棋': 'China',
    '陈贤': 'Chen Xian',
    '陳禧': 'Chen Xi',
    '关卡': 'Checkpoint',
    '常昊': 'Chang Hao',
    '对杀': 'Capturing race',
    '吃子': 'Capture',
    '取消': 'Cancel',
    '棋书': 'Books',
    '盲点': 'Blind spot',
    '黑先': 'Black to play',
    '黑子': 'Black stone',
    '攻击': 'Attack',
    '应对': 'Answer',
    '高级': 'Advanced',
    '添加': 'Add',
    '秒': 'sec',
    '对': 'right',
    '错': 'mistaken',
    '分': 'min',
    '级': 'kyu',
    '有': 'has',
    '段': 'dan',
    '集': 'collection',
    '白': 'White',
    '扑': 'Throw-in',
    '尖': 'Diagonal',
    '立': 'Descent, stand',
    '断': 'Cut',
    '黑': 'Black',
    '挤': 'Atekomi',
    '劫' : 'Ko',
    '创 建': 'Creation',
    '上 一 题': 'Previous problem',
    '下 一 题': 'Next problem',
    '上 一 定 式': 'Previous joseki',
    '下 一 定 式': 'Next joseki',
    '棋 力 测 试': 'Go Strength Test',
    '101围棋网': '101 Go Net',
}

// cache regular expressions
let re_problem_number = /第\s*(\d+)\s*题/;
let re_date = /(20\d\d)年(\d\d?)月(\d\d?)日/;
let re_part_number = /第\s*(\d+)\s*部分/;
let re_questions_in_total = /共\s*(\d+)\s*道题目/;
let re_min_limit = /限制(\d+)分钟/;

// I translated 知识点 as 'category' (lit. 'knowledge point')

const imageReplacements = {
    // I used Preview.app to write the text (color: Red 81, Green 109, Blue 149; font: Arial Narrow 32pt)
    'https://static2.101weiqi.com/static/images/home/home1.png': 'http://gogamespace.com/custom/101weiqi/home1.png',
    'https://static2.101weiqi.com/static/images/home/home2.png': 'http://gogamespace.com/custom/101weiqi/home2.png',
}

// addStyles()
recursiveReplace(document.body)
replaceAttributes()
replaceImageSources(document.body)

let observer = new MutationObserver(mutationRecords => {
    mutationRecords.forEach(m => {
        if (m.type == 'characterData') {
            observer.disconnect()    // avoid infinite loops
            m.target.nodeValue = replaceInString(m.target.nodeValue)
            observe()
        } else if (m.type == 'childList') {
            observer.disconnect()    // avoid infinite loops
            m.addedNodes.forEach(node => recursiveReplace(node))
            observe()
        } else if (m.type == 'attributes') {
            observer.disconnect()    // avoid infinite loops

            switch(m.attributeName) {
                case "label":
                    m.target.label = replaceInString(m.target.label)
                    break;
                case "title":
                    m.target.title = replaceInString(m.target.title)
                    break;
            }

            observe()
        }
    })
})

const observe = () => {
    observer.observe(document, {
        characterData: true,
        childList: true,
        subtree: true,
        attributeFilter: [ "label", "title" ],
    });
}

observe()

/*
    Recurse through DOM elements.  If element is a text element process it, otherwise recurse.
*/
function recursiveReplace(node) {
    if (node.nodeType == 3 && node.nodeName != 'SCRIPT') {
        node.nodeValue = replaceInString(node.nodeValue)
    } else if (node.nodeType == 1 && node.nodeName != 'SCRIPT' && node.nodeName != 'STYLE') {
        var child = node.firstChild;
        while (child) {
        	recursiveReplace(child);
        	child = child.nextSibling;
        }
    }
}

function replaceInString(s) {
    // non-fixed strings
    s = s.replace(re_date, (match, year, month, day) => [ year, month, day ].join('.'))
    s = s.replace(re_problem_number, (match, number) => `Problem ${number}`)
    s = s.replace(re_part_number, (match, number) => `Part ${number}`)
    s = s.replace(re_questions_in_total, (match, number) => `${number} questions in total`)
    s = s.replace(re_min_limit, (match, limit) => `${limit} min limit`)

    for (const [key, value] of Object.entries(textReplacements)) {
        // add a space because Chinese doesn't have spaces
        s = s.replace(key, ' ' + value + ' ')
    }
    return s
}

function replaceAttributes() {
    document.querySelectorAll('[label]').forEach((el) => {
        el.label = replaceInString(el.label)
    })
    document.querySelectorAll('[title]').forEach((el) => {
        el.title = replaceInString(el.title)
    })
}

function replaceImageSources(node) {
    node.querySelectorAll('img').forEach(img => {
        for (const [key, value] of Object.entries(imageReplacements)) {
            img.src = img.src.replace(key, value)
        }
    })
}

// DEACTIVATED FOR NOW
function addStyles() {
    // make the username fit in the nav bar
    var styles = `
        .navbar-brand {
            font-size: 14px;
        }
    `

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
}
