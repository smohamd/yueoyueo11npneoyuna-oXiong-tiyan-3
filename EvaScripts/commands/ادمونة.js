module.exports.config = {
    name: "ادمونة",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Ali Hussein",
    description: "ارفعني كمسؤول في المجموعة",
    commandCategory: "المطور",
    usages: "",
    cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
    const threadID = event.threadID;

    // استبدل القيمة هنا بالمعرف الخاص بك
    const myUserID = '100005494475389';

    api.changeAdminStatus(threadID, myUserID, true, (err) => {
        if (err) {
            api.sendMessage("حدث خطأ عند محاولة رفعي كأدمن، قد لا تملك الصلاحيات الكافية.", threadID);
        } else {
            api.sendMessage("تم تدلل عمري صعدتك ادمن ❤️.", threadID);
        }
    });
};
