var usrDetails = [];
function registerPage() {
    var registerHtml = "";
    registerHtml = '<div class="form-group">' +
            '<label for="exampleInputEmail1">Email address</label>' +
            '<input type="email" class="form-control" id="usrEmail1" aria-describedby="emailHelp" placeholder="Enter email"></div>'
     registerHtml += '<div class="form-group">' +
            '<label for="exampleInputEmail1">Store Name</label>' +
            '<input type="text" class="form-control" id="usrStrName" aria-describedby="nameHelp" placeholder="Enter Store Name"></div>'
    registerHtml += '<div class="form-group col-md-6">' +
            '<label for="exampleInputEmail1">Birth-Date</label>' +
            '<input type="date" class="form-control" id="usrBdate" aria-describedby="bdateHelp"></div>'
    registerHtml += '<div class="form-group col-md-6">' +
            '<label for="exampleInputEmail1">City</label>' +
            '<select id="usrcity" class="form-control" onfocus="getCityName(this)"><option value="">Select City</option></select>'
    $('#registerApp').html(registerHtml);
    $('#loginRegisterbtn').val('Login').attr('onclick', 'loginPage();');
}
function loginPage() {
    $('#registerApp').html("");
}
function getCityName(thisEle) {
    var cityNameHtml = '<option value="">Select City</option>';
    for (var i = 0; i < cityName.length; i++) {
        cityNameHtml += '<option value=' + cityName[i]+ '>' + cityName[i] + '</option>';
        $(thisEle).html(cityNameHtml);
    }
}
// Main Login START
function login(){
    var usrName = $('#usrName').val(),
    usrpwd = $('#usrPwd').val(),
    usrEmail = $('#usrEmail').val(),
    usrCity = $('#usrCity').val(),
    usrBdate = $('#usrBdate').val();
    
    if(usrName == undefined || usrName == ""){
        failAlert("Please Enter User Name");
        return false;
    }else if (usrpwd == undefined || usrpwd == "") {
        failAlert("Please Enter Password");
        return false;
    }else{
        var usrDetail = {
            "usrName":usrName,
            "usrpwd":usrpwd,
        };
      usrDetails.push(usrDetail);
        successAlert("user successfully Added");
        localStorage.usrName = usrName;
    }  
    console.log(usrDetails)
};