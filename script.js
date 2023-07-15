function volume_sphere() {
    //Write your code here
	const radius = +document.getElementById('radius').value;
	const vol = 4 / 3 * Math.PI * radius ** 3;
	// console.log(radius);
	// console.log(vol);
	document.getElementById('MyForm').addEventListener("submit", function(event){
  event.preventDefault()
});
	document.getElementById('volume').value = vol;
} 

document.getElementById('MyForm').onsubmit = volume_sphere;
