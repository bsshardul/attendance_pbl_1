#include <SPI.h>
#include <MFRC522.h>
#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClientSecureBearSSL.h>


const char* ssid = "Galaxy S22";
const char* password = "CeLViron5.0";

const char* serverName = "http://192.168.172.190/importdata/Dragonscript.php"; // Replace with your server's IP or hostname
const int serverPort = 80; // Default HTTP port
const char* phpScript = "http://localhost/importdata/Dragonscript.php"; // Replace with your PHP script path

constexpr uint8_t RST_PIN = D3;
constexpr uint8_t SS_PIN = D4;

MFRC522 mfrc522(SS_PIN, RST_PIN);
MFRC522::MIFARE_Key key;

int blockNum = 2;
byte bufferLen = 18;
byte readBlockData[18];
MFRC522::StatusCode status;

WiFiClient client;

void setup() {
  Serial.begin(115200);
  SPI.begin();
  mfrc522.PCD_Init();
  Serial.println("Connecting to WiFi");
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Connected to WiFi with IP: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  if (!mfrc522.PICC_IsNewCardPresent()) {
    return;
  }

  if (!mfrc522.PICC_ReadCardSerial()) {
    return;
  }

  Serial.println("**Card Detected**");
  Serial.print("Card UID: ");
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
    Serial.print(mfrc522.uid.uidByte[i], HEX);
  }
  Serial.println();

  Serial.print("PICC type: ");
  MFRC522::PICC_Type piccType = mfrc522.PICC_GetType(mfrc522.uid.sak);
  Serial.println(mfrc522.PICC_GetTypeName(piccType));

  Serial.println("Reading from Data Block...");
  ReadDataFromBlock(blockNum, readBlockData);

  String rfid_data;
  for (int i = 0; i < bufferLen; i++) {
    if (readBlockData[i] >= 32 && readBlockData[i] <= 126) { // Check for printable characters
      rfid_data += (char)readBlockData[i];
    }
  }

  Serial.println("Sending RFID data to server...");
  sendDataToServer(rfid_data);
  delay(5000); // Adjust delay between scans as needed
}

void ReadDataFromBlock(int blockNum, byte readBlockData[]) 
{
  for (byte i = 0; i < 6; i++)
  {
    key.keyByte[i] = 0xFF;
  }

  status = mfrc522.PCD_Authenticate(MFRC522::PICC_CMD_MF_AUTH_KEY_A, blockNum, &key, &(mfrc522.uid));
  if (status != MFRC522::STATUS_OK)
  {
    Serial.print("Authentication failed for Read: ");
    Serial.println(mfrc522.GetStatusCodeName(status));
    return;
  }
  else
  {
    Serial.println("Authentication success");
  }

  status = mfrc522.MIFARE_Read(blockNum, readBlockData, &bufferLen);
  if (status != MFRC522::STATUS_OK)
  {
    Serial.print("Reading failed: ");
    Serial.println(mfrc522.GetStatusCodeName(status));
    return;
  }
  else
  {
    Serial.println("Block was read successfully");  
  }
}

void sendDataToServer(String rfidData) {
  String requestData = "rfid_data=" + rfidData; // Replace with the appropriate parameter name in your PHP script
  requestData += "\r\n"; // Add CR+LF for proper HTTP request termination

  if (!client.connect(serverName, serverPort)) {
    Serial.println("Database Updated");
    return;
  }

  Serial.print("Connected to server: ");
  Serial.println(serverName);

  // Send HTTP POST request
  client.print("POST ");
  client.print(phpScript);
  client.print(" HTTP/1.1\r\n");
  client.print("Host: ");
  client.println(serverName);
  client.print("Content-Type: application/x-www-form-urlencoded\r\n");
  client.print("Content-Length: ");
  client.println(requestData.length());
  client.println();
  client.println(requestData);

  int timeout = 0;
  while (client.available() == 0 && timeout < 1000) {
    delay(1); // Small delay to avoid busy waiting
    timeout++;
  }
}
