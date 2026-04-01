/**
 * 沖繩行程表 · 照片對照表
 * --------------------------------
 * 只要改下面 files 物件右邊的「檔名字串」，存檔後重新整理網頁即可。
 * 圖源預設來自 Google Drive 指定資料夾（見 base）。
 *
 * key（左邊）勿改，除非一併改 okinawa_itinerary.html 裡對應的 data-photo。
 */
(function () {
  window.ITINERARY_PHOTO_CONFIG = {
    base: "okinawa images",
    files: {
      "day1-flight-out": "tigerair.jpg",
      "day1-airport-arrive": "naha airport.jpeg",
      "day1-hotel-yuquesta": "HOTEL YUQUESTA AGARIMACHI.jpg",
      "day1-optional-menkyokaiden": "國際通.jpeg",

      "day2-hotel-breakfast": "HOTEL YUQUESTA AGARIMACHI breakfast.jpg",
      "day2-orix": "orix 旭橋.jpeg",
      "day2-hotel-checkout": "HOTEL YUQUESTA AGARIMACHI check out.jpg",
      "day2-fish-yomitan": "読谷村漁協.jpg",
      "day2-fish-itoman": "糸滿魚市場.webp",
      "day2-fish-tomari": "泊港漁市場.jpg",
      "day2-fish-awase": "泡瀨漁港.jpg",
      "day2-manzamo": "萬座毛.jpg",
      "day2-kouri": "古宇利島.webp",
      "day2-gajumaru": "Gajumaru Rock.jpeg",
      "day2-nakijin": "今歸仁 Tabinoteitaku.jpg",
      "day2-dinner-tingara": "沖縄創作居酒屋 天の川食堂 てぃんがーら.jpg",
      "day2-dinner-yakiniku": "焼肉本部牧場 本部本店.jpg",

      "day3-breakfast": "HOTEL YUQUESTA AGARIMACHI breakfast.jpg",
      "day3-churaumi": "美麗海水族館.jpg",
      "day3-lunch-inoh": "美麗海水族館 4F INOH.jpg",
      "day3-lunch-kaihomaru": "海人料理 Kaihomaru.jpg",
      "day3-return-nakijin": "今歸仁 Tabinoteitaku.jpg",
      "day3-wedding-ceremony": "琉の国 阿古豬涮涮鍋.jpg",
      "day3-bise": "古宇利島.webp",
      "day3-wedding-banquet": "琉の国 阿古豬涮涮鍋.jpg",
      "day3-shabu-agu": "琉の国 阿古豬涮涮鍋.jpg",

      "day4-breakfast": "HOTEL YUQUESTA AGARIMACHI breakfast.jpg",
      "day4-checkout-nakijin": "今歸仁 Tabinoteitaku.jpg",
      "day4-lunch-potama": "Pork Tamago Onigiri Potama.jpeg",
      "day4-lunch-donkey": "びっくりドンキー 沖縄美浜店.jpg",
      "day4-american-depot": "American Depot.jpeg",
      "day4-araha-park": "araha beach park.jpeg",
      "day4-parco-city": "PARCO CITY.jpeg",
      "day4-tokyu-checkin": "東急 Stay 沖繩那霸.gif",
      "day4-yataimura": "屋台村.jpeg",

      "day5-hotel-breakfast": "東急 Stay 沖繩那霸.gif",
      "day5-makishi-market": "牧志公設市場.webp",
      "day5-breakfast-tomari": "泊港漁市場.jpg",
      "day5-checkout-tokyu": "東急 Stay 沖繩那霸.gif",
      "day5-lunch-fish": "糸滿魚市場.webp",
      "day5-lunch-ramen": "暖暮拉麵 糸滿店.jpg",
      "day5-ryubo": "RYUBO 琉貿百貨.jpg",
      "day5-orix-airport": "orix 那霸機場店.jpg",
      "day5-airport": "naha airport.jpeg",
      "day5-flight-home": "tigerair.jpg",
    },
  };

  function encodeRelPath(rel) {
    return String(rel)
      .split("/")
      .map(function (seg) {
        return encodeURIComponent(seg);
      })
      .join("/");
  }

  function applyPhotos() {
    var C = window.ITINERARY_PHOTO_CONFIG;
    if (!C || !C.files) return;
      var base = String(C.base || "okinawa images").replace(/\/?$/, "");
      var hasAbsolutePath = base.charAt(0) === "/";
    document.querySelectorAll("img[data-photo]").forEach(function (img) {
      var key = img.getAttribute("data-photo");
      var file = C.files[key];
      if (file) {
          var encoded = encodeRelPath(base + "/" + file);
          img.src = hasAbsolutePath ? "file://" + encoded : encoded;
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyPhotos);
  } else {
    applyPhotos();
  }
})();
