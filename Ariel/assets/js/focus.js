function clear_On(){
  let arr = document.querySelectorAll(".on");
  for (var i = 0; i < arr.length; i++) {
    arr[i].classList.remove("on");
  }
}

Monday_1.onfocus = function() {
  clear_On();
  document.getElementById('Monday_1_text').classList.add("on");
};
Tuesday_1.onfocus = function() {
  clear_On();
  document.getElementById('Tuesday_1_text').classList.add("on");
};
Wednesday_1.onfocus = function() {
  clear_On();
  document.getElementById('Wednesday_1_text').classList.add("on");
};
Thursday_1.onfocus = function() {
  clear_On();
  document.getElementById('Thursday_1_text').classList.add("on");
};
Friday_1.onfocus = function() {
  clear_On();
  document.getElementById('Friday_1_text').classList.add("on");
};
Saturday_1.onfocus = function() {
  clear_On();
  document.getElementById('Saturday_1_text').classList.add("on");
};
Sunday_1.onfocus = function() {
  clear_On();
  document.getElementById('Sunday_1_text').classList.add("on");
};
Monday_2.onfocus = function() {
  clear_On();
  document.getElementById('Monday_2_text').classList.add("on");
};
Tuesday_2.onfocus = function() {
  clear_On();
  document.getElementById('Tuesday_2_text').classList.add("on");
};
Wednesday_2.onfocus = function() {
  clear_On();
  document.getElementById('Wednesday_2_text').classList.add("on");
};
Thursday_2.onfocus = function() {
  clear_On();
  document.getElementById('Thursday_2_text').classList.add("on");
};
Friday_2.onfocus = function() {
  clear_On();
  document.getElementById('Friday_2_text').classList.add("on");
};
Saturday_2.onfocus = function() {
  clear_On();
  document.getElementById('Saturday_2_text').classList.add("on");
};
Sunday_2.onfocus = function() {
  clear_On();
  document.getElementById('Sunday_2_text').classList.add("on");
};