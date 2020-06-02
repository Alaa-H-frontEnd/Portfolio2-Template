
// Hover effect
function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  window.onscroll = function () {

    if(window.scrollY > 10) {

        document.getElementById('N').classList.add('navbar2');

        document.getElementById('N').classList.remove('navbar');

        document.getElementById('H').classList.add('home');
        document.getElementById('H').classList.remove('_h');

        // document.getElementById('btn').classList.add('buttn');
        // document.getElementById('brnd').classList.add('brannd');


    }else{

        document.getElementById('N').classList.remove('nav2');

        document.getElementById('N').classList.add('navbar');

        document.getElementById('H').classList.remove('home');
        document.getElementById('H').classList.add('_h');
    }
}

// Validation


function validation (){

  var x;
  
  x = document.getElementById("v").value;


  if (x == '') {
  
      document.getElementById("valid").innerHTML = 'Please enter your e-mail';
      document.getElementById('v').classList.add('input2');

  }else{
 
      document.getElementById("valid").innerHTML = 'Submitting...';
      document.getElementById('v').classList.remove('input2');

  }
}



function validation2 () {

  var n;
  var e;
  var s;
  // var mssg;

   n  = document.getElementById('nme').value;
   e = document.getElementById('mail').value;
   s   = document.getElementById('subj').value;
  //  mssg  = document.getElementById('msg').value;


  if(n == '' && e == '' && s == ''){

    document.getElementById('vl4').innerHTML = 'You must enter your data';
    document.getElementById('nme').classList.add('input2');
    document.getElementById('mail').classList.add('input2');
    document.getElementById('subj').classList.add('input2');

  }else if(n == ''){
    document.getElementById('nme').classList.add('input2');
    document.getElementById('mail').classList.remove('input2');
    document.getElementById('subj').classList.remove('input2');
    document.getElementById('vl').innerHTML = 'Please Enter Your name..';
    document.getElementById('vl2').innerHTML = '';
    document.getElementById('vl3').innerHTML = '';

  }else if(e == ''){
    document.getElementById('mail').classList.add('input2');
    document.getElementById('nme').classList.remove('input2');
    document.getElementById('subj').classList.remove('input2');
    document.getElementById('vl2').innerHTML = 'Please Enter your e-mail..';
    document.getElementById('vl').innerHTML = '';
    document.getElementById('vl3').innerHTML = '';

  }else if(s == ''){
    document.getElementById('subj').classList.add('input2');
    document.getElementById('nme').classList.remove('input2');
    document.getElementById('mail').classList.remove('input2');
    document.getElementById('vl3').innerHTML = 'Please Enter the subject.';
    document.getElementById('vl2').innerHTML = '';
    document.getElementById('vl').innerHTML = '';
  } else{
    document.getElementById('subj').classList.remove('input2');
    document.getElementById('nme').classList.remove('input2');
    document.getElementById('mail').classList.remove('input2');

    document.getElementById('vl').innerHTML  = '';
    document.getElementById('vl2').innerHTML = '';
    document.getElementById('vl3').innerHTML = '';
    document.getElementById('vl4').innerHTML = 'Submitting..';
  }

  // if(name == '')
  // {
  //   document.getElementById('nme').classList.add('input2');
  //   document.getElementById('vl').innerHTML = 'Please Enter Your name..';
  // }else{
  //   document.getElementById('nme').classList.remove('input2');
  //   document.getElementById('vl').innerHTML = 'Submitting..';
  // }



  // if(email == '')
  // {   
  //   document.getElementById('vl2').innerHTML = 'Please Enter Your E-mail..';

  // }else{
  //   document.getElementById('mail').classList.remove('input2');
  //   document.getElementById('vl2').innerHTML = 'Submitting..';
  // }



  // if(sub == '')
  // { 
  //   document.getElementById('subj').classList.remove('input2'); 
  //   document.getElementById('vl3').innerHTML = 'Please Enter the subject..';

  // }else{
  //   document.getElementById('subj').classList.remove('input2');
  //   document.getElementById('vl3').innerHTML = 'Submitting..';
  // }


}