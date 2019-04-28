import axios from "axios";
import flattenDeep from "lodash/flattenDeep";
import geoViewport from "@mapbox/geo-viewport";

export const reverseGeoLocation = async ({ lat, lng }) => {
  try {
    const address = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lon=${lng}&lat=${lat}`
    );
    return address.data.display_name;
  } catch (e) {
    return null;
  }
};

/**
 * Calculates viewport based on bounds and dimensions of map
 * @param {*} bounds
 * @param {*} dimensions
 */
export const bounds2Viewport = (bounds, dimensions) => {
  let flatBounds = flattenDeep(bounds);
  // * https://github.com/mapbox/geo-viewport
  const res = geoViewport.viewport(flatBounds, dimensions, 0, 22, 512, true);
  return { latitude: res.center[1], longitude: res.center[0], zoom: res.zoom };
};
