type frecuency = "Mensual" | "Trimestral";
type colorCard = "lightcoral" | "LemonChiffon" | "LightGreen" | "lightcyan";


export interface BillCardInterface {
  title: string,
  cost: number,
  frecuency: frecuency,
  color: colorCard,
  payer: string[]
  image: string,
}

export const billCardList: BillCardInterface[] = [
  {
    title: "Alquiler",
    cost: 700,
    frecuency: "Mensual",
    color: "LightGreen",
    payer: ["ruben", "manz", "Raul"],
    image: "https://image.flaticon.com/icons/png/512/609/609803.png",
  },
  {
    title: "Agua",
    cost: 60,
    frecuency: "Trimestral",
    color: "lightcyan",
    payer: ["ruben", "manz", "Raul"],
    image: "https://image.flaticon.com/icons/png/512/414/414974.png"
  },
  {
    title: "Luz",
    cost: 53,
    frecuency: "Mensual",
    color: "LemonChiffon",
    payer: ["ruben", "manz", "Raul"],
    image: "https://image.flaticon.com/icons/png/512/2246/2246613.png"
  }

]


function selectImage(title: string): string {
  switch (title) {
    case "Alquiler":
      return "https://image.flaticon.com/icons/png/512/609/609803.png";
    case "Agua":
      return "https://image.flaticon.com/icons/png/512/414/414974.png";
    default:
      return "https://image.flaticon.com/icons/png/512/2246/2246613.png";
  }
}
