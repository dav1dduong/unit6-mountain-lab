export interface Mountain {
  name: string;
  height: number;
}

export const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (
  arrayOfMountains: Mountain[]
): string => {
  let tallestMountain = arrayOfMountains[0];
  if (arrayOfMountains.length === 0) {
    return "";
  }
  arrayOfMountains.forEach((mountain) => {
    if (mountain.height > tallestMountain.height) {
      tallestMountain = mountain;
    }
  });
  return tallestMountain.name;
};
