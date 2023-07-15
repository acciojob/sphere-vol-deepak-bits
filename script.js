function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	const radius = +document.getElementById('radius').value;
	const vol = 4 / 3 * Math.PI * radius ** 3;

	document.getElementById('volume').value = volume.toFixed(4);
} 


window.onload = function() {
  document.getElementById('MyForm').addEventListener('submit', volume_sphere);
};
