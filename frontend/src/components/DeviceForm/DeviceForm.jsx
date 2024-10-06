import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DeviceForm = () => {
  const navigate = useNavigate();
  const [device, setDevice] = useState({
    Network: { Technology: '' },
    Launch: { Announced: '', Status: '' },
    Body: { Dimensions: '', Weight: '', Build: '', SIM: '', IP_Rating: '' },
    Display: { Type: '', Size: '', Resolution: '', Protection: '' },
    Platform: { OS: '', Chipset: '', CPU: '', GPU: '' },
    Memory: { Card_slot: '', Internal: '' },
    Main_Camera: { Triple: ['', '', ''], Features: '', Video: '' },
    Selfie_Camera: { Single: '', Video: '' },
    Sound: { Loudspeaker: '', Jack: '' },
    Comms: { WLAN: '', Bluetooth: '', Positioning: '', NFC: '', Radio: '', USB: '' },
    Features: { Sensors: ['', '', ''], Other: '' },
    Battery: { Type: '', Charging: { Wired: '', Wireless: '', ReverseWireless: '' } },
    Misc: { Colors: ['', '', '', '', ''], Models: ['', '', '', '', '', '', ''] }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');

    if (keys.length > 1) {
      setDevice((prevState) => {
        let updatedDevice = { ...prevState };
        let current = updatedDevice;

        keys.forEach((key, index) => {
          if (index === keys.length - 1) {
            current[key] = value;
          } else {
            current = current[key];
          }
        });

        return updatedDevice;
      });
    } else {
      setDevice({ ...device, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://blog-backend-27u2.onrender.com/devices",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(device),
        }
      );
      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Device Information</h2>

      <h3>Network</h3>
      <Form.Group controlId="formTechnology">
        <Form.Label>Technology</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Technology" 
          name="Network.Technology"
          value={device.Network.Technology}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Launch</h3>
      <Form.Group controlId="formAnnounced">
        <Form.Label>Announced</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Announced Date" 
          name="Launch.Announced"
          value={device.Launch.Announced}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Status" 
          name="Launch.Status"
          value={device.Launch.Status}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Body</h3>
      <Row>
        <Col>
          <Form.Group controlId="formDimensions">
            <Form.Label>Dimensions</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Dimensions" 
              name="Body.Dimensions"
              value={device.Body.Dimensions}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formWeight">
            <Form.Label>Weight</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Weight" 
              name="Body.Weight"
              value={device.Body.Weight}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group controlId="formBuild">
        <Form.Label>Build</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Build" 
          name="Body.Build"
          value={device.Body.Build}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formSIM">
        <Form.Label>SIM</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter SIM" 
          name="Body.SIM"
          value={device.Body.SIM}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formIP_Rating">
        <Form.Label>IP Rating</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter IP Rating" 
          name="Body.IP_Rating"
          value={device.Body.IP_Rating}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Display</h3>
      <Form.Group controlId="formDisplayType">
        <Form.Label>Type</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Display Type" 
          name="Display.Type"
          value={device.Display.Type}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formDisplaySize">
        <Form.Label>Size</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Display Size" 
          name="Display.Size"
          value={device.Display.Size}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formDisplayResolution">
        <Form.Label>Resolution</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Display Resolution" 
          name="Display.Resolution"
          value={device.Display.Resolution}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formDisplayProtection">
        <Form.Label>Protection</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Display Protection" 
          name="Display.Protection"
          value={device.Display.Protection}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Platform</h3>
      <Form.Group controlId="formOS">
        <Form.Label>Operating System</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter OS" 
          name="Platform.OS"
          value={device.Platform.OS}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formChipset">
        <Form.Label>Chipset</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Chipset" 
          name="Platform.Chipset"
          value={device.Platform.Chipset}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formCPU">
        <Form.Label>CPU</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter CPU" 
          name="Platform.CPU"
          value={device.Platform.CPU}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formGPU">
        <Form.Label>GPU</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter GPU" 
          name="Platform.GPU"
          value={device.Platform.GPU}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Memory</h3>
      <Form.Group controlId="formCardSlot">
        <Form.Label>Card Slot</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Card Slot" 
          name="Memory.Card_slot"
          value={device.Memory.Card_slot}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formInternalMemory">
        <Form.Label>Internal Memory</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Internal Memory" 
          name="Memory.Internal"
          value={device.Memory.Internal}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Main Camera</h3>
      <Form.Group controlId="formMainCameraTriple">
        <Form.Label>Triple</Form.Label>
        <Row>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Camera 1" 
              name="Main_Camera.Triple[0]"
              value={device.Main_Camera.Triple[0]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Camera 2" 
              name="Main_Camera.Triple[1]"
              value={device.Main_Camera.Triple[1]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Camera 3" 
              name="Main_Camera.Triple[2]"
              value={device.Main_Camera.Triple[2]}
              onChange={handleChange}
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="formMainCameraFeatures">
        <Form.Label>Features</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Camera Features" 
          name="Main_Camera.Features"
          value={device.Main_Camera.Features}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formMainCameraVideo">
        <Form.Label>Video</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Camera Video" 
          name="Main_Camera.Video"
          value={device.Main_Camera.Video}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Selfie Camera</h3>
      <Form.Group controlId="formSelfieCameraSingle">
        <Form.Label>Single</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Selfie Camera" 
          name="Selfie_Camera.Single"
          value={device.Selfie_Camera.Single}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formSelfieCameraVideo">
        <Form.Label>Video</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Selfie Camera Video" 
          name="Selfie_Camera.Video"
          value={device.Selfie_Camera.Video}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Sound</h3>
      <Form.Group controlId="formLoudspeaker">
        <Form.Label>Loudspeaker</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Loudspeaker" 
          name="Sound.Loudspeaker"
          value={device.Sound.Loudspeaker}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formJack">
        <Form.Label>Jack</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Jack" 
          name="Sound.Jack"
          value={device.Sound.Jack}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Comms</h3>
      <Form.Group controlId="formWLAN">
        <Form.Label>WLAN</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter WLAN" 
          name="Comms.WLAN"
          value={device.Comms.WLAN}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBluetooth">
        <Form.Label>Bluetooth</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Bluetooth" 
          name="Comms.Bluetooth"
          value={device.Comms.Bluetooth}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formPositioning">
        <Form.Label>Positioning</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Positioning" 
          name="Comms.Positioning"
          value={device.Comms.Positioning}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formNFC">
        <Form.Label>NFC</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter NFC" 
          name="Comms.NFC"
          value={device.Comms.NFC}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formRadio">
        <Form.Label>Radio</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Radio" 
          name="Comms.Radio"
          value={device.Comms.Radio}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formUSB">
        <Form.Label>USB</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter USB" 
          name="Comms.USB"
          value={device.Comms.USB}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Features</h3>
      <Form.Group controlId="formSensors">
        <Form.Label>Sensors</Form.Label>
        <Row>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Sensor 1" 
              name="Features.Sensors[0]"
              value={device.Features.Sensors[0]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Sensor 2" 
              name="Features.Sensors[1]"
              value={device.Features.Sensors[1]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Sensor 3" 
              name="Features.Sensors[2]"
              value={device.Features.Sensors[2]}
              onChange={handleChange}
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="formOtherFeatures">
        <Form.Label>Other Features</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Other Features" 
          name="Features.Other"
          value={device.Features.Other}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Battery</h3>
      <Form.Group controlId="formBatteryType">
        <Form.Label>Type</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Battery Type" 
          name="Battery.Type"
          value={device.Battery.Type}
          onChange={handleChange}
        />
      </Form.Group>
      <h4>Charging</h4>
      <Form.Group controlId="formWiredCharging">
        <Form.Label>Wired</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Wired Charging" 
          name="Battery.Charging.Wired"
          value={device.Battery.Charging.Wired}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formWirelessCharging">
        <Form.Label>Wireless</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Wireless Charging" 
          name="Battery.Charging.Wireless"
          value={device.Battery.Charging.Wireless}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formReverseWirelessCharging">
        <Form.Label>Reverse Wireless</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter Reverse Wireless Charging" 
          name="Battery.Charging.ReverseWireless"
          value={device.Battery.Charging.ReverseWireless}
          onChange={handleChange}
        />
      </Form.Group>

      <h3>Misc</h3>
      <Form.Group controlId="formColors">
        <Form.Label>Colors</Form.Label>
        <Row>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Color 1" 
              name="Misc.Colors[0]"
              value={device.Misc.Colors[0]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Color 2" 
              name="Misc.Colors[1]"
              value={device.Misc.Colors[1]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Color 3" 
              name="Misc.Colors[2]"
              value={device.Misc.Colors[2]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Color 4" 
              name="Misc.Colors[3]"
              value={device.Misc.Colors[3]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Color 5" 
              name="Misc.Colors[4]"
              value={device.Misc.Colors[4]}
              onChange={handleChange}
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group controlId="formModels">
        <Form.Label>Models</Form.Label>
        <Row>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Model 1" 
              name="Misc.Models[0]"
              value={device.Misc.Models[0]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Model 2" 
              name="Misc.Models[1]"
              value={device.Misc.Models[1]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Model 3" 
              name="Misc.Models[2]"
              value={device.Misc.Models[2]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Model 4" 
              name="Misc.Models[3]"
              value={device.Misc.Models[3]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Model 5" 
              name="Misc.Models[4]"
              value={device.Misc.Models[4]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Model 6" 
              name="Misc.Models[5]"
              value={device.Misc.Models[5]}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control 
              type="text" 
              placeholder="Model 7" 
              name="Misc.Models[6]"
              value={device.Misc.Models[6]}
              onChange={handleChange}
            />
          </Col>
        </Row>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default DeviceForm;
