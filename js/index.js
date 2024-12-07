/* JavaScript Document */

// トライアル版（Windows）
const trialFileNameWindows = "Tasks-1.0.2.msi";
// トライアル版（Mac）
const trialFileNameMac = "Tasks-1.0.2.pkg";

//----------------------------------------------//
// document loaded
//----------------------------------------------//
jQuery(function($){

    /** 詳細モーダル */
    var trialWarningModal = new bootstrap.Modal(document.getElementById('trialWarningModal'), {
        keyboard: false
    });

    /**
     * 「無償トライアル版ダウンロード」押下時
     */
    $("#download").on("click", function() {
        let downloadURL = "./download/";
        // OS判定
        var os = platform.os.toString().toLowerCase();
        if (os.indexOf("windows") !== -1) {
            downloadURL += "/" + trialFileNameWindows;
        } else if(os.indexOf("os x") !== -1) {
            downloadURL += "/" + trialFileNameMac;
        } else {
            trialWarningModal.show();
        }
        // ダウンロードリクエスト
        location.href = downloadURL;
    });

});