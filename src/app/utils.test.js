import { formatData, getOrbitalBodies } from "./utils";

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
      close_approach_data: [{ orbiting_body: "x" }],
    },
    {
      name: "b",
      estimated_diameter: {
        kilometers: {
          estimated_diameter_max: 3,
          estimated_diameter_min: 4,
        },
      },
      close_approach_data: [{ orbiting_body: "y" }],
    },
    {
      name: "c",
      estimated_diameter: {
        kilometers: {
          estimated_diameter_max: 5,
          estimated_diameter_min: 6,
        },
      },
      close_approach_data: [{ orbiting_body: "x" }],
    },
  ],
};

const data = [
  ["c", 6, 5],
  ["b", 4, 3],
  ["a", 2, 1],
];

const orbitalBodies = ["x", "y"];

describe("formatData", () => {
  test("returns the right data", () => {
    expect(formatData({})).toEqual([]);
    expect(formatData(APIata)).toEqual(data);

    const dataByOrbitalBody = {
      x: [
        ["c", 6, 5],
        ["a", 2, 1],
      ],
      y: [["b", 4, 3]],
    };

    expect(formatData(APIata, orbitalBodies[0])).toEqual(
      dataByOrbitalBody[orbitalBodies[0]]
    );
    expect(formatData(APIata, orbitalBodies[1])).toEqual(
      dataByOrbitalBody[orbitalBodies[1]]
    );
  });
});

describe("getOrbitalBodies", () => {
  test("returns the right data", () => {
    expect(getOrbitalBodies({})).toEqual([]);
    expect(getOrbitalBodies(APIata)).toEqual(orbitalBodies);
  });
});
