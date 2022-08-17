// https://calculator.swiftutors.com/lateral-surface-area-of-a-cone-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const lateralSurfaceAreaofConeRadio = document.getElementById('lateralSurfaceAreaofConeRadio');
const radiusoftheConeRadio = document.getElementById('radiusoftheConeRadio');
const heightoftheConeRadio = document.getElementById('heightoftheConeRadio');

let lateralSurfaceAreaofCone;
const PI = Math.PI;
let radiusoftheCone = v1;
let heightoftheCone = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

lateralSurfaceAreaofConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius of the Cone';
  variable2.textContent = 'Height of the Cone';
  radiusoftheCone = v1;
  heightoftheCone = v2;
  result.textContent = '';
});

radiusoftheConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Lateral Surface Area of Cone';
  variable2.textContent = 'Height of the Cone';
  lateralSurfaceAreaofCone = v1;
  heightoftheCone = v2;
  result.textContent = '';
});

heightoftheConeRadio.addEventListener('click', function() {
  variable1.textContent = 'Lateral Surface Area of Cone';
  variable2.textContent = 'Radius of the Cone';
  lateralSurfaceAreaofCone = v1;
  radiusoftheCone = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(lateralSurfaceAreaofConeRadio.checked)
    result.textContent = `Lateral Surface Area of Cone = ${computeLateralSurfaceAreaofCone().toFixed(2)}`;

  else if(radiusoftheConeRadio.checked)
    result.textContent = `Radius of the Cone = ${computeRadiusoftheCone().toFixed(2)}`;

  else if(heightoftheConeRadio.checked)
    result.textContent = `Height of the Cone = ${computeHeightoftheCone().toFixed(2)}`;
})

// calculation

function computeLateralSurfaceAreaofCone() {
  return PI * Number(radiusoftheCone.value) * Math.sqrt(Math.pow(Number(radiusoftheCone.value), 2) + Math.pow(Number(heightoftheCone.value), 2));
}

function computeRadiusoftheCone() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeHeightoftheCone() {
  return Math.sqrt(Math.pow(Number(lateralSurfaceAreaofCone.value) / (PI * Number(radiusoftheCone.value)), 2) - Math.pow(Number(radiusoftheCone.value), 2));
}