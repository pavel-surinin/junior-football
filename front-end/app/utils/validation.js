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
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].name == '') {err.push('Vardo laukas negali likti tučias ' + (i+1) + ' eilutėje');}
      if (arr[i].surname == '') {err.push('Pavardės laukas negali likti tučias ' + (i+1) + ' eilutėje');}
      if (arr[i].number == null || arr[i].number == '') {err.push('Numerio laukas negali likti tučias ' + (i+1) + ' eilutėje');}
      if (arr[i].birthDate == '') {err.push('Datos laukas negali likti tučias ' + (i+1) + ' eilutėje');}

      for (var j = 0; j < arr.length; j++) {

        if(arr[j].number == arr[i].number && j > i && !isNaN(arr[j].number)){
          err.push('Numeris ' + arr[j].number + ' kartojasi eilutėse ' + (i+1) + ' ir ' + (j+1) + ' .' );
        }
      }
    }

    return err;
  }
}

module.exports = valid;
