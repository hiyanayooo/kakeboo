//カテゴリアイテムクラスインポート
import {KategoryItem,Kategory_Item_View_Set}from "./kategory_item.js";

let KategoryItem1=new KategoryItem();

export class App {
    mount() {
        let IncomeBtnElement = document.querySelector("#IncomeBtn_js");
        let SpendBtnElement = document.querySelector("#SpendBtn_js");

        //収入ボタンクリック 検出
        IncomeBtnElement.addEventListener("click", (event) => {
            // submitイベントの本来の動作を止める
            event.preventDefault();
            Kategory_Item_View_Set(KategoryItem1.Income_kategory_List);

        });
        //支出ボタンクリック 検出
        SpendBtnElement.addEventListener("click", (e) => {
            e.preventDefault();
            Kategory_Item_View_Set(KategoryItem1.Spend_Kategory_List);

        });
    }
}
