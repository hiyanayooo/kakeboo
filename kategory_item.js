//カテゴリアイテムを管理する
/**
 * カテゴリ名(重複なし)
 * 画像
 * 色
 */
//カテゴリリスト作成 初期の使えるデータを入れておく(収入、支出’)
//文字、画像、色
import { element } from "./view/util.js";
import { InSp_flg } from "./app.js";


let Income_Kategory_Img = [
    "./icon.img/income/icon_102611_64.png",
    "./icon.img/income/icon_102611_64.png",
    "./icon.img/income/icon_102971_64.png",
    "/icon.img/income/icon_103301_64.png",
    "/icon.img/income/icon_104041_64.png",
    "/icon.img/income/icon_104181_64.png",
    "/icon.img/income/icon_158491_64.png"
];

let Spend_Kategory_Img= [
    "/icon.img//spend//icon_111631_64.png",
    "/icon.img//spend/icon_112121_64.png",
    "/icon.img/spend/icon_114951_64.png",
    "/icon.img/spend/icon_119041_64.png",
    "/icon.img/spend/icon_119361_64.png",
    "/icon.img/spend/icon_133781_64.png",
    "/icon.img/spend/icon_134441_64.png",
    "/icon.img/spend/icon_141221_64.png",
    "/icon.img/spend/icon_145451_64.png",
    "/icon.img/spend/icon_154081_64.png",
    "/icon.img/spend/_i_icon_13487_icon_134870_64.png"
]

//idをカテゴリの英語で特定できるように

//*収入カテゴリ 初期値 *デフォルトカラーは黒とする
let Income_kategory_List = [
    { text: '給料', img: "./icon.img/income/icon_102611_64.png", color: "#000000" },
    { text: 'お小遣い', img: "/icon.img/income/icon_104181_64.png", color: "#000000" },
    { text: '賞与', img: "/icon.img/income/icon_158491_64.png", color: "#000000" },
    { text: '副業', img: "/icon.img/income/icon_102201_64.png", color: "#000000" },
    { text: '投資', img: "/icon.img/income/icon_102971_64.png", color: "#000000" },
    { text: '臨時収入', img: "/icon.img/income/icon_104041_64.png", color: "#000000" }
];

//*支出カテゴリ 初期値 *デフォルトカラーは黒とする

let Spend_Kategory_List = [
    { text: '食費', img: "/icon.img/spend/icon_111631_64.png", color: "#000000" },
    { text: '日用品', img: "/icon.img/spend/_i_icon_13487_icon_134870_64.png", color: "#000000" },
    { text: '衣服', img: "/icon.img/spend/icon_133781_64.png", color: "#000000" },
    { text: '美容', img: "/icon.img/spend/icon_134441_64.png", color: "#000000" },
    { text: '交際費', img: "/icon.img/spend/icon_145451_64.png", color: "#000000" },
    { text: '医療費', img: "/icon.img/spend/icon_141221_64.png", color: "#000000" },
    { text: '教育費', img: "/icon.img/spend/icon_154081_64.png", color: "#000000" },
    { text: '光熱費', img: "/icon.img/spend/icon_119041_64.png", color: "#000000" },
    { text: '交通費', img: "/icon.img/spend/icon_119361_64.png", color: "#000000" },
    { text: '通信費', img: "/icon.img/spend/icon_114951_64.png", color: "#000000" },
    { text: '住居費', img: "/icon.img/spend/icon_112121_64.png", color: "#000000" }
];

export class KategoryItem{
    constructor() {
        this.Income_kategory_List=Income_kategory_List;
        this.Spend_Kategory_List=Spend_Kategory_List;
    }   
}
//カテゴリリストの中身を元に、HTML要素を変更する関数

//引数は収入カテゴリの状態を表すリスト
export function Kategory_Item_View_Set(Set_kategory_List,List_id){
    //カテゴリリスト本体 初期化
    let KategoryListElement=document.querySelector(`#${List_id}`);
    KategoryListElement.innerHTML = "";

    Set_kategory_List.forEach(function (item) {
        Object.values(item);
        KategoryListElement.appendChild(element`<li><button type="click" class="kategory_list_item"><img src=".${item.img}" alt="送信">${item.text}</button></li>`);
    });
}

//フラグで 支出/収入 どちらのリストを使うか判断する 選択中=>t
//リストを返す
export function Kategory_List_Get(InSp_flg,KategoryItem){
    //支出・収入を選択していない
    if(InSp_flg==="tf"){return KategoryItem.Income_kategory_List;}
    else if(InSp_flg==="ft"){return KategoryItem.Spend_Kategory_List;}
    else {{console.error('収入か支出を選択してください￥');}}
}
