// ==UserScript==
// @name         Hollis 智慧树助手
// @namespace    https://github.com/bianyukun1213/zhihuishu-assistant
// @version      0.1
// @description  自动切换视频文件。
// @author       Hollis
// @match        https://hike.zhihuishu.com/aidedteaching/sourceLearning/sourceLearning*
// @icon         https://www.google.com/s2/favicons?domain=zhihuishu.com
// @updateURL    https://apps.hollisdevhub.com/projects/zhihuishu-assistant/script.js
// @downloadURL  https://apps.hollisdevhub.com/projects/zhihuishu-assistant/script.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    function playNextVid() {
        if (document.getElementsByClassName('rate').length === 0) {
            let statusBoxes = document.getElementsByClassName('status-box');
            for (let i = 0; i < statusBoxes.length; i++) {
                if (statusBoxes[i].children.length === 0 && statusBoxes[i].parentNode.getAttribute('class') === 'file-item') {
                    statusBoxes[i].parentNode.click();
                    break;
                }
            }
        }
    }
    setInterval(playNextVid, 60000);
})();