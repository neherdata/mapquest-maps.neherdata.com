L.mapquest.key = "LzDu2mjatZtN86GSHu2OolJzRbZ8U3dE";

// 'map' refers to a <div> element with the ID map
L.mapquest.map("map", {
  center: [40.3083382, -74.0697479],
  layers: L.mapquest.tileLayer("dark"),
  zoom: 12,
});
