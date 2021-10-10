/**
 * Format the data fetched from the API to be passed to the Chart
 * @param {object} APIData - The data fetched from the API
 * @returns {string[][]} The formatted data
 */
function formatData({ near_earth_objects = [] }) {
  return near_earth_objects
    .map(
      ({
        name,
        estimated_diameter: {
          kilometers: { estimated_diameter_max, estimated_diameter_min },
        },
      }) => [name, estimated_diameter_min, estimated_diameter_max]
    )
    .sort(([nameA, minA, maxA], [nameB, minB, maxB]) => {
      const avgA = (minA + maxA) / 2;
      const avgB = (minB + maxB) / 2;
      return avgB - avgA;
    });
}

export { formatData };
