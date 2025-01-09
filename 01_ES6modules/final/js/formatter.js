export default function converter(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

//Above code will format number into indian rupees representation
//for example 10,000 get converted into ₹12,344.00
