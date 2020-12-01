/**
 * 新規カテゴリ追加ボタン クリック時 =>値をセットしないからのaddページへ
 * 既存のカテゴリをクリック時 =>オブジェクトに値をセット
 */

import { Kategory_Item_View_Set, Kategory_List_Get } from "../kategory_item.js";
import { InSp_flg } from "../app.js";

//動的なカテゴリリストを配置する
export function Set_Kategory_Edit_List() {
    Kategory_Item_View_Set(Kategory_List_Get(InSp_flg,KategoryItem1), "KategoryEditList_js");
}