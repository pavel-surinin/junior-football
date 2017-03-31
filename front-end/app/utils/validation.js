
var React = require('react');


var valid = {
  tourn : function(post){
    var err = [];
    if (post.ageMin > post.ageMax ) {err.push('Minimalus amžius negali būti didesnis už maksimalų');}
    if (post.ageMin < 6 || post.ageMin > 17) {err.push('Jūs įvedėte minimalų amžių: ' + post.ageMin + ' . Tokio amžiaus vaikai negali dalyvauti turnyre');}
    if (post.ageMax > 18 || post.ageMax < 7) {err.push('Jūs įvedėte maksimalų amžių: ' + post.ageMax + ' . Tokio amžiaus vaikai negali dalyvauti turnyre');}
    return err;
  },
  player : function(arr){
    var err = [];
    if (arr.length == 0) {err.push('Privaloma užpildyti komandos narių formą');}
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].name == '') {err.push('Vardo laukas negali likti tučias ' + (i+1) + ' eilutėje');}
      if (arr[i].name !== '' && !valid.isName(arr[i].name)){err.push('Vardą gali sudaryti tik raidės ir \'-\', ' + (i+1) + ' eilutėje vardo laukas užpildytas blogai');}
      if (arr[i].surname == '') {err.push('Pavardės laukas negali likti tučias ' + (i+1) + ' eilutėje');}
      if (arr[i].surname !== '' && !valid.isName(arr[i].surname)){err.push('Pavardę gali sudaryti tik raidės ir \'-\', ' + (i+1) + ' eilutėje pavardės laukas užpildytas blogai');}
      if (arr[i].number == null || arr[i].number == '') {err.push('Numerio laukas negali likti tučias ' + (i+1) + ' eilutėje');}
      if (arr[i].number < 0) {err.push('Numerio laukas negali būti neigiamas ' + (i+1) + ' eilutėje');}
      if (arr[i].birthDate == '') {err.push('Datos laukas negali likti tučias ' + (i+1) + ' eilutėje');}
      if (arr[i].birthDate != '' && !valid.isDate(arr[i].birthDate)){err.push('Blogas datos formatas ' + (i+1) + ' eilutėje');}

      for (var j = 0; j < arr.length; j++) {

        if(arr[j].number == arr[i].number && j > i && !isNaN(arr[j].number)  && arr[j].number != null){
          err.push('Numeris ' + arr[j].number + ' kartojasi eilutėse ' + (i+1) + ' ir ' + (j+1) + ' .' );
        }
      }
    }
    return err;
  },
  isDate : function(date){
    var regex = new RegExp('^[1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]$');
    return regex.test(date);
  },
  isName: function(name){
    var regex = new RegExp('^[A-Za-z-_ ]*[-]*[A-Za-z]*$');
    return regex.test(name);
  },
  isTeamName: function(name){
    if (name == '') {
      return false;
    }
    var regex = new RegExp('^[A-Za-z0-9-_ ]*$');
    return regex.test(name);
  },
  name : function(name,arr){
    if (name == '') {
      arr.push('Vardo laukas negali būti tuščias');
    } else if (valid.isName(name)) {

    } else {
      arr.push('Vardą gali sudaryti raidės, tarpai ir \'-\'');
    }
  },
  isEmail : function(mail){
    var regex = new RegExp('^[A-Za-z0-9-_]*@[A-Za-z0-9-_]*.[A-Za-z]*$');
    return regex.test(mail);
  },
  email : function(name,arr){
    if (name == '') {
      arr.push('El. pašto laukas negali būti tuščias');
    } else if (valid.isEmail(name)) {
    } else {
      arr.push('el.paštas turi atrodyti taip: el@paštas.lt');
    }
  },
  isPhone : function(phone){
    var regex = new RegExp('^[+]370[56][0-9]{7}$');
    return regex.test(phone);
  },
  phone : function(name,arr){
    if (name == '') {
      arr.push('Telefono numerio laukas negali būti tuščias');
    } else if (valid.isPhone(name)) {
    } else {
      arr.push('Telefono numeris turi atrodyti taip: +37061234567');
    }
  },
  showMessages: function(arr){
    if (arr) {
      return arr.map(function(m,idx){
        return(
          <div key={idx} className="alert alert-danger my-alert w3-animate-right">
            <i className="fa fa-exclamation" aria-hidden="true"></i><span>{m}</span>.
          </div>
        );
      })
    }
  },
}

module.exports = valid;
