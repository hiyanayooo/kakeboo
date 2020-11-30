//カテゴリアイテムを管理する
/**
 * カテゴリ名(重複なし)
 * 画像
 * 色
 */
//カテゴリリスト作成 初期の使えるデータを入れておく(収入、支出’)
//文字、画像、色
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
    "./icon.img/spend/_i_icon_13600_icon_136000_256.jpg",
    "/icon.img//spend//icon_111631_64.png",
    "/icon.img//spend/icon_112121_64.png",
    "/icon.img/spend/icon_114951_64.png",
    "/icon.img/spend/icon_119041_64.png",
    "/icon.img/spend/icon_119361_64.png",
    "/icon.img/spend/icon_133781_64.png",
    "/icon.img/spend/icon_134441_64.png",
    "/icon.img/spend/icon_141221_64.png",
    "/icon.img/spend/icon_145451_64.png",
    "/icon.img/spend/icon_154081_64.png"
]

//idをカテゴリの英語で特定できるように

//*収入カテゴリ 初期値 *デフォルトカラーは黒とする
export let Income_kategory_List = [
    { Salary: { text: '給料', img: "./icon.img/income/icon_102611_64.png", color: "#000000" } },
    { img2: { text: 'お小遣い', img: "/icon.img/income/icon_104181_64.png", color: "#000000" } },
    { img3: { text: '賞与', img: "/icon.img/income/icon_158491_64.png", color: "#000000" } },
    { img4: { text: '副業', img: "/icon.img/income/icon_102201_64.png", color: "#000000" } },
    { img5: { text: '投資', img: "/icon.img/income/icon_102971_64.png", color: "#000000" } },
    { img6: { text: '臨時収入', img: "/icon.img/income/icon_104041_64.png", color: "#000000" } }
];

//*支出カテゴリ 初期値 *デフォルトカラーは黒とする

export let Spend_Kategory_List = [
    { img1: { text: '食費', img: "/icon.img/spend/icon_111631_64.png", color: "#000000" } },
    { img2: { text: '日用品', img: "/icon.img/spend/_i_icon_13600_icon_136000_256.jpg", color: "#000000" } },
    { img3: { text: '衣服', img: "/icon.img/spend/icon_133781_64.png", color: "#000000" } },
    { img4: { text: '美容', img: "/icon.img/spend/icon_134441_64.png", color: "#000000" } },
    { img5: { text: '交際費', img: "/icon.img/spend/icon_145451_64.png", color: "#000000" } },
    { img6: { text: '医療費', img: "/icon.img/spend/icon_141221_64.png", color: "#000000" } },
    { img7: { text: '教育費', img: "/icon.img/spend/icon_154081_64.png", color: "#000000" } },
    { img8: { text: '光熱費', img: "/icon.img/spend/icon_119041_64.png", color: "#000000" } },
    { img9: { text: '交通費', img: "/icon.img/spend/icon_119361_64.png", color: "#000000" } },
    { img10: { text: '通信費', img: "/icon.img/spend/icon_114951_64.png", color: "#000000" } },
    { img11: { text: '住居費', img: "/icon.img/spend/icon_112121_64.png", color: "#000000" } }
];

export class KategoryItem{
    constructor() {
        this.Income_kategory_List=Income_kategory_List;
        this.Spend_Kategory_List=Spend_Kategory_List;
    }   
}
//カテゴリリストの中身を元に、HTML要素を変更する関数

//引数は収入カテゴリの状態を表すリスト
export function Kategory_Item_View_Set(Set_kategory_List){
    //カテゴリリスト本体 初期化
    let KategoryListElement=document.querySelector("#KategoryList_js");
    //render関数の コンテナエレメント
    KategoryListElement.innerHTML = "";
    Set_kategory_List.forEach(listitem => {
        KategoryListElement.appendChild(element`<li>${listitem.Set_kategory_List.text},${listitem.Set_kategory_List.img},${listitem.Set_kategory_List.color}</li>`);
    });


}
