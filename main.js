const WEEKS = 4;
const EXTRA_BONUS_LIST = [
  {
    id: "domesticTravel",
    name: "交通部「國旅券」",
    url: "https://1000.taiwan.net.tw/",
    win: {
      "w1": ["21", "32", "98", "67", "97", "410"],
      "w2": [],
      "w3": [],
      "w4": [],
    }
  },
  {
    id: "iYuan",
    name: "原民會「i原券」",
    url: "https://explorethesun.tw/cipshop/",
    win: {
      "w1": ["64", "85"],
      "w2": [],
      "w3": [],
      "w4": [],
    }
  },
  {
    id: "agriculture",
    name: "農委會「農遊券」",
    url: "https://hpm.5000.gov.tw/cp.aspx?n=205",
    win: {
      "w1": ["89", "32", "54", "597", "453", "152"],
      "w2": [],
      "w3": [],
      "w4": [],
    }
  },
  {
    id: "artFunE",
    name: "文化部「藝Fun券」(數位)",
    url: "https://artsfunnext.moc.gov.tw/",
    win: {
      "w1": ["96", "15", "07", "30", "73", "98", "19", "11"],
      "w2": [],
      "w3": [],
      "w4": [],
    }
  },
  {
    id: "artFunP",
    name: "文化部「藝Fun券」(紙本)",
    url: "https://artsfunnext.moc.gov.tw/",
    win: {
      "w1": ["39", "37", "23", "36", "79", "08", "14", "75"],
      "w2": [],
      "w3": [],
      "w4": [],
    }
  },
  {
    id: "sports",
    name: "教育部「動滋券」",
    url: "https://500.gov.tw/",
    win: {
      "w1": ["97", "13", "19", "55", "71", "93", "381", "734", "644", "453", "985"],
      "w2": [],
      "w3": [],
      "w4": [],
    }
  },
  {
    id: "hakka",
    name: "客委會「客庄券」",
    url: "http://www.hakka500.tw/",
    win: {
      "w1": ["81", "900"],
      "w2": [],
      "w3": [],
      "w4": [],
    }
  },
  {
    id: "rgionalRevitalization",
    name: "國發會「地方創生券」",
    url: "https://www.twrr.ndc.gov.tw/index",
    win: {
      "w1": ["081", "105", "594", "188", "089", "396", "521", "467", "912", "798", "358", "441", "367", "941", "335"],
      "w2": [],
      "w3": [],
      "w4": [],
    }
  }
];


new Vue({
  el: '#app',
  data() {
    return {
      rules: {
        required: value => !!value || '此欄位為必填',
        idNo: value => {
          const pattern = /^[0-9]{3}$/
          return pattern.test(value) || '請輸入三個數字'
        },
        checkboxRequired: value => !!value.length || '請至少選擇一項',
        sports: value => {
          if (this.input.registerExtraBonus.includes(3) && this.input.registerExtraBonus.includes(4)) {
            return "紙本、數位藝Fun券只能擇一選擇"
          }
          return true
        }
      },
      weeks: 0,
      extraBonusList: [],
      input: {
        valid: false,
        idNo: "",
        registerExtraBonus: []
      },
      output: {
        idNo: "",
        win: []
      },
      showOutput: false,
    }
  },
  mounted() {
    this.Init();
  },
  methods: {
    Init() {
      this.weeks = this.GetWeeks();
      this.extraBonusList = this.GetExtraBonusList();
    },
    GetWeeks() {
      return WEEKS;
    },
    GetExtraBonusList() {
      return EXTRA_BONUS_LIST
    },
    CheckWin() {
      this.input.registerExtraBonus.sort();
      this.output.idNo = this.input.idNo;
      this.showOutput = true;
    },
    Reset() {
      this.ClearOutput();
      this.showOutput = false;
    },
    ClearInput() {
      this.input.idNo = "";
      this.input.registerExtraBonus = [];
    },
    ClearOutput() {
      this.output.idNo = "";
      this.output.win = [];
    }
  },
  vuetify: new Vuetify(),
})