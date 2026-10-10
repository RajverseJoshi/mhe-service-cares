export interface Product {
  id: string;
  name: string;
  capacity: string;
  category: "Hand Pallet Trucks" | "Drum Handling Trucks";
  img: string;
  price?: string;
  specs: string[];
}

export const products: Product[] = [
  // Hand Pallet Trucks
  {
    id: "VI-01",
    name: "Hydraulic Hand Pallet Truck",
    capacity: "2.5 - 3 Ton",
    category: "Hand Pallet Trucks",
    img: "/images/products/VI-01.jpg",
    price: "₹13,500.00",
    specs: [
      "Product Type: Hand Pallet Truck / Manual Pallet Jack",
      "Load Capacity: 2.5 Ton (2500 kg)",
      "Fork Width: 685 mm (Overall Width)",
      "Fork Length: 1220 mm (Standard)",
      "Minimum Fork Height: 85 mm (Approx.)",
      "Maximum Fork Height: 200 mm (Approx.)",
      "Fork Thickness: 3.0 mm (Approx.)",
      "Wheel Type: PU / Nylon (as per availability)",
      "Lifting Mechanism: Hydraulic manual pump",
      "Handle Type: Ergonomic, 3-position control (Lift / Neutral / Lower)",
      "Body Material: Heavy-duty steel",
      "Finish: Powder-coated industrial finish",
      "Usage: Warehouse, factory, logistics, and industrial material handling"
    ]
  },
  {
    id: "VI-02",
    name: "Heavy Duty Hand Pallet Truck",
    capacity: "3 - 5 Ton",
    category: "Hand Pallet Trucks",
    img: "/images/products/VI-02.jpg",
    price: "₹18,500.00",
    specs: [
      "Product Type: Heavy Duty Pallet Truck",
      "Load Capacity: 5.0 Ton (5000 kg)",
      "Fork Width: 685 mm",
      "Fork Length: 1220 mm",
      "Body Material: Reinforced Heavy-duty steel",
      "Usage: High capacity industrial material handling"
    ]
  },
  {
    id: "VI-03",
    name: "Heavy Duty Hand Pallet Truck (SS)",
    capacity: "1 - 1.5 Ton",
    category: "Hand Pallet Trucks",
    img: "/images/products/VI-03.jpg",
    price: "Call for Price",
    specs: [
      "Product Type: Stainless Steel Pallet Truck",
      "Load Capacity: 1.5 Ton",
      "Material: Grade 304 Stainless Steel",
      "Usage: Pharmaceuticals, Food Processing, Corrosive environments"
    ]
  },
  {
    id: "VI-04",
    name: "High Lift Pallet Truck",
    capacity: "Varies",
    category: "Hand Pallet Trucks",
    img: "/images/products/VI-04.jpg",
    price: "Call for Price",
    specs: [
      "Product Type: High Lift / Scissor Lift Pallet Truck",
      "Lifting Height: Up to 800 mm",
      "Usage: Ergonomic workstation loading, sorting operations"
    ]
  },
  {
    id: "VI-05",
    name: "Small Hand Pallet Truck",
    capacity: "Varies",
    category: "Hand Pallet Trucks",
    img: "/images/products/VI-05.jpg",
    price: "Call for Price",
    specs: [
      "Product Type: Mini/Small Pallet Jack",
      "Fork Length: 800 mm to 900 mm",
      "Usage: Tight aisles, small retail stores, delivery trucks"
    ]
  },
  {
    id: "VI-06",
    name: "Transformer Hand Pallet Truck",
    capacity: "Varies",
    category: "Hand Pallet Trucks",
    img: "/images/products/VI-06.jpg",
    price: "Call for Price",
    specs: [
      "Product Type: Multi-purpose Transformer Truck",
      "Features: Adjustable forks and hybrid handling capabilities",
      "Usage: Versatile warehouse handling"
    ]
  },

  // Drum Handling Trucks
  {
    id: "VI-07",
    name: "3 Wheel Drum Truck",
    capacity: "300kg",
    category: "Drum Handling Trucks",
    img: "/images/products/VI-07.jpg",
    price: "Call for Price",
    specs: [
      "Product Type: Drum Truck (3 Wheel Design)",
      "Load Capacity: 300 kg",
      "Drum Size: Standard 55 Gallon (210 Liters)",
      "Wheel Type: PU Wheels with Swivel Caster",
      "Usage: Basic drum transportation and handling"
    ]
  },
  {
    id: "VI-08",
    name: "4 Wheel Drum Truck",
    capacity: "Varies",
    category: "Drum Handling Trucks",
    img: "/images/products/VI-08.jpg",
    price: "Call for Price",
    specs: [
      "Product Type: Heavy Duty Drum Truck (4 Wheel)",
      "Stability: 4 point ground contact for secure drum moving",
      "Usage: Safe transport of heavy chemical or oil drums"
    ]
  },
  {
    id: "VI-09",
    name: "Drum Tilter & Mover",
    capacity: "Varies",
    category: "Drum Handling Trucks",
    img: "/images/products/VI-09.jpg",
    price: "Call for Price",
    specs: [
      "Product Type: Drum Tilting Equipment",
      "Features: Geared tilt mechanism for controlled pouring",
      "Usage: Dispensing liquids safely from heavy drums"
    ]
  },
  {
    id: "VI-10",
    name: "Drum Palletizer Stacker",
    capacity: "Varies",
    category: "Drum Handling Trucks",
    img: "/images/products/VI-10.jpg",
    price: "Call for Price",
    specs: [
      "Product Type: Drum Palletizer",
      "Lifting: Hydraulic lift mechanism",
      "Usage: Placing and removing drums from corner of pallets"
    ]
  },
  {
    id: "VI-11",
    name: "Manual Drum Stacker",
    capacity: "Varies",
    category: "Drum Handling Trucks",
    img: "/images/products/VI-11.jpg",
    price: "Call for Price",
    specs: [
      "Product Type: Manual Drum Stacking Unit",
      "Max Height: Standard stacking heights",
      "Usage: Vertical storage of drums"
    ]
  },
  {
    id: "VI-12",
    name: "Semi Battery Drum Stacker",
    capacity: "Varies",
    category: "Drum Handling Trucks",
    img: "/images/products/VI-12.jpg",
    price: "Call for Price",
    specs: [
      "Product Type: Semi-Electric Drum Stacker",
      "Lifting: Battery operated electric lift",
      "Movement: Manual push/pull",
      "Usage: High efficiency vertical drum storage with less effort"
    ]
  }
];
