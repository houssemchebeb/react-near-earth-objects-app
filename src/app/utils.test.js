import { formatData } from "./utils";

const APIata = {
  near_earth_objects: [
    {
      name: "a",
      estimated_diameter: {
        kilometers: {
          estimated_diameter_max: 1,
          estimated_diameter_min: 2,
        },
      },
    },
    {
      name: "b",
      estimated_diameter: {
        kilometers: {
          estimated_diameter_max: 3,
          estimated_diameter_min: 4,
        },
      },
    },
    {
      name: "c",
      estimated_diameter: {
        kilometers: {
          estimated_diameter_max: 5,
          estimated_diameter_min: 6,
        },
      },
    },
  ],
};

const data = [
  ["c", 6, 5],
  ["b", 4, 3],
  ["a", 2, 1],
];

describe("formatData", () => {
  test("returns the right data", () => {
    expect(formatData({})).toEqual([]);
    expect(formatData(APIata)).toEqual(data);
  });
});
