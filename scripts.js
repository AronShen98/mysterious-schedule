const scheduleData = [
    // 10月19日
    "下午18:30 - 来接宝贝上车 宝贝生日期间不许自己开车",
    "晚上19:00 - 20:30 - 跟宝贝的吃饭时间",
    "晚上20:30 - 21:00 - 给宝宝拍照 以及合照！",
    "晚上21:00 宝宝礼物展示环节",
    "晚上21:00 - 21:30 带宝宝回酒店",
    "晚上21:30 - 22:00 宝宝的拆礼物环节外加免费的深情告白",
    "晚上22:00 - 24:00 快乐的游戏看剧环节",
    // 10月20日
    "凌晨 00:00 - 00:30 宝宝的照灯环节",
    "凌晨00:30 - 03:00 做爱环节 把宝宝直接掰开",
    "早上03:00 - 12:00 美容觉环节",
    "中午12:00 - 12:30 哄宝宝起床环节",
    "中午12:30 - 13:30 公主的独立化妆以及拉屎环节",
    "下午13:30 - 15:00 吃午饭环节",
    "下午15:00 - 17:00 船间下午茶 or 激情性爱双排之卡丁车大作战 or city walk拍美照环节 or 看电影环节 or密室环节",
    "下午17:00 - 17:30 去餐厅",
    "下午17:30 - 19:30 公主的吃饭环节",
    "下午19:30 - 20:30 散步数人赚钱环节 附带生日特有的轮椅服务",
    "下午20:30 - 21:00 回酒店",
    "下午21:00 - 24:00 自由活动时间 or 打麻将时间(待定)",
    // 10月21日
    "凌晨00:00 - 03:00 鼓掌环节2.0",
    "03:00 - 12:00 公主的美容觉环节",
    "12:00 - 13:00 送公主回家并结束公主于2023年的生日环节"
];

let currentStep = 0;

window.onload = function() {
    const scheduleDiv = document.querySelector('.schedule');
    scheduleData.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item;
        scheduleDiv.appendChild(p);
    });
    nextStep();
}

function nextStep() {
    if (currentStep < scheduleData.length) {
        document.querySelectorAll('.schedule p')[currentStep].style.display = 'block';
        currentStep++;
    } else {
        alert("行程结束！");
    }
}
