//カテゴリアイテムクラスインポート
import {KategoryItem,Kategory_Item_View_Set, Kategory_List_Get}from "./kategory_item.js";

let KategoryItem1=new KategoryItem();
export let InSp_flg="ff";

export class App {
    mount() {
        let IncomeBtnElement = document.querySelector("#IncomeBtn_js");
        let SpendBtnElement = document.querySelector("#SpendBtn_js");
        let KategoryEditListElement=document.querySelector("#KategoryEditBtn_js");

        //収入ボタンクリック 検出
        IncomeBtnElement.addEventListener("click", (event) => {
            // submitイベントの本来の動作を止める
            event.preventDefault();
            InSp_flg="tf";
            Kategory_Item_View_Set(KategoryItem1.Income_kategory_List,"KategoryList_js");
        });
        //支出ボタンクリック 検出
        SpendBtnElement.addEventListener("click", (e) => {
            e.preventDefault();
            InSp_flg="ft"
            Kategory_Item_View_Set(KategoryItem1.Spend_Kategory_List,"KategoryList_js");
        });

        //カテゴリ編集/追加ボタンのクリックを監視=>カテゴリリストを動的に追加
        KategoryEditListElement.addEventListener("click",(e)=>{
            Kategory_Item_View_Set(Kategory_List_Get(InSp_flg,KategoryItem1),"KategoryEditList_js");
        });

    }
}
