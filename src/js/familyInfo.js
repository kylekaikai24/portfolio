var app = new Vue({
  el: '#app',
  data: {
      titleline1: "陳氏一族",
      titleline2: "身份資料庫大全",
      selectPlaceHolder: "-- 請選擇 --",
      btnMessage: "隱藏",
      btnToHide: false,
      
      
    person: [{
        chiName: '陳爸爸',
        engName: 'CHAN PA PA',
        hkid: 'A123456(7)',
        dateOfBirth: '2/1/1960',
        HRP_No: 'A12345678',
        HRP_expiryDate: '10/10/2020',
        passportNo: 'A87654321',
        passportExpiryDate: '01/01/2022',
      },
      {
        chiName: '陳媽媽',
        engName: 'CHAN MA MA',
        hkid: 'B000000(1)',
        dateOfBirth: '03/01/1968',
        HRP_No: 'B0000000',
        HRP_expiryDate: '15/01/2022',
        passportNo: 'B1111111',
        passportExpiryDate: '03/04/2025',
      },
      {
        chiName: '陳仔仔',
        engName: 'CHAN CHAI CHAI',
        hkid: 'C147258(3)',
        dateOfBirth: '05/06/1997',
        HRP_No: 'C14725836',
        HRP_expiryDate: '23/12/2022',
        passportNo: 'C14725836',
        passportExpiryDate: '23/12/2022',
      },
      {
        chiName: '陳女女',
        engName: 'CHAN LUI LUI',
        hkid: 'D789456(1)',
        dateOfBirth: '04/04/1994',
        HRP_No: 'D78945612',
        HRP_expiryDate: '02/02/2022',
        passportNo: 'D78945612',
        passportExpiryDate: '02/02/2022',
      },
    ],
    indexOfPerson: '',
  },
  methods: {
    showDiv: function(){
      this.showInfo = true;
    },
    
    hideInfo: function(){
      if(!this.btnToHide){
        this.btnToHide = true;
        this.btnMessage = "展開"
      } else{
        this.btnToHide = false;
        this.btnMessage = "隱藏";
      }
    }
  }
});

