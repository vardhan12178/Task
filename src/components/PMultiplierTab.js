import React, { useState } from "react";
import axios from "axios";

const PMultiplierTab = () => {
  const [pmultiplierStart, setPMultiplierStart] = useState(0);
  const [pmultiplierEnd, setPMultiplierEnd] = useState(0);
  const [soilLayers, setSoilLayers] = useState([{ id: 1, value: "" }]);

  const handleAddSoilLayer = () => {
    setSoilLayers([...soilLayers, { id: soilLayers.length + 1, value: "" }]);
  };

  const handleSoilLayerChange = (id, value) => {
    setSoilLayers(
      soilLayers.map((layer) =>
        layer.id === id ? { ...layer, value } : layer
      )
    );
  };

  const handleSubmit = async () => {
    const inputJson = {
      pmultiplierStart,
      pmultiplierEnd,
      soilLayers: soilLayers.map((layer) => layer.value),
    };

    try {
      const response = await axios.post('url', inputJson);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4 text-center">PMultiplier</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            PMultiplier Start
          </label>
          <input
            type="number"
            value={pmultiplierStart}
            onChange={(e) => setPMultiplierStart(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            PMultiplier End
          </label>
          <input
            type="number"
            value={pmultiplierEnd}
            onChange={(e) => setPMultiplierEnd(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Soil Layers
          </label>
          {soilLayers.map((layer) => (
            <div key={layer.id} className="mb-2">
              <input
                type="text"
                value={layer.value}
                onChange={(e) => handleSoilLayerChange(layer.id, e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded"
              />
            </div>
          ))}
          <button
            onClick={handleAddSoilLayer}
            className="block w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            + Add Soil Layer
          </button>
        </div>
        <button
          onClick={handleSubmit}
          className="block w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PMultiplierTab;
