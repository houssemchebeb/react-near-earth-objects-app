/**
 * Format the data fetched from the API to be passed to the Chart & Table
 * the data are filtered by the selected orbital body
 * @param {object} APIData - The data fetched from the API
 * @param {string} selectedOrbitalBody - The selected orbital body
 * @returns {string[][]} The formatted data
 */
function formatData({ near_earth_objects = [] }, selectedOrbitalBody) {
  return near_earth_objects
    .filter(({ close_approach_data }) => {
      if (!selectedOrbitalBody) {
        return true;
      }
      return close_approach_data.some(
        ({ orbiting_body }) => orbiting_body === selectedOrbitalBody
      );
    })
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

/**
 * Get the orbital bodies names from the API data
 * @param {object} APIData - The data fetched from the API
 * @returns {string[]} The orbital bodies names
 */
function getOrbitalBodies({ near_earth_objects = [] }) {
  const set = new Set();
  near_earth_objects.forEach(({ close_approach_data }) => {
    close_approach_data.forEach(({ orbiting_body }) => {
      set.add(orbiting_body);
    });
  });
  return [...set];
}

export { formatData, getOrbitalBodies };
