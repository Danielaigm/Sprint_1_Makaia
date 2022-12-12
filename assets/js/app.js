
const days = ["day-1", "day-2", "day-3", "day-4", "day-5", "day-6", "day-7"];

let values = [100.0, 300.0, 500.0, 140.0, 130.2, 360.0, 135.0];

for (i = 0; i < days.length; i++) {
    document.getElementById(days[i]).innerHTML = `$${values[i]}`;
}


const ocultar = (dayNum) => {
    document.getElementById(`day-${dayNum}`).style.display = "none";
};

const mostrar = (dayNum) => {
    document.getElementById(`day-${dayNum}`).style.display = "flex";
};



let total = 0;

values.forEach((item) => {
    total += item;
});

document.getElementById("total").innerHTML = `$${total}`;
