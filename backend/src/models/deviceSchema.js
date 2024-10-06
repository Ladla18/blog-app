const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  Network: {
    Technology: { type: String, required: true }
  },
  Launch: {
    Announced: { type: String, default: "Not announced yet" },
    Status: { type: String, default: "Rumored" }
  },
  Body: {
    Dimensions: { type: String, default: "-" },
    Weight: { type: String, default: "-" },
    Build: { type: String },
    SIM: { type: String },
    IP_Rating: { type: String }
  },
  Display: {
    Type: { type: String },
    Size: { type: String },
    Resolution: { type: String },
    Protection: { type: String }
  },
  Platform: {
    OS: { type: String },
    Chipset: { type: String },
    CPU: { type: String },
    GPU: { type: String }
  },
  Memory: {
    Card_slot: { type: String, default: "No" },
    Internal: { type: String }
  },
  Main_Camera: {
    Triple: [{ type: String }],
    Features: { type: String },
    Video: { type: String }
  },
  Selfie_Camera: {
    Single: { type: String },
    Video: { type: String }
  },
  Sound: {
    Loudspeaker: { type: String },
    Jack: { type: String, default: "No" }
  },
  Comms: {
    WLAN: { type: String },
    Bluetooth: { type: String },
    Positioning: { type: String },
    NFC: { type: String },
    Radio: { type: String, default: "Unspecified" },
    USB: { type: String }
  },
  Features: {
    Sensors: [{ type: String }],
    Other: { type: String }
  },
  Battery: {
    Type: { type: String },
    Charging: {
      Wired: { type: String },
      Wireless: { type: String },
      ReverseWireless: { type: String }
    }
  },
  Misc: {
    Colors: [{ type: String }],
    Models: [{ type: String }]
  }
});

module.exports = mongoose.model('Device', DeviceSchema);
