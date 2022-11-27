//slider

let data = [
  {
    id: 1,
    imageurl: "https://cdn-images.farfetch-contents.com/13/04/05/78/13040578_14523363_1000.jpg",
    slide: "MATSUDA M2903",
  },
  {
    id: 2,
    imageurl: "https://kenari.ge/uploads/Product/627971665491349.jpg",
    slide: "MATSUDA M2050",
  },
  {
    id: 3,
    imageurl: "https://kenari.ge/uploads/Product/481991665491178.jpg",
    slide: "MATSUDA M3095",
  },
  {
    id: 4,
    imageurl: "https://kenari.ge/uploads/Product/437481641387137.jpg",
    slide: "Ray-Ban RB2140",
  },
];

const arrowleft = document.getElementById("arrow-left");
const arrowright = document.getElementById("arrow-right");
const slidercontent = document.getElementById("slider-content");
let sliderIndex = 0;
//created div tag
function createDivTag() {
  const divTag = document.createElement("div");
  divTag.classList.add("slide");

  return divTag;
}

//created image tag
function createImageTag(item) {
  // const imageTag = document.createElement("img");
  // imageTag.setAttribute("src", item.imageurl);
  // imageTag.setAttribute("alt", item.title);

  //bg image
  const imageTag = document.createElement("div");
  imageTag.style.backgroundImage = `url(${item.imageurl})`;
  imageTag.classList.add("bg-image1");

  return imageTag;
}

//created title tag
function createTitleTag(item) {
  const titleTag = document.createElement("title");
  titleTag.textContent = item.title;

  return titleTag;
}

//created dotparent

function createDots() {
  const dotsParent = document.createElement("div");
  dotsParent.classList.add("dotParent");

  data.forEach((element) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsParent.appendChild(dot);
  });

  return dotsParent;
}

function slide() {
  slidercontent.innerHTML = " ";
  const slideItem = createDivTag(data[sliderIndex]);
  const imgTag = createImageTag(data[sliderIndex]);
  const tittleTag = createTitleTag(data[sliderIndex]);
  const dotsElement = createDots();

  slideItem.appendChild(imgTag);
  slideItem.appendChild(tittleTag);
  slidercontent.appendChild(slideItem);
  sliderCOntent.appendChild(dotsElement);
}

function arrowleftClick() {
  if (sliderIndex == 0) {
    sliderIndex = data.length - 1;
    slide();
    return;
  }
  sliderIndex--;
  slide();
}

function arrowrightClick() {
  if (sliderIndex == data.length - 1) {
    sliderIndex = 0;
    slide();
    return;
  }
  sliderIndex++;
  slide();
}

arrowleft.addEventListener("click", arrowleftClick);
arrowright.addEventListener("click", arrowrightClick);

setInterval(() => {
  arrowleftClick();
}, 5000);

slide();


// form validation

let registrationForm = document.getElementById('registrationForm');


registrationForm.addEventListener('submit', function(event){
  event.preventDefault();
  let errors = {};


  // username
  let usernameValue = document.getElementById('usernameField').value;
  if (usernameValue == ""){
    errors.username = 'Username field can not be empty';
  }

  //password
  let passwordValue = document.getElementById('passwordField').value;
  let passwordValue2 = document.getElementById('passwordFieldRepeat').value;
  
  if (passwordValue == ""){
    errors.password = 'Password field can not be empty' ;
  }
  if (passwordValue !=passwordValue2){
    errors.password2 = 'Passwords do not match';
  }
  
// checkbox
let agreeField = document.getElementById('agreeTerms').checked;

if(!agreeField){
  errors.agree = 'You must agree out terms and conditions';
}
console.log(errors);

document.querySelectorAll('.error-text').forEach(item =>{
  item.textContent = " ";
})

for (let key in errors){
  let spanText = document.getElementById('error-' + key );

  if (spanText){
    spanText.textContent = errors[key];
  }
}

if (Object.keys(errors).length == 0){
  registrationForm.submit();
}

});

//show/hide

let password = document.getElementById("passwordField");
let icon = document.getElementById("toogleIcon");

icon.addEventListener("click", function () {
  if (password.type == "password") {
    password.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");
  }
});
